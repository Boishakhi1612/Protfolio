"use client";

import React from "react";
import { User, BookOpen, Target, Sparkles, Layers, Cpu, Compass } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: <BookOpen className="w-5 h-5 text-lavender-300" />,
      title: "Diploma in CST",
      description:
        "Building a solid academic base in computer science, software logic, system architectures, and database design.",
    },
    {
      icon: <Layers className="w-5 h-5 text-lavender-300" />,
      title: "Web Development Passion",
      description:
        "Actively diving into frontend and full-stack development, translating ideas into interactive and accessible experiences.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-lavender-300" />,
      title: "Logical Problem Solving",
      description:
        "Practicing code writing with Python, JavaScript, and TypeScript to sharpen analytical and algorithmic thinking.",
    },
    {
      icon: <Target className="w-5 h-5 text-lavender-300" />,
      title: "Continuous Growth",
      description:
        "Committed to consistent improvement, tracking daily progress via Git, and exploring cutting-edge developer workflows.",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-850 border border-lavender-400/20 text-xs font-semibold text-lavender-300 uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Crafting the future with <span className="lavender-gradient-text">curiosity &amp; code</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Get to know my journey, my mindset, and my pursuit of technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl space-y-6 border border-lavender-400/20 shadow-xl">
            <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
              <span className="w-3 h-3 rounded-full bg-lavender-400" />
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="text-xs text-zinc-500 font-mono ml-auto">about.me</span>
            </div>

            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Hello! My name is <strong className="text-white font-semibold">Boishakhi</strong>. I am currently studying for a{" "}
                <span className="text-lavender-200 font-medium">Diploma in Computer Science &amp; Technology</span>. From the moment I wrote my first line of code, I discovered a genuine enthusiasm for how lines of logic can turn into engaging digital interfaces.
              </p>
              <p>
                Right now, I am dedicatedly learning <strong className="text-white font-medium">web development</strong>. I focus on understanding the building blocks from the ground up: HTML for semantic structure, CSS for elegant styling, JavaScript and TypeScript for dynamic interactivity, and Python and SQL for core programming logic and data handling.
              </p>
              <p>
                My philosophy is straightforward: Stay humble, write clean and maintainable code, practice consistently, and never stop learning. I love experimenting with new web interfaces and seeing how design and technology converge.
              </p>
            </div>

            {/* Quick Personal Attributes */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-charcoal-900/80 border border-lavender-400/10">
                <span className="text-xs uppercase text-zinc-500 font-semibold block">Education</span>
                <span className="text-sm font-semibold text-white mt-1 block">Diploma in CST</span>
              </div>
              <div className="p-4 rounded-2xl bg-charcoal-900/80 border border-lavender-400/10">
                <span className="text-xs uppercase text-zinc-500 font-semibold block">Passion</span>
                <span className="text-sm font-semibold text-white mt-1 block">Web Development</span>
              </div>
              <div className="p-4 rounded-2xl bg-charcoal-900/80 border border-lavender-400/10 col-span-2 sm:col-span-1">
                <span className="text-xs uppercase text-zinc-500 font-semibold block">Status</span>
                <span className="text-sm font-semibold text-lavender-300 mt-1 block flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Open to Learn &amp; Build
                </span>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-lavender-400/15 flex items-start gap-4 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-charcoal-800 border border-lavender-400/25 flex items-center justify-center shrink-0 shadow-md">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
