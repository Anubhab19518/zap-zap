"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface FranchiseCharacter {
  id: string;
  tabName: string;
  name: string;
  tags: string[];
  quote: string;
  imageSrc: string;
  videoSrc?: string;
  theme: {
    heroBg: string;
    border: string;
    btnBg: string;
    glow: string;
    quoteBg: string;
  };
}

const CHARACTERS: FranchiseCharacter[] = [
  {
    id: "zap-zap",
    tabName: "Zap-Zap Professor",
    name: "Zap-Zap Professor",
    tags: ["#GeniusScientist", "#ScienceSuperpower", "#CatLover", "#ProtectorOfBengal"],
    quote: "Think. Experiment. Discover. Innovate! What fun science mysteries are waiting for us today?",
    imageSrc: "/images/zap_hero_lab.jpg",
    theme: {
      heroBg: "bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600",
      border: "border-amber-300/80",
      btnBg: "bg-amber-500 hover:bg-amber-600 text-slate-950",
      glow: "shadow-amber-500/20",
      quoteBg: "bg-amber-50/90 border-amber-200 text-amber-950",
    },
  },
  {
    id: "aura-7",
    tabName: "AURA-7 AI",
    name: "AURA-7 AI",
    tags: ["#QuantumAI", "#BestFriend", "#Defender", "#SuperSmart"],
    quote: "Quantum simulation complete: We have a 99.8% chance of extraordinary fun and discovery!",
    imageSrc: "/images/quantum_ai_robot.jpg",
    theme: {
      heroBg: "bg-gradient-to-br from-cyan-400 via-teal-500 to-cyan-700",
      border: "border-cyan-300/80",
      btnBg: "bg-cyan-500 hover:bg-cyan-600 text-slate-950",
      glow: "shadow-cyan-500/20",
      quoteBg: "bg-cyan-50/90 border-cyan-200 text-cyan-950",
    },
  },
  {
    id: "lab-team",
    tabName: "Bengal Quantum Allies",
    name: "Bengal Quantum Allies",
    tags: ["#KolkataHQ", "#Teamwork", "#YoungInventors", "#STEM"],
    quote: "Together with Zap-Zap, we explore the deepest mysteries of physics and space-time rifts!",
    imageSrc: "/images/lab_team_allies.jpg",
    theme: {
      heroBg: "bg-gradient-to-br from-emerald-400 via-green-600 to-teal-700",
      border: "border-emerald-300/80",
      btnBg: "bg-emerald-500 hover:bg-emerald-600 text-white",
      glow: "shadow-emerald-500/20",
      quoteBg: "bg-emerald-50/90 border-emerald-200 text-emerald-950",
    },
  },
  {
    id: "aurora-x",
    tabName: "Aurora-X Sky Pilot",
    name: "Aurora-X Sky Pilot",
    tags: ["#Mach3.5", "#AntiGravity", "#SkyCruiser", "#HighSpeed"],
    quote: "Engaging Mach 3.5 ion rings — soaring across the skies of Bengal in supersonic speed!",
    imageSrc: "/images/futuristic_sci_fi_vehicle.jpg",
    theme: {
      heroBg: "bg-gradient-to-br from-orange-400 via-red-500 to-amber-600",
      border: "border-orange-300/80",
      btnBg: "bg-orange-500 hover:bg-orange-600 text-white",
      glow: "shadow-orange-500/20",
      quoteBg: "bg-orange-50/90 border-orange-200 text-orange-950",
    },
  },
  {
    id: "dr-cyberos",
    tabName: "Dr. Cyberos",
    name: "Dr. Cyberos",
    tags: ["#RogueInventor", "#RogueRobots", "#DramaKing", "#SciFiRival"],
    quote: "My rogue machines will bend the rules of physics! Prepare for my greatest mechanical scheme!",
    imageSrc: "/images/dr_cyberos_villain.jpg",
    theme: {
      heroBg: "bg-gradient-to-br from-purple-500 via-fuchsia-600 to-indigo-800",
      border: "border-purple-300/80",
      btnBg: "bg-purple-600 hover:bg-purple-700 text-white",
      glow: "shadow-purple-500/20",
      quoteBg: "bg-purple-50/90 border-purple-200 text-purple-950",
    },
  },
];

