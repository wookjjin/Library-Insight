export const vueFinalplugin = `import { createVfm } from 'vue-final-modal'

export default defineNuxtPlugin((nuxtApp) => {
  const vfm = createVfm() as any

  nuxtApp.vueApp.use(vfm)
})`

export const vueFinalNuxtConfig = `export default defineNuxtConfig({ 
  css: ['vue-final-modal/style.css']
})`

export const vueFinalpage = `<script setup lang="ts">
import { ModalsContainer, useModal } from 'vue-final-modal'
import VueFianlModal from '../components/modal/VueFinalModal.vue'
import { vueFinalNuxtConfig, vueFinalplugin } from '../assets/codeVault'

const vueFinalPath = reactive({
  pluginPath: '~/plugins/vue-final-modal.ts',
  nuxtConfigPath: 'nuxt.config.ts',
  vueFilePath: '~/modal/index.vue',
})
const popupTitle = ref<string>('ssss')

const { open, close } = useModal({
  component: VueFianlModal,
  attrs: {
    title: popupTitle.value,
    onConfirm() {
      close()
    },
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
})
</script>

<template>
  <div >
    <button @click="open">
      open
    </button>
  </div>
  <ModalsContainer />
</template>
`
