"use client";

import { useState, useEffect } from "react";
import { ChevronsUp } from "lucide-react";
import { Button } from "../ui/button";

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <Button
        onClick={handleScrollUp}
        className="fixed bottom-4 right-4 z-50 rounded-full border-none bg-red-700 p-4 transition-colors hover:bg-red-400 md:p-6"
      >
        <ChevronsUp className="text-white" />
      </Button>
    )
  );
}
