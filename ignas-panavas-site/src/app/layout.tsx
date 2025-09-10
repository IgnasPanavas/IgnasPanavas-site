import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { tinos } from "./fonts";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ignas Panavas",
  description: "Personal Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tinos.className} antialiased`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
