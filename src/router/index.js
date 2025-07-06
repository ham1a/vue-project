import { createRouter, createWebHistory } from 'vue-router';
import Posts from '../components/Posts.vue';
import Comments from '../components/Comments.vue';
import Albums from '../components/Albums.vue';
import Photos from '../components/Photos.vue';
import Todos from '../components/Todos.vue';
import Users from '../components/Users.vue';

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: Posts },
  { path: '/comments', component: Comments },
  { path: '/albums', component: Albums },
  { path: '/photos', component: Photos },
  { path: '/todos', component: Todos },
  { path: '/users', component: Users },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;