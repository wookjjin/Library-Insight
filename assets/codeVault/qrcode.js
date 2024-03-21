export const qrInstallCode = `// 설치 명령어
pnpm add -D qrcode.vue`

export const qrRunCode = `<script setup lang='ts'>
import QRCodeVue from 'qrcode.vue'

const qrValue = ref<string>('https://www.npmjs.com/package/qrcode.vue')
</script>

<template>
  <div>
    <div>
      <QRCodeVue :value="qrValue" />
    </div>
    <span>
      해당 QR코드를 휴대폰 카메라를 켜서 감지해보세요!
    </span>
  </div>
</template>`
