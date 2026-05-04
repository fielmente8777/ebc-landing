"use client";
import { ExperienceProps } from "@/@types/types";
import { SwiperCarousel } from "@/components";
import { Autoplay } from "swiper/modules";
import ExperienceNewCard from "../cards/ExperienceNewCard";

const ExperienceNewSlider: React.FC<{ items: ExperienceProps["items"] }> = ({
  items,
}) => {
  return (
    <div className="md:hidden block w-full">
      <SwiperCarousel
        data={items}
        slidesPerView={1}
        spaceBetween={4}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        renderSlide={(item) => <ExperienceNewCard {...item} />}
      />
    </div>
  );
};

export default ExperienceNewSlider;
