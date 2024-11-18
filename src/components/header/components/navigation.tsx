"use client";
import Link from "next/link";
import { Logo } from "../icons";
import SearchMovieForm from "./search-movie-form";

export default function Navigation() {
  return (
    <nav className="flex flex-col justify-between items-center h-full sm:items-start">
      <div className="w-full flex flex-col-reverse sm:flex-row sm:space-x-1 md:space-x-2">
        <SearchMovieForm />
        <div className="flex space-x-1 md:space-x-2">
          <Link
            className="rounded-full bg-white py-2.5 px-[26px] text-xs leading-[14px] font-medium uppercase 
            sm:flex sm:items-center 
            xl:px-8 xl:py-3.5"
            href="/"
          >
            home
          </Link>
          <Link
            className="rounded-full bg-white py-2.5 px-[26px] text-xs leading-[14px] font-medium uppercase 
            sm:flex sm:items-center 
            xl:px-8 xl:py-3.5"
            href="/"
          >
            my library
          </Link>
        </div>
      </div>
      <Link href="/" className="flex items-center space-x-2">
        <Logo />
        <span
          className="text-white text-2xl font-medium 
        sm:text-4xl 
        md:text-4xl 
        xl:text-[60px]"
        >
          Movie-Radar
        </span>
      </Link>
    </nav>
  );
}
