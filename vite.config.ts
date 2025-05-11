
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
    // Configure vite-plugin-raw with proper pattern matching
    rawPlugin({
      include: /\.md$/, // Use a single RegExp instead of an array
      exclude: [/node_modules/, /index\.html$/] // Keep this as an array of RegExp
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
