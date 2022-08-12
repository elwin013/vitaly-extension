import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest.json';
import packageJson from './package.json';

manifest.version = packageJson.version;

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['webextension-polyfill'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  plugins: [vue(), crx({ manifest })],
});
