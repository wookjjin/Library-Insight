<script setup lang="ts">
const router = useRouter()
const textInput = ref('')
const numberInput = ref(0)
const errMessage = ref('')

const countUp = () => {
  return numberInput.value += 1
}
</script>

<template>
  <div class="wrapper">
    <span class="title">Main 🐣</span>
    <div class="form">
      <input v-model="textInput" type="text" placeholder="Text Input" />
      <input v-model="numberInput" type="text" placeholder="Number Input" />
      <input type="button" value="Count" @click="countUp" />
    </div>
    <span class="error">{{ errMessage }}</span>
    <!-- <span class="help">이미 계정이 있으신가요?
      <NuxtLink to="/">
        로그인하러 가기 &rarr;
      </NuxtLink>
    </span> -->
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;

  .title {
    font-size: 42px;
  }

  .form {
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    input {
      padding: 10px 20px;
      border-radius: 50px;
      border: #00C16A 1px solid;
      width: 100%;
      font-size: 16px;

      &[type="button"] {
        cursor: pointer;
        background-color: #00C16A;
        color: white;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  .help {
    margin-top: 20px;

    a {
      color: #00C16A
    }
  }

  .error {
    font-weight: 600;
    color: tomato;
  }
}
</style>