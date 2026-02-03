"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Section } from "../sectionComponents";
import SwiperCarousel from "../SwiperCarousel";

const OfferSlider: React.FC<{
  offersTitle: string[];
  wrapperClass?: string;
  direction?: "rtl" | "ltr";
  perView?: number;
}> = ({ offersTitle, wrapperClass, direction, perView }) => {
  const data =
    offersTitle.length > 5
      ? offersTitle
      : [...offersTitle, ...offersTitle, ...offersTitle];

  return (
    <Section
      defaultPadding={false}
      className={`bg-primary text-white demo ${wrapperClass}`}
    >
      <SwiperCarousel
        data={data}
        speed={perView ? 9000 : 5000}
        loop={true}
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          768: {
            slidesPerView: perView || 2.5,
          },
        }}
        dir={direction}
        renderSlide={(item, index) => (
          <div key={index} className="py-3 w-full relative">
            <p className=" text-nowrap text-xl text-center max-sm:px-12">
              {item}
            </p>
            <span className="absolute top-1/2 transform -translate-y-1/2 -left-2 z-10">
              <BundiIcon />
            </span>
          </div>
        )}
      />
    </Section>
  );
};

export default OfferSlider;

export const BundiIcon = () => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="7.26605"
      width={10}
      height={10}
      transform="rotate(46.6028 7.26605 0)"
      fill="currentColor"
    />
  </svg>
);
