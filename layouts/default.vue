<script setup lang="ts">
import Header from '~/layouts/components/header.vue'
</script>

<template>
  <Header />
  <div class="content-wrap">
    <slot />
  </div>
</template>

<style scoped></style>
