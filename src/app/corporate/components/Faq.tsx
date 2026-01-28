import { FaqTypes } from "@/@types/types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import Accordion from "@/components/accordion/Accordion";

const Faq: React.FC<FaqTypes> = ({ title, list: faqs }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-bg1"
      containerClassName="space-y-8 md:space-y-14 py-8 "
    >
      <SectionHeadingDesc title={title} textcenter />
      <div className="border-t-[0.5px] border-b-[0.5px] first:border-t-[0.5px] border-primary divide-y divide-primary max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </SectionWithContainer>
  );
};
export default Faq;
