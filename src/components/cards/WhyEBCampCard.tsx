"use client";

import { useState } from "react";
import { WhyEBCProps } from "@/@types/types";

const WhyEBCampCard: React.FC<
  WhyEBCProps["cards"][0] & { index?: number }
> = ({ title, description, index }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleList = showAll ? description : description.slice(0, 2);

  return (
    <div className="flex gap-3 w-full">
      <div className="text-white text-6xl font-times w-[2ch]">
        {index}.
      </div>

      <div className="text-white flex flex-col gap-3 heading">
        <h3
          className="text-2xl pUltralight"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className="h-px bg-ternary w-full max-w-24" />

        <ul className="list-disc pl-6 space-y-2">
          {visibleList.map((item, idx) => (
            <li key={idx} className="md:text-[1.375rem]">
              {item}{" "}

              {description.length > 2 &&
                idx === visibleList.length - 1 && (
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-white"
                  >
                    {showAll ? " ...Read less" : " ...Read more"}
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyEBCampCard;
