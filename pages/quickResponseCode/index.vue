<script setup lang='ts'>
import CodeMirror from '../components/CodeMirror.vue'
import { qrInstallCode } from '../assets/codeVault'

const code = ref<string>(`${qrInstallCode}`)
</script>

<template>
  <div>
    <CodeMirror :code="code" width="650px" />
  </div>
</template>

<style scoped>
</style>
