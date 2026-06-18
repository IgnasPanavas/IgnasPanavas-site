import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ignas Panavas",
  description: "Ignas Panavas — building at the intersection of code and capital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
