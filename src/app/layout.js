import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "./(components)/(Navbar)/Navbar";
import { Footer } from "./(components)/(Footer)/Footer";
import Script from "next/script";
import dynamic from "next/dynamic";
import { ModalProvider } from "./context/ModalContext";
import HiddenModal from "./(components)/HiddenModal/HiddenModal";
const LanguageProvider = dynamic(() => import("./context/LanguageContext"), { ssr: false });

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
        <LanguageProvider>
          <ModalProvider>
            <Navbar />
            <HiddenModal />
              {children}
            <Footer />
          </ModalProvider>
        </LanguageProvider>
        <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"></Script>
      </body>
    </html>
  );
}
