<template>
  <div>
    <h2>Home</h2>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
