import { useState, useEffect } from "react";
import { Plus, Check } from "lucide-react";
import { getPosterSrc } from "@/lib/helpers";

interface MovieData {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string | null;
}

interface ToggleLibraryProps {
  data: MovieData;
  onToggle?: (checked: boolean) => void;
}

const LOCAL_STORAGE_KEYS = {
  SET: "librarySet",
  MOVIES: "library",
};

const ToggleLibrary: React.FC<ToggleLibraryProps> = ({ data, onToggle }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const savedSet = loadLibrarySet();
    setChecked(savedSet.has(data.id));
  }, [data.id]);

  const loadLibrarySet = (): Set<number> => {
    return new Set<number>(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SET) || "[]")
    );
  };

  const loadMovies = (): MovieData[] => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.MOVIES) || "[]");
  };

  const saveLibrarySet = (set: Set<number>) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.SET, JSON.stringify([...set]));
  };

  const saveMovies = (movies: MovieData[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.MOVIES, JSON.stringify(movies));
  };

  const handleChange = () => {
    const savedSet = loadLibrarySet();
    const savedMovies = loadMovies();
    const newChecked = !checked;

    setChecked(newChecked);

    if (newChecked) {
      savedSet.add(data.id);
      savedMovies.push({
        ...data,
        poster_path: getPosterSrc(data.poster_path),
      });
    } else {
      savedSet.delete(data.id);
      const updatedMovies = savedMovies.filter((movie) => movie.id !== data.id);
      saveMovies(updatedMovies);
    }

    saveLibrarySet(savedSet);

    if (onToggle) onToggle(newChecked);
  };

  return (
    <label className="flex items-center justify-center w-full">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden"
      />
      <div
        className={`flex items-center justify-center w-full text-white bg-red-700 text-xs leading-[14px] font-medium uppercase rounded-full py-[14px] px-8 border-none transition-colors hover:bg-red-400 space-x-2 ${
          checked ? "bg-green-600 hover:bg-green-500" : "bg-red-700"
        }`}
      >
        <span>{checked ? "remove from queue" : "add to queue"}</span>
        {checked ? <Check /> : <Plus />}
      </div>
    </label>
  );
};

export default ToggleLibrary;
