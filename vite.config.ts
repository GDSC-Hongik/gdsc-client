import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    sentryVitePlugin({
      org: process.env.VITE_SENTRY_ORG_NAME,
      project: process.env.VITE_SENTRY_PROJECT_NAME,
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
      sourcemaps: {
        assets: './dist/**',
        filesToDeleteAfterUpload: '**/*.map'
      }
    }),
    sentryVitePlugin({
      org: 'gdsc-hongik',
      project: 'wow-onboarding'
    })
  ],
  build: {
    sourcemap: true
  }
});