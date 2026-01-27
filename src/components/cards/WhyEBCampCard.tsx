import { WhyEBCProps } from "@/@types/types";

const WhyEBCampCard: React.FC<WhyEBCProps["cards"][0] & { index?: number }> = ({
  title,
  description,
  index,
}) => {
  return (
    <div className="flex gap-2 w-full">
      <div className="text-white text-6xl font-times">
        {index}
      </div>
      <div className="text-white flex flex-col gap-3">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <ul className="list-disc list-inside space-y-2">
          {description.map((item, index) => (
            <li key={index} className="md:text-[1.375rem]">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyEBCampCard;
