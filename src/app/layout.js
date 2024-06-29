import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "./(components)/(Navbar)/Navbar";
import { Footer } from "./(components)/(Footer)/Footer";
import { GoogleTranslate } from "./google-translate";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fragile Planet Wildlife Park",
  description: "Fragile Planet Wildlife Park",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/09c2dac4bc.js" crossOrigin="anonymous" />
      <body className={inter.className}>
        <Navbar />
    {/* <GoogleTranslate /> */}
        {children}
        <Footer />
        <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"></Script>
      </body>
    </html>
  );
}
