import type { Metadata } from "next";
import "./globals.css";
import "./style.scss";
import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { contact } from "../../constant";
import { Navbar, RenderFooter } from "@/components";


export const metadata: Metadata = {
  title: "Camping in Mussoorie | Glamping near Dehradun - EBC Mussoorie",
  description:
    "EBC Mussoorie is the best luxury resorts in mussoorie. We are offering camping in near mussorie, dehradun, rishikesh, dehradun and near Delhi. Visit our Property!",

  alternates: {
    canonical: "https://ebcmussoorie.com",
  },

  openGraph: {
    title: "Camping in Mussoorie | Glamping near Dehradun - EBC Mussoorie",
    description:
      "EBC Mussoorie is the best luxury resorts in mussoorie. We are offering camping in near mussorie, dehradun, rishikesh, dehradun and near Delhi. Visit our Property!",
    url: "https://ebcmussoorie.com",
    siteName: "EBC Mussoorie",
    images: [
      {
        url: "https://ebcmussoorie.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EBC Mussoorie",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <RenderFooter />
        <Call callNumber={contact.phoneNumber} />
        <Whatsapp whatsAppNumber={contact.phoneNumber} />
      </body>
    </html>
  );
}
