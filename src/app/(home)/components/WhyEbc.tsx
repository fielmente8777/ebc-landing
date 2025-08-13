import { WhyEbcTypes } from "@/@types/types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import { WhyEBCCard } from "@/components/cards";

const WhyEbc: React.FC<WhyEbcTypes> = ({ title, description, cards }) => {
  return (
    <SectionWithContainer sectionClassName="md:py-36" defaultPadding={false} >
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="md:col-span-1">
          <SectionHeadingDesc title={title} description={description} />
        </div>
        <div className="md:col-span-3 grid grid-cols-3 gap-6">
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
