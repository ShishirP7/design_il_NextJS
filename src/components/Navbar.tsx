"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const on = () => setScrolled(window.scrollY > 8); on(); window.addEventListener("scroll", on); return () => window.removeEventListener("scroll", on); }, []);

  return (
    <header className={`sticky top-0 z-40 bg-white ${scrolled ? "border-b border-slate-200" : ""}`}>
      <div className="container-section flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-xl">
          <span className="rounded-md bg-[#0c693c] px-2 py-1 text-white">Design</span>Innovation Lab
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="#" className="text-emerald-900 font-medium">Home</Link>
          <Link href="#" className="text-slate-700">About us</Link>
          <div className="flex items-center gap-1 text-slate-700">
            <span>Pages</span><ChevronDown className="h-4 w-4" />
          </div>
          <Link href="#" className="text-slate-700">Services</Link>
          <Link href="#" className="text-slate-700">Contact us</Link>
        </nav>
        <div className="hidden text-sm text-slate-600 md:block">Blog / News</div>
      </div>
    </header>
  );
}
