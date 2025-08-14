import { WhyEbcTypes } from "@/@types/types";

const WhyEBCCard: React.FC<WhyEbcTypes["cards"][0]> = ({ icon, title }) => {
  return (
    <div className="flex flex-col box-shadow items-center justify-center md:py-10 md:px-6 py-4 px-2 bg-[#FCFCF9] border border-primary">
      <div className="">{icon}</div>
      <h3 className="mt-2 text-primary text-2xl pUltralight ">{title}</h3>
    </div>
  );
};

export default WhyEBCCard;
