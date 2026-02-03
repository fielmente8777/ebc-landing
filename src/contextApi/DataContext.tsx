"use client";

import { RoomsTypes } from "@/@types/types";
import React, { createContext, ReactNode, useState } from "react";

export const DataContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenNav?: boolean;
  setIsOpenNav?: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenAmenitiesPopup: boolean;
  setIsOpenAmenitiesPopup: React.Dispatch<React.SetStateAction<boolean>>;
  roomName: string;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  roomAmenities: RoomsTypes["cards"][0]["amenities"];
  setRoomAmenities: React.Dispatch<
    React.SetStateAction<RoomsTypes["cards"][0]["amenities"]>
  >;
  roomPopUpAmenities: RoomsTypes["cards"][0]["popUpAmenities"];
  setRoomPopUpAmenities: React.Dispatch<
    React.SetStateAction<RoomsTypes["cards"][0]["popUpAmenities"]>
  >;
}>({
  isOpen: false,
  setIsOpen: () => {},
  isOpenNav: false,
  setIsOpenNav: () => {},
  isOpenAmenitiesPopup: false,
  setIsOpenAmenitiesPopup: () => {},
  roomName: "",
  setRoomName: () => {},
  roomAmenities: [],
  setRoomAmenities: () => {},
  roomPopUpAmenities: [],
  setRoomPopUpAmenities: () => {},
});

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenAmenitiesPopup, setIsOpenAmenitiesPopup] = useState(false);
  const [roomName, setRoomName] = useState<string>("");
  const [roomAmenities, setRoomAmenities] = useState<
    RoomsTypes["cards"][0]["amenities"]
  >([]);
  const [roomPopUpAmenities, setRoomPopUpAmenities] = useState<
    RoomsTypes["cards"][0]["popUpAmenities"]
  >([]);

  return (
    <DataContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isOpenNav,
        setIsOpenNav,
        isOpenAmenitiesPopup,
        setIsOpenAmenitiesPopup,
        roomName,
        setRoomName,
        roomAmenities,
        setRoomAmenities,
        roomPopUpAmenities,
        setRoomPopUpAmenities,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

export function useDataContext() {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
}
