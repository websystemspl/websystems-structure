import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  base: './',
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }   
  },
  build: {
    entry: './src/index.js',
    rollupOptions: {
      output: {
        entryFileNames: `structure_[name].js`,
        chunkFileNames: `structure_[name].js`,
        assetFileNames: `structure_[name].[ext]`
      }
    }    
  },
})


