"use client";
import Image from "next/image";
import { BannerType } from "@/@types/types";
import { LazyLoadedVideo } from "../Video";
import SwiperCarousel from "../SwiperCarousel";
import { Autoplay } from "swiper/modules";

const Banner: React.FC<BannerType> = ({ videoSrc, images, title }) => {
  return (
    <section className="w-full max_screen relative heading">
      {videoSrc ? (
        <div className="relative md:aspect-[16/9] aspect-[4/4.5] w-full after:absolute after:inset-0 after:bg-black/10">
          <LazyLoadedVideo
            src={videoSrc}
            muted={true}
            autoPlay
            loop
            controls={false}
          />
        </div>
      ) : images?.length && images.length <= 1 ? (
        <div className="relative md:aspect-[16/9] aspect-[4/4.5] w-full after:absolute after:inset-0 after:bg-black/10">
          <Image
            src={images[0]}
            alt="banner"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            loading="eager"
          />
        </div>
      ) : (
        <div className="w-full">
          <SwiperCarousel
            data={images || []}
            slidesPerView={1}
            spaceBetween={0}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            loop={true}
            renderSlide={(src, index) => (
              <div className="relative md:aspect-[16/9] aspect-[4/4.5] w-full after:absolute after:inset-0 after:bg-black/10">
                <Image
                  src={src}
                  alt="banner"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0 ? true : false}
                  loading="eager"
                />
              </div>
            )}
          />
        </div>
      )}
      {title && (
        <h2
          className="text-white md:text-7xl text-4xl pUltralight absolute bottom-4 md:left-16 max-w-xl max-md:text-center z-20"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10" />
    </section>
  );
};

export default Banner;
