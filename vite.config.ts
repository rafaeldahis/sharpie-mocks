
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
    // Apply vite-plugin-raw with explicit include/exclude patterns
    rawPlugin({
      include: ['**/*.md'],
      exclude: ['**/node_modules/**', '**/index.html'] // Explicitly exclude index.html and node_modules
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
