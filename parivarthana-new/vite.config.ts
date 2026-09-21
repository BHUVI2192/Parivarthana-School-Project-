import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/RSchool/',

  plugins: [react()],

  server: {
    host: '0.0.0.0',
    allowedHosts: ['.manus.computer'],
    watch: {
      ignored: ['**/public/assets/360virtualtour/**'],
    },
  },
})