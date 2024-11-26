import { useState, useEffect } from "react";
import { Plus, Check } from "lucide-react";
import { LocalStorageMovie } from "@/lib/types";
import { useLibraryStore } from "@/store/update-library";

interface ToggleLibraryProps {
  data: LocalStorageMovie;
  onToggle?: (checked: boolean) => void;
}

const getSavedMovies = (): LocalStorageMovie[] => {
  return JSON.parse(localStorage.getItem("movies") || "[]");
};

const saveMovies = (movies: LocalStorageMovie[]) => {
  localStorage.setItem("movies", JSON.stringify(movies));
};

const isMovieSaved = (id: number): boolean => {
  const savedMovies = getSavedMovies();
  return savedMovies.some((movie) => movie.id === id);
};

const addMovie = (movie: LocalStorageMovie) => {
  const savedMovies = getSavedMovies();
  saveMovies([...savedMovies, movie]);
};

const removeMovie = (id: number) => {
  const savedMovies = getSavedMovies();
  saveMovies(savedMovies.filter((movie) => movie.id !== id));
};

const ToggleLibrary: React.FC<ToggleLibraryProps> = ({ data, onToggle }) => {
  const triggerUpdate = useLibraryStore((state) => state.triggerUpdate);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(isMovieSaved(data.id));
  }, [data.id]);

  const handleChange = () => {
    if (checked) {
      removeMovie(data.id);
    } else {
      addMovie(data);
    }
    triggerUpdate();
    setChecked(!checked);
    onToggle?.(!checked);
  };

  return (
    <label className="flex w-full items-center justify-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden"
      />
      <div
        className={`flex w-full items-center justify-center space-x-2 rounded-full border-none px-8 py-[14px] text-xs font-medium uppercase leading-[14px] text-white transition-colors ${
          checked
            ? "bg-green-600 hover:bg-green-500"
            : "bg-red-700 hover:bg-red-400"
        }`}
      >
        <span>{checked ? "remove from queue" : "add to queue"}</span>
        {checked ? <Check /> : <Plus />}
      </div>
    </label>
  );
};

export default ToggleLibrary;
