"use client";

import { useState } from "react";
import { PackageInclusionsProps } from "@/@types/types";
import Image from "next/image";
import SwiperCarousel from "../SwiperCarousel";
import { Autoplay } from "swiper/modules";

const PackageInclusionsCard: React.FC<
  PackageInclusionsProps["sections"][0] & { className?: string }
> = ({ title, list, src, className, images }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleList = showAll ? list : list.slice(0, 4);

  return (
    <div className={`rounded-lg overflow-hidden flex flex-col ${className}`}>
      <div className="flex-1 max-md:p-6 md:px-16 md:py-10 bg-primary text-white heading">
        <h3
          className="text-xl pUltralight mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="h-px bg-secondary max-w-24 w-full mb-4" />

        <ul className="space-y-4">
          {visibleList.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-3 mt-px">✓</span>
              <span className="flex items-center flex-wrap gap-3">
                {item}
                {list.length > 4 && index === visibleList.length - 1 && (
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-white"
                  >
                    {showAll ? "...Read less" : "...Read more"}
                  </button>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <SwiperCarousel
          data={images || []}
          slidesPerView={1}
          spaceBetween={24}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          renderSlide={(src) => (
            <div className="relative w-full aspect-[4/3]">
              <Image src={src} alt={title} fill className="object-cover" />
            </div>
          )}
        />
      </div>

      {/* <div className="w-full relative aspect-[4/3]">
        <Image src={src} alt={title} fill className="object-cover" />
      </div> */}
    </div>
  );
};

export default PackageInclusionsCard;
