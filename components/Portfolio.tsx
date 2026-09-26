"use client";

import React, { useState, MouseEvent } from "react";
import {
  Code2,
  Database,
  BarChart3,
  Palette,
  Brain,
  MessageSquare,
  Users,
  Search,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

// --- Custom Social Icons ---
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z" />
  </svg>
);

// --- Interfaces ---
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

interface SoftSkill {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll handler tanpa hash di URL
  const scrollToSection = (id: string, e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 6 Projects Data dengan Link Aktif
  const projectsData: Project[] = [
    {
      id: 1,
      title: "GreatNusa",
      description:
        "Designed a user-centered interface for GreatNusa, focusing on intuitive navigation, clean layouts, and a seamless learning experience.",
      image: "/project 1.webp",
      tags: ["Figma"],
      link: "https://www.figma.com/design/Y0Y701ClqD4QBifrxE6EWz/GreatNusa?m=auto&t=AZd2ngrnQw6U8CQU-6",
    },
    {
      id: 2,
      title: "LungGuard",
      description:
        "Designed the user interface and experience for LungGuard, an AI-based application focused on supporting lung health through an intuitive and accessible digital experience.",
      image: "/project 2.webp",
      tags: ["Figma"],
      link: "https://drive.google.com/drive/folders/1S9MP4fg4uoWAHA836V8EeZLaRjoRfz3D",
    },
    {
      id: 3,
      title: "TimelessCuisine",
      description:
        "Designed an information system for TimelessCuisine by translating business requirements into structured system flows and intuitive user interfaces.",
      image: "/project 3.webp",
      tags: ["Figma", "Draw.io"],
      link: "https://www.figma.com/design/mt3C45KALGZHrZNn3X6pEw/Timeless-Cuisine?m=auto&t=jYwgSnDOQpTueaCj-6",
    },
    {
      id: 4,
      title: "Correlation Between Screen Time & Mental Health",
      description:
        "Visualized and analyzed the correlation between screen time and mental health, presenting key patterns and insights through clear and accessible data visualizations.",
      image: "/project 4.webp",
      tags: ["Tableau", "Excel", "Canva"],
      link: "https://drive.google.com/file/d/1s0am7R8ATndAaitHdAAEoTtyTvRuTszV/view?usp=sharing",
    },
    {
      id: 5,
      title: "Sistem Prediksi Indeks Kualitas Udara (AQI) DKI Jakarta",
      description:
        "Developed a database and machine learning solution for predicting the Air Quality Index (AQI) in DKI Jakarta using environmental data.",
      image: "/project 5.webp",
      tags: ["Oracle Machine Learning", "Oracle SQL"],
      link: "https://drive.google.com/file/d/1j6tuijhMUfNGtiE6v-pki3UbzJtKWhTn/view?usp=sharing",
    },
    {
      id: 6,
      title: "Skinfo",
      description:
        "Designed the interface and user experience for Skinfo as part of an information system project, focusing on clear navigation and an intuitive user flow.",
      image: "/project 6.webp",
      tags: ["Figma"],
      link: "https://www.figma.com/design/2j8QPfJFGE0JeesawiTGN8/Skinfo?m=auto&t=jYwgSnDOQpTueaCj-6",
    },
  ];

  // Infinite Project Carousel Loop
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  // Hard Skills
  const skillCategories: SkillCategory[] = [
    {
      title: "Development",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "Python"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["Oracle", "SQL"],
    },
    {
      title: "Data & Visualization",
      icon: BarChart3,
      skills: ["Tableau", "Excel"],
    },
    {
      title: "Design",
      icon: Palette,
      skills: ["Figma", "Canva"],
    },
  ];

  const softSkills: SoftSkill[] = [
    {
      title: "Fast & Adaptable Learner",
      desc: "Eager to grasp new tech stack frameworks and domain-specific architectural patterns quickly.",
      icon: Brain,
    },
    {
      title: "Clear & Empathetic Communication",
      desc: "Effective at articulating technical concepts, sprint updates, and cross-team needs.",
      icon: MessageSquare,
    },
    {
      title: "Cross-functional Collaboration",
      desc: "Comfortable partnering with product managers, designers, and backend engineers.",
      icon: Users,
    },
    {
      title: "Attention to Detail & Craft",
      desc: "Dedicated to pixel-perfect design alignment, smooth micro-interactions, and clean code.",
      icon: Search,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-body antialiased selection:bg-blue-600 selection:text-white">
      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => scrollToSection("about", e)}
            className="font-headline font-extrabold text-xl text-slate-900 tracking-tight hover:text-blue-600 transition-colors"
          >
            Evelyn Valencia
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-slate-600">
            <a
              href="#about"
              onClick={(e) => scrollToSection("about", e)}
              className="hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection("projects", e)}
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection("skills", e)}
              className="hover:text-blue-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection("contact", e)}
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 font-body text-base font-semibold animate-in slide-in-from-top-4 duration-300">
            <a
              href="#about"
              onClick={(e) => scrollToSection("about", e)}
              className="block py-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection("projects", e)}
              className="block py-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection("skills", e)}
              className="block py-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection("contact", e)}
              className="block py-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* --- HERO / ABOUT SECTION --- */}
      <section id="about" className="bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Hi, I'm <span className="text-blue-600">Evelyn Valencia</span>
            </h1>

            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection("projects", e)}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-body font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1 text-sm"
              >
                View Projects ↓
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://id.linkedin.com/in/evelyn-valencia-141a38326"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-slate-200 text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all hover:-translate-y-0.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/eveelynnn29/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-slate-200 text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all hover:-translate-y-0.5"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Foto Profil Lingkaran */}
          <div className="lg:col-span-5 flex justify-center animate-in fade-in zoom-in duration-700">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-2 rounded-full bg-blue-500/20 opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-200 transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/profile.png"
                  alt="Evelyn Valencia"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS CAROUSEL SECTION (WITH SLIDING ANIMATION) --- */}
      <section id="projects" className="bg-slate-50 py-20 sm:py-24 border-b border-slate-200/60 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-headline text-3xl font-bold text-slate-900 tracking-tight">
              Featured Projects & Coursework
            </h2>
            <p className="font-accent text-slate-500 text-sm mt-1">
              Some things that I've built while learning.
            </p>
          </div>

          {/* Navigasi Slide Kiri / Kanan */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-white border border-slate-200 shadow-xs hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-90"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-white border border-slate-200 shadow-xs hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-90"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Card Stage */}
        <div className="relative max-w-6xl mx-auto px-6 h-[480px] sm:h-[520px] flex items-center justify-center">
          {[-1, 0, 1].map((offset) => {
            const index =
              (currentIndex + offset + projectsData.length) % projectsData.length;
            const proj = projectsData[index];
            const isCenter = offset === 0;

            return (
              <div
                key={`${proj.id}-${offset}`}
                onClick={() => {
                  if (offset === -1) prevProject();
                  if (offset === 1) nextProject();
                }}
                style={{
                  transform: `translateX(${offset * 105}%) scale(${isCenter ? 1 : 0.85})`,
                }}
                className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer select-none w-[88%] max-w-[520px] bg-white rounded-3xl border p-6 flex flex-col justify-between shadow-xl ${
                  isCenter
                    ? "z-20 opacity-100 border-blue-300 shadow-blue-500/15"
                    : "z-10 opacity-30 blur-[1px] border-slate-200 hover:opacity-50"
                }`}
              >
                <div>
                  <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-100 mb-5 relative aspect-[16/9] group">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className={`w-full h-full object-cover pointer-events-none transition-transform duration-700 ${
                        isCenter ? "group-hover:scale-105" : ""
                      }`}
                    />
                  </div>

                  <h3 className="font-headline text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                    {proj.title}
                  </h3>

                  <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-body text-xs font-medium px-3 py-1 bg-blue-50 text-blue-800 rounded-full border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-body text-xs font-semibold px-5 py-2.5 rounded-full shadow-md shadow-blue-500/20 transition-all hover:scale-105"
                  >
                    View Project ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- SKILLS & TECHNICAL TOOLKIT SECTION --- */}
      <section id="skills" className="bg-blue-50/30 py-20 sm:py-24 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div>
            <span className="font-accent text-xs font-semibold tracking-wider text-blue-600 uppercase">
              EXPERTISE & CAPABILITIES
            </span>
            <h2 className="font-headline text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Skills & Technical Toolkit
            </h2>
            <p className="font-body text-slate-500 text-sm mt-1">
              A concept-based view of the core technologies, tools, and platforms I work with.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Hard Skills */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-headline font-bold text-slate-900 text-base">
                        {cat.title}
                      </h3>
                    </div>

                    <ul className="space-y-2 pl-1 pt-1">
                      {cat.skills.map((skill, sIdx) => (
                        <li
                          key={sIdx}
                          className="font-body text-xs font-medium text-slate-600 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Soft Skills */}
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-slate-900 text-base">
                    Soft Skills & Culture
                  </h3>
                  <p className="font-accent text-xs text-slate-400">Collaboration & Mindset</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                {softSkills.map((sSkill, idx) => {
                  const SIcon = sSkill.icon;
                  return (
                    <div key={idx} className="flex gap-3">
                      <div className="p-2 bg-slate-50 text-slate-600 rounded-xl h-fit mt-0.5">
                        <SIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-headline text-xs font-bold text-slate-900">
                          {sSkill.title}
                        </h4>
                        <p className="font-body text-xs text-slate-500 leading-relaxed mt-0.5">
                          {sSkill.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LET'S WORK TOGETHER SECTION --- */}
      <section id="contact" className="bg-white py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-headline text-4xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent leading-tight pb-2">
            Let's work together!
          </h2>

          <p className="font-body text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Looking for someone to work with? I'm open to internship opportunities and freelance projects. Feel free to reach out anytime!
          </p>

          {/* Email Link */}
          <div className="pt-4 space-y-2">
            <span className="font-accent text-xs font-semibold text-slate-400 tracking-wider uppercase block">
              EMAIL ME AT
            </span>
            <a
              href="mailto:evelynvalencia070@gmail.com"
              className="inline-block font-headline text-xl sm:text-3xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors"
            >
              evelynvalencia070@gmail.com
            </a>
          </div>

          {/* Phone, Instagram, LinkedIn Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-slate-100 max-w-xl mx-auto">
            <div className="space-y-1">
              <span className="font-accent text-[11px] font-semibold text-slate-400 tracking-wider uppercase block">
                PHONE / WHATSAPP
              </span>
              <a
                href="https://wa.me/6281271358887"
                target="_blank"
                rel="noreferrer"
                className="font-headline text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
              >
                081271358887
              </a>
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-200"></div>

            <div className="space-y-1">
              <span className="font-accent text-[11px] font-semibold text-slate-400 tracking-wider uppercase block">
                INSTAGRAM
              </span>
              <a
                href="https://www.instagram.com/eveelynnn29/"
                target="_blank"
                rel="noreferrer"
                className="font-headline text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
              >
                @eveelynnn29
              </a>
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-200"></div>

            <div className="space-y-1">
              <span className="font-accent text-[11px] font-semibold text-slate-400 tracking-wider uppercase block">
                LINKEDIN
              </span>
              <a
                href="https://id.linkedin.com/in/evelyn-valencia-141a38326"
                target="_blank"
                rel="noreferrer"
                className="font-headline text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
              >
                Evelyn Valencia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs font-body text-slate-400">
          <p>© 2026 Evelyn Valencia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}