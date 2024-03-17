<template>
  <div>
    <h2 class="mt-4 mx-5">Home</h2>
    <p class="my-2 mx-5">USER: {{ userStore.userData?.email }}</p>
    <div class="mx-5">
      URLS:
      <ul>
        <li v-for="item of urlsStore.documents" :key="item.id">
          {{ item.short }}: {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user';
import { useUrlsStore } from '../stores/urls';

const userStore = useUserStore();
const urlsStore = useUrlsStore();

urlsStore.getUrls();
</script>

<style lang="scss" scoped></style>
