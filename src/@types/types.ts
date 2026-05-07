import { JSX } from "react";

export interface BannerType {
  videoSrc?: string;
  video?: {
    src: string;
    poster: string;
  };
  images?: string[];
  title?: string;
  description?: string;
  link?: {
    href: string;
    label: string;
  };
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
    link?: boolean;
    amenities: {
      title: string;
      icon: JSX.Element;
    }[];
    popUpAmenities: {
      title?: string;
      amenities: {
        amenityName: string;
        icon?: JSX.Element;
      }[];
    }[];
  }[];
  link?: {
    href: string;
    label: string;
  };
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

export interface FaqTypes {
  title: string;
  list: {
    question: string;
    answer: string;
  }[];
}

export interface LocationDetailsTypes {
  title: string;
  stats: {
    label: string;
    value: string;
    icon: JSX.Element;
  }[];
  link: {
    label: string;
    href: string;
  };
}

export interface PackageInclusionsProps {
  title: string;
  sections: {
    title: string;
    list: string[];
    src: string;
    images: string[];
  }[];
  link: {
    label: string;
    href: string;
  };
}

export interface WhyEBCProps {
  title: string;
  cards: {
    title: string;
    description: string[];
  }[];
  note: string;
  link: {
    label: string;
    href: string;
  };
}

export interface OurStoryProps {
  title: string;
  subtitle: string;
  description: string[];
  images: string[];
  link: {
    label: string;
    href: string;
  };
}

export interface AccommodationsTypes {
  title: string;
  description: string[];
  video: {
    src: string;
    videoSrc: string;
  }[];
  items: {
    category: string;
    title: string;
    details: {
      text: string;
      icon: JSX.Element;
    }[];
    description: string[];
    price: string;
    images: string[];
    link: {
      label: string;
      href: string;
    };
  }[];
}

export interface JourneyProps {
  title: string;
  description: string[];
  items: {
    title: string;
    description: string[];
    image: string;
  }[];
  link: {
    label: string;
    href: string;
  };
}

export interface ExperienceProps {
  title: string;
  description: string[];
  image: string;
  items: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
  link: {
    label: string;
    href: string;
  };
}

export interface PressReleasesProps {
  title: string;
  links: {
    backImage: string;
    src: string;
    name: string;
    link: string;
  }[];
  link: {
    label: string;
    href: string;
  };
}
