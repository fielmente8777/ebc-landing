import { JourneyProps } from "@/@types/types";
import { LinkButton, SectionWithContainer } from "@/components";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import JourneyCard from "./cards/JourneyCard";
import OpenPopUpBtn from "@/components/buttons/OpenPopUpBtn";
import { contact } from "../../../../constant";

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
      {/* <LinkButton
        href={link.href}
        label={link.label}
        className="bg-new-secondary w-fit mx-auto text-new-dark rounded-sm border-none"
        target="_blank"
      /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full mx-auto">
        <OpenPopUpBtn
          label="GET A CALL BACK"
          className="bg-new-ternary mt-4 text-new-dark rounded-sm border-none"
        />
        <LinkButton
          label="CALL NOW"
          href={"tel:" + contact.call}
          className="bg-new-ternary mt-4 text-new-dark rounded-sm border-none"
        />
      </div>
    </SectionWithContainer>
  );
};

export default Journey;
