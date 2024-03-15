<template>
  <div>
    <h1>App Title</h1>
    <nav>
      <ul class="nav nav-underline d-flex align-items-center">
        <li class="nav-item" v-for="nav of navBar">
          <router-link
            :to="nav.url"
            class="nav-link"
            :class="{
              active: nav.url !== route.path,
              disabled: nav.url === route.path,
            }"
          >
            {{ nav.tag }}
          </router-link>
        </li>
        <li class="nav-item">
          <button
            class="btn btn-outline-danger btn-sm"
            @click="userStore.logoutUser"
          >
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
import { useRoute } from 'vue-router';

const userStore = useUserStore();
const route = useRoute();

const navBar = ref([]);

onMounted(() => {
  navBar.value = [
    { url: '/', tag: 'Home' },
    { url: '/login', tag: 'Login' },
    { url: '/register', tag: 'Register' },
  ];
});
</script>

<style lang="scss" scoped>
.nav-underline .nav-link.active {
  color: #6f42c1;
}
</style>
