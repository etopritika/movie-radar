import { create } from "zustand";

interface LibraryStore {
  updateTrigger: number;
  updateLibrary: () => void;
}

export const useLibraryStore = create<LibraryStore>((set) => ({
  updateTrigger: 0,
  updateLibrary: () =>
    set((state) => ({ updateTrigger: state.updateTrigger + 1 })),
}));
