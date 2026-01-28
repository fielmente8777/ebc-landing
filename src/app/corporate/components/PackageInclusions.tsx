import { PackageInclusionsProps } from "@/@types/types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import OpenPopUpBtn from "@/components/buttons/OpenPopUpBtn";
import PackageInclusionsCard from "@/components/cards/PackageInclusionsCard";

const PackageInclusions: React.FC<PackageInclusionsProps> = ({
  title,
  link,
  sections,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-img-2">
      <div className="space-y-6 pb-4">
        <div className="w-[0.5px] bg-primary max-md:h-8 h-16 mx-auto" />
        <SectionHeadingDesc title={title} textcenter />
        <div className="w-[0.5px] bg-primary max-md:h-8 h-16 mx-auto" />
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
      {/* <LinkButton
      label={link.label}
      href={link.href}
      className="text-primary mx-auto w-fit uppercase rounded-none mt-8"
      /> */}
      <OpenPopUpBtn
        label={link.label}
        className="text-primary mt-6 bg-white !rounded-none w-fit! border border-primary uppercase mx-auto"
      />
    </SectionWithContainer>
  );
};

export default PackageInclusions;
