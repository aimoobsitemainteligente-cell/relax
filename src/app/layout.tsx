import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { PopupNewsletter } from "@/components/ui/PopupNewsletter";
import { PopupCookies } from "@/components/ui/PopupCookies";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Relax Sexshop",
  description: "A sua loja mais íntima.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${urbanist.variable}`}>
      <body>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <MobileBottomNav />
        <PopupNewsletter />
        <PopupCookies />
      </body>
    </html>
  );
}
