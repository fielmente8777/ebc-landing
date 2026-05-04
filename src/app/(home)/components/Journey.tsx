import { JourneyProps } from "@/@types/types";
import { LinkButton, SectionWithContainer } from "@/components";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import JourneyCard from "./cards/JourneyCard";

const Journey: React.FC<JourneyProps> = ({
  title,
  description,
  items,
  link,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-new-bg1"
      containerClassName="md:space-y-12 space-y-10"
    >
      <SectionHeading2 title={title} description={description[0]} textCenter />
      <div className="grid stagger lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {items.map((item, index) => (
          <JourneyCard key={index} {...item} />
        ))}
      </div>
      <LinkButton
        href={link.href}
        label={link.label}
        className="bg-new-secondary w-fit mx-auto text-new-dark rounded-sm border-none"
        target="_blank"
      />
    </SectionWithContainer>
  );
};

export default Journey;
