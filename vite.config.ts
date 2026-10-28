import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O site é publicado em https://fatec-sjc-dsm-portfolio.github.io/ra1461392411015/
export default defineConfig({
  plugins: [react()],
  base: '/ra1461392411015/',
})
