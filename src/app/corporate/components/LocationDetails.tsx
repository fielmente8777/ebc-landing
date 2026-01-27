import { LocationDetailsTypes } from "@/@types/types";
import {
  LinkButton,
  SectionHeadingDesc,
  SectionWithContainer,
} from "@/components";
import LocationCard from "@/components/cards/LocationCard";

const LocationDetails: React.FC<LocationDetailsTypes> = ({
  title,
  stats,
  link,
}) => {
  return (
    <SectionWithContainer>
      <div className="md:space-y-14 space-y-8 py-6">
        <SectionHeadingDesc title={title} textcenter />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {stats.map((stat, index) => (
            <LocationCard key={index} {...stat} />
          ))}
        </div>
        <LinkButton
          href={link.href}
          label={link.label}
          className=" w-fit rounded-none text-primary uppercase mx-auto"
        />
      </div>
    </SectionWithContainer>
  );
};

export default LocationDetails;
