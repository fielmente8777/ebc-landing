"use client"
import { AboutUsTypes } from "@/@types/types";
import Image from "next/image";
import { Container } from "../sectionComponents";
import SwiperCarousel from "../SwiperCarousel";
import { Autoplay, FreeMode } from "swiper/modules";

interface PartnerProps {
  partners: AboutUsTypes["cards"];
}

const Partners: React.FC<PartnerProps> = ({ partners }) => {
  return (
    <div className="mt-10 space-y-4 bg-white">
      <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#434B3E,_#FFFFFF)] h-[0.8px] w-full max-w-[90rem] mx-auto" />
      <Container>
        <div className="demo">
          <SwiperCarousel
            data={partners || []}
            speed={5000}
            loop={true}
            modules={[Autoplay, FreeMode]}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView={2}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 6,
                spaceBetween: 36,
              },
            }}
            renderSlide={(item, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <h3 className="text-[2.5rem] text-primary pUltralight">{item?.title}</h3>
                <div className="relative w-full aspect-[4/1.2]">
                  <Image
                    src={item?.src}
                    alt={item?.title}
                    className="object-contain p-2 rounded-lg"
                    sizes="100%"
                    fill
                  />
                </div>
              </div>
            )}
          />
        </div>
      </Container>

      {/* lower line gradient */}
      <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#434B3E,_#FFFFFF)] h-[0.8px] w-full max-w-[90rem] mx-auto" />
    </div>
  );
};

export default Partners;
