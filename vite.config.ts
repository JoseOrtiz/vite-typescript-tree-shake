import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    svgLoader({ svgo: false }),],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/library.ts'),
      name: 'assets',
      fileName: (format) => `assets.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
})
