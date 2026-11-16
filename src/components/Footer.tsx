"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-charcoal-950 border-t border-lavender-400/15 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-lavender-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand - strictly "Boishakhi" */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-charcoal-850 border border-lavender-400/30 flex items-center justify-center font-bold text-white text-sm">
            B
          </div>
          <div>
            <span className="text-base font-bold text-white tracking-wide">
              Boishakhi
            </span>
            <p className="text-xs text-zinc-500">
              Web Development Learner &amp; CST Student
            </p>
          </div>
        </div>

        {/* Quick Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
          <a href="#home" className="hover:text-lavender-300 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-lavender-300 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-lavender-300 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-lavender-300 transition-colors">
            Projects
          </a>
          <a href="#education" className="hover:text-lavender-300 transition-colors">
            Education
          </a>
          <a href="#contact" className="hover:text-lavender-300 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right side: Socials & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Boishakhi1612"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg bg-charcoal-850 border border-lavender-400/15 text-zinc-400 hover:text-white hover:border-lavender-400/40 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/boishakhi-sultana-50174839a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg bg-charcoal-850 border border-lavender-400/15 text-zinc-400 hover:text-white hover:border-lavender-400/40 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:boishakhisultana62@gmail.com"
            aria-label="Email"
            className="p-2 rounded-lg bg-charcoal-850 border border-lavender-400/15 text-zinc-400 hover:text-white hover:border-lavender-400/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-charcoal-850 border border-lavender-400/30 text-lavender-300 hover:text-white hover:bg-lavender-600/30 transition-all ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-900/80 text-center text-xs text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} Boishakhi. Crafted with Charcoal, Lavender &amp; Code.
        </p>
      </div>
    </footer>
  );
}
