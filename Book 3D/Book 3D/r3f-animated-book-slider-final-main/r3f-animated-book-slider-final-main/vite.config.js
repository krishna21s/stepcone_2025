import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/stepcone/sbook/', // Ensures correct asset paths
  build: {
    rollupOptions: {
      input: 'index.html', // Only one index.html
    },
    assetsDir: 'assets', // Keep Vite-built assets organized
    outDir: 'dist',
    emptyOutDir: true,
  },
})
