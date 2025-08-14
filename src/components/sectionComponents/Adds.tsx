import { AddsTypes } from "@/@types/types";
import { Container, Headings, LinkButton, Section } from "@/components";
import Link from "next/link";

const Adds: React.FC<AddsTypes> = ({ title, listOfData, link }) => {
  return (
    <Section
      defaultPadding={false}
      className="relative after:absolute after:inset-0 after:bg-primary after:z-[-3]"
    >
      <div className="w-full bg_img md:py-16 py-8">
        <Container>
          <div className="grid md:grid-cols-5 grid-cols-1 items-center gap-6 md:gap-10 heading">
            <Headings
              level={2}
              className="text-white md:text-[2.5rem] md:col-span-2 pUltralight"
              heading={title}
            />
            <ul className="md:col-span-2 flex flex-col gap-2 text-white list-disc pl-6">
              {listOfData.map((item, index) => (
                <li key={index} className=" text-[1.375rem]">
                  {item}
                </li>
              ))}
            </ul>
            <LinkButton
              label={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-white px-6 py-3 rounded-none md:col-span-1 border border-white flex justify-center items-center hover:bg-white hover:text-primary transition-colors duration-300"
            />
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Adds;
