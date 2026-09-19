import type { IncomingMessage, ServerResponse } from 'node:http';
import { authorizePhotos } from '../server/photo-access.ts';

export default function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'method_not_allowed' }));
    return;
  }
  const authorization = req.headers.authorization;
  const key = authorization?.startsWith('Bearer ') ? authorization.slice(7) : undefined;
  const result = authorizePhotos(key, process.env);
  res.statusCode = result.status;
  res.end(JSON.stringify(result.body));
}
