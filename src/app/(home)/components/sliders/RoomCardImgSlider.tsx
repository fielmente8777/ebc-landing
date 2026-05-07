"use client";
import { SwiperCarousel } from "@/components";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

const RoomCardImgSlider: React.FC<{
  images: string[];
  title: string;
  category?: string;
}> = ({ images, title, category }) => {
  const btnName = title.split(" ")[0].replace(/\W/g, "").toLocaleLowerCase();

  return (
    <div className="w-full relative">
      <SwiperCarousel
        data={images || []}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation, Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".room-next-" + btnName,
          prevEl: ".room-prev-" + btnName,
        }}
        renderSlide={(image) => (
          <div className="w-full relative aspect-4/3">
            <Image
              src={image}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}
      />
      <div className="absolute top-4 left-4 z-10 bg-new-secondary px-2.75 py-1.5 uppercase text-xs text-new-dark rounded-sm">
        <p>{category}</p>
      </div>
      <div className="absolute top-1/2 inset-x-0 -translate-y-1/2 flex justify-between px-1.5 z-10">
        {/* btn prev */}
        <button className={`room-prev-${btnName} rotate-180`}>
          <BtnNext />
        </button>
        {/* btn next */}
        <button className={`room-next-${btnName}`}>
          <BtnNext />
        </button>
      </div>
    </div>
  );
};

export default RoomCardImgSlider;

export const BtnNext = () => (
  <svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 17.5C0 20.9612 1.02636 24.3446 2.94928 27.2225C4.87221 30.1003 7.60533 32.3434 10.803 33.6679C14.0007 34.9924 17.5194 35.339 20.9141 34.6637C24.3087 33.9885 27.4269 32.3218 29.8744 29.8744C32.3218 27.4269 33.9885 24.3087 34.6637 20.9141C35.339 17.5194 34.9924 14.0007 33.6679 10.803C32.3434 7.60533 30.1003 4.87221 27.2225 2.94928C24.3446 1.02636 20.9612 0 17.5 0C12.8587 0 8.40752 1.84374 5.12563 5.12563C1.84374 8.40752 0 12.8587 0 17.5ZM7.5 16.25H22.6875L15.7125 9.24125L17.5 7.5L27.5 17.5L17.5 27.5L15.7125 25.7162L22.6875 18.75H7.5V16.25Z"
      fill="white"
    />
  </svg>
);
