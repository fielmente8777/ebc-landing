import { LocationDetailsTypes } from "@/@types/types";

const LocationCard: React.FC<LocationDetailsTypes["stats"][0]> = ({
  label,
  value,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-2">{icon}</div>
      <h3 className="text-2xl text-primary pbold">{value}</h3>
      <p className="text-primary text-[1.375rem]">{label}</p>
    </div>
  );
};

export default LocationCard;
