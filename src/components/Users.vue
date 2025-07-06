<template>
  <div>
    <h1>Users</h1>
    <div class="grid-container">
      <div v-for="user in users" :key="user.id" class="card">
        <h3>{{ user.name }}</h3>
        <p>@{{ user.username }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.website }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() { return { users: [] }; },
  async mounted() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.users = response.data;
  }
};
</script>