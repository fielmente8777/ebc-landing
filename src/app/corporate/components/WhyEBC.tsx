import { WhyEBCProps } from "@/@types/types";
import {
  LinkButton,
  SectionHeadingDesc,
  SectionWithContainer,
} from "@/components";
import WhyEBCSlider from "@/components/sliders/WhyEBCSlider";

const WhyEBC: React.FC<WhyEBCProps> = ({ cards, title, note, link }) => {
  return (
    <SectionWithContainer containerClassName="space-y-8 " sectionClassName="why-ebc-bg">
      <div className="">
        <SectionHeadingDesc title={title} titleColor="white" />
      </div>
      <WhyEBCSlider cards={cards} />
      <div className="grid md:grid-cols-[2fr_3fr] grid-cols-1 gap-6 items-center">
        <LinkButton
          href={link.href}
          label={link.label}
          className=" w-fit rounded-none text-white uppercase"
        />
        <p className="text-white">{note}</p>
      </div>
    </SectionWithContainer>
  );
};

export default WhyEBC;
