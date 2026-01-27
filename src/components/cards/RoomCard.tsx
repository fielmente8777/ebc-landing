import { RoomsTypes } from "@/@types/types";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { contact } from "../../../constant";
import LinkButton from "../buttons/LinkButton";
import SwiperCarousel from "../SwiperCarousel";

const RoomCard: React.FC<RoomsTypes["cards"][0]> = ({
  roomName,
  description,
  label,
  images,
  labelColor,
  amenities,
  link,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg box-shadow">
      <div className="w-full bullet">
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
                  className={` text-white text-lg shadow-inner font-semibold px-4 h-8 ntbold flex items-center justify-center rounded-2xl`}
                  style={{ backgroundColor: labelColor }}
                >
                  {label}
                </span>
              </div>
            </div>
          )}
        />
      </div>
      <div className="p-6 flex flex-col justify-evenly gap-4 min-h-[24rem] bg-white">
        <h3 className="md:text-[2.5rem] text-2xl text-primary pUltralight">{roomName}</h3>
        <div className="flex flex-wrap gap-4">
          {amenities.map((amenity) => (
            <div key={amenity.title} className="flex items-center gap-2">
              <span aria-label={amenity.title}>{amenity.icon}</span>
              <span className="text-lg text-light ntbook">{amenity.title}</span>
            </div>
          ))}
        </div>
        <p className="text-[1.375rem] text-light">{description}</p>
        {link && (
          <LinkButton
            href={contact.ctaUrl}
            target="_blank"
            label={`<span class="pmedium">BOOK YOUR <span class="italic">STAY</span></span>`}
            className="text-white bg-primary !py-4"
          />
        )}
      </div>
    </div>
  );
};

export default RoomCard;
