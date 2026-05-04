import { OurStoryProps } from "@/@types/types";
import { LinkButton, SectionWithContainer } from "@/components";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import OurStorySlider from "./sliders/OurStorySlider";

const OurStory: React.FC<OurStoryProps> = ({
  title,
  subtitle,
  description,
  images,
  link,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-new-bg1">
      <div className="grid stagger md:grid-cols-7 grid-cols-1 gap-6">
        <div className="w-full lg:block hidden lg:col-span-4">
          <OurStorySlider images={images} />
        </div>
        <div className="flex flex-col gap-1.5 justify-between lg:col-span-3">
          <div className="space-y-2">
            <p className="text-new-secondary ">{title}</p>
            <SectionHeading2 title={subtitle} description={description[0]} />
            
          </div>
          <LinkButton
            label={link.label}
            href={link.href}
            className="bg-new-ternary mt-4 text-white rounded-sm border-none"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurStory;
