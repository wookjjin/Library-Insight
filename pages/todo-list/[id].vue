<script setup lang="ts">
// import { NButton, NModal } from 'naive-ui';
const message = useMessage()
const route = useRoute();
const router = useRouter()

/*
해당주석이 필요 없으시면 삭제해도 됩니다.

id 값 가져와서 화면에 출력(콘솔로만)
https://router.vuejs.org/guide/advanced/composition-api.html

try catch
https://anerim.tistory.com/91      try catch문 참고,  const TEST = () => {} 와 같이 바꿔주세요  
https://nuxt.com/docs/api/utils/dollarfetch   
URL : 은 '/JSON/todo-detail.json' 로 입력해주세요


onMounted
https://ko.vuejs.org/api/composition-api-lifecycle

1. try:
    - "시도해보자"를 의미합니다.
    - 코드 블록 안에 예외가 발생할 수 있는 코드를 넣습니다.
2. catch:
    - "잡자"를 의미합니다.
    - `try` 블록에서 예외가 발생하면, 해당 예외를 잡아서 처리하는 부분입니다.
    - `catch` 블록 안에는 예외가 발생했을 때 실행할 코드를 작성합니다.
3. async:
    - "비동기적으로 실행하자"를 의미합니다.
    - 함수 앞에 `async` 키워드를 붙여서 비동기 함수임을 나타냅니다.
4. await:
    - "기다려"를 의미합니다.
    - `async` 함수 내에서만 사용할 수 있습니다.
    - 프로미스가 처리될 때까지 기다린 후 그 결과를 반환합니다.
5. try-catch:
    - 주된 사용 목적: 예외를 처리하는 것입니다.
    - 예외가 발생할 수 있는 코드를 `try` 블록 안에 작성하고, 예외가 발생하면 `catch` 블록에서 해당 예외를 처리합니다. 이를 통해 프로그램이 예상치 못한 상황에서도 안정적으로 동작할 수 있도록 합니다.
6. async-await:
    - 주된 사용 목적: 비동기 코드를 보다 간결하고 동기적으로 작성할 수 있도록 하는 것입니다.
    - 비동기 코드를 작성할 때 콜백이나 프로미스 체인 대신에 `async` 함수와 `await` 키워드를 사용하여 동기적으로 코드를 작성할 수 있습니다. 이를 통해 코드의 가독성과 유지보수성이 향상되며, 비동기 코드의 에러 처리도 간편하게 할 수 있습니다.


// 순수함수 예시 
const c = ref(60)

// 순수함수
function addValue1(a:number ,b:number){
  return a+b
}

// 비 순수함수
const addValue2 =(a:number ,b?:number)=>{
  return a + c.value
}

console.log(addValue1(20,30))
console.log(addValue2(20))


*/
</script>
<template>
  <div>
    <h1>페이지 이동 성공!!</h1>
    <h1>[id].vue 파일입니다.</h1>
    <h2></h2>
    <div class="form-group">
      <label for="todoId">할 일 ID:</label>
      <input type="text" id="todoId">
    </div>
    <div class="form-group">
      <label for="title">할 일 제목:</label>
      <input type="text" id="title">
    </div>
    <div class="form-group">
      <label for="done">완료 여부:</label>
      <select id="done">
        <option>
          공통코드
        </option>
      </select>
    </div>
    <div>
      <button>취소</button>
      <button>수정</button>
      <button>삭제</button>
      <button>확인</button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
}

.btn-cancel {
  background-color: #FF5733;
  color: #fff;
}

.btn-edit {
  background-color: #3498db;
  color: #fff;
}

.btn-delete {
  background-color: #e74c3c;
  color: #fff;
}

.btn-confirm {
  background-color: #27ae60;
  color: #fff;
}
</style>