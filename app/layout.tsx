import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { jura, nunito, oswald, playFair } from "@/util/fonts";
import { AppWrapper } from "@/context/Context";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COE - Início",
  description: "Colegiado do Curso da Engenharia Elétrica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${nunito} ${jura} ${playFair} ${oswald} main`}>
        <AppWrapper>
          <div className="p-0 font-nunito">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AppWrapper>
      </body>
    </html>
  );
}
