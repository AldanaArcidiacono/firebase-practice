import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const useUserStore = defineStore('user', () => {
  const userData = 'Aldana';

  const registerUser = async (email, password) => {
    try {
      // createUserWithEmailAndPassword has a .user property. We destructure to use it.
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    userData,
    registerUser,
  };
});
