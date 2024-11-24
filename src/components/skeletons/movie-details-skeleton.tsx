import { Skeleton } from "../ui/skeleton";

export function MovieDetailsSkeleton() {
  return (
    <div className="space-y-5 sm:space-y-0 sm:flex sm:justify-between">
      <Skeleton className="w-full rounded-[5px] h-[357px] sm:w-[254px] sm:h-[373px] md:w-[264px] xl:w-[375px] bg-gray-200" />
      <div className="space-y-5 w-full sm:max-w-[240px] md:max-w-[264px] xl:max-w-[391px]">
        <Skeleton className="w-full h-[23px] sm:h-[20px] xl:h-[31px] bg-gray-200" />
        <Skeleton className="w-full h-[88px] bg-gray-200" />
        <Skeleton className="w-full h-[260px] sm:h-[220px] xl:h-[160px] bg-gray-200" />
      </div>
    </div>
  );
}
