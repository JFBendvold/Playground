"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold text-eu-blue">
              Trade for Europe
            </span>
          </a>
          <nav className="flex items-center gap-6">
            <a
              href="#categories"
              className="text-sm font-medium text-gray-600 hover:text-eu-blue transition-colors"
            >
              Browse
            </a>
            <a
              href="#footer"
              className="text-sm font-medium text-gray-600 hover:text-eu-blue transition-colors"
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
