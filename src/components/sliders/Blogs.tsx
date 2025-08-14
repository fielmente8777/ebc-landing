"use client";
import { AboutUsTypes } from "@/@types/types";
import { SectionWithContainer } from "../sectionComponents";
import SwiperCarousel from "../SwiperCarousel";
import Link from "next/link";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

interface BlogProps {
  blogs: AboutUsTypes["blogs"];
}

const Blogs: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <SectionWithContainer sectionClassName="bg-bg1">
      <SwiperCarousel
        data={blogs}
        slidesPerView={2}
        spaceBetween={24}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
        renderSlide={(blog) => (
          <Link href={blog.href}>
            <div className="w-full relative aspect-[4/.8]">
              <Image
                src={blog.src}
                alt={blog.href.replace(/-/g, " ")}
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 768px) 20vw"
                className="object-contain"
              />
            </div>
          </Link>
        )}
      />
    </SectionWithContainer>
  );
};

export default Blogs;
