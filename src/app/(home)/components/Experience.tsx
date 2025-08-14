import { ExperienceTypes } from "@/@types/types";
import {
  LinkButton,
  SectionHeadingDesc,
  SectionWithContainer,
} from "@/components";
import { ExperiencesSlider } from "@/components/sliders";

const Experience: React.FC<ExperienceTypes> = ({
  title,
  description,
  cards,
  link,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-6 grid-cols-1 gap-6">
        <div className="md:col-span-2 flex flex-col gap-8">
          <SectionHeadingDesc title={title} />
          <div className="md:col-span-4 md:hidden">
            <ExperiencesSlider cards={cards} />
          </div>
          <p className="text-[1.375rem] text-light">{description}</p>
          <LinkButton
            label={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary !rounded-none w-fit md:text-lg border border-primary"
          />
        </div>
        {/* Experience Cards */}
        <div className="md:col-span-4 md:block hidden">
          <ExperiencesSlider cards={cards} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Experience;
