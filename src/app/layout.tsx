import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700","800"] });

export const metadata: Metadata = {
  title: "Design Innovation Lab",
  description: "We believe in equipping socially focused organizations (nonprofits, social enterprises, foundations, and schools) with the mindsets, frameworks, and tools to create innovators who impact their communities and the world.",
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
