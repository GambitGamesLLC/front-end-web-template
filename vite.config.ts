// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const path = require('path');

/*
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
*/

//
module.exports = defineConfig({
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
//