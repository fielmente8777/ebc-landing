"use client";
import { useDataContext } from "@/contextApi/DataContext";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Form } from "../forms";

const PopForm: React.FC = () => {
  const { isOpen, setIsOpen } = useDataContext();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <div
      className={`fixed flex items-center justify-center bg-secondary/30 backdrop-blur-sm z-50 inset-0 transition-all ease-in-out duration-300  ${isOpen ? "visible opacity-100 scale-100" : "invisible scale-0 opacity-0"}`}
      onClick={(e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="max-w-lg shadow-2xl rounded-lg w-full relative bg-white p-6 max-md:mx-4">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 bg-primary right-4 z-20 cursor-pointer text-white p-2 rounded-full aspect-square"
        >
          <AiOutlineClose size={20} />
        </button>
        <Form />
      </div>
    </div>
  );
};

export default PopForm;
