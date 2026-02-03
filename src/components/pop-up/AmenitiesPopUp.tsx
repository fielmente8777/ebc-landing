"use client";

import { useDataContext } from "@/contextApi/DataContext";
import { AiOutlineClose } from "react-icons/ai";

const AmenitiesPopUp = () => {
  const {
    isOpenAmenitiesPopup,
    setIsOpenAmenitiesPopup,
    roomName,
    roomAmenities,
    roomPopUpAmenities,
  } = useDataContext();
  return (
    <div
      className={`fixed px-4 inset-0 flex items-center justify-center bg-secondary/30 backdrop-blur-sm z-50 transition-all ease-in-out duration-300  ${isOpenAmenitiesPopup ? "visible opacity-100 scale-100" : "invisible scale-0 opacity-0"}`}
      onClick={(e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
          setIsOpenAmenitiesPopup(false);
        }
      }}
    >
      <div className="max-w-xl shadow-2xl rounded-lg w-full relative bg-[#FCFCF9] p-6 max-md:pt-10 max-md:mx-4">
        <button
          onClick={() => setIsOpenAmenitiesPopup(false)}
          className="absolute  bg-primary top-2 right-2 z-20 cursor-pointer text-white p-2 rounded-full aspect-square"
        >
          <AiOutlineClose size={15} />
        </button>
        <div className="space-y-4 heading">
          <h2 className="md:text-3xl text-2xl pUltralight tracking-wider">
            {roomName} <span>Amenities</span>
          </h2>
          {/* <p className="text-primary text-[1.375rem] pUltralight">Amenities</p> */}
          {roomPopUpAmenities.map((amenity, index) => (
            <div className="space-y-2 heading" key={index}>
              {amenity.title && (
                <h3
                  key={index}
                  className="md:text-2xl text-xl  pUltralight tracking-wider"
                  dangerouslySetInnerHTML={{ __html: amenity.title }}
                />
              )}
              <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2.5 pl-4 list-disc">
                {amenity.amenities.map((item, index) => (
                  <li key={index} className="text-sm ">
                    {item.amenityName}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesPopUp;
