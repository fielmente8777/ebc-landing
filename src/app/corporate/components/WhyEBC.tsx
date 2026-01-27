import { WhyEBCProps } from "@/@types/types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import WhyEBCSlider from "@/components/sliders/WhyEBCSlider";

const WhyEBC: React.FC<WhyEBCProps> = ({ cards, title, note }) => {
  return (
    <SectionWithContainer
      containerClassName="space-y-8 md:space-y-14 py-6"
      sectionClassName="why-ebc-bg"
    >
      <div className="flex items-center gap-2">
        <div className="h-px bg-white w-8 my-auto" />
        <SectionHeadingDesc title={title} titleColor="white" />
      </div>
      <WhyEBCSlider cards={cards} />
      {/* <div className="flex justify-between gap-6 items-center"> */}
      {/* <LinkButton
          href={link.href}
          label={link.label}
          className=" w-fit rounded-none text-white uppercase"
        /> */}
      <p className="text-white md:text-[1.375rem] text-center">{note}</p>
      {/* </div> */}
    </SectionWithContainer>
  );
};

export default WhyEBC;
