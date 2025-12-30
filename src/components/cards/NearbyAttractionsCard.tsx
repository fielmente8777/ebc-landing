import { NearbyAttractionsTypes } from "@/@types/types";
import Image from "next/image";

const NearbyAttractionsCard: React.FC<NearbyAttractionsTypes["cards"][0]> = ({
  placeName,
  placeImage,
  placeDetails,
  distance,
}) => {
  return (
    <div className="flex flex-col gap-5 shadow-xl">
      <div className="relative w-full aspect-[4/3] md:aspect-[4/4]">
        <Image src={placeImage} alt={placeName} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-3 p-4 h-full flex-grow min-h-[18rem]">
        <h3 className="md:text-[2rem] text-xl text-center uppercase pUltralight">
          {placeName}
        </h3>
        <div className="space-y-2">
          {distance.map((item, index) => (
            <p
              key={index}
              className="md:text-lg text-center flex items-center justify-center "
            >
              <span className="mr-2">{item.icon}</span> {item.miter}
            </p>
          ))}
        </div>
        <p className="md:text-lg text-center">{placeDetails}</p>
      </div>
    </div>
  );
};

export default NearbyAttractionsCard;
