import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
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
      console.log(userData.value);
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      userData.value = { email: user.email, uid: user.uid };
      console.log(userData.value);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    userData,
    registerUser,
    loginUser,
  };
});
