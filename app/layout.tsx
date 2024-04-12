// "use client";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { jura, nunito, oswald, playFair } from "@/util/fonts";
import { AppWrapper } from "@/context/Context";
import Footer from "@/components/footer/Footer";
import MainAppWrapper from "@/components/AppWrapper/MainAppWrapper";

export const metadata: Metadata = {
  title: "COEE - Início",
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
          <MainAppWrapper>
            <div className="p-0 font-nunito">
              <Navbar />
              {children}
              <Footer />
            </div>
          </MainAppWrapper>
        </AppWrapper>
      </body>
    </html>
  );
}
