<script setup lang="ts">
import CodeMirror from '../components/CodeMirror.vue'
import { codeValue } from '../assets/codeVault'

const code = ref<string>(`${codeValue}`)
</script>

<template>
  <div>
    <CodeMirror :code="code" />
  </div>
</template>

<style scoped></style>
