"use client"
import { usePathname } from "next/navigation";
import LandingFooter from "./LandingFooter";

const RenderFooter = () => {
    const pathName = usePathname();
    const ShowFooter = LandingFooter;
    if (pathName === "/thank-you") {
        return null; // Do not render footer on the thank-you page
    }
    return (
        <div>
            <ShowFooter />
        </div>
    );
}

export default RenderFooter;