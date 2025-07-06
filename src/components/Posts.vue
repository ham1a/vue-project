<template>
  <div>
    <h1>Posts</h1>
    <div class="grid-container">
      <div v-for="post in posts" :key="post.id" class="card">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() { return { posts: [] }; },
  async mounted() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.posts = response.data;
  }
};
</script>