import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import FullReload from 'vite-plugin-full-reload';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), FullReload(['dist/**/*.html'])],
  base: '/stepcone',
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost/stepcone', // PHP server
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite /api prefix
  //     },
  //   },
  // },
})