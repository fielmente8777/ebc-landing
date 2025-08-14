"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "../../../constant";
import { useEffect, useState } from "react";
import { Container } from "../sectionComponents";

const Navbar = () => {
  const pathName = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        setNavbarColor(true);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navbarColor ? "sticky bg-primary" : "fixed bg-transparent"}`}
    >
      <Container className="px-4">
        <div className="flex items-center justify-between lg:py-6 py-4">
          <Link
            href="/"
            className="relative max-w-[8rem] w-full aspect-[4/2] lg:-mr-20"
          >
            <Image
              src={`/logo.webp`}
              fill
              className="object-contain"
              alt="logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
          <Link
            href={contact.ctaUrl}
            className="flex items-center justify-center gap-2 text-primary bg-white px-6 py-4 hover:bg-light md:text-lg pUltralight hover:text-white transition-colors duration-300"
          >
            <span className="md:block hidden">
              BOOK YOUR MOUNTAIN{" "}
              <span className="pultralight-italic">ESCAPE</span>
            </span>
            <span className="md:hidden block pUltralight">BOOK NOW</span>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
