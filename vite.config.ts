
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import rawPlugin from 'vite-plugin-raw';
import { componentTagger } from "lovable-tagger";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    rawPlugin({
      // Use string patterns instead of RegExp to avoid the test() method error
      include: '**/*.md',
      exclude: '**/node_modules/**'
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['@lordicon/react'],
  },
  server: {
    host: "::",
    port: 8080
  }
}));
