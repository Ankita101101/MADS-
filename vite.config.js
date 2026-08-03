import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves this project below /MADS-/, not from the domain root.
  base: "/MADS-/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  assetsInclude: ['**/*.pptx'],
})
