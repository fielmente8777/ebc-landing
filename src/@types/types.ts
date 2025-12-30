import { JSX } from "react";

export interface BannerType {
  videoSrc?: string;
  images?: string[];
}

export interface AboutUsTypes {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  cards: {
    title: string;
    src: string;
  }[];
  blogs: {
    src: string;
    href: string;
  }[];
}

export interface TestimonialTypes {
  title: string;
  cards: {
    src: string;
    name: string;
    text: string;
  }[];
}

export interface ExperienceTypes {
  title: string;
  description: string;
  cards: {
    src: string[];
  }[];
  link: {
    href: string;
    label: string;
  };
}

export interface RoomsTypes {
  title: string;
  cards: {
    images: string[];
    roomName: string;
    description: string;
    label?: string;
    labelColor?: string;
    amenities: {
      title: string;
      icon: JSX.Element;
    }[];
  }[];
}

export interface AddsTypes {
  title: string;
  listOfData: string[];
  link: {
    href: string;
    label: string;
  };
}

export interface WhyEbcTypes {
  title: string;
  description: string;
  cards: {
    icon: JSX.Element;
    title: string;
  }[];
}

export interface NearbyAttractionsTypes {
  title: string;
  description: string;
  cards: {
    placeName: string;
    placeImage: string;
    placeDetails: string;
    distance: {
      icon: JSX.Element;
      miter: string;
    }[];
  }[];
}
