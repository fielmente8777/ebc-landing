import {
  CuratedLuxury,
  ForestView,
  FreeWifi,
  HeatedBeds,
  LocationNature,
  SustainabilityCentric,
} from "@/utils/icons";
import { contact, imgSrc, landingpageImgSrc } from "../../../constant";

export const landingPageData = {
  bannerData: {
    videoSrc: "",
    src: "/img1.webp",
  },
  aboutUsData: {
    src:"/img.webp",
    title: `Luxury Glamping Meets Himalayan <span>Serenity</span>`,
    subtitle: "Top Rated Glamping Resort of <span>Mussoorie</span>",
    description:
      "Reconnect with nature in curated comfort at Everest Base Camp, Mussoorie",
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
        src: "/partners/Expedia.png",
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
        src: "/hotelier.png",
        href: "https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie",
      },
      {
        src: "/ad.png",
        href: "https://www.architecturaldigest.in/story/weekend-getaways-from-delhi-that-are-perfect-for-last-minute-planning/",
      },
      {
        src: "/tripoto.png",
        href: "https://www.tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8",
      },
      {
        src: "/lbb.png",
        href: "https://lbb.in/delhi/away-from-the-city-around-all-things-pretty-ebc-mussoorie/",
      },
      {
        src: "/vogue.png",
        href: "",
      },
    ],
  },
  testimonialData: {
    title: "Real Stays. Real Stories. EBC Mussoorie <span>Reviews</span>",
    cards: [
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/activities/picnic/img2.webp",
        name: "Lorem Ipsum Family",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  experienceData: {
    title: "Not Just a Stay, It’s <span>An Experience</span>",
    description:
      "Escape the urban chaos and embrace a tranquil retreat in nature's embrace. Join us for a unique glamping experience that transcends the ordinary. Immerse yourself in the serenity of the great outdoors, where city stress fades away, replaced by the soothing symphony of rustling leaves and chirping birds. Be our guest, unwind, and rediscover the joy of simplicity. It's time to trade skyscrapers for star-studded skies. Your adventure in nature awaits – let the relaxation begin!",
    cards: [
      {
        src: ["https://ebcmussoorie.com/gallery2/outsideview6.webp", "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/activities/bonfire/img1.webp"],
      },
      {
        src: [
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/landingpage/img2.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/activities/trekking/img1.webp",
        ],
      },
      {
        src: [
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/landingpage/img1.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/activities/picnic/img1.webp",
        ],
      },
    ],
    link: {
      href: contact.ctaUrl,
      label: "VIEW ALL <span>EXPERIENCES</span>",
    },
  },
  roomsData: {
    title: "Curated Comfort in Every <span>Room</span>",
    cards: [
      {
        images: [
          landingpageImgSrc + "camper/img1.webp",
          landingpageImgSrc + "camper/img2.webp",
          landingpageImgSrc + "camper/img3.webp",
          landingpageImgSrc + "camper/img4.webp",
        ],
        roomName: "The Camper",
        label: "Most Popular",
        labelColor: "#F6CE55",
        amenities: [
          {
            title: "Forest View",
            icon: <ForestView />,
          },
          {
            title: "Heated Beds",
            icon: <HeatedBeds />,
          },
          {
            title: "Free Wi-Fi",
            icon: <FreeWifi />,
          },
        ],
        description:
          "Treat yourself to a relaxing getaway in our Camper rooms, designed for couples seeking a lavish vacation experience with unparalleled comfort and coziness in a peaceful setting.",
      },
      {
        images: [
          landingpageImgSrc + "glamper/img1.webp",
          landingpageImgSrc + "glamper/img2.webp",
          landingpageImgSrc + "glamper/img3.webp",
          landingpageImgSrc + "glamper/img4.webp",
        ],
        roomName: "The Glamper",
        label: "Luxury Glamping",
        labelColor: "#434B3E",
        amenities: [
          {
            title: "Forest View",
            icon: <ForestView />,
          },
          {
            title: "Heated Beds",
            icon: <HeatedBeds />,
          },
          {
            title: "Free Wi-Fi",
            icon: <FreeWifi />,
          },
        ],
        description:
          "Our Glamper rooms promise relaxation and rejuvenation like no other, ideal for small groups, making unforgettable moments on our exclusive netted balcony spaces — perfect for creating Instagram-worthy memories.",
      },
      {
        images: [
          landingpageImgSrc + "surveyor/img1.webp",
          imgSrc + "home/img2.webp",
          landingpageImgSrc + "surveyor/img2.webp",
          landingpageImgSrc + "surveyor/img3.webp",
        ],
        roomName: "The Surveyor",
        label: "Most Popular",
        labelColor: "#F6CE55",
        amenities: [
          {
            title: "Forest View",
            icon: <ForestView />,
          },
          {
            title: "Heated Beds",
            icon: <HeatedBeds />,
          },
          {
            title: "Free Wi-Fi",
            icon: <FreeWifi />,
          },
        ],
        description:
          "Experience luxury in the Surveyor at Everest Base Camp, Mussoorie. Enjoy Spacious tents with stunning forest views and king-size beds, perfect for families or friends seeking luxury in nature.",
      },
      {
        images: [
          landingpageImgSrc + "surveyor_suite/img1.webp",
          landingpageImgSrc + "surveyor_suite/img2.webp",
          landingpageImgSrc + "surveyor_suite/img3.webp",
          landingpageImgSrc + "surveyor/img3.webp",
        ],
        label: "Luxury Glamping",
        labelColor: "#434B3E",
        roomName: "The Surveyor Grand Suite",
        amenities: [
          {
            title: "Forest View",
            icon: <ForestView />,
          },
          {
            title: "Heated Beds",
            icon: <HeatedBeds />,
          },
          {
            title: "Free Wi-Fi",
            icon: <FreeWifi />,
          },
        ],
        description:
          "Relax and recharge in the peaceful Surveyor Suite, surrounded by Deodar forest scenery. Perfect for families or small groups, our serene atmosphere ensures privacy and comfort, allowing you to reconnect with nature.",
      },
    ],
  },
  addsData: {
    title: "Plan Your Escape Before the Season <span>Ends</span>",
    listOfData: [
      "Limited Duke Rooms available",
      "Special 2N/3D Monsoon Retreat Package (Depending on the season)",
    ],
    link: {
      href: contact.ctaUrl,
      label: "GET OFFER <i>DETAILS</i>",
    },
  },
  whyEbcMussoorieData: {
    title: "Why EBC <span>Mussoorie</span>?",
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
