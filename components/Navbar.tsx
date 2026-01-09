"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#events", label: "Events" },
    { href: "/food-bank", label: "Food Bank" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/10 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/#home" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="YFRC Logo" width={48} height={48} className="rounded" />
          <span className="font-semibold tracking-tight">Youth Friendly Resource Center, UNN</span>
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-black/10 dark:border-white/15"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="font-bold hover:text-emerald-600 transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10">
          <ul className="max-w-7xl mx-auto px-6 py-3 grid gap-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 font-bold hover:text-emerald-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}


