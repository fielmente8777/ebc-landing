import { PackageInclusionsProps } from "@/@types/types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import PackageInclusionsCard from "@/components/cards/PackageInclusionsCard";

const PackageInclusions: React.FC<PackageInclusionsProps> = ({
  title,
  link,
  sections,
}) => {
  return (
    <SectionWithContainer>
      <div className="space-y-6">
        <div className="w-px bg-primary max-md:h-8 h-16 mx-auto" />
        <SectionHeadingDesc title={title} textcenter />
        <div className="w-px bg-primary max-md:h-8 h-16 mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {sections.map((section, index) => (
          <PackageInclusionsCard
            key={index}
            {...section}
            className={index % 2 !== 0 ? "md:flex-col-reverse" : ""}
          />
        ))}
      </div>
      {/* <PackageInclusionsCard/> */}
    </SectionWithContainer>
  );
};

export default PackageInclusions;
