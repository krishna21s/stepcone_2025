import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/stepcone_2025/',
  build: {
    outDir: 'build',  // Change output directory to 'build'
  },
})
