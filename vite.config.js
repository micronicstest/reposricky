import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://micronicstest.github.io/rickandmorty/",
  plugins: [react()],
})
