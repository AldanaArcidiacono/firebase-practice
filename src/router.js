import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './stores/user';
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import RegisterView from './views/RegisterView.vue';

const requireAuth = async (to, from, next) => {
  // When we want to initialize a store in a file outside the components,
  // we must do it inside a function.
  const userStore = useUserStore();

  const user = await userStore.currentUser();

  // With the 'next' we send the user to the route we want
  if (user) next();
  else next('/login');
};

const routes = [
  { path: '/', name: 'home', component: HomeView, beforeEnter: requireAuth },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
