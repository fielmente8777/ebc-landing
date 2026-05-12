import Image from "next/image";
import { Container } from "../sectionComponents";
import LinkButton from "../buttons/LinkButton";
import { footerData, SocialLinks } from "./footerData";
import Link from "next/link";
import LazyLoadedMap from "../map/LazyLoadedMap";
import { contact } from "../../../constant";

const LandingFooterNew = () => {
  return (
    <footer className="max_screen_width bg-new-bg1">
      <Container>
        <div className="grid md:py-14 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.6fr_1fr] gap-12 md:gap-16">
          <div className=" flex flex-col gap-6 md:max-w-60">
            <div
              className={`relative 
                  w-full aspect-4/1 md:aspect-4/2 `}
            >
              <Image
                src={footerData.logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>

            <LinkButton
              href={footerData.cta.href}
              label={footerData.cta.label}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-full flex justify-center text-white bg-new-secondary uppercase rounded-sm max-md:mx-auto border-none"
            />
            <ul className="flex gap-4 max-md:mx-auto">
              {SocialLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 aspect-square flex items-center justify-center rounded-full border border-new-secondary/60 shadow-inner hover:bg-new-secondary"
                  >
                    <span className="text-white/80">{item.icon}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {footerData.lists.map((list, index) => (
            <div
              className={`${index === 1 ? "lg:w-fit lg:ml-auto" : ""} flex flex-col gap-4 md:gap-6`}
              key={index}
            >
              <h2
                className="md:text-5xl text-white font-eb  text-3xl font-primary"
                dangerouslySetInnerHTML={{ __html: list.title ?? "" }}
              />

              <ul className={`flex flex-col md:gap-2 gap-4`}>
                {list.links.map((item, suIndex) => (
                  <li
                    className={`flex gap-2 ${suIndex === 1 ? "flex-wrap" : ""}`}
                    key={suIndex}
                  >
                    <span
                      className={`mt-1 ${
                        index === 1
                          ? "text-white flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                          : "text-white inline-block"
                      }`}
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </span>
                    {/* {item.title && (
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-aboreto text-2xl my-auto"
                            : "md:text-lg text-white inline-block"
                        }`}
                      >
                        {item.title}
                      </span>
                    )} */}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.href}
                      className="flex gap-2"
                    >
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-mont text-2xl my-auto"
                            : "md:text-lg text-white inline-block"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                    {item.label2 && <span className="text-white -ml-1">,</span>}
                    {item.label2 && item.href2 && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href2}
                        className="flex gap-2 max-md:ml-0"
                      >
                        <span
                          className={`${
                            index === 1
                              ? "text-white font-aboreto text-2xl my-auto"
                              : "md:text-lg text-white"
                          }`}
                        >
                          {item.label2}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-full rounded-sm md:col-span-2 lg:col-span-1 col-span-1 border-[0.5px] border-new-secondary/60 overflow-hidden max-lg:aspect-4/3">
            <LazyLoadedMap src={contact.mapUrl} />
          </div>
        </div>
      </Container>
      <div className="bg-white h-0.5 w-full max_width" />
      <Container className="py-4 flex max-lg:flex-col items-center gap-3.5 justify-between">
        <div className="lg:flex max-md:space-x-2 text-center flex-wrap items-center justify-center gap-2 text-white md:text-lg">
          {" "}
          <span className="text-white">
            © {new Date().getFullYear()} EBC Mussoorie — Everest Base Camp
            Mussoorie.
          </span>
          <span className="lg:block hidden">|</span>
          <span className="text-white">All Rights Reserved</span>
          {/* <span className="md:block hidden">|</span> */}
        </div>
        <p className="text-white!">
          Powered by{" "}
          <Link
            href="https://www.fielmente.com/"
            className="font-bold"
            target="_blank"
          >
            Fielmente
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default LandingFooterNew;
