import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3456',  // Remplace par l'URL de ton backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Réécriture si nécessaire
      },
    },
  },
})
