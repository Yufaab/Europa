import { create } from 'zustand';

const userStore = create((set) => ({
  userToken: null,
  setToken: (token) => set(() => ({ userToken: token })),
  removeToken: () => set(() => ({ userToken: '' })),
}));

export default userStore;
