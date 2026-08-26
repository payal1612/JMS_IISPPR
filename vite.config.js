import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  preview: {
  allowedHosts: [
    "jmsiisppr-production.up.railway.app",
    "www.lawdiplomacyreview.com",
     "lawdiplomacyreview.com"
  ]
}
})
