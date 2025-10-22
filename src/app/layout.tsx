import { Navbar, RenderFooter } from "@/components";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import type { Metadata } from "next";
import Script from "next/script";
import { contact } from "../../constant";
import "./globals.css";
import "./style.scss";
import Call from "@/components/ContactButton/Call";

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
      <head>
        <meta
          name="google-site-verification"
          content="vKQyk75wG0kfB4x60GCRAmVeErtPS9rgcM9-YNRAvLw"
        />
        {/* Pagesense Script */}
        <Script
          id="pagesense-script"
          strategy="lazyOnload"
          src="https://cdn-in.pagesense.io/js/everestbasecamp/3adab655c63f4325a1ea20ce11472e97.js"
        ></Script>

        {/* Zoho Script */}
        {/* <Script id="zoho-script" strategy="lazyOnload">
          {`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siq4bc7d026b8b5ab8b6663b74417f0678eeb748dabce26466abbf4b7a2765b5550"
        ></Script> */}

        {/* <Script
          type="text/javascript"
          strategy="afterInteractive"
          id="zsiqscript"
        >
          {`var $zoho= $zoho ||  {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"siq4bc7d026b8b5ab8b6663b74417f0678eeb748dabce26466abbf4b7a2765b5550", values:{},ready:function(){$zoho.salesiq.floatbutton.visible("");}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`}
        </Script> */}
        {/* Clarity Script */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "n65gwfsc82");
            `,
          }}
        />

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PVZG7NGGMG"
        ></Script>
        <Script
          id="google-analytics-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PVZG7NGGMG');
        `,
          }}
        />

        <Script
          id="google-tag-manager-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T36V8385');
            `,
          }}
        />

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          id="google-tag-manager-script"
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10892529660"
        ></Script>
        <Script
          id="google-analytics-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
         window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-10892529660');
        `,
          }}
        />
      </head>
      <body className={`antialiased`} suppressHydrationWarning={true}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T36V8385"
            height="0"
            width="0"
            title="Google Tag Manager (noscript)"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <RenderFooter />
        <Call callNumber={contact.phoneNumber} />
        <Whatsapp whatsAppNumber={contact.phoneNumber} />
        <Script id="chatbot" strategy="beforeInteractive">
          {`window.eazbotConfig = {
            ndid: "e53a0946-ed31-455f-b278-37aa1b0c8c00",
            hid: "56369483",
          };`}
        </Script>
        <Script src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"></Script>
      </body>
    </html>
  );
}
