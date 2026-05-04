"use client";
import { usePathname } from "next/navigation";
import LandingFooter from "./LandingFooter";
import LandingFooterNew from "./LandingFooterNew";

const RenderFooter = () => {
  const pathName = usePathname();
  if (pathName === "/thank-you") {
    return null; // Do not render footer on the thank-you page
  }
  if (pathName === "/") {
    return <LandingFooterNew />;
  } else {
    return <LandingFooter />;
  }
};

export default RenderFooter;
