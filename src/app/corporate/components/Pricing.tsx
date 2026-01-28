import {
  SectionHeadingDesc,
  SectionWithContainer
} from "@/components";
import OpenPopUpBtn from "@/components/buttons/OpenPopUpBtn";
import Image from "next/image";

interface PricingProps {
  title: string;
  maxPrice: string;
  subTitle: string;
  inclusions: string[];
  src: string;
  link: {
    label: string;
    href: string;
  };
}
const Pricing: React.FC<PricingProps> = ({
  title,
  maxPrice,
  subTitle,
  inclusions,
  src,
  link,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-bg1">
      <div className="grid md:grid-cols-[4fr_2fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px bg-primary w-8 my-auto" />
            <SectionHeadingDesc title={title} />
          </div>
          <p className="text-primary text-xl">{maxPrice}</p>
          <div className="relative w-full aspect-[4/1.5] mx-auto max-w-[500px]">
            <Image src={src} alt={title} fill className="object-contain" />
          </div>
        </div>
        <div>
          <h3 className="text-primary text-2xl pUltralight">{subTitle}</h3>

          <ul>
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-center text-[1.375rem]">
                <span className="text-primary font-bold mr-3 mt-px">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <LinkButton
        href={link.href}
        label={link.label}
        className=""
      /> */}
      <OpenPopUpBtn
        label={link.label}
        className="mx-auto mt-8 w-fit rounded-none border border-primary uppercase text-primary"
      />
    </SectionWithContainer>
  );
};

export default Pricing;
