import { PressReleasesProps } from "@/@types/types";
import { LinkButton, SectionWithContainer } from "@/components";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import PressSectionSlider from "./sliders/PressSectionSlider";

const PressReleases: React.FC<PressReleasesProps> = ({
  title,
  links,
  link,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-new-dark"
      containerClassName="md:space-y-12 space-y-10"
    >
      <SectionHeading2 title={title} textCenter />
      <PressSectionSlider links={links} />
      <LinkButton
        href={link.href}
        label={link.label}
        className="bg-new-secondary w-fit mx-auto xl:px-40 text-new-dark rounded-sm border-none"
        target="_blank"
      />
    </SectionWithContainer>
  );
};

export default PressReleases;
