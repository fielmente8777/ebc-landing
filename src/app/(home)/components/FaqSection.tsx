import { LinkButton, SectionWithContainer } from "@/components";
import Accordion2 from "@/components/accordion/Accordion2";
import OpenPopUpBtn from "@/components/buttons/OpenPopUpBtn";
import NewForm from "@/components/forms/NewForm";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { contact } from "../../../../constant";

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
      containerClassName="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-12"
    >
      <div className="md:space-y-12 space-y-10 ">
        <SectionHeading2 title={title} />
        <div className="max-w-5xl mx-auto">
          {faq.map((item, index) => (
            <Accordion2 key={index} question={item.q} answer={item.a} />
          ))}
        </div>
        {/* <LinkButton
          href={link.href}
          label={link.label}
          className="bg-new-secondary w-fit mx-auto text-new-dark rounded-sm border-none"
          target="_blank"
        /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 w-full">
          <OpenPopUpBtn
            label="GET A CALL BACK"
            className="bg-new-ternary mt-4 text-new-dark rounded-sm border-none"
          />
          <LinkButton
            label="CALL NOW"
            href={"tel:" + contact.call}
            className="bg-new-ternary mt-4 text-new-dark rounded-sm border-none"
          />
        </div>
      </div>
      <div className="max-w-xl w-full ml-auto">
        <NewForm />
      </div>
    </SectionWithContainer>
  );
};

export default FaqSection;
