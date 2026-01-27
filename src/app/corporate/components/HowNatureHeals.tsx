import {
  LazyLoadedVideo,
  LinkButton,
  SectionHeadingDesc,
  SectionWithContainer,
} from "@/components";

interface HowNatureHealsProps {
  title: string;
  description: string;
  video: {
    src: string;
    videoSrc: string;
  };
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
    <SectionWithContainer containerClassName="space-y-8">
      <div className="grid md:grid-cols-[2.5fr_3.5fr] gap-4">
        <div className="space-y-4">
          <SectionHeadingDesc title={title} />
          <div className="max-w-36 w-full h-px bg-[#DFB65C]" />
        </div>
        <p className="md:text-[1.375rem] text-primary">{description}</p>
      </div>
      <div className="relative w-full md:aspect-[4/2] aspect-[4/3]">
        <LazyLoadedVideo
          src={video.videoSrc}
          muted
          autoPlay
          loop
          controls={false}
          poster={video.src}
        />
        <LinkButton
          href={link.href}
          label={link.label}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 text-primary bg-white !rounded-none w-fit! border border-primary uppercase max-md:px-3 max-md:py-2"
        />
      </div>
    </SectionWithContainer>
  );
};

export default HowNatureHeals;
