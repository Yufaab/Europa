import { create } from 'zustand';

const orderStore = create((set) => ({
  data: null,
  setData: (data) => set(() => ({ data })),
  removeData: () => set(() => ({ data: null })),
}));

export default orderStore;
