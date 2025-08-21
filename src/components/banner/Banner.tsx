import Image from "next/image";
import { BannerType } from "@/@types/types";
import { LazyLoadedVideo } from "../Video";

const Banner: React.FC<BannerType> = ({ src, videoSrc }) => {
  return (
    <section className="w-full max_screen ">
      <div className="relative md:aspect-[16/9] aspect-[4/4.5] w-full after:absolute after:inset-0 after:bg-black/10">
        {videoSrc ? (
          <LazyLoadedVideo
            src={videoSrc}
            muted={true}
            autoPlay
            loop
            controls={false}
          />
        ) : (
          <Image
            src={src}
            alt="banner"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            loading="eager"
          />
        )}
      </div>
    </section>
  );
};

export default Banner;
