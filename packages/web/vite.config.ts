import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env
  },
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: Number(process.env.PORT) || 3010
  }
})
