import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', () => {
  const router = useRouter();

  const loading = ref(false);
  const loadingSession = ref(false);
  const userData = ref(null);

  const registerUser = async (email, password) => {
    loading.value = true;
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
    } finally {
      loading.value = false;
    }
  };

  const loginUser = async (email, password) => {
    loading.value = true;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      userData.value = { email: user.email, uid: user.uid };
      router.push('/');

      console.log(userData.value);
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  const logoutUser = async () => {
    loading.value = true;
    try {
      await signOut(auth);
      userData.value = null;
      router.push('/login');

      console.log(userData.value);
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  // onAuthStateChanged isn't a promise, so we create one
  const currentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          if (user) userData.value = { email: user.email, uid: user.uid };
          else userData.value = null;

          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );

      return unsubscribe;
    });
  };

  return {
    userData,
    loading,
    userData,
    loadingSession,

    registerUser,
    loginUser,
    logoutUser,
    currentUser,
  };
});
