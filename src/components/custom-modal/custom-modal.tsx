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

type Props = {
  title: string;
  subheading: string;
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
      <DialogContent
        className={clsx("md:max-h-screen md:h-fit bg-card ", className)}
      >
        <DialogHeader className="text-left">
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
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
