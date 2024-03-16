<template>
  <div>
    <h2 class="mt-4 mx-5">Home</h2>
    <p class="my-2 mx-5">USER: {{ userStore.userData?.email }}</p>
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
