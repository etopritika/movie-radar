import { LocalStorageMovie } from "@/lib/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface MoviesState {
  movies: LocalStorageMovie[];
  addMovie: (movie: LocalStorageMovie) => void;
  removeMovie: (id: number) => void;
  clearMovies: () => void;
}

export const useMoviesStore = create<MoviesState>()(
  persist(
    (set, get) => ({
      movies: [],
      addMovie: (movie: LocalStorageMovie) =>
        set({ movies: [...get().movies, movie] }),
      removeMovie: (id: number) =>
        set({ movies: get().movies.filter((movie) => movie.id !== id) }),
      clearMovies: () => set({ movies: [] }),
    }),
    {
      name: "movies-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
