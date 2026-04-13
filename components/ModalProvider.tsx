"use client";
import { useState, createContext, useContext } from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";

const ModalContext = createContext({ openModal: () => {} });
export const useModal = () => useContext(ModalContext);

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      <Navbar />
      <main>{children}</main>

      {/* The Modal renders here at the root level */}
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </ModalContext.Provider>
  );
}
