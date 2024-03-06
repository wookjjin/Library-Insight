export const codeValue = `<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'

defineProps ({
  code: {
    type: String,
    default: '//source area is empty',
  },
  placeholder: {
    type: String,
    default: 'Input your example code in here',
  },
})
const editor = ref(null)
</script>

<template>
  <client-only placeholder="Codemirror Loading...">
    <Codemirror ref="editor" :model-value="code" :placeholder="placeholder" />
  </client-only>
</template>

<style scoped></style>`
