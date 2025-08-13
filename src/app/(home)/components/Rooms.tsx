"use client";
import { RoomsTypes } from "@/@types/types";
import {
  Container,
  Section,
  SectionHeadingDesc,
  SwiperCarousel,
} from "@/components";
import { RoomCard } from "@/components/cards";
import { Navigation } from "swiper/modules";

const Rooms: React.FC<RoomsTypes> = ({ title, cards }) => {
  return (
    <Section className="bg-bg1 md:space-y-14 space-y-8">
      <Container>
        <SectionHeadingDesc title={title} textcenter wrapperClassName="max-w-xl mx-auto" />
      </Container>
      <div className="">
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
            renderSlide={(item) => (
              <RoomCard {...item} />
            )}
          />
        </Container>
      </div>
    </Section>
  );
};

export default Rooms;
