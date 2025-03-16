import type { Metadata } from "next";
import { Rajdhani, Raleway } from "next/font/google";
import "./globals.scss";
import Header from "./header/Header";
import { CSSProperties } from "react";
import Footer from "./footer/Footer";
import QuickNav from "./quickNav/QuickNav";

const rj = Rajdhani({
  variable: "--fontAlt",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// const raleway =
const raleway = Raleway({
  variable: "--fontMain",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vsekai",
  description: "Vsekai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`body ${rj.className} ${raleway.className}`}
        style={{ "--fontAlt": rj.style.fontFamily } as CSSProperties}
      >
        <Header />
        {children}
        <Footer />
        <QuickNav />
      </body>
    </html>
  );
}
