import { useLoadingStore } from "@/store/loading";

import React from "react";

export const Logo = () => {
  const isPending = useLoadingStore((state) => state.isPending);

  return (
    <>
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 xl:h-[60px] xl:w-[60px]"
      >
        <g
          style={{
            animation: isPending
              ? "spin 1s linear infinite"
              : "spin 1s linear 1 forwards",
            transformOrigin: "center",
          }}
        >
          <circle cx="12" cy="12" r="2" />
          <path
            d="m13.41 10.59 5.66-5.66"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </g>

        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
        <path d="M4 6h.01" />
        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
        <path d="M12 18h.01" />
        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
      </svg>
    </>
  );
};

export const Search = () => {
  return (
    <svg
      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934
           8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2497 12.2501L9.71216 9.71265"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
