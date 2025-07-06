<template>
  <div>
    <h1>Todos</h1>
    <div class="grid-container">
      <div v-for="todo in todos" :key="todo.id" class="card">
        <p :style="{ 'text-decoration': todo.completed ? 'line-through' : 'none', 'color': todo.completed ? '#888' : 'inherit' }">
          {{ todo.title }}
        </p>
        <strong>Status: {{ todo.completed ? 'Completed' : 'Pending' }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() { return { todos: [] }; },
  async mounted() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    this.todos = response.data;
  }
};
</script>