"use client";
import { WhyEBCProps } from "@/@types/types";
import { Autoplay, Navigation } from "swiper/modules";
import WhyEBCampCard from "../cards/WhyEBCampCard";
import SwiperCarousel from "../SwiperCarousel";

interface WhyEBCSliderProps {
  cards: WhyEBCProps["cards"];
}
const WhyEBCSlider: React.FC<WhyEBCSliderProps> = ({ cards }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={14}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: ".camp-next",
          prevEl: ".camp-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 56,
          },
        }}
        renderSlide={(item, index) => (
          <WhyEBCampCard {...item} index={(index ?? 0) + 1} />
        )}
      />
    </div>
  );
};

export default WhyEBCSlider;
