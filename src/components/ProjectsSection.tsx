"use client";

import React from "react";
import { FolderGit2, ExternalLink, Github, Code, Sparkles, Clock, PlusCircle } from "lucide-react";

export default function ProjectsSection() {
  const projectPlaceholders = [
    {
      id: "01",
      title: "Interactive Web Application",
      status: "In Development",
      category: "Frontend Showcase",
      description:
        "A planned responsive web application showcasing dynamic user interfaces, modern DOM manipulation, and responsive design systems.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      slotReady: true,
    },
    {
      id: "02",
      title: "Responsive Dashboard UI",
      status: "Upcoming Project",
      category: "UI / UX Design",
      description:
        "A clean and modern analytical dashboard template built with type safety, clean component hierarchy, and sleek dark mode.",
      tech: ["TypeScript", "CSS / Tailwind", "HTML"],
      slotReady: true,
    },
    {
      id: "03",
      title: "Data Management & Query System",
      status: "In Planning",
      category: "Database & Backend",
      description:
        "An upcoming project focusing on relational database schemas, structured SQL queries, data retrieval, and data visualization.",
      tech: ["SQL", "Python", "Database"],
      slotReady: true,
    },
    {
      id: "04",
      title: "Python Automation & Logic Utility",
      status: "Slot Reserved",
      category: "Scripting & Algorithms",
      description:
        "A practical algorithm and scripting showcase focused on solving real-world data processing tasks and computational problems.",
      tech: ["Python", "Git", "VS Code"],
      slotReady: true,
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-850 border border-lavender-400/20 text-xs font-semibold text-lavender-300 uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work in <span className="lavender-gradient-text">Progress &amp; Prototypes</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Curated project showcases reserved for upcoming web applications, code prototypes, and software solutions.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectPlaceholders.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl border border-lavender-400/15 overflow-hidden group transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual Preview / Geometric Wireframe Placeholder */}
              <div className="relative h-52 sm:h-56 bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-charcoal-800 p-6 flex flex-col justify-between border-b border-zinc-800 overflow-hidden">
                {/* Subtle geometric grid background */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #be9dfd 1px, transparent 1px), linear-gradient(to bottom, #be9dfd 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Ambient glow in corner */}
                <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-lavender-600/20 blur-3xl pointer-events-none group-hover:bg-lavender-500/30 transition-all duration-500" />

                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-lavender-300/80 tracking-widest">
                    PROJECT #{project.id}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-charcoal-950/80 text-lavender-200 border border-lavender-400/20 shadow-sm backdrop-blur-sm">
                    <Clock className="w-3 h-3 text-lavender-400" />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Center Wireframe Box Icon */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-charcoal-850/90 border border-lavender-400/30 flex items-center justify-center text-lavender-300 shadow-lg group-hover:scale-110 group-hover:border-lavender-400 transition-all duration-300">
                    <Code className="w-7 h-7" />
                  </div>
                  <span className="text-xs text-zinc-400 font-mono tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Placeholder Banner */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>STATUS: EMPTY / READY FOR DEPLOY</span>
                  <span className="text-lavender-300/80">PREVIEW PENDING</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-lavender-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-charcoal-900 text-zinc-300 border border-lavender-400/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-lavender-400" />
                      <span>Slot ready to link code</span>
                    </span>

                    <a
                      href="https://github.com/Boishakhi1612"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-lavender-300 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repository Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-panel border border-lavender-400/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-lg font-bold text-white">Want to follow my code commits?</h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Check out my GitHub repository to see my daily coding activity, experiments, and exercises.
            </p>
          </div>
          <a
            href="https://github.com/Boishakhi1612"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-charcoal-800 hover:bg-charcoal-700 border border-lavender-400/30 hover:border-lavender-400 shadow-md hover:shadow-[0_0_20px_rgba(190,157,253,0.3)] transition-all shrink-0"
          >
            <Github className="w-4 h-4 text-lavender-300" />
            <span>github.com/Boishakhi1612</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
