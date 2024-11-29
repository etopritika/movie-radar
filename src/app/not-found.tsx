import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex h-[50vh] flex-col items-center justify-center space-y-8 pb-10 text-center text-white sm:pb-12 md:pb-[60px]">
      <h1 className="text-6xl font-extrabold tracking-tight text-red-600 sm:text-7xl">
        404
      </h1>
      <p className="mt-4 text-lg text-white">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="flex items-center rounded-full border-none bg-red-700 px-8 py-[14px] text-xs font-medium uppercase leading-[14px] text-white transition-colors hover:bg-red-400 sm:text-sm md:px-10 md:py-3 md:text-base"
        aria-label="Return to homepage"
      >
        <ArrowBigLeftDash className="mr-2 h-5 w-5" />
        Return
      </Link>
    </section>
  );
}
