<script setup lang="ts">
import path from 'path';
import { useRouter } from 'vue-router';

const router = useRouter()

interface ITodoData {
  id?: number
  text?: string
  checked: boolean
  done: boolean  
}

// ---------------------------------- Variables ----------------------------------
const todoText = ref<string>('')
const todoList = ref<ITodoData[]>([
  { "id": "1618426158619000", "text": "점심 정하기", "checked": true, "done": true },
  { "id": "1649483468660000", "text": "커피사기", "checked": true, "done": false },
  { "id": "6460047601480000", "text": "방울토마토 사기", "checked": false, "done": false },
  { "id": "1111213123131311", "text": "끝내주게 숨쉬기", "checked": false, "done": false }
])

// ---------------------------------- Functions ----------------------------------
// 함수 선언 방법
/*
방법 1
function banana(a,b){
  return a + b
}
console.log(banana(3,6))

방법 2 + 타입 추가 
const tomato = (a:number,b:number) => {
  return a + b
}
console.log(tomato(3,6))

//   참고 페이지 입니다.
페이지 이동 https://v3.router.vuejs.org/kr/guide/essentials/navigation.html  

백틱 사용법 https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%85%9C%ED%94%8C%EB%A6%BF-%EB%A6%AC%ED%84%B0%EB%9F%B4%EB%A1%9C-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84-%EB%8B%A4%EB%A3%A8%EA%B8%B0

참고 페이지
https://ko.vuejs.org
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

버튼 클릭 방법
https://vuejs.org/guide/essentials/event-handling

탬플릿 영역 반복문
v-for
https://ko.vuejs.org/guide/essentials/list

v-model
https://vuejs.org/guide/components/v-model.html

사용 예시 
https://play.vuejs.org/#eNqVVMtu00AU/ZWLN42VyA4pq+AEaNVFWVBUHhvMwplMUqf2jDUeh0iRdywisUbqoh/AL/BNhH/gzsMPkjTQjTVzn+fce8Zr51WWecuCOkMnkDTNkkjSccgAgmm81Ac83gzGH/KYzUHQWeDjzdonhZScwUuSxOR2FDoxI4KmlMlrOgud8WV1hQ4muoFv4qvsbHzOi8o5hPUaiLpjLpRl4GcY968+V5MFJXvdjFXX/cT1+fOB5jbqY5QU9O9YjcVcsLSnUdWQHpt9xnlCI7ZLqTXSiMh4Sf9zriZ4d7jGemzCNkKDyyUueY9W4JuNB35LB3jNiYgzCTmVRQZJxOYISOaIIGRxmnEhYa100auZQAkzwVM4QVmdPFc1fB9q/YSMcJbLZtcjZe30XYw0nnp21mV1MYR+D+w0hyAFzr1USSGbFQwb48Da+uu4sFa0qj7eUq2q28WM8nBSLaYqtVmizjUT0xX2fdWaR/DkAVfVuDUMu0zLW69Fczb2ToNfccf0h+naDAu8teCGsO683dxvN3e/v//AL2zvNttv91BvxM570HcPRLf6RtOp1v3TTjRkRTqhAnoTe3I1AIFiERjYnTSkf/38ulPQtK2qDWDUrveiKjga65IRdIGYidqaKh0n6yV83mkgDfq9076LDA65B4qcZqd0bpSNOnZ6qGiMn8Vzb5Fzhj9D3TN0CE+zOKHiKlPMUfX4gMzjCp0oSfiX19qm1IgLMnZyQ8ntAfsiXylb6LwVNKdCveLaJyMxp9K4L969oSs8186UT4sEo484rylyLRRGE3ZWsCnCbsVptJf6waL43ucXK0lZXpFSQFVkqeNDB5/u+RHqDdxT75nOw5045R9kwjWS
*/

/*
추가, 삭제, 페이지 이동

*/
</script>

<template>
  <div class="todo-container">
    <div class="title">
      <h1>To-Do List</h1>
      <div class="input-container">
        <!-- 엔터 눌렀을때 등록될수 있도록 기능 추가 하면 좋을것 같아요 -->
        <input type="text" placeholder="Enter ToDo" class="input-field">
        <label for="input-field" class="input-label">Enter ToDo</label>
        <span class="input-highlight" />
        <button type="button" class="add-button">
          Add
        </button>
      </div>
    </div>
    <div>
      <div class="btn__group">
        <button>
          전체
        </button>
        <button>
          완료
        </button>
      </div>
      <div>
        <ul>
          <li>
            <div class="todos-wrap">
              <label class="cyberpunk-checkbox-label">
                <input type="checkbox" class="cyberpunk-checkbox">
                <span :class="false ? 'text-decoration-line: line-through' : ''">
                  여기다 출력! 
                </span>
              </label>
              <button class="delete-button">
                <svg viewBox="0 0 448 512" class="svgIcon">
                  <path
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}

.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.title {
  margin: 5em;
  text-align: center;
}

.btn__group {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Input container */
.input-container {
  display: flex;
  position: relative;
  margin: 20px;
}

/* Input field */
.input-field {
  color: #fff;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  background-color: transparent;
}

/* Input label */
.input-label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: rgba(204, 204, 204, 0);
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Input highlight */
.input-highlight {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: lightcoral;
  transition: all 0.3s ease;
}

/* Input field:focus styles */
.input-field:focus+.input-label {
  top: -20px;
  font-size: 12px;
  color: lightcoral;
}

.input-field:focus+.input-label+.input-highlight {
  width: 100%;
}

.input-wrap {
  display: flex;
  height: 20px;
}

.todos-wrap {
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0 1em
}

button {
  margin: 0 0.75em 0;
  background-color: #eee;
  border: none;
  font-size: 1rem;
  width: 70px;
  border-radius: 1rem;
  color: lightcoral;
  box-shadow: 0 0.4rem #dfd9d9;
  cursor: pointer;
}

button:active {
  color: white;
  box-shadow: 0 0.2rem #dfd9d9;
  transform: translateY(0.2rem);
}

button:hover:not(:disabled) {
  background: lightcoral;
  color: white;
  text-shadow: 0 0.1rem #bcb4b4;
}

button:disabled {
  cursor: auto;
  color: grey;
}

/* checkbox */
.cyberpunk-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #30cfd0;
  border-radius: 5px;
  background-color: transparent;
  display: inline-block;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
}

.cyberpunk-checkbox:before {
  content: "";
  background-color: #30cfd0;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 10px;
  height: 10px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

.cyberpunk-checkbox:checked:before {
  transform: translate(-50%, -50%) scale(1);
}

.cyberpunk-checkbox-label {
  width: 250px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  margin-right: 0.5em;
}

/* delet-button */
.delete-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: .3s;
  overflow: hidden;
  position: relative;
}

.svgIcon {
  width: 12px;
  transition-duration: .3s;
}

.svgIcon path {
  fill: white;
}

.delete-button:hover {
  border-radius: 50px;
  background-color: rgb(255, 69, 69);
  align-items: center;
}

.delete-button:hover .svgIcon {
  width: 12px;
}

.delete-button::before {
  position: absolute;
  color: white;
  font-size: 2px;
}

.delete-button:hover::before {
  font-size: 13px;
  opacity: 1;
}
</style>
