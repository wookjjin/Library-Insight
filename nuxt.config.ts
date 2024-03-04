import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: true,
  alias: {
    '~': '/<srcDir>',
  },
  modules: ['nuxt-primevue','@unocss/nuxt'],
  primevue: {
    // options
  },
  imports: {
    dirs: ['naive'],
  },
  unocss: {
    // options
  }
  // css: ['primevue/resources/themes/aura-light-green/theme.css'],
  devtools: {enabled: true},
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : [],
    },
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
})
