import { WhyEBCProps } from "@/@types/types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import WhyEBCSlider from "@/components/sliders/WhyEBCSlider";
import { SliderBtn } from "@/utils/iconsPack2";

const WhyEBC: React.FC<WhyEBCProps> = ({ cards, title, note }) => {
  return (
    <SectionWithContainer
      containerClassName="space-y-8 md:space-y-14 py-6"
      sectionClassName="why-ebc-bg"
    >
      <div className="flex max-md:flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="h-px bg-white w-8 my-auto max-md:hidden" />
          <SectionHeadingDesc title={title} titleColor="white" />
        </div>

        <div className="md:flex hidden gap-2 ml-auto">
          <button className="bg-white px-6 py-2 text-primary camp-prev rounded-4xl ">
            <SliderBtn />
          </button>
          <button className="bg-white px-6 py-2 text-primary camp-next rounded-4xl rotate-180">
            <SliderBtn />
          </button>
        </div>
      </div>
      <WhyEBCSlider cards={cards} />
       <div className="max-md:flex hidden gap-2">
          <button className="bg-white px-6 py-2 text-primary camp-prev rounded-4xl ">
            <SliderBtn />
          </button>
          <button className="bg-white px-6 py-2 text-primary camp-next rounded-4xl rotate-180">
            <SliderBtn />
          </button>
        </div>
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