export default function CharacterCodex() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const prevCharacter = () => {
    setCurrentIndex((prev) => (prev === 0 ? CHARACTERS.length - 1 : prev - 1));
  };

  const nextCharacter = () => {
    setCurrentIndex((prev) => (prev === CHARACTERS.length - 1 ? 0 : prev + 1));
  };

  // Keep active tab smoothly centered into view on mobile
  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const tab = activeTabRef.current;
      const scrollLeft = tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [currentIndex]);

  const current = CHARACTERS[currentIndex];

  return (
    <section className="relative pt-4 pb-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full overflow-hidden" id="characters">
      {/* 1. Section Header */}
      <div className="w-full text-left md:text-center mb-4 md:mb-6">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          CHARACTERS
        </h2>
      </div>

      {/* 2. Horizontal Category Tabs */}
      <div
        ref={tabsContainerRef}
        className="w-full flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar pb-3 mb-6 gap-2.5 sm:gap-4 scroll-smooth px-1"
      >
        {CHARACTERS.map((char, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={char.id}
              ref={isActive ? activeTabRef : null}
              onClick={() => setCurrentIndex(index)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-heading text-xs sm:text-sm font-black transition-all cursor-pointer flex-shrink-0 border flex items-center gap-1.5 ${
                isActive
                  ? `${char.theme.heroBg} text-white shadow-md scale-105 border-transparent`
                  : "bg-white text-slate-600 hover:bg-slate-100 border-slate-200 shadow-sm"
              }`}
            >
              <span>{char.tabName}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Main Character Card Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Desktop Side Navigation Buttons */}
        <button
          onClick={prevCharacter}
          className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-slate-800 hover:text-slate-950 shadow-xl border border-slate-200 items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Previous Character"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>

        <button
          onClick={nextCharacter}
          className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-slate-800 hover:text-slate-950 shadow-xl border border-slate-200 items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Next Character"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>

        {/* Dynamic Animated Character Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`w-full bg-white rounded-3xl sm:rounded-[2.5rem] border-2 ${current.theme.border} shadow-2xl ${current.theme.glow} overflow-hidden`}
          >
            {/* Split View: Top Hero Banner on Mobile / Left Banner on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Image Column */}
              <div
                className={`md:col-span-5 ${current.theme.heroBg} p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden`}
              >
                {/* Decorative background radial pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_70%)] pointer-events-none" />

                {/* Mobile Quick Arrows */}
                <div className="md:hidden w-full flex items-center justify-between absolute top-1/2 -translate-y-1/2 px-3 z-20 pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevCharacter();
                    }}
                    className="pointer-events-auto w-9 h-9 rounded-full bg-black/35 text-white flex items-center justify-center backdrop-blur-md active:scale-90 border border-white/30 cursor-pointer shadow-lg"
                    aria-label="Previous Character"
                  >
                    <ChevronLeft size={18} strokeWidth={3} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextCharacter();
                    }}
                    className="pointer-events-auto w-9 h-9 rounded-full bg-black/35 text-white flex items-center justify-center backdrop-blur-md active:scale-90 border border-white/30 cursor-pointer shadow-lg"
                    aria-label="Next Character"
                  >
                    <ChevronRight size={18} strokeWidth={3} />
                  </button>
                </div>

                {/* Character Portrait Frame */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white/20">
                  {current.videoSrc ? (
                    <video
                      src={current.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <Image
                      src={current.imageSrc}
                      alt={current.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 240px, 300px"
                      className="object-cover object-center"
                    />
                  )}
                </div>
              </div>

              {/* Character Details Column */}
              <div className="md:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-between bg-gradient-to-b from-white via-white to-slate-50">
                <div>
                  {/* Character Name */}
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
                    {current.name}
                  </h3>

                  {/* Quote */}
                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-6">
                    {current.quote}
                  </p>
                </div>

                {/* See More Button */}
                <div className="pt-2">
                  <a
                    href="#episodes"
                    className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-slate-900 text-white font-heading font-black text-xs sm:text-sm tracking-wider hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
                  >
                    <span>See More</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {CHARACTERS.map((char, index) => (
            <button
              key={char.id}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-8 bg-amber-500 shadow-md shadow-amber-500/40"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Switch to ${char.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



