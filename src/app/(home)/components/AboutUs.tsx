import { AboutUsTypes } from "@/@types/types";
import { Container, Section, SectionWithContainer } from "@/components";
import { Blogs, Partners } from "@/components/sliders";
import Image from "next/image";

const AboutUs: React.FC<AboutUsTypes> = ({
  title,
  subtitle,
  description,
  src,
  blogs,
  cards,
}) => {
  return (
    <Section defaultPadding={false}>
      <SectionWithContainer>
        <div className="flex flex-col gap-6">
          <div className="w-full md:block hidden max-w-[342px] mx-auto relative aspect-[4/2]">
            <Image src={src} alt={title} fill className="object-contain" />
          </div>
          <p className="text-light text-[1.375rem] text-center md:block hidden">
            {description}
          </p>
          <h2
            className="text-primary xx_lg_font_s pUltralight max-w-5xl mx-auto text-center heading"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="w-full md:hidden max-w-[342px] mx-auto relative aspect-[4/2]">
            <Image src={src} alt={title} fill className="object-contain" />
          </div>
          <p className="text-light text-[1.375rem] text-center md:hidden">
            {description}
          </p>
        </div>
      </SectionWithContainer>
      <Container>
        <h3
          className="text-primary text-center pUltralight md:text-[2.5rem] text-[1.75rem] heading"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />

        <Partners partners={cards} />
      </Container>
      <Blogs blogs={blogs} />
    </Section>
  );
};

export default AboutUs;
