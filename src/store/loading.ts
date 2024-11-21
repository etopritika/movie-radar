import { create } from "zustand";

interface LoadingState {
  isPending: boolean;
  setPending: (pending: boolean) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isPending: false,
  setPending: (pending: boolean) => set({ isPending: pending }),
}));
