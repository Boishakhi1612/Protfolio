"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, Copy, Check, Sparkles, MessageSquare, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const emailAddress = "boishakhisultana62@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    // Direct mailto link fallback with pre-filled content
    const subject = encodeURIComponent(formState.subject || `Portfolio Message from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    setStatusMessage("Opening your email client to send message... Thank you!");
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-850 border border-lavender-400/20 text-xs font-semibold text-lavender-300 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s build something <span className="lavender-gradient-text">great together</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Have a question, collaboration idea, or an opportunity? Feel free to reach out directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-lavender-400/20 space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-lavender-400">
                  Direct Contact
                </span>
                <h3 className="text-2xl font-bold text-white">Let&apos;s talk &amp; connect</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  I am always eager to discuss web development, learning opportunities, and interesting projects.
                </p>
              </div>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-charcoal-900 border border-lavender-400/20 space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Mail className="w-4 h-4 text-lavender-300" />
                    <span>Email Address</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-lavender-300 hover:text-white transition-colors text-xs font-medium"
                    aria-label="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm sm:text-base font-semibold text-white break-all">
                  {emailAddress}
                </p>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                  Profiles &amp; Repositories
                </span>

                <div className="space-y-2.5">
                  {/* GitHub */}
                  <a
                    href="https://github.com/Boishakhi1612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-charcoal-900 hover:bg-charcoal-850 border border-lavender-400/15 hover:border-lavender-400/40 text-zinc-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-charcoal-800 flex items-center justify-center text-lavender-300 group-hover:scale-105 transition-transform">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">GitHub</p>
                        <p className="text-xs text-zinc-400">@Boishakhi1612</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-lavender-300 transition-colors" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/boishakhi-sultana-50174839a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-charcoal-900 hover:bg-charcoal-850 border border-lavender-400/15 hover:border-lavender-400/40 text-zinc-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-charcoal-800 flex items-center justify-center text-lavender-300 group-hover:scale-105 transition-transform">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">LinkedIn</p>
                        <p className="text-xs text-zinc-400">Boishakhi Sultana</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-lavender-300 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-2xl bg-lavender-600/10 border border-lavender-400/20 flex items-center gap-3 text-xs text-lavender-200">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span>Open for junior developer roles, internships, and collaborative projects.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-lavender-400/20 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-lavender-300" />
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                </div>
                <span className="text-xs text-zinc-500 font-mono">Quick Form</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-zinc-300">
                      Your Name <span className="text-lavender-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-lavender-400/20 text-white placeholder-zinc-500 focus:outline-none focus:border-lavender-400 focus:ring-1 focus:ring-lavender-400 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-zinc-300">
                      Your Email <span className="text-lavender-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-lavender-400/20 text-white placeholder-zinc-500 focus:outline-none focus:border-lavender-400 focus:ring-1 focus:ring-lavender-400 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-zinc-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Project Inquiry / Collaboration"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-lavender-400/20 text-white placeholder-zinc-500 focus:outline-none focus:border-lavender-400 focus:ring-1 focus:ring-lavender-400 transition-all text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-zinc-300">
                    Your Message <span className="text-lavender-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-lavender-400/20 text-white placeholder-zinc-500 focus:outline-none focus:border-lavender-400 focus:ring-1 focus:ring-lavender-400 transition-all text-sm resize-none"
                  />
                </div>

                {statusMessage && (
                  <p className="text-xs text-lavender-300 bg-lavender-500/10 p-3 rounded-xl border border-lavender-400/20">
                    {statusMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-lavender-600 via-lavender-500 to-lavender-600 hover:from-lavender-500 hover:to-lavender-400 shadow-[0_0_20px_rgba(167,113,250,0.4)] hover:shadow-[0_0_30px_rgba(190,157,253,0.65)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
