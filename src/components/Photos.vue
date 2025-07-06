<template>
  <div>
    <h1>Photos</h1>
    <div class="grid-container">
      <div v-for="photo in photos" :key="photo.id" class="card">
        <img :src="photo.thumbnailUrl" :alt="photo.title">
        <p>{{ photo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() { return { photos: [] }; },
  async mounted() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50');
    this.photos = response.data;
  }
};
</script>