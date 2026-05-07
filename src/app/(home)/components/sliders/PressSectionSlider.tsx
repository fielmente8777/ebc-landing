"use client";

import { PressReleasesProps } from "@/@types/types";
import { SwiperCarousel } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";

const PressSectionSlider: React.FC<{ links: PressReleasesProps["links"] }> = ({
  links,
}) => {
  return (
    <div className="w-full mt-8 relative">
      <SwiperCarousel
        data={links}
        slidesPerView={1}
        spaceBetween={12}
        modules={[Navigation]}
        navigation={{
          nextEl: ".press-next",
          prevEl: ".press-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        speed={900}
        renderSlide={(card) => <PressSectionCard {...card} />}
      />
      <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 xl:w-[104%] w-full  flex items-center justify-between">
        <button
          className={`w-11 aspect-square rounded-full disabled:opacity-75 backdrop-blur-md bg-white flex items-center justify-center box-shadow rotate-180 press-prev`}
        >
          <ButtonNext />
        </button>
        <button
          className={`w-11 aspect-square rounded-full disabled:opacity-75 backdrop-blur-md bg-white flex items-center justify-center box-shadow press-next`}
        >
          <ButtonNext />
        </button>
      </div>
    </div>
  );
};

export default PressSectionSlider;

export const PressSectionCard: React.FC<PressReleasesProps["links"][0]> = ({
  backImage,
  src,
  name,
  link,
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full block aspect-4/3 rounded-2xl overflow-hidden"
    >
      <Image src={backImage} alt={name} fill className="object-cover" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative aspect-[4/1.5] w-45 bg-white/60 flex items-center justify-center rounded-2xl overflow-hidden">
          <Image src={src} alt={name} fill className="object-contain p-2" />
        </div>
      </div>
    </Link>
  );
};

export const ButtonNext = () => (
  <svg
    width={8}
    height={16}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.02538 16L0 14.8239L5.94925 8L0 1.17612L1.02538 0L8 8L1.02538 16Z"
      fill="#29422C"
    />
  </svg>
);
