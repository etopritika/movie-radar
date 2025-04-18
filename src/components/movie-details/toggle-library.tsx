import { Check, Bookmark } from "lucide-react";
import { LocalStorageMovie } from "@/lib/types";
import { useLibraryStore } from "@/store/use-library-store";

interface ToggleLibraryProps {
  data: LocalStorageMovie;
}

const ToggleLibrary: React.FC<ToggleLibraryProps> = ({ data }) => {
  const { addMovie, removeMovie, movies } = useLibraryStore();
  const isChecked = movies.some((movie) => movie.id === data.id);

  const handleChange = () => {
    if (isChecked) {
      removeMovie(data.id);
    } else {
      addMovie(data);
    }
  };

  return (
    <label className="flex w-full items-center justify-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="hidden"
      />
      <div
        className={`flex w-full items-center justify-center space-x-2 rounded-full border-none px-8 py-[14px] text-xs font-medium uppercase leading-[14px] text-white transition-colors ${
          isChecked
            ? "bg-green-600 hover:bg-green-500"
            : "bg-red-700 hover:bg-red-400"
        }`}
      >
        <span>{isChecked ? "remove from library" : "add to library"}</span>
        {isChecked ? <Check /> : <Bookmark />}
      </div>
    </label>
  );
};

export default ToggleLibrary;
