"use client";
import { ExperienceTypes } from "@/@types/types";
import SwiperCarousel from "../SwiperCarousel";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";

interface ExperiencesSliderProps {
  cards: ExperienceTypes["cards"];
}

const ExperiencesSlider: React.FC<ExperiencesSliderProps> = ({ cards }) => {
  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
      {cards.map((card, index) => (
        <div
          className={`${index === 2 ? "md:col-span-2 w-full md:px-8" : ""}`}
          key={index}
        >
          <SwiperCarousel
            data={card.src}
            slidesPerView={1}
            spaceBetween={0}
            modules={[EffectFade, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            effect={"fade"}
            fadeEffect={{
              crossFade: true,
            }}
            renderSlide={(src) => (
              <div
                className={`w-full relative ${index === 0 ? "aspect-[4/2.2] md:mt-[5.3rem] mb-0" : index === 1 ? "aspect-[4/3]" : "aspect-[4/2]"}`}
              >
                <Image
                  src={src}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Experience ${index}`}
                  className="object-cover"
                />
              </div>
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperiencesSlider;
