import { test } from 'node:test';
import assert from 'node:assert/strict';
import { authorizePhotos } from './photo-access.js';
import { createServer } from 'node:http';
import handler from '../api/photo-access.js';

const env = { PHOTO_ACCESS_KEY: 'a'.repeat(64), DROPBOX_FILE_REQUEST_URL: 'https://www.dropbox.com/request/test' };
test('Compiled endpoint starts and enforces authorization over HTTP', async () => {
  const previous = { PHOTO_ACCESS_KEY: process.env.PHOTO_ACCESS_KEY, DROPBOX_FILE_REQUEST_URL: process.env.DROPBOX_FILE_REQUEST_URL };
  Object.assign(process.env, env);
  const server = createServer(handler);
  try {
    await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
    const address = server.address();
    assert.ok(address && typeof address !== 'string');
    for (const [method, key, expected] of [
      ['GET', '', 405], ['POST', '', 403], ['POST', 'wrong', 403], ['POST', env.PHOTO_ACCESS_KEY, 200],
    ] as const) {
      const response: Response = await fetch(`http://127.0.0.1:${address.port}`, {
        method, headers: key ? { Authorization: `Bearer ${key}` } : {},
      });
      assert.equal(response.status, expected);
      assert.equal(response.headers.get('cache-control'), 'no-store');
      const body = await response.json();
      if (expected === 200) assert.equal(body.uploadUrl, env.DROPBOX_FILE_REQUEST_URL);
      else assert.equal('uploadUrl' in body, false);
    }
  } finally {
    server.closeAllConnections();
    await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
    for (const key of ['PHOTO_ACCESS_KEY', 'DROPBOX_FILE_REQUEST_URL'] as const) {
      if (previous[key] === undefined) delete process.env[key];
      else process.env[key] = previous[key];
    }
  }
});
test('Only a valid key returns the private upload link', () => {
  for (const key of [undefined, '', 'wrong', 'b'.repeat(64), 'x'.repeat(300)]) {
    const result = authorizePhotos(key, env);
    assert.equal(result.status, 403);
    assert.equal('uploadUrl' in result.body, false);
  }
  const result = authorizePhotos(env.PHOTO_ACCESS_KEY, env);
  assert.ok('uploadUrl' in result.body);
  assert.equal(result.body.uploadUrl, env.DROPBOX_FILE_REQUEST_URL);
});
test('Missing configuration and unsafe destinations fail closed', () => {
  for (const config of [{}, { ...env, PHOTO_ACCESS_KEY: '' }, { ...env, DROPBOX_FILE_REQUEST_URL: 'https://evil.test/request/test' }]) {
    const result = authorizePhotos(env.PHOTO_ACCESS_KEY, config);
    assert.equal(result.status, 503);
    assert.equal('uploadUrl' in result.body, false);
  }
});
