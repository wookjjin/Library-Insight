<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'
import { oneDark } from '@codemirror/theme-one-dark'
import { vue } from '@codemirror/lang-vue'
import type { Extension } from '@codemirror/state'

defineProps ({
  pathTitle: {
    type: String,
    default: '', // 파일이 여러개일 경우 구별을 위해 파일 경로를 입력해주시면 됩니다.
  },
  code: {
    type: String,
    default: '//source area is empty', // 코드는 assets/codeVault/example.js를 참고해서 작성한 뒤, index.js 파일 내에 선언해 상위 페이지에서 호출해서 props로 넘겨주는 구조로 구성되어있습니다.
  },
  placeholder: {
    type: String,
    default: 'Input your example code in here',
  },
  width: {
    type: String,
    default: '650px',
  },
  height: {
    type: String, // 높이는 defalut 값없이 상위 페이지에서 props값을 안주면, 코드 길이에 맞춰 높이설정이 되고 값을 주면 해당 높이에 맞게 값이 변경됩니다.
  },
})
const isDark = ref<boolean>(false)
const editorRef = ref<null | HTMLElement>(null)
const extentions = ref<Extension[]>([vue()])

watch(isDark, (newValue) => {
  if (newValue)
    extentions.value = [vue(), oneDark]
  else
    extentions.value = [vue()]
})
</script>

<template>
  <div class="code-laboratory">
    <div class="code-area">
      <div class="mb-4">
        <label class="ui-switch">
          <input v-model="isDark" type="checkbox">
          <div class="slider">
            <div class="circle" />
          </div>
        </label>
      </div>
      <div>
        <client-only placeholder="Codemirror Loading...">
          <h1 class="text-base">
            {{ pathTitle }}
          </h1>
          <Codemirror
            ref="editorRef" :model-value="code" :placeholder="placeholder" :extensions="extentions"
            :style="{ width, height }"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ui-switch {
  /* switch */
  --switch-bg: rgb(135, 150, 165);
  --switch-width: 48px;
  --switch-height: 20px;
  /* circle */
  --circle-diameter: 32px;
  --circle-bg: rgb(0, 56, 146);
  --circle-inset: calc((var(--circle-diameter) - var(--switch-height)) / 2);
}

.ui-switch input {
  display: none;
}

.slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: var(--switch-width);
  height: var(--switch-height);
  background: var(--switch-bg);
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  flex-direction: row;
}

.slider .circle {
  top: calc(var(--circle-inset) * -1);
  left: 0;
  width: var(--circle-diameter);
  height: var(--circle-diameter);
  position: absolute;
  background: var(--circle-bg);
  border-radius: inherit;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTkuMzA1IDEuNjY3VjMuNzVoMS4zODlWMS42NjdoLTEuMzl6bS00LjcwNyAxLjk1bC0uOTgyLjk4Mkw1LjA5IDYuMDcybC45ODItLjk4Mi0xLjQ3My0xLjQ3M3ptMTAuODAyIDBMMTMuOTI3IDUuMDlsLjk4Mi45ODIgMS40NzMtMS40NzMtLjk4Mi0uOTgyek0xMCA1LjEzOWE0Ljg3MiA0Ljg3MiAwIDAwLTQuODYyIDQuODZBNC44NzIgNC44NzIgMCAwMDEwIDE0Ljg2MiA0Ljg3MiA0Ljg3MiAwIDAwMTQuODYgMTAgNC44NzIgNC44NzIgMCAwMDEwIDUuMTM5em0wIDEuMzg5QTMuNDYyIDMuNDYyIDAgMDExMy40NzEgMTBhMy40NjIgMy40NjIgMCAwMS0zLjQ3MyAzLjQ3MkEzLjQ2MiAzLjQ2MiAwIDAxNi41MjcgMTAgMy40NjIgMy40NjIgMCAwMTEwIDYuNTI4ek0xLjY2NSA5LjMwNXYxLjM5aDIuMDgzdi0xLjM5SDEuNjY2em0xNC41ODMgMHYxLjM5aDIuMDg0di0xLjM5aC0yLjA4NHpNNS4wOSAxMy45MjhMMy42MTYgMTUuNGwuOTgyLjk4MiAxLjQ3My0xLjQ3My0uOTgyLS45ODJ6bTkuODIgMGwtLjk4Mi45ODIgMS40NzMgMS40NzMuOTgyLS45ODItMS40NzMtMS40NzN6TTkuMzA1IDE2LjI1djIuMDgzaDEuMzg5VjE2LjI1aC0xLjM5eiIgLz4KPC9zdmc+");
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  -o-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  ;
}

.slider .circle::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.75);
  border-radius: inherit;
  -webkit-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
  opacity: 0;
}

/* actions */

.ui-switch input:checked+.slider .circle {
  left: calc(100% - var(--circle-diameter));
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTQuMiAyLjVsLS43IDEuOC0xLjguNyAxLjguNy43IDEuOC42LTEuOEw2LjcgNWwtMS45LS43LS42LTEuOHptMTUgOC4zYTYuNyA2LjcgMCAxMS02LjYtNi42IDUuOCA1LjggMCAwMDYuNiA2LjZ6IiAvPgo8L3N2Zz4=");
}

.ui-switch input:active+.slider .circle::before {
  -webkit-transition: 0s;
  -o-transition: 0s;
  transition: 0s;
  opacity: 1;
  width: 0;
  height: 0;
}

.code-laboratory {
  display: flex;
  flex-direction: row;
}

.code-area {
  flex-direction: column;
  padding: 10px
}
</style>
