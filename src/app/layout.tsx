import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700","800"] });

export const metadata: Metadata = {
  title: "Finpoint — Financial Consulting",
  description: "Pixel-perfect landing built from Figma.",
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
