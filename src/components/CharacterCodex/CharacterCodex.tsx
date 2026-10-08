"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface FranchiseCharacter {
  id: string;
  tabName: string;
  name: string;
  role: string;
  tags: string[];
  quote: string;
  imageSrc: string;
  zoomScale?: string;
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
    id: "bhichitro",
    tabName: "Prof. Bhichitro",
    name: "Professor Bhichitro",
    role: "Chief Scientist & Master Inventor",
    tags: ["#GeniusScientist", "#MasterInventor", "#ScienceSuperpower", "#ProtectorOfBengal"],
    quote: "Think. Experiment. Discover. Innovate! Science is the greatest superpower we have to protect Bengal and shape the future.",
    imageSrc: "/photos/bichitro.png",
    zoomScale: "scale-115 sm:scale-200",
    theme: {
      heroBg: "bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600",
      border: "border-amber-300/80",
      btnBg: "bg-amber-500 hover:bg-amber-600 text-slate-950",
      glow: "shadow-amber-500/20",
      quoteBg: "bg-amber-50/90 border-amber-200 text-amber-950",
    },
  },
  {
    id: "miki",
    tabName: "Miki",
    name: "Miki",
    role: "Intelligent Cat & Lab Detective",
    tags: ["#SmartCat", "#LoyalCompanion", "#LabDetective", "#FelineGenius"],
    quote: "Meow! Always the quickest to spot hidden clues, alert the crew, and protect the lab before anyone else notices.",
    imageSrc: "/photos/cat.png",
    zoomScale: "scale-120 sm:scale-105",
    theme: {
      heroBg: "bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-700",
      border: "border-emerald-300/80",
      btnBg: "bg-emerald-500 hover:bg-emerald-600 text-white",
      glow: "shadow-emerald-500/20",
      quoteBg: "bg-emerald-50/90 border-emerald-200 text-emerald-950",
    },
  },
  {
    id: "abhisek",
    tabName: "Abhisek",
    name: "Abhisek",
    role: "Daring Young Inventor & Explorer",
    tags: ["#YoungInventor", "#DaringExplorer", "#STEMHero", "#TechEnthusiast"],
    quote: "Ready for action! There's no scientific mystery too challenging or mission too tough when we work together.",
    imageSrc: "/photos/abhisekh.png",
    zoomScale: "scale-150 sm:scale-140",
    theme: {
      heroBg: "bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700",
      border: "border-sky-300/80",
      btnBg: "bg-blue-600 hover:bg-blue-700 text-white",
      glow: "shadow-blue-500/20",
      quoteBg: "bg-sky-50/90 border-sky-200 text-sky-950",
    },
  },
  {
    id: "mallika",
    tabName: "Mallika",
    name: "Mallika",
    role: "Brilliant Tech Strategist & Innovator",
    tags: ["#BrilliantMind", "#QuantumStrategist", "#CreativeGenius", "#FearlessExplorer"],
    quote: "Every complex problem has an elegant solution — all it takes is curiosity, keen observation, and precise science!",
    imageSrc: "/photos/mallika.png",
    zoomScale: "scale-115 sm:scale-100",
    theme: {
      heroBg: "bg-gradient-to-br from-fuchsia-400 via-pink-500 to-rose-600",
      border: "border-pink-300/80",
      btnBg: "bg-fuchsia-600 hover:bg-fuchsia-700 text-white",
      glow: "shadow-pink-500/20",
      quoteBg: "bg-pink-50/90 border-pink-200 text-pink-950",
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
              className={`whitespace-nowrap px-5 py-2.5 rounded-full font-heading text-xs sm:text-sm font-black transition-all cursor-pointer flex-shrink-0 border flex items-center gap-1.5 ${
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

                {/* Character Portrait Frame - Zoomed In & Centered */}
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-68 md:h-68 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white/25 backdrop-blur-xs flex items-center justify-center p-2">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
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
                        sizes="(max-width: 768px) 260px, 320px"
                        className={`object-contain object-center ${current.zoomScale || "scale-100"} drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)]`}
                      />
                    )}
                  </div>
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
