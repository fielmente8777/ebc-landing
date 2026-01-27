import { Banner } from "@/components";
import { corporateRetreatData } from "./components/corporateLandingpagedata";
import PartnerSection from "./components/PartnerSection";
import WhyEBC from "./components/WhyEBC";
import HowNatureHeals from "./components/HowNatureHeals";
import PackageInclusions from "./components/PackageInclusions";
import Pricing from "./components/Pricing";
import RoomTypes from "./components/RoomTypes";
import LocationDetails from "./components/LocationDetails";
import Customizable from "./components/Customizable";
import Faq from "./components/Faq";
import OfferSlider from "@/components/sliders/OfferSlider";

export default function CorporatePage() {
  return (
    <main>
      <Banner {...corporateRetreatData.bannerData} />
      <PartnerSection {...corporateRetreatData.ratingsData} />
      <WhyEBC {...corporateRetreatData.whyEbcData} />
      <HowNatureHeals {...corporateRetreatData.natureHealingData} />
      <PackageInclusions {...corporateRetreatData.packageInclusions} />
      <Pricing {...corporateRetreatData.pricingData} />
      <RoomTypes {...corporateRetreatData.roomTypes} />
      <OfferSlider offersTitle={corporateRetreatData.titles} />
      <LocationDetails {...corporateRetreatData.locationData} />
      <Customizable {...corporateRetreatData.customizationData} />
      <Faq {...corporateRetreatData.faqData} />
    </main>
  );
}
