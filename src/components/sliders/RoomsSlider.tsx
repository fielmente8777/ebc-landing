"use client";
import { RoomsTypes } from "@/@types/types";
import { Container } from "../sectionComponents";
import SwiperCarousel from "../SwiperCarousel";
import { Navigation } from "swiper/modules";
import { RoomCard } from "../cards";

interface RoomsSliderProps {
  cards: RoomsTypes["cards"];
}
const RoomsSlider: React.FC<RoomsSliderProps> = ({ cards }) => {
  return (
    <div className="w-full flex items-center justify-around">
      <button
        className="button-prev w-10 aspect-square rounded-full bg-white box-shadow md:flex hidden items-center justify-center ml-8"
        aria-label="Previous"
      >
        {/* <PreviousBtn /> */}
      </button>
      <Container>
        <SwiperCarousel
          data={cards}
          slidesPerView={1}
          spaceBetween={24}
          className="!px-1 !py-1"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          renderSlide={(item) => <RoomCard {...item} />}
        />
        <div className="md:hidden mt-6 flex items-center justify-center gap-6">
          <button
            className="button-prev w-10 aspect-square rounded-full bg-white box-shadow flex items-center justify-center"
            aria-label="Previous"
          >
            {/* <PreviousBtn /> */}
          </button>
          <button
            className="button-next w-10 aspect-square rounded-full bg-white box-shadow flex items-center justify-center"
            aria-label="Next"
          >
            {/* <NextBtn /> */}
          </button>
        </div>
      </Container>
      <button
        className="button-next w-10 aspect-square rounded-full bg-white box-shadow md:flex hidden items-center justify-center mr-8"
        aria-label="Next"
      >
        {/* <NextBtn /> */}
      </button>
    </div>
  );
};

export default RoomsSlider;
