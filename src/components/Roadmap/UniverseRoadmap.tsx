"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, BookOpen, Gamepad2, Film, CheckCircle2 } from "lucide-react";

interface RoadmapPhase {
  phase: string;
  badgeColor: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  timeline: string;
  description: string;
  milestones: string[];
}

const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "PHASE 01",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    icon: Film,
    title: "Genesis Animated Series",
    timeline: "CURRENT PHASE • LIVE ON YOUTUBE",
    description: "Launch of the core episodic animation on YouTube, introducing Zap-Zap Professor, AURA-7, the city of Kolkata, and our signature science-action storytelling formula.",
    milestones: ["Season 01 Animated Episodes", "Original Bengali Voice Cast", "YouTube Channel Launch"],
  },
  {
    phase: "PHASE 02",
    badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
    icon: BookOpen,
    title: "Digital Comics & Storybooks",
    timeline: "EXPANDING WORLD",
    description: "Expanding the narrative universe with interactive web comics, deep-dive schematic guides, and science storybooks for curious young minds.",
    milestones: ["Interactive Web Comic Vol. 1", "Character Origin Backstories", "DIY STEM Lab Activity Guides"],
  },
  {
    phase: "PHASE 03",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    icon: Gamepad2,
    title: "Interactive Games & Collectibles",
    timeline: "EXPERIENCE THE ADVENTURE",
    description: "Bridging screen entertainment with interactive gameplay, mobile puzzle adventures, and official character collectibles.",
    milestones: ["Mobile Science Puzzle Game", "Action Figurine Prototypes", "AR Inventions Lab App"],
  },
  {
    phase: "PHASE 04",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
    icon: Rocket,
    title: "Multiverse Animated Movie Special",
    timeline: "CINEMATIC SPECIAL",
    description: "A feature-length animated special pitting Zap-Zap against a multiverse-spanning cosmic anomaly, connecting Bengali folklore with grand science-fiction.",
    milestones: ["60-Minute Theatrical Special", "Original Cinematic Orchestral Score", "Global Festival Distribution"],
  },
];

export default function UniverseRoadmap() {
  return (
    <section className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto" id="roadmap">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4"
        >
          FRANCHISE <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">ROADMAP</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg font-medium"
        >
          From animated YouTube episodes to digital comics, interactive games, and a multiverse feature film — follow our mission to build an iconic Bengali animated universe!
        </motion.p>
      </div>

      {/* 4-Phase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {ROADMAP_PHASES.map((phase, idx) => {
          const IconComp = phase.icon;
          return (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-franchise p-6 flex flex-col justify-between group bg-white border-2 border-slate-100"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${phase.badgeColor}`}>
                    {phase.phase}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
                    <IconComp size={18} />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-black text-slate-900 mb-2 leading-tight">
                  {phase.title}
                </h3>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block mb-3">
                  {phase.timeline}
                </span>

                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                  {phase.description}
                </p>
              </div>

              {/* Milestones Checklist */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                  KEY MILESTONES
                </span>
                {phase.milestones.map((m, mIdx) => (
                  <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Studio Manifesto Callout */}
      <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-r from-amber-50 via-orange-50 to-cyan-50 border-2 border-amber-200/80 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="max-w-2xl">
          <span className="text-xs font-black text-amber-600 uppercase tracking-wider block mb-2">
            STUDIO PHILOSOPHY & MANIFESTO
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 leading-snug mb-2">
            &ldquo;Think. Experiment. Discover. Innovate.&rdquo;
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            We believe children’s animation should celebrate intellect, ignite genuine curiosity for science, and champion cultural storytelling that leaves a lasting positive mark.
          </p>
        </div>

        <a
          href="#contact"
          className="btn-zap-primary px-8 py-4 text-xs font-black uppercase tracking-wider whitespace-nowrap shadow-md"
        >
          <span>Collaborate With Us</span>
        </a>
      </div>
    </section>
  );
}
