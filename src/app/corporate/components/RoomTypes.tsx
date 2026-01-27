import { RoomsTypes } from "@/@types/types";
import {
  LinkButton,
  SectionHeadingDesc,
  Section,
} from "@/components";
import RoomsSlider from "@/components/sliders/RoomsSlider";

const RoomTypes: React.FC<RoomsTypes> = ({ title, cards, link }) => {
  return (
    <Section className="space-y-8">
      <div className="space-y-6">
        <div className="w-px bg-primary max-md:h-8 h-16 mx-auto" />

        <SectionHeadingDesc title={title} textcenter />
        <div className="w-px bg-primary max-md:h-8 h-16 mx-auto" />

      </div>
      <RoomsSlider cards={cards} />
      {link && <LinkButton label={link?.label} href={link?.href} className="rounded-none w-fit! uppercase mx-auto" />}
    </Section>
  );
};

export default RoomTypes;
