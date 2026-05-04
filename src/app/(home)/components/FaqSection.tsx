import { LinkButton, SectionWithContainer } from "@/components";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";

interface Props {
  title: string;
  faq: {
    q: string;
    a: string;
  }[];
  link: {
    label: string;
    href: string;
  };
}

const FaqSection: React.FC<Props> = ({ title, faq, link }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-new-bg1"
      containerClassName="md:space-y-12 space-y-10"
    >
      <SectionHeading2 title={title} textCenter />
      <div className="max-w-5xl mx-auto">
        {faq.map((item, index) => (
          <Accordion2 key={index} question={item.q} answer={item.a} />
        ))}
      </div>
      <LinkButton
        href={link.href}
        label={link.label}
        className="bg-new-secondary w-fit mx-auto text-new-dark rounded-sm border-none"
        target="_blank"
      />
    </SectionWithContainer>
  );
};

export default FaqSection;
