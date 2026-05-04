import { usePathname } from "next/navigation";
import { Section } from "../sectionComponents";
import SlidingTitle from "./SlidingTitle";

const ShowSlidingTitle: React.FC<{ title: string[] }> = ({ title }) => {
  const pathName = usePathname();
  title = [...title, ...title];
  if (pathName === "/") {
    return (
      <Section defaultPadding={false}>
        <SlidingTitle items={title} wrapperClassName="text-sm" />
      </Section>
    );
  } else {
    return null;
  }
};

export default ShowSlidingTitle;
