import { WhyEbcTypes } from "@/@types/types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import { WhyEBCCard } from "@/components/cards";
import { WhyEBCCardsSlider } from "@/components/sliders";

const WhyEbc: React.FC<WhyEbcTypes> = ({ title, description, cards }) => {
  return (
    <SectionWithContainer
      sectionClassName="md:py-36 py-8"
      defaultPadding={false}
    >
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="md:col-span-1 md:space-y-4 space-y-6">
          <SectionHeadingDesc title={title} />
          <div className="md:hidden">
            <WhyEBCCardsSlider cards={cards} />
          </div>
          <p className="text-light text-[1.375rem]">{description}</p>
        </div>
        <div className="md:col-span-3 hidden md:grid grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              className={`bounce animate transition-all delay-${index + 1}`}
              key={index}
            >
              <WhyEBCCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default WhyEbc;
