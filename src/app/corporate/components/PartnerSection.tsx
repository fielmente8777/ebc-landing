import { SectionWithContainer } from "@/components";
import { Partners } from "@/components/sliders";

interface PartnerSectionProps {
  title: string;
  cards: {
    title: string;
    src: string;
  }[];
}

const PartnerSection: React.FC<PartnerSectionProps> = ({ title, cards }) => {
  return (
    <SectionWithContainer defaultPadding={false} sectionClassName="pt-16" containerClassName="heading">
      <h3
        className="text-primary text-center pUltralight md:text-[2.5rem] text-[1.75rem] "
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <Partners partners={cards} />
    </SectionWithContainer>
  );
};

export default PartnerSection;
