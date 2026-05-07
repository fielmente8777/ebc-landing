import { JSX } from "react";
import { Container, Section } from "../sectionComponents";
import { LazyLoadedVideo } from "../Video";
import Link from "next/link";
import LinkButton from "../buttons/LinkButton";

interface VideoBannerProps {
  title: string;
  subtitle: string;
  description: string[];
  video: {
    src: string;
    poster: string;
  };
  actions: {
    label: string;
    href: string;
  };
  location: {
    label: string;
    href: string;
    icon: JSX.Element;
  };
}
const VideoBanner: React.FC<VideoBannerProps> = ({
  title,
  subtitle,
  description,
  video,
  actions,
  location,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full md:aspect-video aspect-[4/6]"
    >
      <LazyLoadedVideo
        src={video.src}
        poster={video.poster}
        muted={true}
        autoPlay
        loop
        controls={false}
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#070c08]/55 from-0% via-[#070c08]/50 via-50% to-[#070c08]/75" />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <Container>
          <div className="flex flex-col gap-3.5 items-center text-center lg:max-w-3xl lg:px-2 mx-auto">
            <Link
              href={location.href}
              className="flex items-center gap-2 text-new-secondary"
            >
              {location.icon}
              <span>{location.label}</span>
            </Link>
            <h1 className="md:text-7xl text-4xl text-white italic font-primary">
              {title}
              <br />
              {subtitle}
            </h1>
            <p className="text-white mb-2 text-base text-body lg:px-4">
              {description}
            </p>
            <LinkButton
              label={actions.label}
              href={actions.href}
              nextTab={false}
              className="text-new-secondary px-6 py-3 rounded-sm border border-new-secondary flex justify-center items-center hover:bg-white hover:text-new-dark "
            />
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default VideoBanner;
