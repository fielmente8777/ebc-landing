"use client"
import { WhyEbcTypes } from "@/@types/types";
import SwiperCarousel from "../SwiperCarousel";
import { Autoplay } from "swiper/modules";
import { WhyEBCCard } from "../cards";

interface WhyEBCCardsSliderProps {
  cards: WhyEbcTypes["cards"];
}

const WhyEBCCardsSlider: React.FC<WhyEBCCardsSliderProps> = ({ cards }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        renderSlide={(item) => <WhyEBCCard {...item} />}
      />
    </div>
  );
};

export default WhyEBCCardsSlider;
