<template>
  <div id="app-container">
    <header class="app-header">
      <nav class="navigation">
        <router-link to="/posts">Posts</router-link>
        <router-link to="/comments">Comments</router-link>
        <router-link to="/albums">Albums</router-link>
        <router-link to="/photos">Photos</router-link>
        <router-link to="/todos">Todos</router-link>
        <router-link to="/users">Users</router-link>
      </nav>
    </header>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>