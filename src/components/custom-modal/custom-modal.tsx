"use client";
import clsx from "clsx";

import { useModal } from "@/providers/modal-provider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { X } from "lucide-react";

type Props = {
  title?: string;
  subheading?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  centeredHeading?: boolean;
};

const CustomModal = ({
  children,
  defaultOpen,
  subheading,
  title,
  className,
  centeredHeading,
}: Props) => {
  const { isOpen, setClose } = useModal();

  return (
    <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
      <DialogContent className={clsx("md:h-fit bg-card relative ", className)}>
        <DialogHeader className="text-left sr-only">
          <DialogTitle
            className={clsx("text-2xl font-bold", {
              "text-left": !centeredHeading,
              "text-center": centeredHeading,
            })}
          >
            {title}
          </DialogTitle>
          <DialogDescription>{subheading}</DialogDescription>
        </DialogHeader>
        <button onClick={setClose} className="absolute top-2 right-2">
          <X size={30} />
        </button>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
