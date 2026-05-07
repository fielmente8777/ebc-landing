import { FillFacebook, FillTripAdvisor, FillYoutubeIcon } from "@/utils/icons";
import { FillCallIcon, FillLocationIcon, FillMailIcon } from "@/utils/newIcon";
import { bookingEngining, contact } from '../../../constant';
import { OutLineInstagram } from "../../utils/icons";

export const landingFooterData = {
  src: "/logo.webp",
  partners: ["/trip.png", "/google.png"],
  description:
    "Everest Base Camp Mussoorie, Park Estate, Hathipaon Road, Mussoorie, Uttarakhand, 248179",
  mapUrl: contact.mapUrl,
  links: [
    {
      label: "Call Us: " + contact.call,
      href: "tel: " + contact.call,
    },
    {
      label: "Email: " + contact.email,
      href: "mailto:" + contact.email,
    },
    {
      icon: <FillFacebook />,
      label: Object.keys(contact.socialLinks)[0],
      href: contact.socialLinks.facebook,
    },
    {
      icon: <OutLineInstagram />,
      label: Object.keys(contact.socialLinks)[1],
      href: contact.socialLinks.instagram,
    },
    {
      icon: <FillTripAdvisor />,
      label: Object.keys(contact.socialLinks)[2],
      href: contact.socialLinks.tripadvisor,
    },
    {
      icon: <FillYoutubeIcon />,
      label: Object.keys(contact.socialLinks)[3],
      href: contact.socialLinks.youtube,
    },
  ],
};

export const SocialLinks = [
  {
    icon: <FillFacebook />,
    label: Object.keys(contact.socialLinks)[0],
    href: contact.socialLinks.facebook,
  },
  {
    icon: <OutLineInstagram />,
    label: Object.keys(contact.socialLinks)[1],
    href: contact.socialLinks.instagram,
  },
  {
    icon: <FillTripAdvisor />,
    label: Object.keys(contact.socialLinks)[2],
    href: contact.socialLinks.tripadvisor,
  },
  {
    icon: <FillYoutubeIcon />,
    label: Object.keys(contact.socialLinks)[3],
    href: contact.socialLinks.youtube,
  },
];

interface FooterData {
  logo: string;
  cta: {
    label: string;
    href: string;
  };
  lists: {
    title?: string;
    links: {
      title?: string;
      icon: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/logo-new.png",
  cta: {
    label: "Book Now",
    href: bookingEngining,
  },
  lists: [
    {
      title: "Contact <i>Information</i>",
      links: [
        {
          icon: <FillLocationIcon />,
          label: contact.address,
          href: contact.addressUrl,
        },
        {
          title: "Call: ",
          icon: <FillCallIcon />,
          label: contact.call,
          href: "tel:" + contact.call,
        },

        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};
