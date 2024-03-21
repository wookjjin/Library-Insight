/* eslint-disable node/prefer-global/process */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: true,
  modules: ['@unocss/nuxt', 'nuxt3-leaflet'],
  css: ['~/assets/styles/global.css'],
  imports: {
    dirs: ['naive'],
  },
  unocss: {
    // options
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['naive-ui/volar'],
      },
    },
  },
  devtools: { enabled: false },
  build: {
    transpile:
      process.env.NODE_ENV === 'production' ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', 'juggle/resize-observer'] : ['@juggle/resize-observer'],
  },
  vite: {
    optimizeDeps: {
      include: process.env.NODE_ENV === 'development' ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone'] : [],
    },
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
})
