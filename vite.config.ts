import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import devTools from 'vite-plugin-vue-devtools'
import uno from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), jsx(), devTools(), uno()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
  },
})
