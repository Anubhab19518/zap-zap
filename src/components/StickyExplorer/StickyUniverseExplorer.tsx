"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./StickyUniverseExplorer.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface EpisodeStage {
  step: string;
  stageNumber: string;
  title: string;
  headline: string;
  description: string;
  funFact: string;
  imageSrc: string;
  themeGradient: string;
  pillColor: string;
}

const STORY_STAGES: EpisodeStage[] = [
  {
    step: "STAGE 01",
    stageNumber: "01",
    title: "THE DISCOVERY",
    headline: "An Impossible Signal Over Kolkata",
    description:
      "Every grand episode begins with a mystery! When glowing cosmic frequencies are detected high above the historic monuments of Kolkata, Professor Bhichitro, Miki the cat, Abhisek, and Mallika jump into action.",
    funFact: "Miki the cat always spots the clues first!",
    imageSrc: "/images/zap_hero_lab.jpg",
    themeGradient: "from-amber-400 to-orange-500",
    pillColor: "bg-amber-100 text-amber-900 border-amber-300",
  },
  {
    step: "STAGE 02",
    stageNumber: "02",
    title: "THE CHALLENGE",
    headline: "Rogue Machines Threaten the City",
    description:
      "The villain reveals their chaotic plot! Dr. Cyberos deploys giant laser-guided robot drones to disrupt the metropolitan power grid and cause mayhem.",
    funFact: "Dr. Cyberos builds his drones using recycled kitchen appliances!",
    imageSrc: "/images/dr_cyberos_villain.jpg",
    themeGradient: "from-rose-500 to-purple-600",
    pillColor: "bg-rose-100 text-rose-900 border-rose-300",
  },
  {
    step: "STAGE 03",
    stageNumber: "03",
    title: "THE INVESTIGATION",
    headline: "Quantum Simulations & Team Science",
    description:
      "Instead of brute force, the team heads to the quantum laboratory. Surrounded by holographic simulations and alongside Abhisek, Mallika, and Miki, Professor Bhichitro tests physics formulas to find the weak spot.",
    funFact: "Science is all about asking the right questions!",
    imageSrc: "/images/lab_team_allies.jpg",
    themeGradient: "from-cyan-400 to-blue-600",
    pillColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
  },
  {
    step: "STAGE 04",
    stageNumber: "04",
    title: "THE ACTION",
    headline: "Mach 3.5 Sky Chase Across Bengal",
    description:
      "Throttle up! Zap-Zap launches the Aurora-X anti-gravity cruiser, soaring through thunderstorms at supersonic speeds to intercept the rogue swarm before they reach the city.",
    funFact: "The Aurora-X flies on clean ion magnetic energy!",
    imageSrc: "/images/futuristic_sci_fi_vehicle.jpg",
    themeGradient: "from-orange-500 to-amber-500",
    pillColor: "bg-orange-100 text-orange-900 border-orange-300",
  },
  {
    step: "STAGE 05",
    stageNumber: "05",
    title: "THE SOLUTION",
    headline: "The Electro-Plasma Neutralization",
    description:
      "Zap-Zap activates his Electro-Plasma Gauntlet V.4, emitting a gentle targeted electromagnetic pulse that shuts down all rogue drones without harming a single person or building.",
    funFact: "Zero destruction — true heroes protect everyone!",
    imageSrc: "/images/energy_disruptor_gauntlet.jpg",
    themeGradient: "from-emerald-400 to-teal-600",
    pillColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
  },
  {
    step: "STAGE 06",
    stageNumber: "06",
    title: "THE REVELATION",
    headline: "Unlocking Cosmic Multiverse Secrets",
    description:
      "With the city safe, the deactivated drone reveals a sub-atomic crystal pointing to ancient cosmic dimensions. The adventure has only just begun!",
    funFact: "Every answered question opens ten new doors to explore!",
    imageSrc: "/images/space_dimensional_portal.jpg",
    themeGradient: "from-purple-500 to-indigo-600",
    pillColor: "bg-purple-100 text-purple-900 border-purple-300",
  },
];

