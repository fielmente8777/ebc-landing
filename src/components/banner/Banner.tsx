"use client";
import Image from "next/image";
import { BannerType } from "@/@types/types";
import { LazyLoadedVideo } from "../Video";
import SwiperCarousel from "../SwiperCarousel";
import { Autoplay } from "swiper/modules";

const Banner: React.FC<BannerType> = ({ videoSrc, images }) => {
  return (
    <section className="w-full max_screen ">
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
    </section>
  );
};

export default Banner;
