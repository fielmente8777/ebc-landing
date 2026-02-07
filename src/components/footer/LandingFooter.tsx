import Image from "next/image";
import { landingFooterData } from "./footerData";
import Link from "next/link";
import { Container } from "../sectionComponents";
import LazyLoadedMap from "../map/LazyLoadedMap";
import { Form, OfferForm } from "../forms";
import { usePathname } from "next/navigation";

const LandingFooter = () => {
  const pathName = usePathname();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="max_screen_width">
      <div className="bg-primary md:py-[104px] py-10">
        <Container>
          <div className="grid lg:grid-cols-8 md:grid-cols-2 grid-cols-1 md:gap-8 gap-6">
            {/* logo and description */}
            <div className="flex flex-col gap-6 md:gap-10 md:col-span-2">
              <div className="relative w-full aspect-[4/2.4] md:max-w-[300px]">
                <Image
                  src={landingFooterData.src}
                  alt={"logo"}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                />
              </div>
              {/* description */}
              <div className="space-y-6">
                <p className="text-white text-[1.375rem] md:max-w-[300px]">
                  {landingFooterData.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {landingFooterData.links.slice(0, 2).map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white text-[1.375rem] ntbook"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="flex gap-4 items-center">
                {landingFooterData.links.slice(2).map((link, index) => (
                  <li key={index}>
                    <Link
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="bg-bg1 text-primary p-2 flex items-center justify-center   border border-bg1 rounded-full hover:scale-95 active:scale-105 hover:text-secondary hover:bg-primary transition duration-200"
                    >
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* map url */}
            <div className="w-full md:h-full max-md:aspect-[4/5.2] md:col-span-3">
              <LazyLoadedMap src={landingFooterData.mapUrl} />
            </div>
            {/* forms */}
            <div className="md:col-span-3">
              <Form />
            </div>
          </div>
          <div className="max-w-sm mx-auto w-full flex gap-6 mt-12 ">
            {landingFooterData.partners.map((partner, index) => (
              <div className="w-full aspect-[4/1.5] relative" key={index}>
                <Image
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
      {/* offer */}
      {pathName !== "/corporate/" && <div className="relative after:absolute after:inset-0 after:bg-bg1 after:z-[-3]">
        <div className=" py-16 bg_img_1">
          <Container>
            <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6">
              <div className="">
                <h2 className="text-primary pUltralight md:text-[2.5rem] text-[1.75rem] text-xl">
                  Stayed with Us Before?
                </h2>
                <p className="text-primary text-[1.375rem]">
                  Want a Secret Deal?
                </p>
              </div>
              <div className="md:col-span-2 max-md:max-w-[300px]">
                <OfferForm />
              </div>
            </div>
          </Container>
        </div>
      </div>}
      {/* developed by info */}
      <div className={`${pathName === "/corporate/" ? "bg-bg1 py-6 text-primary divide-primary" : "bg-primary py-6 text-white divide-white"}`}>
        <Container>
          <div className=" text-[1.2rem] ntbook text-center md:divide-x  flex max-md:gap-3 max-md:flex-col items-center justify-center">
            <span className="px-4">
              © {currentYear} Everest Base Camp, Mussoorie
            </span>
            <span className="px-4">All Rights Reserved</span>
            <span className="px-4">
              Designed & Developed by{" "}
              <Link
                href="https://www.fielmente.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fielmente
              </Link>
              {/* <Link
                href="https://eazotel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eazotel
              </Link> */}
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default LandingFooter;
