"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, Code2, Database, Wrench } from "lucide-react";

// Strictly the 9 skills specified by the user:
// HTML, CSS, JavaScript, Python, TypeScript, SQL, Git, GitHub, VS Code
const skillsData = [
  {
    name: "HTML",
    category: "frontend",
    categoryLabel: "Web Frontend",
    level: "Semantic Structure & Accessibility",
    iconColor: "from-orange-500/20 to-amber-500/10 text-orange-400 border-orange-500/30",
    badge: "Markup",
    description: "Building well-structured, modern semantic layouts for web applications.",
  },
  {
    name: "CSS",
    category: "frontend",
    categoryLabel: "Web Frontend",
    level: "Styling & Responsive Layouts",
    iconColor: "from-blue-500/20 to-sky-500/10 text-blue-400 border-blue-500/30",
    badge: "Styling",
    description: "Flexbox, Grid, transitions, responsive UI design and animations.",
  },
  {
    name: "JavaScript",
    category: "frontend",
    categoryLabel: "Web Frontend",
    level: "Dynamic DOM & ES6+ Logic",
    iconColor: "from-yellow-500/20 to-amber-400/10 text-yellow-300 border-yellow-500/30",
    badge: "Interactive",
    description: "Event handling, asynchronous JS, DOM manipulation, functional logic.",
  },
  {
    name: "TypeScript",
    category: "languages",
    categoryLabel: "Programming & Data",
    level: "Type-Safe Web Programming",
    iconColor: "from-blue-600/20 to-indigo-600/10 text-sky-400 border-blue-400/30",
    badge: "Type Safety",
    description: "Interfaces, type inference, component contracts and predictable code.",
  },
  {
    name: "Python",
    category: "languages",
    categoryLabel: "Programming & Data",
    level: "Problem Solving & Scripting",
    iconColor: "from-emerald-500/20 to-teal-500/10 text-emerald-300 border-emerald-400/30",
    badge: "Language",
    description: "Core algorithms, data structures, automation and backend foundations.",
  },
  {
    name: "SQL",
    category: "languages",
    categoryLabel: "Programming & Data",
    level: "Relational Queries & Schemas",
    iconColor: "from-cyan-500/20 to-blue-500/10 text-cyan-300 border-cyan-400/30",
    badge: "Database",
    description: "Database querying, relational table design, joins, and data retrieval.",
  },
  {
    name: "Git",
    category: "tools",
    categoryLabel: "Tools & Workflow",
    level: "Distributed Version Control",
    iconColor: "from-red-500/20 to-orange-500/10 text-red-400 border-red-400/30",
    badge: "VCS",
    description: "Branching, committing, staging, conflict resolution, clean commit history.",
  },
  {
    name: "GitHub",
    category: "tools",
    categoryLabel: "Tools & Workflow",
    level: "Collaborative Code Hosting",
    iconColor: "from-purple-500/20 to-lavender-500/10 text-lavender-300 border-purple-400/30",
    badge: "Repository",
    description: "Remote repositories, code synchronization, pull requests, and project hosting.",
  },
  {
    name: "VS Code",
    category: "tools",
    categoryLabel: "Tools & Workflow",
    level: "Primary Development Environment",
    iconColor: "from-sky-500/20 to-blue-600/10 text-sky-300 border-sky-400/30",
    badge: "IDE",
    description: "Custom keybindings, debugging tools, linters, and extensions ecosystem.",
  },
];

const categories = [
  { id: "all", label: "All Skills (9)" },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "languages", label: "Languages & Database", icon: Database },
  { id: "tools", label: "Workflow & Tools", icon: Wrench },
];

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-850 border border-lavender-400/20 text-xs font-semibold text-lavender-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack &amp; Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My <span className="lavender-gradient-text">Core Toolkit</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            The programming languages, web fundamentals, and development tools I actively work with.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? "bg-gradient-to-r from-lavender-600 to-lavender-500 text-white border-lavender-400 shadow-[0_0_15px_rgba(167,113,250,0.4)]"
                      : "bg-charcoal-850/80 text-zinc-400 hover:text-white border-lavender-400/10 hover:border-lavender-400/30"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-lavender-400/15 group relative overflow-hidden transition-all duration-300"
            >
              {/* Subtle top glow highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lavender-400/0 group-hover:via-lavender-400/60 to-transparent transition-all duration-500" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.iconColor} border flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wider uppercase bg-charcoal-850 text-lavender-300 border border-lavender-400/20">
                  {skill.badge}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-lavender-200 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono">
                    {skill.categoryLabel}
                  </span>
                </div>

                <p className="text-xs font-medium text-lavender-300/90 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lavender-400" />
                  <span>{skill.level}</span>
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  {skill.description}
                </p>
              </div>

              {/* Progress bar aesthetic */}
              <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Proficiency Status</span>
                <span className="text-lavender-300 font-medium">In Practice &amp; Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
