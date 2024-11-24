"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname } from "next/navigation";

interface MoviePaginationProps {
  currentPage: number | 1;
  totalPages: number | 1;
  query?: string;
}

export default function MoviePagination({
  currentPage,
  totalPages,
  query,
}: MoviePaginationProps) {
  const pathname = usePathname();
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  const routes = {
    search: (page: number) => `/search/${query}/${page}`,
    library: (page: number) => `/library/${page}`,
    trending: (page: number) => `/trending/${page}`,
  };

  const getPageHref = (page: number) => {
    if (pathname.startsWith("/search")) {
      return routes.search(page);
    }
    if (pathname.startsWith("/library")) {
      return routes.library(page);
    }
    return routes.trending(page);
  };

  const activeClass =
    "pointer-events-none bg-white text-black border-none rounded-md";
  const inactiveClass = "hover:bg-red-400";

  const createPageLink = (
    page: number,
    isActive: boolean,
    additionalClass = "",
    hiddenSuffix = ""
  ) => (
    <PaginationItem
      key={`page-${page}${hiddenSuffix}`}
      className={additionalClass}
    >
      <PaginationLink
        href={getPageHref(page)}
        isActive={isActive}
        className={isActive ? activeClass : inactiveClass}
      >
        {page}
      </PaginationLink>
    </PaginationItem>
  );

  const renderPageLinks = () => {
    const pages = [];

    if (totalPages <= 8) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(createPageLink(i, i === currentPage));
      }
    } else {
      pages.push(
        createPageLink(1, currentPage === 1, "hidden sm:flex", "-hidden")
      );

      if (currentPage > 4) {
        pages.push(
          <PaginationEllipsis
            key={`start-ellipsis-${currentPage}`}
            className="hidden sm:flex"
          />
        );
      }

      for (
        let i = Math.max(2, currentPage - 2);
        i <= Math.min(totalPages - 1, currentPage + 2);
        i++
      ) {
        pages.push(createPageLink(i, i === currentPage));
      }

      if (currentPage <= 4) {
        pages.unshift(createPageLink(1, currentPage === 1, "sm:hidden"));
      }

      if (currentPage < totalPages - 3) {
        pages.push(
          <PaginationEllipsis
            key={`end-ellipsis-${currentPage}`}
            className="hidden sm:flex"
          />
        );
      }

      pages.push(
        createPageLink(
          totalPages,
          currentPage === totalPages,
          "hidden sm:flex",
          "-hidden"
        )
      );

      if (currentPage >= totalPages - 3) {
        pages.push(
          createPageLink(totalPages, currentPage === totalPages, "sm:hidden")
        );
      }
    }

    return pages;
  };

  const buttonClassName = (isDisabled: boolean) =>
    isDisabled ? "text-gray-400 cursor-not-allowed" : "hover:bg-red-400";

  return (
    <Pagination className="text-white">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={!isFirstPage ? getPageHref(currentPage - 1) : undefined}
            className={buttonClassName(isFirstPage)}
          />
        </PaginationItem>

        {renderPageLinks()}

        <PaginationItem>
          <PaginationNext
            href={!isLastPage ? getPageHref(currentPage + 1) : undefined}
            className={buttonClassName(isLastPage)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
