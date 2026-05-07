"use client";
import { OurStoryProps } from "@/@types/types";
import { SwiperCarousel } from "@/components";
import Image from "next/image";
import { Navigation } from "swiper/modules";

const OurStorySlider: React.FC<{ images: OurStoryProps["images"] }> = ({
  images,
}) => {
  return (
    <div className="w-full room-card">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={true}
        renderSlide={(image) => (
          <div className="w-full relative aspect-4/3 lg:aspect-[4/2.75]">
            <Image
              src={image}
              alt="our-story"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}
      />
    </div>
  );
};

export default OurStorySlider;
