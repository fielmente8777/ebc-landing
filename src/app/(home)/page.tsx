import VideoBanner from "@/components/banner/VideoBanner";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import Accommodations from "./components/Accommodations";
import CtaSection from "./components/CtaSection";
import ExperienceNew from "./components/ExperienceNew";
import FaqSection from "./components/FaqSection";
import Journey from "./components/Journey";
import { landingPageData } from "./components/LandingPgeDataNew";
import OurStory from "./components/OurStory";
import PressReleases from "./components/PressReleases";

export default function Home() {
  return (
    <main>
      <VideoBanner {...landingPageData.bannerData} />
      <SlidingTitle
        {...landingPageData.ratingData}
        wrapperClassName="text-[13.3px]"
      />
      {/* <SectionWithContainer
        sectionClassName="bg-new-bg1"
        containerClassName="bg-new-dark border-[0.5px] border-new-secondary/50"
      >
        <Form2 />
      </SectionWithContainer> */}
      <OurStory {...landingPageData.storyData} />
      <SlidingTitle {...landingPageData.highlightData} />
      <Accommodations {...landingPageData.accommodationsData} />
      <Journey {...landingPageData.journeyData} />
      <ExperienceNew {...landingPageData.experienceData} />
      <PressReleases {...landingPageData.pressData} />
      <FaqSection {...landingPageData.faqData} />
      <CtaSection {...landingPageData.ctaData} />
    </main>
  );
}