export default function StickyUniverseExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  useGSAP(
    () => {
      if (!pinRef.current) return;

      const trigger = ScrollTrigger.create({
        trigger: pinRef.current,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=2400",
        scrub: 0.35,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.min(
            Math.floor(self.progress * STORY_STAGES.length),
            STORY_STAGES.length - 1
          );
          setActiveIndex(index);
        },
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: containerRef }
  );

  const activeStage = STORY_STAGES[activeIndex];

  return (
    <section ref={containerRef} className={styles.outerScrollSection} id="story">
      <div ref={pinRef} className={styles.pinnedViewport}>
        <div className={styles.storyCardContainer}>
          {/* Section Header */}
          <div className={styles.storyHeader}>
            <h2 className={styles.headerTitle}>
              HOW A ZAP-ZAP <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">EPISODE UNFOLDS</span>
            </h2>
            <p className={styles.headerSubtitle}>
              Scroll to travel through the step-by-step storytelling formula that powers every action-packed episode!
            </p>
          </div>

          {/* Main Content Area */}
          <div className="relative w-full flex-1 flex flex-col justify-center overflow-hidden my-auto py-2">
            {/* ========================================================================= */}
            {/* DESKTOP VIEW (>= 768px): Side-by-Side 2-Column Grid                       */}
            {/* ========================================================================= */}
            <div className="hidden md:grid grid-cols-2 gap-8 items-center h-full">
              {/* Left Column: Animated Text List */}
              <div className="relative w-full h-full overflow-hidden">
                {/* Fade Masks */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />

                {STORY_STAGES.map((stage, idx) => {
                  const distance = idx - activeIndex;
                  const isActive = idx === activeIndex;
                  const yOffset = distance * 220;

                  return (
                    <div
                      key={stage.step}
                      className={`absolute left-0 right-0 px-3 cursor-pointer transition-all duration-500 ease-out select-none ${
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-15 scale-95 hover:opacity-30"
                      }`}
                      style={{
                        transform: `translateY(${yOffset}px)`,
                        top: "38%",
                      }}
                      onClick={() => setActiveIndex(idx)}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase border ${stage.pillColor}`}>
                          {stage.step} — {stage.title}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl lg:text-2xl font-black text-slate-900 mb-2 leading-tight">
                        {stage.headline}
                      </h3>

                      <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">
                        {stage.description}
                      </p>

                      <div className={styles.funFactBox}>
                        <span>{stage.funFact}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Full Scene Card with Stacked Crossfading Images */}
              <div className="relative w-full h-full max-h-[440px] rounded-[2rem] overflow-hidden shadow-xl bg-slate-950 border-2 border-slate-100">
                {STORY_STAGES.map((stage, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={stage.step}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        isActive
                          ? "opacity-100 scale-100 z-10 pointer-events-auto"
                          : "opacity-0 scale-105 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={stage.imageSrc}
                        alt={stage.headline}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      {/* Desktop Caption Pill */}
                      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl">
                        <div>
                          <span className="text-[11px] font-black text-amber-600 uppercase tracking-wider">
                            EPISODE SCENE {stage.stageNumber} / 06
                          </span>
                          <h4 className="font-heading font-black text-slate-900 text-base">
                            {stage.title}
                          </h4>
                        </div>
                        <span className="w-9 h-9 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-black text-sm shadow-md">
                          {stage.stageNumber}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ========================================================================= */}
            {/* MOBILE VIEW (< 768px): Well-Proportioned, Rich & Punchy Layout           */}
            {/* ========================================================================= */}
            <div className="md:hidden relative w-full flex flex-col justify-center min-h-[300px]">
              {/* Text Area (Left side of card with rich typography) */}
              <div className="pr-[145px] sm:pr-[175px] flex flex-col justify-center">
                <div key={activeStage.step} className="transition-all duration-300">
                  <div className="flex items-center mb-2.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-black tracking-wide uppercase border whitespace-nowrap shadow-xs ${activeStage.pillColor}`}>
                      {activeStage.step} • {activeStage.title}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-2xl font-black text-slate-900 leading-snug mb-2.5">
                    {activeStage.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-3.5">
                    {activeStage.description}
                  </p>

                  <div className="inline-flex items-center gap-1.5 bg-amber-50/90 border border-amber-200/90 px-3 py-1.5 rounded-xl text-xs font-bold text-amber-900 shadow-xs">
                    <span>{activeStage.funFact}</span>
                  </div>
                </div>
              </div>

              {/* Floating Image Overlay in Bottom-Right Corner (Rich Large Size) */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[135px] sm:w-[160px] h-[180px] sm:h-[210px] rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400 bg-slate-950 z-20">
                {STORY_STAGES.map((stage, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={stage.step}
                      className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                        isActive
                          ? "opacity-100 z-10 pointer-events-auto"
                          : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={stage.imageSrc}
                        alt={stage.headline}
                        fill
                        sizes="180px"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      {/* Mobile Caption Pill */}
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 px-2 py-1 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 flex items-center justify-between text-white shadow-md">
                        <span className="text-[9px] font-extrabold uppercase tracking-wide truncate">
                          {stage.title}
                        </span>
                        <span className="text-[9px] font-mono font-black text-amber-300 ml-1">
                          {stage.stageNumber}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Stage Progress Indicator Bar */}
          <div className={styles.progressBarWrapper}>
            {STORY_STAGES.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to Stage ${idx + 1}`}
                className={`${styles.progressDot} ${
                  idx === activeIndex ? styles.progressDotActive : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
