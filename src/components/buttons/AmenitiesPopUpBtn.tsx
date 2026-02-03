"use client";

import { useDataContext } from "@/contextApi/DataContext";
interface AmenitiesPopUpBtnProps {
  label: string;
  className?: string;
  [key: string]: unknown;
}
const AmenitiesPopUpBtn: React.FC<AmenitiesPopUpBtnProps> = ({
  label,
  className,
  ...props
}) => {
  const {
    setIsOpenAmenitiesPopup,
    // setRoomName,
    // setRoomAmenities,
    // setRoomPopUpAmenities,
  } = useDataContext();
  console.log(props);
  const handleClick = ({}) => {
    setIsOpenAmenitiesPopup(true);
    // setRoomName(props.roomName);
    // setRoomAmenities(props.roomAmenities);
    // setRoomPopUpAmenities(props.roomPopUpAmenities);
  };
  return (
    <button
      onClick={handleClick}
      {...props}
      className={`${className}`}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  );
};

export default AmenitiesPopUpBtn;
