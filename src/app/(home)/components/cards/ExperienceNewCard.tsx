import { ExperienceProps } from "@/@types/types";

const ExperienceNewCard: React.FC<ExperienceProps["items"][0]> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 bg-new-dark/85 border-[0.5px] border-new-secondary/50 rounded-sm p-4">
      <span>{icon}</span>
      <div className="space-y-2 text-center">
        <p className="text-new-secondary font-primary text-3xl">{title}</p>
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceNewCard;
