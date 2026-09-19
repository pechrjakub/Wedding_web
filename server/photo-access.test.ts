import { test } from 'node:test';
import assert from 'node:assert/strict';
import { authorizePhotos } from './photo-access.ts';

const env = { PHOTO_ACCESS_KEY: 'a'.repeat(64), DROPBOX_FILE_REQUEST_URL: 'https://www.dropbox.com/request/test' };
test('Only a valid key returns the private upload link', () => {
  for (const key of [undefined, '', 'wrong', 'b'.repeat(64), 'x'.repeat(300)]) {
    const result = authorizePhotos(key, env);
    assert.equal(result.status, 403);
    assert.equal('uploadUrl' in result.body, false);
  }
  assert.equal(authorizePhotos(env.PHOTO_ACCESS_KEY, env).body.uploadUrl, env.DROPBOX_FILE_REQUEST_URL);
});
test('Missing configuration and unsafe destinations fail closed', () => {
  for (const config of [{}, { ...env, PHOTO_ACCESS_KEY: '' }, { ...env, DROPBOX_FILE_REQUEST_URL: 'https://evil.test/request/test' }]) {
    const result = authorizePhotos(env.PHOTO_ACCESS_KEY, config);
    assert.equal(result.status, 503);
    assert.equal('uploadUrl' in result.body, false);
  }
});
