<template>
  <div class="main-container">
    <n-message-provider>
      <NuxtLayout>
        <NuxtPage :page-key="route => route.fullPath" />
      </NuxtLayout>
    </n-message-provider>
  </div>
</template>
