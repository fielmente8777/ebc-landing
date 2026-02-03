import { SectionWithContainer, SectionHeadingDesc } from "@/components";
import Image from "next/image";

interface ServedCorporatesProps {
  title: string;
  images: string[];
}

const ServedCorporates: React.FC<ServedCorporatesProps> = ({
  title,
  images,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F1EECB]">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="flex flex-col gap-1">
          <SectionHeadingDesc title={title} />
          <div className="md:w-61 w-38 bg-primary h-[.5PX] md:ml-auto" />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-full aspect-[4/1.5]">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ServedCorporates;
