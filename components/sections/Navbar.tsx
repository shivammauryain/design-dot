"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-md py-3" : "py-4"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/demo-demo-icon-139882881 1.png"
            alt="Demo Logo"
            width={52}
            height={52}
            className="object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-bold tracking-wide text-textDark hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <button
            className="text-textDark hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1 cursor-pointer text-[13px] font-bold text-textDark hover:text-primary transition-colors">
            IND <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer text-[13px] font-bold text-textDark hover:text-primary transition-colors">
            ENGLISH <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        <button
          className="lg:hidden text-textDark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg py-4 px-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-textDark py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-4">
              <span className="font-bold text-sm text-textDark flex items-center gap-1">
                IND <ChevronDown className="w-4 h-4" />
              </span>
              <span className="font-bold text-sm text-textDark flex items-center gap-1">
                ENGLISH <ChevronDown className="w-4 h-4" />
              </span>
            </div>
            <Search className="w-5 h-5 text-textDark" />
          </div>
        </div>
      )}
    </header>
  );
}
