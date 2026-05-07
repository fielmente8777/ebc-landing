import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  nextTab?: boolean;
  [key: string]: unknown;
}
const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  nextTab = true,
  className = "",
  ...props
}) => {
  return (
    <Link
      href={href}
      {...props}
      target={nextTab ? "_blank" : "_self"}
      rel="noreferrer"
      className={`tracking-wider transition-all rounded-lg gap-1 max-md:w-full flex items-center justify-center font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3  ${className}`}
      dangerouslySetInnerHTML={{ __html: label }}
    ></Link>
  );
};

export default LinkButton;
