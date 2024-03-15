<template>
  <div>
    <h1>App Title</h1>
    <nav>
      <ul class="nav">
        <li class="nav-item" v-for="nav of navBar">
          <router-link :to="nav.url" class="nav-link">
            {{ nav.tag }}
          </router-link>
        </li>
        <li class="nav-item">
          <button class="btn btn-info" @click="useUser.logoutUser">
            Logout
          </button>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from './stores/user';

const useUser = useUserStore();

const navBar = ref([]);

onMounted(() => {
  navBar.value = [
    { url: '/', tag: 'Home' },
    { url: '/login', tag: 'Login' },
    { url: '/register', tag: 'Register' },
  ];
});
</script>
