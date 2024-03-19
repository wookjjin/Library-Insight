<template>
  <div class="todo-list-container">
    <ul>
      <li v-for="todo in todoList" :key="todo.id" :class="{ 'done': todo.done }">
        <label>
          <input type="checkbox" v-model="todo.checked">
          <span>{{ todo.text }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  todoList: {
    required: true
  }
});

const todoList = ref(props.todoList);
</script>

<style scoped>
.todo-list-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.todo-list-container ul {
  list-style-type: none;
  padding: 0;
}

.todo-list-container li {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  align-items: center;
}

.todo-list-container input[type="checkbox"] {
  margin-right: 10px;
}

.todo-list-container .done {
  text-decoration: line-through;
  color: #888;
}

.todo-list-container span {
  color: #333;
  flex-grow: 1;
}
</style>
