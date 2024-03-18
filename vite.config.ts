import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    Unocss(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue/macros', 'pinia'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/stores'],
      vueTemplate: true,
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: 'src/components.d.ts',
      dirs: [],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 1888,
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
})
