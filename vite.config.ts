import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Set base to '/' for root domain deployment (e.g., https://atlasproje.github.io/ or custom domains)
  base: '/',
  plugins: [react(), tailwindcss()],
})


