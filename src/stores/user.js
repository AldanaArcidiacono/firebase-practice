import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userData = 'Aldana';

  return {
    userData,
  };
});