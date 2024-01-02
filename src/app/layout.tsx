import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import { ContextProvider } from "@/components/context";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galaxy Store",
  description: "Generated by create next app",
  icons:{
    icon:["/favicon.ico?v=4"],
    apple:["apple-touch-icon.png?v=4"]
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <MainHeader />
          <MobileNavbar />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
