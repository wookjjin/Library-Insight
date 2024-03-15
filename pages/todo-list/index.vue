<script setup lang="ts">
interface ITodoData {
  id: number
  text: string
  checked: boolean
  done: boolean
}

// ---------------------------------- Variables ----------------------------------
const todoText = ref('')
const todoList = ref<ITodoData[]>([])

// const newTodo = ref('')
// const todos = ref<ITodo[]>([])
// const completedTodoList = reactive<ITodo[]>([])
function getUniqueId(length = 16): string {
  return Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace('.', '')
}

// ---------------------------------- Functions ----------------------------------
function addTodo() {
  if (todoText.value) {
    todoList.value.push({
      id: getUniqueId(),
      text: todoText.value,
      checked: false,
      done: false,
    })
  }
  todoText.value = ''
}

function deleteTodo(id) {
  todoList.value = todoList.value.filter(todo => todo.id !== id)
}

// // 전체 체크
function checkAllTodos() {
  const allCheck = todoList.value.every(todo => todo.checked)

  todoList.value.forEach((todo) => {
    todo.checked = !allCheck
  })
}

function doneAllTodos() {
  todoList.value.forEach((todo) => {
    if (todo.checked)
      todo.done = !todo.done
  })
}
</script>

<template>
  <div class="todo-container">
    <div class="title">
      <h1>To-Do List</h1>
      <div class="input-container">
        <input v-model="todoText" type="text" placeholder="Enter ToDo" class="input-field" @keyup.enter="addTodo">
        <label for="input-field" class="input-label">Enter ToDo</label>
        <span class="input-highlight" />
        <button type="button" class="add-button" @click="addTodo">
          Add
        </button>
      </div>
    </div>
    <div>
      <div>
        <button @click="checkAllTodos">
          전체
        </button>
        <button @click="doneAllTodos">
          완료
        </button>
      </div>
      <div>
        <ul>
          <li v-for="todo in todoList" :key="todo.id">
            <div class="todos-wrap">
              <label class="cyberpunk-checkbox-label">
                <input v-model="todo.checked" type="checkbox" class="cyberpunk-checkbox">
                <span :class="todo.done ? 'text-decoration-line: line-through' : ''">
                  {{ todo.text }}
                </span>
              </label>
              <button class="delete-button" @click="deleteTodo(todo.id)">
                <svg viewBox="0 0 448 512" class="svgIcon">
                  <path
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                  />
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
.todo-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.title {
  margin: 5em;
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
