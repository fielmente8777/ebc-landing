// "use client"

import { FaqTypes } from "@/@types/types";

// import { useState } from "react";

const Accordion: React.FC<FaqTypes["list"][0]> = ({ question, answer }) => {
  // Accordion component implementation goes here
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-4 cursor-pointer group">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{question}</h3>
        <span>
          <DropDownIcon className="mt-2 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
        </span>
      </div>
      <p className="hidden group-hover:block transition-transform group-hover:translate-y-1 group-hover:opacity-100 opacity-0 transform duration-1000 ease-in-out mt-2">
        {answer}
      </p>
    </div>
  );
};

export default Accordion;

export const DropDownIcon = ({ ...props }) => (
  <svg
    width={18}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.996 7.104L1.658.27A.945.945 0 00.974.007.998.998 0 00.29.284a.844.844 0 000 1.274l7.458 6.959c.177.164.374.285.593.364.218.08.437.119.655.119.219 0 .437-.04.656-.119.218-.079.416-.2.592-.364l7.473-6.96A.827.827 0 0018 .915a.876.876 0 00-.298-.644.97.97 0 00-.684-.27.97.97 0 00-.684.27L8.996 7.104z"
      fill="#434B3E"
    />
  </svg>
);
