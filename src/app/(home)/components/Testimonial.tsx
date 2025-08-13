"use client";
import { TestimonialTypes } from "@/@types/types";
import {
  SectionHeadingDesc,
  SectionWithContainer,
  SwiperCarousel,
} from "@/components";
import { TestimonialCard } from "@/components/cards";
import { Pagination } from "swiper/modules";

const Testimonial: React.FC<TestimonialTypes> = ({ title, cards }) => {
  return (
    <SectionWithContainer sectionClassName="bg-bg1 box-shadow">
      <div className="flex flex-col gap-8 md:gap-14">
        <SectionHeadingDesc
          title={title}
          textcenter
          wrapperClassName="max-w-5xl mx-auto"
        />
        <div className="w-full">
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            spaceBetween={24}
            modules={[Pagination]}
            renderSlide={(card) => <TestimonialCard {...card} />}
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Testimonial;
