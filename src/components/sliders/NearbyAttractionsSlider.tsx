"use client";
import { NearbyAttractionsTypes } from "@/@types/types";
import SwiperCarousel from "../SwiperCarousel";
import NearbyAttractionsCard from "../cards/NearbyAttractionsCard";
import { Navigation } from "swiper/modules";

interface NearbyAttractionsSliderProps {
  cards: NearbyAttractionsTypes["cards"];
}
const NearbyAttractionsSlider: React.FC<NearbyAttractionsSliderProps> = ({
  cards,
}) => {
  return (
    <div className="relative">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        renderSlide={(card) => <NearbyAttractionsCard {...card} />}
      />
      <button className="button-next absolute box-shadow -right-4 top-1/2 z-50 w-10 aspect-square flex items-center justify-center bg-white rounded-full">
        <BtnNext />
      </button>
      <button className="button-prev absolute box-shadow -left-4 top-1/2 z-50 w-10 aspect-square flex items-center justify-center bg-white rounded-full">
        <BtnPrev />
      </button>
    </div>
  );
};

export default NearbyAttractionsSlider;
export const BtnPrev = () => (
  <svg
    width={8}
    height={16}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.97462 16L8 14.8239L2.05075 8L8 1.17612L6.97462 0L0 8L6.97462 16Z"
      fill="#434B3E"
    />
  </svg>
);

export const BtnNext = () => (
  <svg
    width={8}
    height={16}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.02538 16L0 14.8239L5.94925 8L0 1.17612L1.02538 0L8 8L1.02538 16Z"
      fill="#434B3E"
    />
  </svg>
);
