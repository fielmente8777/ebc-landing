interface SectionHeadingDescProps {
  title?: string;
  subTitle?: string;
  description?: string;
  descriptionColor?: string;
  textCenter?: boolean;
  titleColor?: string;
  subTitleColor?: string;
  smTextCenter?: boolean;
  wrapperClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  descriptionClassName?: string;
}

export const SectionHeading2: React.FC<SectionHeadingDescProps> = ({
  title,
  subTitle,
  description,
  descriptionColor,
  textCenter = false,
  titleColor,
  subTitleColor,
  smTextCenter = false,
  wrapperClassName = "",
  titleClassName = "",
  subTitleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <div className={`flex flex-col w-full gap-4 heading2 ${wrapperClassName}`}>
      {title && (
        <h2
          className={`${
            titleClassName
          } ${textCenter ? "text-center mx-auto" : ""} ${
            smTextCenter ? "max-md:text-center" : ""
          } ${titleColor ? `text-${titleColor}` : "text-white"} md:text-5xl font-primary tracking-wider text-[2rem]`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {subTitle && (
        <h3
          className={`${
            subTitleClassName
          } ${textCenter ? "text-center mx-auto" : ""} ${
            smTextCenter ? "max-md:text-center" : ""
          } ${subTitleColor ? `text-${subTitleColor}` : "text-primary"} md:text-3xl text-[1.5rem]`}
        >
          {subTitle}
        </h3>
      )}
      {description && (
        <p
          className={`${
            descriptionClassName
          } ${textCenter ? "text-center mx-auto" : ""} ${
            smTextCenter ? "max-md:text-center" : ""
          } ${descriptionColor ? `text-${descriptionColor}` : "text-white/90"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
