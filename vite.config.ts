import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Set base to repository name for GitHub Pages project page deployment (e.g., https://atlasproje.github.io/atlasproje/)
  // If you use a custom domain (e.g., atlasproje.com) or rename the repo to atlasproje.github.io, change this to '/'
  base: '/atlasproje/',
  plugins: [react(), tailwindcss()],
})


