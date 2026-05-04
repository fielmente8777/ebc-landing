import { JourneyProps } from "@/@types/types";
import Image from "next/image";

const JourneyCard: React.FC<JourneyProps["items"][0]> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="w-full  relative aspect-[4/5.25] rounded-sm overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute z-10 inset-x-0 bottom-0 h-30 bg-linear-to-b from-black/0 to-37% to-black/85" />
      <div className="heading2 text-white p-4 space-y-2 absolute bottom-0 inset-x-0 z-20">
        <h3
          className="text-3xl font-primary"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JourneyCard;
