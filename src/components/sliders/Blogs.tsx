"use client";
import { AboutUsTypes } from "@/@types/types";
import { SectionWithContainer } from "../sectionComponents";
import SwiperCarousel from "../SwiperCarousel";
import Link from "next/link";
import Image from "next/image";

interface BlogProps {
  blogs: AboutUsTypes["blogs"];
}

const Blogs: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <SectionWithContainer sectionClassName="bg-bg1">
      <SwiperCarousel
        data={blogs}
        slidesPerView={1}
        spaceBetween={24}
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
