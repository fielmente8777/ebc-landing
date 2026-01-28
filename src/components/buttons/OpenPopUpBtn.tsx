"use client";
import { useDataContext } from "@/contextApi/DataContext";

interface OpenPopUpBtnProps {
  label: string;
  className?: string;
  [key: string]: unknown;
}
const OpenPopUpBtn = ({
  label,
  className = "",
  ...props
}: OpenPopUpBtnProps) => {
  const { setIsOpen } = useDataContext();
  return (
    <button
      onClick={() => setIsOpen(true)}
      {...props}
      className={`pmedium tracking-wider transition-all gap-1 max-md:w-full flex items-center justify-center font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3  ${className}`}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  );
};

export default OpenPopUpBtn;
