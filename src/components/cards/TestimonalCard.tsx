"use client";
import { useState } from "react";
import { Headings } from "../typography";
import { TestimonialTypes } from "@/@types/types";
import Image from "next/image";
import { RatingsIcon } from "@/utils/icons";

const TestimonialCard: React.FC<TestimonialTypes["cards"][0]> = ({
  name,
  src,
  text,
}) => {
  // const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full grid md:grid-cols-2 gap-6">
      <div className="w-full relative md:aspect-[4/2.3] aspect-[4/2.3]">
        <Image src={src} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center gap-6">
        <div className="flex items-center gap-2 max-md:justify-center">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <span key={index}>
                <RatingsIcon />
              </span>
            ))}
        </div>
        <p className="text-light text-[1.375rem]">{text}</p>
        <h3 className="text-light max-md:text-center text-2xl pUltralight">{name}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
