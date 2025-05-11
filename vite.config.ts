
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import rawPlugin from 'vite-plugin-raw';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Use rawPlugin only for markdown files with correct regex pattern
    rawPlugin({
      include: [/\.md$/], // Use regex pattern instead of glob
      exclude: [/node_modules/, /index\.html$/] // Use regex patterns for exclusions
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['@lordicon/react'],
  },
  server: {
    port: 8080
  }
});
