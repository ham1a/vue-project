<template>
  <div>
    <h1>Albums</h1>
    <div class="grid-container">
      <div v-for="album in albums" :key="album.id" class="card">
        <h3>{{ album.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() { return { albums: [] }; },
  async mounted() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    this.albums = response.data;
  }
};
</script>