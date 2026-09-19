import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import photoAccess from './api/photo-access.ts'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Jen serverové prostředí; tyto hodnoty se nevkládají do klientského balíčku.
  for (const key of ['PHOTO_ACCESS_KEY', 'DROPBOX_FILE_REQUEST_URL']) {
    if (env[key]) process.env[key] = env[key];
  }
  return {
    plugins: [react(), {
      name: 'local-photo-access',
      configureServer(server) {
        server.middlewares.use('/api/photo-access', photoAccess);
      },
    }],
  };
})
