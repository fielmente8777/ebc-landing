import { PackageInclusionsProps } from "@/@types/types";
import Image from "next/image";


const PackageInclusionsCard: React.FC<
  PackageInclusionsProps["sections"][0] & { className?: string }
> = ({ title, list, src, className }) => {
  return (
    <div className={`rounded-lg overflow-hidden flex flex-col ${className}`}>
      <div className="flex-1 p-6 bg-primary text-white">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="h-px bg-secondary max-w-24 w-full mb-4"/>
        <ul className="list-disc list-inside space-y-2 flex-grow">
          {list.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full relative aspect-[4/3]">
        <Image src={src} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
};

export default PackageInclusionsCard;
