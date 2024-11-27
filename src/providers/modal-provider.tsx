"use client";

import { useToast } from "@/hooks/use-toast";
import React, { createContext, useContext, useState } from "react";

interface ModalProviderProps {
  children: React.ReactNode;
}

export type ModalData<T> = T;

type ModalContextType<T> = {
  data: ModalData<T>;
  error: string | null;
  loading: boolean;
  isOpen: boolean;
  setOpen: (
    modal: React.ReactNode,
    fetchData?: () => Promise<T>,
    id?: number,
  ) => void;
  setClose: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModalContext = createContext<ModalContextType<any> | undefined>(
  undefined,
);

const ModalProvider = <T,>({ children }: ModalProviderProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ModalData<T> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null);
  const [lastFetchedId, setLastFetchedId] = useState<number | null>(null);

  const setOpen = async (
    modal: React.ReactNode,
    fetchData?: (id?: number) => Promise<T>,
    id?: number,
  ) => {
    if (id && id === lastFetchedId && !error) {
      setShowingModal(modal);
      setIsOpen(true);
      return;
    }
    setError(null);
    setData(null);
    setLoading(true);
    setShowingModal(modal);
    setIsOpen(true);

    if (fetchData) {
      try {
        if (id) {
          setLastFetchedId(id);
        }
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          toast({
            title: "Oops",
            description: err.message,
            variant: "destructive",
          });
          setError(err.message);
        } else {
          toast({
            title: "Oops",
            description: "Unexpected error occurred",
            variant: "destructive",
          });
          setError("Unexpected error occurred");
        }
        console.error("Error in setOpen:", err);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const setClose = () => {
    setIsOpen(false);
    setLoading(false);
    setShowingModal(null);
  };

  return (
    <ModalContext.Provider
      value={{ data, error, loading, isOpen, setOpen, setClose }}
    >
      {children}
      {isOpen && showingModal}
    </ModalContext.Provider>
  );
};

export const useModal = <T,>() => {
  const context = useContext(ModalContext) as ModalContextType<T> | undefined;
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
};

export default ModalProvider;
