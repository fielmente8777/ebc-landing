import { OurStoryProps } from "@/@types/types";
import { LinkButton, SectionWithContainer } from "@/components";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import OurStorySlider from "./sliders/OurStorySlider";
import OpenPopUpBtn from "@/components/buttons/OpenPopUpBtn";

const OurStory: React.FC<OurStoryProps> = ({
  title,
  subtitle,
  description,
  images,
  link,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-new-bg1">
      <div className="grid stagger lg:grid-cols-7 grid-cols-1 gap-6">
        <div className="w-full lg:block hidden lg:col-span-4">
          <OurStorySlider images={images} />
        </div>
        <div className="flex flex-col gap-1.5 justify-between lg:col-span-3">
          <div className="space-y-2">
            <p className="text-new-secondary ">{title}</p>
            <SectionHeading2 title={subtitle} />
            <div className="w-full lg:hidden lg:col-span-4">
              <OurStorySlider images={images} />
            </div>
            <p className="text-white/90">{description[0]}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
            <OpenPopUpBtn
              label="GET A CALL BACK"
              className="bg-new-ternary mt-4 text-white rounded-sm border-none"
            />
            <LinkButton
              label={link.label}
              href={link.href}
              className="bg-new-ternary mt-4 text-white rounded-sm border-none"
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurStory;
