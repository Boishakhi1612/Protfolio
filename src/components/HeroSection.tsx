"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Terminal, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Introduction & Details */}
        <div className="lg:col-span-7 text-center lg:text-left z-10 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-charcoal-850/90 border border-lavender-400/25 shadow-[0_0_15px_rgba(167,113,250,0.15)] backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lavender-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lavender-400"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-lavender-200">
              Web Development Learner &amp; CST Student
            </span>
          </div>

          {/* Main Heading - strictly "Boishakhi" */}
          <div className="space-y-2">
            <p className="text-zinc-400 font-medium text-lg sm:text-xl">
              Hello there! I am
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
              <span className="lavender-gradient-text drop-shadow-[0_4px_24px_rgba(190,157,253,0.3)]">
                Boishakhi
              </span>
            </h1>
          </div>

          {/* Subtitle / Bio */}
          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            I am passionate about learning and building for the modern web. Currently pursuing my{" "}
            <span className="text-white font-medium border-b border-lavender-400/40">
              Diploma in Computer Science &amp; Technology
            </span>{" "}
            and leveling up my skills every single day to craft intuitive, responsive, and delightful user experiences.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-lavender-600 via-lavender-500 to-lavender-600 hover:from-lavender-500 hover:to-lavender-400 shadow-[0_0_25px_rgba(167,113,250,0.45)] hover:shadow-[0_0_35px_rgba(190,157,253,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-medium text-zinc-200 bg-charcoal-800/80 hover:bg-charcoal-700/80 border border-lavender-400/20 hover:border-lavender-400/50 hover:text-white transition-all duration-200 shadow-md backdrop-blur-md"
            >
              <Mail className="w-4 h-4 text-lavender-300" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social links & quick stats */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              Connect With Me:
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Boishakhi1612"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-charcoal-850 hover:bg-lavender-600/20 border border-lavender-400/20 hover:border-lavender-400/60 text-zinc-300 hover:text-lavender-200 hover:shadow-[0_0_15px_rgba(190,157,253,0.3)] transition-all"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/boishakhi-sultana-50174839a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-charcoal-850 hover:bg-lavender-600/20 border border-lavender-400/20 hover:border-lavender-400/60 text-zinc-300 hover:text-lavender-200 hover:shadow-[0_0_15px_rgba(190,157,253,0.3)] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:boishakhisultana62@gmail.com"
                aria-label="Email Me"
                className="p-2.5 rounded-xl bg-charcoal-850 hover:bg-lavender-600/20 border border-lavender-400/20 hover:border-lavender-400/60 text-zinc-300 hover:text-lavender-200 hover:shadow-[0_0_15px_rgba(190,157,253,0.3)] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image with glowing frame & floating badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10">
          <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
            {/* Ambient radiant glow rings */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-lavender-600/40 via-lavender-400/20 to-purple-800/40 rounded-3xl blur-2xl opacity-60 animate-pulse-slow pointer-events-none" />

            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-lavender-400/40 via-lavender-600/30 to-purple-600/40 p-[2px] shadow-[0_0_35px_rgba(167,113,250,0.3)]">
              <div className="w-full h-full rounded-[22px] bg-charcoal-900/90" />
            </div>

            {/* Profile image container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-lavender-400/30 bg-charcoal-900 shadow-2xl group">
              <Image
                src="/profile.png"
                alt="Boishakhi"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 300px, 400px"
              />

              {/* Subtle glass gradient vignette on bottom of image */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal-950 via-charcoal-900/60 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
                <span className="font-medium text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Learner
                </span>
                <span className="text-lavender-300">Ready to build</span>
              </div>
            </div>

            {/* Floating Floating Badge 1: CST Student */}
            <div className="absolute -top-5 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl glass-panel shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex items-center gap-2.5 animate-float border border-lavender-400/30">
              <div className="w-8 h-8 rounded-lg bg-lavender-500/20 flex items-center justify-center text-lavender-300">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                  Program
                </p>
                <p className="text-xs font-semibold text-white">Diploma in CST</p>
              </div>
            </div>

            {/* Floating Floating Badge 2: Web Dev Enthusiast */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl glass-panel shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex items-center gap-2.5 animate-float border border-lavender-400/30"
              style={{ animationDelay: "2s" }}
            >
              <div className="w-8 h-8 rounded-lg bg-lavender-500/20 flex items-center justify-center text-lavender-300">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                  Focus
                </p>
                <p className="text-xs font-semibold text-white">Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
