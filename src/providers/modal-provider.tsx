"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalProviderProps {
  children: React.ReactNode;
}

export type ModalData = Record<string, unknown>;

type ModalContextType = {
  data: ModalData;
  error: string | null;
  loading: boolean; // Додано стан для завантаження
  isOpen: boolean;
  setOpen: (modal: React.ReactNode, fetchData?: () => Promise<unknown>) => void;
  setClose: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ModalData>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Стан завантаження
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null);

  const setOpen = async (
    modal: React.ReactNode,
    fetchData?: () => Promise<unknown>
  ) => {
    setError(null);
    setData({});
    setLoading(true); // Починаємо завантаження
    setShowingModal(modal);
    setIsOpen(true); // Відкриваємо модальне вікно одразу

    if (fetchData) {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData as ModalData); // Зберігаємо отримані дані
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unexpected error occurred");
        }
        console.error("Error in setOpen:", err);
      } finally {
        setLoading(false); // Завершуємо завантаження
      }
    } else {
      setLoading(false); // Якщо немає fetchData
    }
  };

  const setClose = () => {
    setIsOpen(false);
    setData({});
    setError(null);
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

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
};

export default ModalProvider;
