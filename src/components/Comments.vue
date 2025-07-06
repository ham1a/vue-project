<template>
  <div>
    <h1>Comments</h1>
    <div class="grid-container">
      <div v-for="comment in comments" :key="comment.id" class="card">
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.body }}</p>
        <small>By: {{ comment.email }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() { return { comments: [] }; },
  async mounted() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    this.comments = response.data;
  }
};
</script>