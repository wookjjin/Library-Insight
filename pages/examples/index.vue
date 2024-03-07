<script setup lang="ts">
import CodeMirror from '../components/CodeMirror.vue'

// 해당코드를 import 해서 가져오시면됩니다.
import { codeValue } from '../assets/codeVault'

const code = ref<string>(`${codeValue}`)
const codeDirectory = ref<string>('path/your/file/directory.vue')
</script>

<template>
  <div>
    <CodeMirror :code="code" :path-title="codeDirectory" width="650px" />
  </div>
</template>

<style scoped></style>
