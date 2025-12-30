import { NearbyAttractionsTypes } from "@/@types/types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import NearbyAttractionsSlider from "@/components/sliders/NearbyAttractionsSlider";

const NearbyAttractions: React.FC<NearbyAttractionsTypes> = ({
  title,
  description,
  cards,
}) => {
  return (
        <SectionWithContainer sectionClassName="bg-[#F7F5EE]">
      <div className="flex flex-col gap-8">
        <SectionHeadingDesc
          title={title}
          description={description}
          textcenter
          wrapperClassName="max-w-4xl mx-auto"
        />
        <NearbyAttractionsSlider cards={cards}  />
      </div>
    </SectionWithContainer>
  );
};

export default NearbyAttractions;
