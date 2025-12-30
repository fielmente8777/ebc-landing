import { Banner } from "@/components";
import { landingPageData } from "./landingPageData";
import { AboutUs, Experience, Rooms, Testimonial, WhyEbc } from "./components";
import { Adds } from "@/components/sectionComponents";
import NearbyAttractions from "./components/NearbyAttractions";

export default function Home() {
  return (
    <main>
      <Banner {...landingPageData.bannerData} />
      <AboutUs {...landingPageData.aboutUsData} />
      <Testimonial {...landingPageData.testimonialData} />
      <Experience {...landingPageData.experienceData} />
      <Rooms {...landingPageData.roomsData} />
      <Adds {...landingPageData.addsData} />
      <WhyEbc {...landingPageData.whyEbcMussoorieData} />
      <NearbyAttractions {...landingPageData.nearbyAttractions} />
    </main>
  );
}
