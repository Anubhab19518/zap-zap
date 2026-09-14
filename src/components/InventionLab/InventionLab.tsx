"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, CheckCircle } from "lucide-react";

interface InventionData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  powerMetric: string;
  funFact: string;
  imageSrc: string;
  description: string;
  features: string[];
  themeColor: "yellow" | "cyan" | "coral" | "purple";
}

const INVENTIONS: InventionData[] = [
  {
    id: "gauntlet",
    name: "Electro-Plasma Gauntlet V.4",
    category: "HERO WEAPON SYSTEM",
    tagline: "Zap-Zap's Signature Scientific Inventions",
    powerMetric: "1,000,000 Volts of Non-Lethal Magnetic Pulse",
    funFact: "Can gently turn off villain machines from 100 meters away!",
    imageSrc: "/images/energy_disruptor_gauntlet.jpg",
    description:
      "A wearable wonder glove powered by clean magnetic plasma! Zap-Zap uses it to deactivate rogue robots, catch falling objects with magnetic beams, and protect historic landmarks without causing any harm.",
    features: ["Targeted EMP Deactivator", "Magnetic Tractor Beam", "Ultra-Lightweight Titanium"],
    themeColor: "yellow",
  },
  {
    id: "aura-7",
    name: "AURA-7 Autonomous AI Robot",
    category: "LAB ASSISTANT & GUARDIAN",
    tagline: "The Smartest & Friendliest Robot in Bengal",
    powerMetric: "Calculates 10,000 Science Formulas Per Second",
    funFact: "AURA-7 loves solving math puzzles and drinking electric oil tea!",
    imageSrc: "/images/quantum_ai_robot.jpg",
    description:
      "Engineered in Zap-Zap's Kolkata laboratory, AURA-7 is more than an AI assistant — she’s family. She scans villain gadgets in real-time, predicts flight trajectories, and always reminds Zap-Zap to take a snack break.",
    features: ["Real-time Threat Analysis", "Holographic 3D Projector", "Friendly Voice Interface"],
    themeColor: "cyan",
  },
  {
    id: "aurora-x",
    name: "Aurora-X Sky Cruiser",
    category: "SUPERSONIC HYPERSONIC CRAFT",
    tagline: "Mach 3.5 Clean Energy Anti-Gravity Jet",
    powerMetric: "Mach 3.5 Velocity Powered by Ion Rings",
    funFact: "Leaves behind a rainbow streak in the sky!",
    imageSrc: "/images/futuristic_sci_fi_vehicle.jpg",
    description:
      "Soaring above the clouds with silent magnetic levitation rings, the Aurora-X allows Zap-Zap to rush to any corner of Bengal within minutes to stop villain plots before they start.",
    features: ["Silent Levitation Rings", "Kinetic Forcefield", "Automatic Autopilot"],
    themeColor: "coral",
  },
  {
    id: "dimensional-gate",
    name: "Sub-Atomic Dimensional Gateway",
    category: "MULTIVERSE PORTAL",
    tagline: "Doorway to Cosmic Discoveries",
    powerMetric: "Infinity Quantum Energy Stability",
    funFact: "Connects to parallel science dimensions across the multiverse!",
    imageSrc: "/images/space_dimensional_portal.jpg",
    description:
      "A massive rotating accelerator ring built deep inside the laboratory. It stabilizes cosmic wormholes so Zap-Zap can study astrophysics and explore exciting parallel universes.",
    features: ["Cosmic Coordinate Scanner", "String Theory Stabilizer", "Hyperspace Communicator"],
    themeColor: "purple",
  },
];

export default function InventionLab() {
  const [activeTab, setActiveTab] = useState<string>("gauntlet");
  const selectedInvention = INVENTIONS.find((i) => i.id === activeTab) || INVENTIONS[0];

  return (
    <section className="relative z-20 py-24 px-4 md:px-8 max-w-7xl mx-auto" id="inventions">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4"
        >
          DISCOVER THE <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">INVENTIONS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg font-medium"
        >
          Step into Zap-Zap’s secret laboratory and explore the extraordinary futuristic gadgets, robotics, and vehicles he uses to save the universe!
        </motion.p>

        {/* Invention Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {INVENTIONS.map((inv) => (
            <button
              key={inv.id}
              onClick={() => setActiveTab(inv.id)}
              className={`px-5 py-2.5 rounded-full font-black text-xs tracking-wider uppercase transition-all ${
                activeTab === inv.id
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-white border border-slate-200 text-slate-700 hover:border-amber-400"
              }`}
            >
              {inv.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Big Showcase Card (Asymmetric Layout) */}
      <motion.div
        key={selectedInvention.id}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-[2.5rem] bg-white border-2 border-slate-100 p-6 sm:p-10 shadow-xl shadow-slate-200/70 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Left Side: Large Illustration Poster (6 cols) */}
        <div className="lg:col-span-6 relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 shadow-md">
          <Image
            src={selectedInvention.imageSrc}
            alt={selectedInvention.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-amber-900 font-black text-xs uppercase tracking-wider shadow-sm border border-slate-100">
              {selectedInvention.category}
            </span>
          </div>
        </div>

        {/* Right Side: Invention Specs & Details (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block mb-1">
              {selectedInvention.tagline}
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
              {selectedInvention.name}
            </h3>

            {/* Power Metric Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-extrabold text-xs mb-6">
              <Zap size={16} className="text-amber-500 flex-shrink-0" />
              <span>{selectedInvention.powerMetric}</span>
            </div>

            <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed mb-6">
              {selectedInvention.description}
            </p>

            {/* Feature Checklist */}
            <div className="space-y-2 mb-8">
              {selectedInvention.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Fact & Button */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-slate-600 font-bold">
              <span>{selectedInvention.funFact}</span>
            </div>

            <a
              href="#episodes"
              className="btn-zap-primary px-5 py-2.5 text-xs font-black uppercase whitespace-nowrap"
            >
              <span>See It In Action</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
