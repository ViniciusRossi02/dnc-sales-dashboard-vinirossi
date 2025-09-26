import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  optimizeDeps:{
    include: ['@emotion/styled']
  },
  server:{
    host: true
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src')
    }
  }
})
