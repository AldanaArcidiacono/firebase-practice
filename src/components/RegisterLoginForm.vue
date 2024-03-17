<template>
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
    <BtnSubmit :text="btnText"></BtnSubmit>
  </form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '../stores/user';
import BtnSubmit from '../components/BtnSubmit.vue';
import { useRoute } from 'vue-router';

const userStore = useUserStore();
const route = useRoute();

const isLogin = ref(false);

const email = ref('');
const password = ref('');

const btnText = ref('');

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    return alert('Complete the files');
  }
  if (isLogin.value) {
    await userStore.loginUser(email.value, password.value);
  } else {
    await userStore.registerUser(email.value, password.value);
  }
};

onMounted(() => {
  isLogin.value = route.path === '/login' ? true : false;

  btnText.value = isLogin.value === true ? 'Login' : 'Add User';
});
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
