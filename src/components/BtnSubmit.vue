<template>
  <button
    type="submit"
    class="btn btn-bd-primary mt-3"
    :disabled="userStore.loading"
  >
    {{ text }}
    <div
      v-if="userStore.loading"
      class="spinner-border spinner-border-sm"
      role="status"
    ></div>
  </button>
</template>

<script setup>
import { useUserStore } from '../stores/user';

defineProps({ text: String });

const userStore = useUserStore();
</script>

<style lang="scss" scoped>
.btn-bd-primary {
  font-weight: 600;
  color: white;
  background-color: #6f42c1;
  border-color: #6f42c1;
}
.btn-bd-primary:hover {
  color: #6f42c1;
  background-color: white;
  border-color: #6f42c1;
}
</style>
