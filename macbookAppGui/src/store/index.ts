import { create } from "zustand";

const useMacBookStore = create((set) => ({
  color: "#2e2c2e",
  setColor: (color: string) => set({ color }),

  scale: 0.08,
  setScale: (scale: string) => set({ scale }),

  reset: () => set({ color: "2e2c3e", scale: 0.08 }),
}));

export default useMacBookStore;
