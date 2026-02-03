import {
  LazyLoadedVideo,
  SectionHeadingDesc,
  SectionWithContainer,
} from "@/components";
import OpenPopUpBtn from "@/components/buttons/OpenPopUpBtn";

interface HowNatureHealsProps {
  title: string;
  description: string[];
  video: {
    src: string;
    videoSrc: string;
  }[];
  link: {
    label: string;
    href: string;
  };
}

const HowNatureHeals: React.FC<HowNatureHealsProps> = ({
  title,
  description,
  video,
  link,
}) => {
  return (
    <SectionWithContainer
      containerClassName="space-y-8"
      sectionClassName="bg-bg1"
    >
      <div className="space-y-4 md:space-y-10 py-8">
        <div className="flex items-center justify-between">
          <SectionHeadingDesc title={title} />
          <div className="max-w-36 md:max-w-7xl w-full h-px bg-[#DFB65C]" />
        </div>
        <p className="md:text-[1.375rem] text-primary">{description[0]}</p>

        <div className="grid md:grid-cols-3 gap-4">
          {video.map((item, index) => (
            <div
              key={index}
              className={`relative w-full aspect-[4/5.5] ${
                index == 0 && "md:mt-26"
              } ${index == 1 && "md:mt-14"}`}
            >
              <LazyLoadedVideo
                src={item.videoSrc}
                muted
                autoPlay
                loop
                controls={false}
                poster={item.src}
              />
            </div>
          ))}
        </div>
        <p className="md:text-[1.375rem] text-primary md:text-end">
          {description[1]}
        </p>
      </div>
      {/* <LinkButton
        href={link.href}
        label={link.label}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-primary bg-white !rounded-none w-fit! border border-primary uppercase max-md:px-3 max-md:py-2"
      /> */}
      <OpenPopUpBtn
        label={link.label}
        className="text-primary bg-white !rounded-none w-fit! border border-primary uppercase mx-auto"
      />
    </SectionWithContainer>
  );
};

export default HowNatureHeals;
