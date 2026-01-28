import { Section } from "@/components";
import OpenPopUpBtn from "@/components/buttons/OpenPopUpBtn";
import Image from "next/image";

interface CustomizableProps {
  title: string;
  list: string[];
  link: {
    label: string;
    href: string;
  };
  images: string[];
}

const Customizable: React.FC<CustomizableProps> = ({
  title,
  list,
  link,
  images,
}) => {
  return (
    <Section defaultPadding={false}>
      <div className="grid md:grid-cols-[1fr_1fr_1fr]">
        <div className="relative w-full aspect-square md:aspect-[4/4.5]">
          <Image
            src={images[0]}
            alt="Customizable Experience Image 1"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center px-4 heading space-y-6 bg-primary py-8  text-white">
          <h2
            className="text-5xl pUltralight text-center tracking-wide"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <div className="h-px bg-secondary w-full max-w-32 mx-auto" />
          <ul className="space-y-4">
            {list.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center md:text-[1.375rem]"
              >
                <span className="text-white font-bold mr-3 mt-px">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {/* <LinkButton
            label={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-white uppercase px-6 py-3 rounded-none border border-white w-fit mx-auto hover:bg-white hover:text-primary transition-colors duration-300"
          /> */}
          <OpenPopUpBtn
            label={link.label}
            className="text-white uppercase px-6 py-3 rounded-none border border-white w-fit mx-auto hover:bg-white hover:text-primary transition-colors duration-300"
          />
        </div>
        <div className="relative w-full aspect-square md:aspect-[4/4.5]">
          <Image
            src={images[1]}
            alt="Customizable Experience Image 2"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
};

export default Customizable;
