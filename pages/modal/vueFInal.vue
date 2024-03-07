<script setup lang="ts">
import { ModalsContainer, useModal } from 'vue-final-modal'
import VueFianlModal from '../components/modal/VueFinalModal.vue'
import CodeMirror from '../components/CodeMirror.vue'
import { vueFinalNuxtConfig, vueFinalpage, vueFinalplugin } from '../assets/codeVault'

const vueFinalPath = reactive({
  pluginPath: '~/plugins/vue-final-modal.ts',
  nuxtConfigPath: 'nuxt.config.ts',
  vueFilePath: '~/modal/index.vue',
})
const popupTitle = ref<string>('ssss')
const pluginCode = ref<string>(`${vueFinalplugin}`)
const nuxtConfigCode = ref<string>(`${vueFinalNuxtConfig}`)
const pageCode = ref<string>(`${vueFinalpage}`)

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
  <h1 class="p-5">
    vue-final-modal
  </h1>
  <div class="vfm-introduce-wrapper">
    <div class="code-wrapper">
      <CodeMirror :path-title="vueFinalPath.pluginPath" :code="pluginCode" />
      <CodeMirror :path-title="vueFinalPath.nuxtConfigPath" :code="nuxtConfigCode" />
      <CodeMirror :path-title="vueFinalPath.vueFilePath" height="600px" :code="pageCode" />
    </div>
    <div class="result-wrapper">
      <!-- <button @click="open">
        open
      </button> -->
    </div>
  </div>
  <ModalsContainer />
</template>

<style scoped>
.vfm-introduce-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px
}

.code-wrapper {
  flex-direction: column;
  color: black;
  background-color: white;
}

.result-wrapper {
  flex-direction: column;
  border: solid 1px;
  padding: 10px;
  justify-content: center;
  text-align: center;
  width: 650px
}

.result-wrapper button {
  border: solid 1px;
  border-color: rgb(130 140 230);
  border-radius: 0.5rem;
  background-color: rgb(150 155 255);
  color: white;
  width: 100px;
  height: 40px
}

.result-wrapper button:hover {
  background-color: rgb(200 155 255);
}
</style>
