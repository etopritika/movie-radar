import { LocalStorageMovie } from "@/lib/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface MoviesState {
  movies: LocalStorageMovie[];
  loading: boolean;
  addMovie: (movie: LocalStorageMovie) => void;
  removeMovie: (id: number) => void;
  clearMovies: () => void;
  setLoading: (loading: boolean) => void;
}

export const useMoviesStore = create<MoviesState>()(
  persist(
    (set, get) => ({
      movies: [],
      loading: true,
      addMovie: (movie: LocalStorageMovie) =>
        set({ movies: [...get().movies, movie] }),
      removeMovie: (id: number) =>
        set({ movies: get().movies.filter((movie) => movie.id !== id) }),
      clearMovies: () => set({ movies: [] }),
      setLoading: (loading: boolean) => set({ loading }),
    }),
    {
      name: "movies-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setLoading(false);
        }
      },
    },
  ),
);
