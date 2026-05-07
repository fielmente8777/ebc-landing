import { PressReleasesProps } from "@/@types/types";
import { LinkButton, SectionWithContainer } from "@/components";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import PressSectionSlider from "./sliders/PressSectionSlider";
import OpenPopUpBtn from "@/components/buttons/OpenPopUpBtn";
import { contact } from "../../../../constant";

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
      {/* <LinkButton
        href={link.href}
        label={link.label}
        className="bg-new-secondary w-fit mx-auto xl:px-40 text-new-dark rounded-sm border-none"
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

export default PressReleases;
