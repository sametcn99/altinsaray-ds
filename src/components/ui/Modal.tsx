"use client";
import React, { FC, ReactNode, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="duration-00 rounded-2xl bg-background-300 bg-opacity-30 p-4 text-2xl text-text-600 backdrop-blur-sm transition-all ease-in hover:bg-opacity-40 hover:font-bold hover:shadow-xl"
      >
        Hemen Ulaşın!
      </button>
      {isOpen && (
        <div className="fixed left-0 top-0  z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-30 text-text-600 backdrop-blur-md">
          <div className="relative w-[20rem] rounded-2xl bg-background-300 p-12">
            <IoMdClose
              className="absolute right-1 top-1 z-10 h-10 w-10 cursor-pointer p-2"
              onClick={handleClose}
            />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
