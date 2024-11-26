"use client";

import { RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();
  return (
    <Button
      onClick={router.refresh}
      className="md:text-md rounded-full border-none bg-red-700 px-8 py-[14px] text-xs font-medium uppercase leading-[14px] text-white transition-colors hover:bg-red-400 sm:text-sm md:px-10 md:py-6"
    >
      Refresh page <RotateCcw />
    </Button>
  );
}
