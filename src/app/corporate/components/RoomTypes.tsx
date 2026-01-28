import { RoomsTypes } from "@/@types/types";
import { Section, SectionHeadingDesc } from "@/components";
import OpenPopUpBtn from "@/components/buttons/OpenPopUpBtn";
import RoomsSlider from "@/components/sliders/RoomsSlider";

const RoomTypes: React.FC<RoomsTypes> = ({ title, cards, link }) => {
  return (
    <Section className="space-y-8 bg-img-2">
      <div className="space-y-6 pb-3">
        <div className="w-[0.5px] bg-primary max-md:h-8 h-16 mx-auto" />

        <SectionHeadingDesc title={title} textcenter />
        <div className="w-[0.5px] bg-primary max-md:h-8 h-16 mx-auto" />
      </div>
      <RoomsSlider cards={cards} />
      {link && (
        // <LinkButton label={link?.label} href={link?.href} className="rounded-none w-fit! uppercase mx-auto" />
        <OpenPopUpBtn
          label={link.label}
          className="mx-auto mt-8 w-fit rounded-none border border-primary uppercase text-primary"
        />
      )}
    </Section>
  );
};

export default RoomTypes;
