import { createHash, timingSafeEqual } from 'node:crypto';

export function authorizePhotos(key: unknown, env: Record<string, string | undefined>) {
  const secret = env.PHOTO_ACCESS_KEY;
  const deny = { status: 403, body: { error: 'invalid_key' } };
  if (!secret || secret.length < 32) return { status: 503, body: { error: 'unavailable' } };
  if (typeof key !== 'string' || key.length > 256) return deny;
  const digest = (value: string) => createHash('sha256').update(value).digest();
  if (!timingSafeEqual(digest(key), digest(secret))) return deny;
  try {
    const url = new URL(env.DROPBOX_FILE_REQUEST_URL || '');
    if (url.protocol !== 'https:' || !['dropbox.com', 'www.dropbox.com'].includes(url.hostname) ||
      !/^\/request\/[^/]+\/?$/.test(url.pathname) || url.username || url.password) throw new Error();
    return { status: 200, body: { uploadUrl: url.href } };
  } catch {
    return { status: 503, body: { error: 'unavailable' } };
  }
}
