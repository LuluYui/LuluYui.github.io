import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from  '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      port: 5173, // Default Vite port
      usePolling: true,
      interval: 1000,
      ignored: ['!**/src/**/*.{js,ts,jsx,tsx}'],
    },
  },
  optimizeDeps: {
    exclude: ['@tailwindcss/vite'],
    force: true,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
