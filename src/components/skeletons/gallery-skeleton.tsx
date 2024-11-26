"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useLoadingStore } from "@/store/loading";
import { useEffect } from "react";

export function GallerySkeleton() {
  const setPending = useLoadingStore((state) => state.setPending);
  const skeletonClasses =
    "w-[100%] h-[402px] sm:h-[455px] md:h-[455px] xl:h-[574px] rounded-lg bg-[#f3f4f6]/10";

  useEffect(() => {
    setPending(true);

    return () => {
      setPending(false);
    };
  }, [setPending]);

  return (
    <div className="grid grid-cols-1 gap-5 pb-10 pt-5 sm:grid-cols-2 sm:gap-5 sm:pb-[60px] sm:pt-6 md:grid-cols-2 md:gap-8 md:pt-8 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className={skeletonClasses} />
      ))}
    </div>
  );
}
