import {
  CuratedLuxury,
  LocationNature,
  SustainabilityCentric,
} from "@/utils/icons";
import { imgSrc, landingpageImgSrc } from "../../../constant";


export const landingPageData = {
  bannerData: {
    videoSrc: "",
    src: "",
  },
  aboutUsData: {
    title: "Luxury Glamping Meets Himalayan Serenity",
    subtitle: "Top Rated Glamping Resort of Mussoorie",
    description: "Reconnect with nature in curated comfort at Everest Base Camp, Mussoorie",
    cards: [
      {
        title: "9.2/10",
        src: "/partners/booking.png",
      },
      {
        title: "4.5/5",
        src: "/partners/yatra.png",
      },
      {
        title: "4.9/5",
        src: "/partners/tripadvisor.png",
      },
      {
        title: "4.6/5",
        src: "/partners/makemytrip.png",
      },
      {
        title: "8.8/10",
        src: "/partners/Expedia-logo.png",
      },
      {
        title: "4.5/5",
        src: "/partners/cleartrip.png",
      },
      {
        title: "9.1/10",
        src: "/partners/Agoda-Logo.png",
      },
    ],
    blogs: [
      {
        src: "",
        href: "",
      },
    ],
  },
  testimonialData: {
    title: "Real Stays. Real Stories. EBC Mussoorie Reviews",
    cards: [
      {
        src: "",
        name: "",
        text: "",
      },
      {
        src: "",
        name: "",
        text: "",
      },
      {
        src: "",
        name: "",
        text: "",
      },
    ],
  },
  experienceData: {
    title: "Not Just a Stay, It’s An Experience",
    description:
      "Escape the urban chaos and embrace a tranquil retreat in nature's embrace. Join us for a unique glamping experience that transcends the ordinary. Immerse yourself in the serenity of the great outdoors, where city stress fades away, replaced by the soothing symphony of rustling leaves and chirping birds. Be our guest, unwind, and rediscover the joy of simplicity. It's time to trade skyscrapers for star-studded skies. Your adventure in nature awaits – let the relaxation begin!",
    cards: [
      {
        src: ["", ""],
      },
      {
        src: ["", ""],
      },
      {
        src: ["", ""],
      },
    ],
    link: {
      href: "",
      label: "",
    },
  },
  roomsData: {
    title: "Curated Comfort in Every Room",
    cards: [
      {
        image: [
          landingpageImgSrc + "camper/img1.webp",
          landingpageImgSrc + "camper/img2.webp",
          landingpageImgSrc + "camper/img3.webp",
          landingpageImgSrc + "camper/img4.webp",
        ],
        roomName: "The Camper",
        description:
          "Treat yourself to a relaxing getaway in our Camper rooms, designed for couples seeking a lavish vacation experience with unparalleled comfort and coziness in a peaceful setting.",
      },
      {
        image: [
          landingpageImgSrc + "glamper/img1.webp",
          landingpageImgSrc + "glamper/img2.webp",
          landingpageImgSrc + "glamper/img3.webp",
          landingpageImgSrc + "glamper/img4.webp",
        ],
        roomName: "The Glamper",
        description:
          "Our Glamper rooms promise relaxation and rejuvenation like no other, ideal for small groups, making unforgettable moments on our exclusive netted balcony spaces — perfect for creating Instagram-worthy memories.",
      },
      {
        image: [
          landingpageImgSrc + "surveyor/img1.webp",
          imgSrc + "home/img2.webp",
          landingpageImgSrc + "surveyor/img2.webp",
          landingpageImgSrc + "surveyor/img3.webp",
        ],
        roomName: "The Surveyor",
        description:
          "Experience luxury in the Surveyor at Everest Base Camp, Mussoorie. Enjoy Spacious tents with stunning forest views and king-size beds, perfect for families or friends seeking luxury in nature.",
      },
      {
        image: [
          landingpageImgSrc + "surveyor_suite/img1.webp",
          landingpageImgSrc + "surveyor_suite/img2.webp",
          landingpageImgSrc + "surveyor_suite/img3.webp",
          landingpageImgSrc + "surveyor/img3.webp",
        ],
        roomName: "The Surveyor Grand Suite",
        description:
          "Relax and recharge in the peaceful Surveyor Suite, surrounded by Deodar forest scenery. Perfect for families or small groups, our serene atmosphere ensures privacy and comfort, allowing you to reconnect with nature.",
      },
    ],
  },
  addsData: {
    title: "Plan Your Escape Before the Season Ends",
    listOfData: [
      "Limited Duke Rooms available",
      "Special 2N/3D Monsoon Retreat Package (Depending on the season)",
    ],
    link: {
      href: "",
      label: "GET OFFER DETAILS",
    },
  },
  whyEbcMussoorieData: {
    title: "Why EBC Mussoorie",
    description:
      "Perched above the Queen of Hills, EBC Mussoorie blends refined luxury with raw nature. Thoughtfully built with local materials, it’s where sustainability meets sophistication.",
    cards: [
      {
        icon: <CuratedLuxury />,
        title: "Curated Luxury",
      },
      {
        icon: <SustainabilityCentric />,
        title: "Sustainability-Centric",
      },
      {
        icon: <LocationNature />,
        title: "Location in Nature’s Lap",
      },
    ],
  },
};
