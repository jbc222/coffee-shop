import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/coffee-shop/', // ✨ 替换为你的仓库名称
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
