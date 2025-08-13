import { RoomsTypes } from "@/@types/types";
import SwiperCarousel from "../SwiperCarousel";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import LinkButton from "../buttons/LinkButton";
import { contact } from "../../../constant";

const RoomCard: React.FC<RoomsTypes["cards"][0]> = ({
  roomName,
  description,
  label,
  images,
  labelColor,
  amenities,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg box-shadow">
      <div className="w-full">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          renderSlide={(src) => (
            <div className="relative w-full aspect-[4/2.5]">
              <Image
                src={src}
                alt={roomName}
                className="object-cover"
                fill
                sizes="(min-width: 640px) 400px, 100vw"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`bg-${labelColor}-500 text-white text-xs font-semibold px-2 py-1 rounded`}
                >
                  {label}
                </span>
              </div>
            </div>
          )}
        />
      </div>
      <div className="p-6 flex flex-col justify-evenly gap-4 min-h-[24rem] bg-white">
        <h3 className="text-[2.5rem] text-primary pUltralight">{roomName}</h3>
        <div className="flex flex-wrap gap-4">
          {amenities.map((amenity) => (
            <div key={amenity.title} className="flex items-center gap-2">
              <span aria-label={amenity.title}>{amenity.icon}</span>
              <span className="text-lg text-light ntbook-italic">{amenity.title}</span>
            </div>
          ))}
        </div>
        <p className="text-[1.375rem] text-light">{description}</p>
        <LinkButton
          href={contact.ctaUrl}
          target="_blank"
          label="BOOK YOUR STAY"
          className="text-white bg-primary"
        />
      </div>
    </div>
  );
};

export default RoomCard;
