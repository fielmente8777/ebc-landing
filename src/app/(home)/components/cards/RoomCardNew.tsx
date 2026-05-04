import { AccommodationsTypes } from "@/@types/types";
import { LinkButton } from "@/components";
import RoomCardImgSlider from "../sliders/RoomCardImgSlider";

const RoomCardNew: React.FC<AccommodationsTypes["items"][0]> = ({
  category,
  title,
  description,
  images,
  price,
  link,
  details,
}) => {
  return (
    <div className="flex flex-col h-full w-full rounded-sm overflow-hidden">
      <RoomCardImgSlider images={images} title={title} category={category} />
      <div className="py-5 px-3.5 grid grid-rows-[auto_auto_3fr_auto_auto] rounded-sm auto-rows-fr gap-6 border-b-[0.5px] border-x-[0.5px] border-new-secondary/60">
        <p className="text-white font-primary text-3xl">{title}</p>
        <ul className="flex items-center justify-between gap-1 border border-new-secondary/60 py-2 md:px-4 px-2">
          {details.map((item, index) => (
            <li
              key={index}
              className="flex gap-2 items-center md:text-sm text-[11px] text-white/80"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <p className="text-white text-base grid-rows-2">{description}</p>
        <p className="text-new-secondary font-primary text-[1.375rem]">
          {price}
        </p>
        <LinkButton
          label={link.label}
          href={link.href}
          className="bg-new-secondary border-none rounded-sm text-new-dark"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
};

export default RoomCardNew;
