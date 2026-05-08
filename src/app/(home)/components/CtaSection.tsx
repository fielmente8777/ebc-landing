import { LinkButton, SectionWithContainer } from "@/components";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

interface Props {
  title: string;
  subtitle: string;
  description: string[];
  actions: {
    label: string;
    href: string;
  }[];
}
const CtaSection: React.FC<Props> = ({
  title,
  subtitle,
  description,
  actions,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-new-dark">
      <div className="flex flex-col items-center max-w-xl mx-auto gap-5">
        <p className="text-new-secondary uppercase text-[1.375rem] ">{title}</p>
        <SectionHeading2
          title={subtitle}
          textCenter
          wrapperClassName="gap-4"
          description={description[0]}
        />
        <div className="flex max-md:flex-col md:gap-4 gap-1">
          {actions.map((action, index) => (
            <LinkButton
              label={action.label}
              href={action.href}
              key={index}
              className={`mt-4 rounded-sm ${
                index === 0
                  ? "bg-new-secondary text-new-dark border-none"
                  : "bg-transparent text-new-secondary"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default CtaSection;
