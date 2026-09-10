import {
  BirdWatchingIcon,
  BonfireIcon,
  ChefSpecialIcon,
  ForestViewIcon,
  ForestWalksIcon,
  HimalayanViewsIcon,
  LocationIcon,
  PeopleIcon,
  SqFtIcon,
  StargazingIcon,
} from "@/utils/newIcon";
import {
  bookingEngining,
  bookingLink,
  contact,
  imgSrc,
  landingpageImgSrc,
} from "../../../../constant";

export const landingPageData = {
  slidingTitle: [
    "Just Launched: Andrew's Villa & Twin Luxury Cottages. “Our most exclusive stays yet”",
  ],
  bannerData: {
    title: "Wake up in the Himalayas.",
    subtitle: "Sleep under the Stars.",
    description: [
      "An intimate luxury escape at 2,000m, where the forest meets the stars and every night ends by a private bonfire.",
    ],
    video: {
      src: "https://eazotel-client-webp-images.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/0408-2.mp4",
      poster: "/home/video-poster.png",
    },
    actions: { label: "EXPLORE ROOMS", href: "#rooms" },
    location: {
      label: "Hathipaon Road · Mussoorie · 2,000m",
      href: contact.mapUrl,
      icon: <LocationIcon />,
    },
  },

  ratingData: {
    items: [
      "4.9/5★ TripAdvisor",
      "9.2/10★ Booking.com",
      "4.5/5★ Yatra",
      "4.6/5★ MakeMyTrip",
      "8.8/10★ Expedia",
      "4.5/5★ Cleartrip",
      "9.1/10★ Agoda",
    ],
  },

  storyData: {
    title: "OUR STORY",
    subtitle: "A Resort Born from the <i>Mountain!</i>",
    description: [
      "EBC Mussoorie was born out of a singular desire: to create a space where the Himalayan forest does the healing, and the luxury takes care of the rest. Nestled on Hathipaon Road at 2,000 metres, we sit within a pristine deodar forest where leopards tread at dawn and the night sky blazes with a thousand stars. We opened our doors in 2019 with a simple conviction, that the finest luxury is not found in city towers but in the hush of a forest morning, the warmth of a bonfire under open skies, and a bed that faces the mountains. Today, with seven distinct accommodations ranging from the tented Camper to the exclusive Andrew's Villa, EBC Mussoorie has become Mussoorie's most celebrated glamping destination.",
    ],
    images: [
      "/landing/story.png",
      "/landing/story-2.png",
      "/landing/story-3.png",
      "/landing/story-4.png",
      "/landing/story-5.png",
      "/landing/story-6.png",
      "/landing/story-7.png",
    ],
    link: {
      label: "BOOK NOW",
      href: bookingEngining,
    },
  },

  highlightData: {
    items: [
      "Private Bonfire Every Evening",
      "500+ Happy Stays",
      "2,000m Altitude",
      "7 Unique Accommodations",
      "Hathipaon Road, Mussoorie",
    ],
  },

  accommodationsData: {
    title: "Premium <i>Accommodations!</i>",
    description: [
      "Seven unique stays, each one a different way to experience the Himalayas!",
    ],
    items: [
      {
        category: "Flagship Villa",
        title: "Andrew's Villa",
        details: [
          { text: "Forest View", icon: <ForestViewIcon /> },
          { text: "1300 sq. ft", icon: <SqFtIcon /> },
          { text: "1-4 people", icon: <PeopleIcon /> },
        ],
        description: [
          "Mussoorie's most exclusive private villa, a sanctuary of uncompromised luxury in the Himalayan forest.",
        ],
        price: "From ₹20,000 / night",
        images: [
          "/andrew-villa/Suite-Bedroom-2.png",
          "/andrew-villa/Suite-Bedroom-3.png",
          "/andrew-villa/Suite-Bedroom-4.png",
          "/andrew-villa/Suite-Bedroom-5.png",
          "/andrew-villa/Suite-Bedroom-6.png",
          "/andrew-villa/Suite-Bedroom-7.png",
        ],
        link: { label: "BOOK NOW", href: bookingEngining },
      },
      {
        category: "Luxury Cottages",
        title: "Twin Luxury Cottages",
        details: [
          { text: "Forest View", icon: <ForestViewIcon /> },
          { text: "1250 sq. ft", icon: <SqFtIcon /> },
          { text: "2-4 people", icon: <PeopleIcon /> },
        ],
        description: [
          "Dual luxury cottages with panoramic Himalayan views, perfect for families or two couples together.",
        ],
        price: "From ₹20,000 / night",
        images: [
          "/Twin-Luxury-Cottages/Suite-Bedroom-2.png",
          "/Twin-Luxury-Cottages/Suite-Bedroom-3.png",
          "/Twin-Luxury-Cottages/Suite-Bedroom-4.png",
          "/Twin-Luxury-Cottages/Suite-Bedroom-5.png",
          "/Twin-Luxury-Cottages/Suite-Bedroom-6.png",
          "/Twin-Luxury-Cottages/Suite-Bedroom-7.png",
        ],
        link: { label: "BOOK NOW", href: bookingEngining },
      },
      {
        category: "Signature Cottage",
        title: "The Zenith",
        details: [
          { text: "Forest View", icon: <ForestViewIcon /> },
          { text: "510 sq. ft", icon: <SqFtIcon /> },
          { text: "2+2 people", icon: <PeopleIcon /> },
        ],
        description: [
          "The signature luxury cottage in the forest EBC's original icon of Himalayan glamping.",
        ],
        price: "From ₹18,000 / night",
        images: [
          "/zenith/DSC04996-HDR-2.jpg",
          "/zenith/DSC04953-HDR-2.jpg",
          "/zenith/DJI_0763.jpg",
          "/zenith/DSC05021.jpg",
          "/zenith/DSC05055.jpg",
        ],
        link: { label: "BOOK NOW", href: bookingEngining },
      },
      {
        category: "SUITE",
        title: "Surveyor Suite",
        details: [
          { text: "Forest View", icon: <ForestViewIcon /> },
          { text: "600 sq. ft", icon: <SqFtIcon /> },
          { text: "1-4 people", icon: <PeopleIcon /> },
        ],
        description: [
          "Spacious suite with private sit-out — generous space for those who want room to breathe.",
        ],
        price: "From ₹16,000 / night",
        images: [
          "/surveyor/1.jpg",
          "/surveyor/2.jpg",
          "/surveyor/3.jpg",
          "/surveyor/4.jpg",
          "/surveyor/5.jpg",
        ],
        link: { label: "BOOK NOW", href: bookingEngining },
      },
      {
        category: "Premium Glamping",
        title: "The Surveyor",
        details: [
          { text: "Forest View", icon: <ForestViewIcon /> },
          { text: "450 sq. ft", icon: <SqFtIcon /> },
          { text: "1-3 people", icon: <PeopleIcon /> },
        ],
        description: [
          "Premium glamping with forest canopy views, a step into the wild without leaving luxury behind.",
        ],
        price: "From ₹14,000 / night",
        images: [
          "/the_surveyor/1.jpeg",
          "/the_surveyor/2.jpeg",
          "/the_surveyor/3.jpg",
          // "/the_surveyor/img3.webp",
          // "/the_surveyor/img4.webp",
        ],
        link: { label: "BOOK NOW", href: bookingEngining },
      },
      {
        category: "Luxury Tent",
        title: "The Glamper",
        details: [
          { text: "Forest View", icon: <ForestViewIcon /> },
          { text: "375 sq. ft", icon: <SqFtIcon /> },
          { text: "1-3 people", icon: <PeopleIcon /> },
        ],
        description: [
          "Luxury tented glamping experience, the romance of a tent with every modern comfort within.",
        ],
        price: "From ₹12,000 / night",
        images: [
          "/room/glamper1.jpg",
          "/room/glamper2.jpg",
          "/room/glamper3.jpg",
          // "/room/glamper4.webp",
          // "/room/glamper5.webp",
        ],
        link: { label: "BOOK NOW", href: bookingEngining },
      },
      {
        category: "Forest Glamping",
        title: "The Camper",
        details: [
          { text: "Forest View", icon: <ForestViewIcon /> },
          { text: "280 sq. ft", icon: <SqFtIcon /> },
          { text: "1-3 people", icon: <PeopleIcon /> },
        ],
        description: [
          "The perfect forest glamping introduction, pure, elemental, and utterly memorable.",
        ],
        price: "From ₹10,000 / night",
        images: [
           "/room/camper1.jpg",
          "/room/camper2.jpg",
           "/room/camper3.jpg",
          //  "/room/camper4.webp",
          //  "/room/camper5.webp",
        ],
        link: { label: "BOOK NOW", href: bookingEngining },
      },
    ],

    video: [
      {
        src: "/videobnr.webp",
        videoSrc:
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/landingpage/EBC+24+.mp4",
      },
      {
        src: "/videobnr.webp",
        videoSrc:
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/landingpage/EBC+25.mp4",
      },
    ],
  },

  journeyData: {
    title: "Curated for Every <i>Journey!</i>",
    description: [
      "Whether you come as lovers, a family, or a corporate team, EBC Mussoorie is ready for you.",
    ],
    items: [
      {
        title: "Family <i>Stays</i>",
        description: [
          "Safe, spacious and full of wonder, the family holiday that leaves screens behind.",
        ],
        image: "/landing/family.png",
      },
      {
        title: "Couples & <i>Honeymoon</i>",
        description: [
          "Private bonfires, starlit skies and Himalayan mornings made for two.",
        ],
        image: "/landing/couples.png",
      },
      {
        title: "Corporate & <i>MICE</i>",
        description: [
          "Safe, spacious and full of wonder, the family holiday that leaves screens behind.",
        ],
        image: "/landing/corporate.png",
      },
    ],
    link: {
      label: "BOOK NOW",
      href: bookingLink,
    },
  },

  experienceData: {
    title: "Experiences at EBC <i>Mussoorie!</i>",
    description: ["The memories that guests carry home long after checkout"],
    image: "/landing/experience.png",
    items: [
      {
        title: "Bonfire Evenings",
        description:
          "Every night ends around a private bonfire under an open Himalayan sky. This is the signature EBC experience.",
        icon: <BonfireIcon />,
      },
      {
        title: "Stargazing",
        description:
          "At 2,160m with minimal light pollution, the night sky at EBC is extraordinary. Spot constellations, satellites and shooting stars.",
        icon: <StargazingIcon />,
      },
      {
        title: "Forest Walks",
        description:
          "Guided morning walks through the deodar forest. Spot Himalayan birds, wildflowers and  if lucky, pugmarks in the mud.",
        icon: <ForestWalksIcon />,
      },
      {
        title: "Himalayan Views",
        description:
          "Wake up to panoramic mountain vistas. On clear mornings, Himalayan peaks emerge through the mist in shades of gold and rose.",
        icon: <HimalayanViewsIcon />,
      },
      {
        title: "Bird Watching",
        description:
          "Observe diverse bird species in their natural habitat for a peaceful and immersive nature experience.",
        icon: <BirdWatchingIcon />,
      },
      {
        title: "Chef Special Menu",
        description:
          "Signature dishes crafted by our chef to deliver a refined and unforgettable dining experience.",
        icon: <ChefSpecialIcon />,
      },
    ],
    link: {
      label: "BOOK NOW",
      href: bookingLink,
    },
  },

  pressData: {
    title: "Featured Press <i>Releases!</i>",
    links: [
      {
        backImage: "/images/PressReleases-3.png",
        src: "/images/logo-ad-int.svg",
        name: "AD",
        link: "https://www.architecturaldigest.in/story/weekend-getaways-from-delhi-that-are-perfect-for-last-minute-planning/",
      },
      {
        backImage: "/images/PressReleases-1.png",
        src: "/images/tripoto2.png",
        name: "Tripoto",
        link: "https://www.tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8",
      },
      {
        backImage: "/images/PressReleases-2.png",
        src: "/images/hotelier_inda.png",
        name: "Hotelier India",
        link: "https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie",
      },

      {
        backImage: "/images/LLB.png",
        src: "/images/lbb.png",
        name: "LBB",
        link: "https://lbb.in/delhi/away-from-the-city-around-all-things-pretty-ebc-mussoorie/",
      },
      {
        backImage: "/images/prSO.png",
        src: "/images/so.png",
        name: "So",
        link: "https://so.city/delhi/article/this-dreamy-resort-is-a-modern-campers-playground-with-luxury-tents-a-cafe-on-the-hill",
      },
      {
        backImage: "/images/ISSU.png",
        src: "/images/issuu.png",
        name: "Issuu",
        link: "https://issuu.com/ebcmussoorie/docs/camp_stay_at_ebc_mussoorie_a_himalayan_foothills_",
      },

      {
        backImage: "/images/PressReleases3.webp",
        src: "/images/Group_media.png",
        name: "curlytales",
        link: "https://curlytales.com/dine-under-the-sky-and-even-stay-inside-dreamy-glamps-at-mussoories-everest-base-camp-resort/",
      },
      {
        backImage: "/banner/1.png",
        src: "/images/wanderalone.png",
        name: "WanderAlone",
        link: "https://wanderalone.co.in/did-you-know-that-just-7-hours-from-delhi-theres-an-everest-base-camp-no-were-not-kidding/",
      },
    ],
    link: {
      label: "BOOK NOW",
      href: bookingLink,
    },
  },

  faqData: {
    title: "Frequently Asked <i>Questions!</i>",
    faq: [
      {
        q: "What is included in the room price?",
        a: "Breakfast for two, evening bonfire access, a guided morning nature walk, 24hr concierge support, complimentary Wi-Fi and free parking are included with every room.",
      },
      {
        q: "How far is EBC Mussoorie from Delhi?",
        a: "EBC Mussoorie is approximately 280 km from Delhi — around 5.5 to 6.5 hours by road depending on traffic. The NH58 via Roorkee and NH334 via Haridwar are both good routes.",
      },
      {
        q: "How far from Dehradun?",
        a: "35 km from Dehradun, approximately 1–1.5 hours by road. Dehradun is the nearest major city and railway hub.",
      },
      {
        q: "What is the nearest railway station?",
        a: "Dehradun Railway Station, 35 km away. Trains from Delhi include the Shatabdi Express (5.5 hours). We can arrange a transfer from the station — please ask at time of booking.",
      },
      {
        q: "What is the nearest airport?",
        a: "Jolly Grant Airport, Dehradun — approximately 55 km (1.5 hours). Daily flights from Delhi, Mumbai and Bangalore. Transfers can be arranged.",
      },
    ],
    link: {
      label: "BOOK NOW",
      href: bookingLink,
    },
  },

  ctaData: {
    title: "Limited Availability",
    subtitle: "Ready to <i>Escape?</i>",
    description: [
      "Availability is limited. Book your stay directly via WhatsApp for the fastest response and best rates.",
    ],
    actions: [
      { label: "Check Availability via WhatsApp", href: contact.WhatsappCta },
      {
        label: "BOOK NOW",
        href: bookingEngining,
      },
    ],
  },
};
