import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/s-styles-front.css',
          dest: './'
        }
      ]
    })    
  ],
  base: './',
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }   
  },
  build: {
    outDir: '../../src/Resources/public',
    rollupOptions: {
      output: {
        entryFileNames: `structure_[name].js`,
        chunkFileNames: `structure_[name].js`,
        assetFileNames: `structure_[name].[ext]`
      }
    }    
  },
})


