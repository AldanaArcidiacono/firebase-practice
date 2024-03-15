<template>
  <div>
    <h2 class="mt-4 mx-5">Login</h2>
    <form class="my-2 mx-5" @submit.prevent="handleSubmit">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        class="form-control mb-2"
        id="email"
        placeholder="Add your email"
        v-model="email"
      />
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Add your password"
        v-model="password"
      />
      <button type="submit" class="btn btn-info mt-3">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  console.log('email', email.value);
  console.log('password', password.value);
  if (!email.value || password.value.length < 6) {
    return alert('Complete the files');
  }
  await userStore.loginUser(email.value, password.value);
};
</script>

<style lang="scss" scoped></style>
