import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const satisfy = localFont({
  src: "../fonts/SatisfyRegular.ttf",
  variable: "--font-satisfy",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Car Dealer App",
  description: "Test assessment created by Dude",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satisfy.variable} antialiased flex flex-col justify-between min-h-screen`}
      >
        <Header />
        <main className="container flex-1 flex flex-col bg-gray-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
