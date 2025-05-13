import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import { app } from "@/lib/firebase";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoFilament",
  description: "Filamentos sustentables y personalizables para impresión 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {app.options.measurementId && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${app.options.measurementId}`}
            strategy="afterInteractive"
          />
        )}
        {app.options.measurementId && (
          <Script id="firebase-gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${app.options.measurementId}');
            `}
          </Script>
        )}
        <Script
          id="hotjar-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6391129,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
        id="main-body"
      >
        <div id="mobile-menu-root"></div>
        <Header />
        <div id="layout-shift-wrapper">
          <main id="main-content-wrapper">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
