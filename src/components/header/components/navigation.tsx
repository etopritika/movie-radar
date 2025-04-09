"use client";
import Link from "next/link";
import { Logo } from "../icons";
import SearchMovieForm from "./search-movie-form";
import { usePathname } from "next/navigation";

interface LinkItem {
  href: string;
  label: string;
}

const links: LinkItem[] = [
  { href: "/trending/1", label: "trending" },
  { href: "/library/1", label: "library" },
  { href: "/recommendations/1", label: "recommendations" },
];

const styles = {
  base: "rounded-full py-3 px-6 text-xs leading-4 font-medium uppercase sm:flex sm:items-center xl:px-8 xl:py-4 transition-colors",
  active:
    "bg-white text-black hover:bg-white focus:bg-white focus:text-black hover:text-black",
  inactive:
    "bg-transparent text-white hover:bg-red-400 hover:text-white focus:bg-red-400 focus:text-white",
};

const getLinkStyles = (pathname: string, label: string) =>
  `${styles.base} ${
    pathname.includes(label) ? styles.active : styles.inactive
  }`;

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex h-full flex-col items-center justify-between sm:items-start">
      <div className="flex w-full flex-col-reverse sm:flex-row sm:space-x-2">
        <SearchMovieForm />
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              aria-current={pathname.includes(label) && "page"}
              className={getLinkStyles(pathname, label)}
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <Link href="/" className="flex items-center space-x-2">
        <Logo />
        <span className="text-2xl font-medium text-white sm:text-4xl xl:text-[60px]">
          Movie-Radar
        </span>
      </Link>
    </nav>
  );
}
