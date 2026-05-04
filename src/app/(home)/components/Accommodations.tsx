import { AccommodationsTypes } from "@/@types/types";
import { SectionWithContainer } from "@/components";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import RoomCardNew from "./cards/RoomCardNew";
import LazyLoadedVideo from "@/components/Video/SEOVideo";

const Accommodations: React.FC<AccommodationsTypes> = ({
  title,
  description,
  items,
  video,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-new-dark"
      containerClassName="md:space-y-12 space-y-10"
      sectionId="rooms"
    >
      <SectionHeading2 title={title} description={description[0]} textCenter />
      <div className="grid stagger xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
        {items.slice(0, items.length - 1).map((item, index) => (
          <RoomCardNew key={index} {...item} />
        ))}
        <div className="relative w-full aspect-[4/6.2] xl:block hidden">
          <LazyLoadedVideo
            src={video[0].videoSrc}
            muted
            autoPlay
            loop
            controls={false}
          />
        </div>
        {items.slice(items.length - 1).map((item, index) => (
          <RoomCardNew key={index} {...item} />
        ))}
        <div className="relative w-full aspect-[4/6.2]">
          <LazyLoadedVideo
            src={video[1].videoSrc}
            muted
            autoPlay
            loop
            controls={false}
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Accommodations;
