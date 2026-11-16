"use client";

import React from "react";
import { GraduationCap, Calendar, Award, BookCheck, Terminal, Laptop, Code2 } from "lucide-react";

export default function EducationSection() {
  const academicHighlights = [
    {
      title: "Core Computer Science Fundamentals",
      desc: "Data structures, algorithms, computer architecture, and computational problem solving.",
    },
    {
      title: "Software & Web Development Practices",
      desc: "Structured programming, frontend interfaces, modular code architecture, and version control.",
    },
    {
      title: "Relational Databases & SQL",
      desc: "Database design, SQL querying, schema normalization, and relational data management.",
    },
    {
      title: "Operating Systems & Networking",
      desc: "System commands, network protocols, shell environments, and hardware-software interaction.",
    },
  ];

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-850 border border-lavender-400/20 text-xs font-semibold text-lavender-300 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="lavender-gradient-text">Learning Journey</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Formal technical education combined with practical, continuous self-directed web development.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-lavender-400/20 relative overflow-hidden shadow-2xl">
          {/* Subtle accent light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-lavender-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Degree Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender-600/20 border border-lavender-400/30 text-xs font-semibold text-lavender-200">
                <Calendar className="w-3.5 h-3.5" />
                <span>Currently Enrolled / Active Studies</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Diploma in Computer Science &amp; Technology (CST)
                </h3>
                <p className="text-lavender-300 font-medium text-base">
                  Technical &amp; Engineering Education
                </p>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Currently pursuing a comprehensive diploma program in Computer Science &amp; Technology. The curriculum emphasizes both theoretical computer science foundations and hands-on laboratory programming.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-charcoal-850 text-lavender-200 border border-lavender-400/20">
                  Computer Science
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-charcoal-850 text-lavender-200 border border-lavender-400/20">
                  Programming Logic
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-charcoal-850 text-lavender-200 border border-lavender-400/20">
                  Database Systems
                </span>
              </div>
            </div>

            {/* Academic Highlights & Key Focus */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                <BookCheck className="w-4 h-4 text-lavender-400" />
                <span>Key Competencies &amp; Coursework Areas</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {academicHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-charcoal-900/90 border border-lavender-400/10 hover:border-lavender-400/30 transition-colors space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-lavender-500/15 flex items-center justify-center text-lavender-300 text-xs font-bold font-mono">
                      0{idx + 1}
                    </div>
                    <h5 className="text-sm font-bold text-white">{item.title}</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Personal Commitment Quote */}
              <div className="p-4 rounded-2xl bg-charcoal-850/60 border border-lavender-400/15 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-lavender-600/20 flex items-center justify-center text-lavender-300 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-xs text-zinc-300 italic">
                  &ldquo;Combining academic discipline from CST with self-driven curiosity to create impact through web technologies.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
