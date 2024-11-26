import { create } from "zustand";

interface LibraryStore {
  updateTrigger: number;
  triggerUpdate: () => void;
}

export const useLibraryStore = create<LibraryStore>((set) => ({
  updateTrigger: 0,
  triggerUpdate: () =>
    set((state) => ({ updateTrigger: state.updateTrigger + 1 })),
}));
