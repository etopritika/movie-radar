"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useLoadingStore } from "@/store/loading";
import { useEffect } from "react";

export function GallerySkeleton() {
  const setPending = useLoadingStore((state) => state.setPending);
  const skeletonClasses =
    "w-[100%] h-[426px] md:h-[342px] xl:h-[445px] rounded-lg bg-[#f3f4f6]/10";

  useEffect(() => {
    setPending(true);

    return () => {
      setPending(false);
    };
  }, [setPending]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton key={index} className={skeletonClasses} />
      ))}
    </div>
  );
}
