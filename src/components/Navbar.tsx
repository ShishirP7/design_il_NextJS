"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // border on scroll
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  // lock body scroll when mobile menu open + close on ESC
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // Smooth scroll helper
  function go(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-colors ${
        scrolled ? "border-b border-slate-200" : ""
      }`}
    >
      <div className="container-section flex h-16 items-center justify-between">
        {/* Logo — smooth-scroll to home (prevent full reload) */}
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="flex items-center gap-2 text-xl font-extrabold"
        >
          <span className="rounded-md bg-[#0c693c] px-2 py-1 text-white">Design</span>
          Innovation Lab
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link
            href="#home"
            onClick={(e) => { e.preventDefault(); go("home"); }}
            className="font-medium text-emerald-900"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={(e) => { e.preventDefault(); go("about"); }}
            className="text-slate-700"
          >
            About us
          </Link>
          <button
            type="button"
            onClick={() => go("team")}
            className="text-slate-700"
          >
            Our team
          </button>
          <Link
            href="#services"
            onClick={(e) => { e.preventDefault(); go("services"); }}
            className="text-slate-700"
          >
            Services
          </Link>
          <Link
            href="#contact"
            onClick={(e) => { e.preventDefault(); go("contact"); }}
            className="text-slate-700"
          >
            Contact us
          </Link>
        </nav>

        {/* Desktop extra link */}
        <Link
          href="#blog"
          onClick={(e) => { e.preventDefault(); go("blog"); }}
          className="hidden text-sm text-slate-600 md:block"
        >
          Blog / News
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          className="md:hidden rounded-md p-2 text-slate-700 hover:bg-slate-100"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile overlay + drawer */}
      {mobileOpen && (
        <>
          {/* Click-outside overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer panel */}
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-16 z-50 overflow-hidden rounded-b-xl border-b border-slate-200 bg-white md:hidden"
          >
            <div className="container-section py-3">
              <nav className="flex flex-col gap-1 text-sm">
                <button
                  type="button"
                  onClick={() => go("home")}
                  className="w-full rounded-md px-3 py-2 text-left font-medium text-emerald-900 hover:bg-slate-50"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => go("about")}
                  className="w-full rounded-md px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
                >
                  About us
                </button>
                <button
                  type="button"
                  onClick={() => go("team")}
                  className="w-full rounded-md px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
                >
                  Our team
                </button>
                <button
                  type="button"
                  onClick={() => go("services")}
                  className="w-full rounded-md px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
                >
                  Services
                </button>
                <button
                  type="button"
                  onClick={() => go("contact")}
                  className="w-full rounded-md px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
                >
                  Contact us
                </button>
                <button
                  type="button"
                  onClick={() => go("blog")}
                  className="mt-1 w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-50"
                >
                  Blog / News
                </button>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
