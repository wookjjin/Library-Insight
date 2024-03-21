<script setup lang='ts'>
import QRCodeVue from 'qrcode.vue'
import CodeMirror from '../components/CodeMirror.vue'
import { qrInstallCode, qrRunCode } from '../assets/codeVault'

const installCode = ref<string>(`${qrInstallCode}`)
const runCode = ref<string>(`${qrRunCode}`)
const qrValue = ref<string>('https://www.npmjs.com/package/qrcode.vue')
const pathTitle = ref<string>('Path: ../quickResopnseCode/index.vue')
</script>

<template>
  <div class="example-wrapper">
    <div class="code-area">
      <CodeMirror :code="installCode" width="650px" />
      <CodeMirror :code="runCode" :path-title="pathTitle" width="650px" />
    </div>
    <div class="result-area">
      <div>
        <QRCodeVue :value="qrValue" />
      </div>
      <span>
        해당 QR코드를 휴대폰 카메라를 켜서 감지해보세요!
      </span>
    </div>
  </div>
</template>

<style scoped>
.example-wrapper {
  display: flex;
  flex-direction: row;
}

.code-area {
  flex-direction: column;
  padding: 10px;
}

.result-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgb(255 255 255);
}

.result-area span {
  margin-top: 10px;
  color: rgb(0 0 0)
}
</style>
