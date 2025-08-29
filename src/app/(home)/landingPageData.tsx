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
    src: "/outsideview6.webp",
  },
  aboutUsData: {
    src: "/img.webp",
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
        src: "/ts1.jpg",
        name: "Dr Madhu Akhouri Chopra",
        text: "Good staff add value to great property EBC Mussoorie.",
      },
      {
        src: "/Akshay.jpg",
        name: "Akshay Dawar",
        text: "One of the best places I have visited. Very peaceful place although only the restaurant is open for public as the food and the ambiance is amazing , so everyone wants to visit here.  Rooms are clean with all the amenities like heater , hot water , bed warmer, you ask they have. And hospitality is just brilliant, special thanks to Mr. Swastik. You also get a chance to do a small trek from within the resort and reach sunset point. Overall great experience.",
      },
      {
        src: "/Tarushree.jpg",
        name: "Tarushree Dr.",
        text: "It's a hidden gem in Mussoorie, especially for those who want camping experience in hills. Camps are clean and well maintained. One can have feel of camping in forest. Staff is well behaved and courteous. Good food and well cureted. George Everest house is near by and one can also take short trek to George Everest peak.",
      },
      {
        src: "/Amita.jpg",
        name: "Amita Arya",
        text: "Ever found a place where you just feel like staying longer? Everest base camp mussoorie was that kind of place for me. 🏕️ It has a beautiful valley view and a peaceful feeling all around. The food was tasty. I really liked their thin crust pizza and homestyle dal chawal😋 The staff was also kind and helpful 💯 Pet friendly 💯 If you are coming to Mussoorie and want a quiet and nice place to eat or stay, you should definitely visit this one.",
      },
      {
        src: "/Manjiree.jpg",
        name: "Manjiree Jadhav",
        text: `Absolutely breathtaking experience at Everest Base Camp, Mussoorie! Here's what made it special:
                - *Top-notch stay*: Impeccable hygiene and an ambience that felt like a home away from home.
                - *Excellent amenities*: Well-maintained and exceeded our expectations.
                - *Kid-friendly food*: The staff went above and beyond to ensure my little one had a delightful dining experience, with specially prepared meals that catered to their tastes and dietary needs.
                - *Breathtaking views*: Scenic views of the Himalayas from the camp were simply stunning.
                - *Serene atmosphere*: Tranquil and peaceful, perfect for a getaway from the city.
                - *Nature's symphony*: Our view had a playful bunch of harmless langoors swinging by, birds chirping melodiously, and a gentle breeze that added to the serenity.
                We can't wait to return and experience the magic of Everest Base Camp, Mussoorie again during winters! Every single person from the staff is aligned to the purpose of serving the best! Worth every single penny! 5 stars isn't enough - we'd give it 10 stars if we could!"`,
      },
    ],
  },
  experienceData: {
    title: "Not Just a Stay, It’s <span>An Experience</span>",
    description:
      "Escape the urban chaos and embrace a tranquil retreat in nature's embrace. Join us for a unique glamping experience that transcends the ordinary. Immerse yourself in the serenity of the great outdoors, where city stress fades away, replaced by the soothing symphony of rustling leaves and chirping birds. Be our guest, unwind, and rediscover the joy of simplicity. It's time to trade skyscrapers for star-studded skies. Your adventure in nature awaits – let the relaxation begin!",
    cards: [
      {
        src: [
          "/outsideview6.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Ebc-New-Ui-Image/activities/bonfire/img1.webp",
        ],
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
      "More than just a stay — EBC Mussoorie offers you a hillside sanctuary of style, elegance, and serenity.",
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
