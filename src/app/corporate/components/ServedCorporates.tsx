"use client";
import {
  SectionWithContainer,
  SectionHeadingDesc,
  SwiperCarousel,
} from "@/components";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";

interface ServedCorporatesProps {
  title: string;
  images: string[];
}

const ServedCorporates: React.FC<ServedCorporatesProps> = ({
  title,
  images,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F1EECB]">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="flex flex-col gap-4">
          <SectionHeadingDesc title={title} />
          <div className="md:w-61 w-38 bg-[#DFB65C] h-[.5PX] md:ml-auto" />
        </div>
        <div className="md:grid hidden md:grid-cols-4 grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-full aspect-[4/1.5]">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="md:hidden block demo">
          <SwiperCarousel
            data={images}
            speed={5000}
            loop={true}
            modules={[Autoplay, FreeMode]}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView={1.5}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 2.5,
              },
            }}
            renderSlide={(image) => (
              <div className="relative w-full aspect-[4/1]">
                <Image
                  src={image}
                  alt={`Image`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ServedCorporates;
