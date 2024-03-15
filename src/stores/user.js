import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', () => {
  const router = useRouter();

  const userData = ref(null);

  const registerUser = async (email, password) => {
    try {
      // createUserWithEmailAndPassword has a .user property. We destructure to use it.
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      userData.value = { email: user.email, uid: user.uid };
      router.push('/');

      console.log(userData.value);
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      userData.value = { email: user.email, uid: user.uid };
      router.push('/');

      console.log(userData.value);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      userData.value = null;
      router.push('/login');

      console.log(userData.value);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    userData,
    registerUser,
    loginUser,
    logoutUser,
  };
});
