import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project-page base path — see PORTFOLIO_GUIDE.md §6.
  // Set to '/' if you deploy to a <username>.github.io repo instead.
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
