// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from "node:path";

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'main',
      fileName: (format) => `main.${format}.js`,
      formats:['es']
    },
    rollupOptions: {
      external: [""]
    }
  }
})