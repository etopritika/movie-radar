import { Skeleton } from "../ui/skeleton";

export function MovieDetailsSkeleton() {
  return (
    <div className="space-y-5 sm:flex sm:justify-between sm:space-y-0">
      <Skeleton className="h-[357px] w-full rounded-[5px] bg-gray-200 sm:h-[373px] sm:w-[254px] md:w-[264px] xl:w-[375px]" />
      <div className="w-full space-y-5 sm:max-w-[240px] md:max-w-[264px] xl:max-w-[391px]">
        <Skeleton className="h-[23px] w-full bg-gray-200 sm:h-[20px] xl:h-[31px]" />
        <Skeleton className="h-[88px] w-full bg-gray-200" />
        <Skeleton className="h-[260px] w-full bg-gray-200 sm:h-[220px] xl:h-[160px]" />
      </div>
    </div>
  );
}
