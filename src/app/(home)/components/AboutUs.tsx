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
    <Section defaultPadding={false} >
      <SectionWithContainer>
        <div className="flex flex-col gap-6">
          <div className="w-full max-w-[342px] mx-auto relative aspect-[4/2]">
            <Image src={src} alt={title} fill className="object-contain" />
          </div>
          <p className="text-light text-center">{description}</p>
          <h2 className="text-primary xx_lg_font_s pUltralight max-w-5xl mx-auto text-center">
            {title}
          </h2>
        </div>
      </SectionWithContainer>
      <Container>
        <h3 className="text-primary text-center pUltralight md:text-[2.5rem]">
          {subtitle}
        </h3>
        <Partners partners={cards} />
      </Container>
      <Blogs blogs={blogs} />
    </Section>
  );
};

export default AboutUs;
