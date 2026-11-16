"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, Send } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = navItems.map((item) => item.name.toLowerCase());
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/85 backdrop-blur-md border-b border-lavender-400/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - strictly "Boishakhi" as requested */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-white transition-all duration-300"
          >
            <span className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-charcoal-800 border border-lavender-400/30 group-hover:border-lavender-400 group-hover:shadow-[0_0_15px_rgba(190,157,253,0.5)] transition-all">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-lavender-300 to-white">
                B
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-lavender-400 animate-ping opacity-75" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-lavender-400" />
            </span>
            <span className="tracking-wide text-white group-hover:text-lavender-200 transition-colors">
              Boishakhi
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-charcoal-850/80 px-4 py-1.5 rounded-full border border-lavender-400/15 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-lavender-600/30 shadow-[0_0_12px_rgba(167,113,250,0.3)] border border-lavender-400/40"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-lavender-600 to-lavender-500 hover:from-lavender-500 hover:to-lavender-400 shadow-[0_0_20px_rgba(145,68,242,0.35)] hover:shadow-[0_0_25px_rgba(190,157,253,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let&apos;s Connect</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-charcoal-850 border border-lavender-400/20 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-lavender-300" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 pb-4">
          <div className="p-4 rounded-2xl bg-charcoal-900/95 border border-lavender-400/20 backdrop-blur-xl shadow-2xl space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? "text-white bg-lavender-600/30 border border-lavender-400/30"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-800">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-lavender-600 to-lavender-500"
              >
                <span>Let&apos;s Connect</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
