"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldAlert, Flame, Skull } from "lucide-react";

interface VillainDossier {
  id: string;
  codename: string;
  name: string;
  threatLevel: string;
  imageSrc: string;
  dangerRank: string;
  knownSchemes: string;
  abilities: string[];
}

const VILLAIN_DATA: VillainDossier[] = [
  {
    id: "dr-cyberos",
    codename: "SUBJECT // CYBER-00",
    name: "Dr. Cyberos",
    threatLevel: "THREAT LEVEL // OMEGA",
    imageSrc: "/images/dr_cyberos_villain.jpg",
    dangerRank: "CRITICAL 99.9%",
    knownSchemes:
      "A former quantum researcher who replaced his organic physiology with corrupted cybernetic implants. Commands a legion of autonomous laser-equipped combat drones.",
    abilities: ["Dark Energy Manipulation", "Cybernetic Neural Overclock", "Rogue Drone Swarm Protocol"],
  },
  {
    id: "void-syndicate",
    codename: "FACTION // VOID-NEXUS",
    name: "The Void Syndicate",
    threatLevel: "THREAT LEVEL // GLOBAL S-TIER",
    imageSrc: "/images/supervillain_dark_tech.jpg",
    dangerRank: "MAXIMUM 98.5%",
    knownSchemes:
      "A shadowy technological cabal operating from subterranean facilities, weaponizing unstable dark matter cores to destabilize metropolitan power grids.",
    abilities: ["Dark Matter Cannons", "Sub-Atomic EMP Disruptors", "Covert Lab Infiltration"],
  },
];

export default function VillainFiles() {
  return (
    <section className="relative py-28 px-4 md:px-8 bg-gradient-to-b from-[#0A0F16] via-[#1a050b] to-[#0A0F16] border-y border-red-500/20 overflow-hidden" id="villains">
      {/* Warning Corrupted Scanline & Flare Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Warning Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-500/50 text-red-400 font-mono text-xs tracking-widest uppercase backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(255,0,60,0.3)] animate-pulse"
          >
            <ShieldAlert size={14} className="text-red-500" />
            <span>WARNING: CORRUPTED DATA // ENCRYPTED ENEMY INTEL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4"
          >
            FORCES OF <span className="neon-text-red">DARKNESS & VILLAINS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-light"
          >
            A powerful hero demands equally formidable opponents. Review the corrupted laboratory files on rogue inventors, mutated cyborgs, and dark energy syndicates.
          </motion.p>
        </div>

        {/* Angular & Corrupted Villain Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {VILLAIN_DATA.map((villain, idx) => (
            <motion.div
              key={villain.id}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative glass-villain rounded-3xl overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.8)] border border-red-500/30 hover:border-red-500/70 transition-all duration-300 flex flex-col"
            >
              {/* Angular Corrupted HUD Brackets */}
              <div className="hud-corner-red-tl" />
              <div className="hud-corner-red-tr" />
              <div className="hud-corner-red-bl" />
              <div className="hud-corner-red-br" />

              {/* Corrupted Status Bar */}
              <div className="px-5 py-3 bg-red-950/90 border-b border-red-500/30 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-red-400 font-bold">
                  <Skull size={14} />
                  <span>{villain.codename}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-red-900/60 border border-red-500/40 text-red-300 font-black">
                  {villain.threatLevel}
                </span>
              </div>

              {/* Image with Corrupted Vignette */}
              <div className="relative w-full h-80 overflow-hidden bg-black">
                <Image
                  src={villain.imageSrc}
                  alt={villain.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18080e] via-black/40 to-transparent" />

                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-red-400 tracking-widest uppercase">
                      ADVERSARY DOSSIER
                    </span>
                    <h3 className="font-heading text-3xl font-black text-white leading-tight">
                      {villain.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-rose-400 bg-black/80 px-3 py-1 rounded border border-red-500/40 font-bold">
                    DANGER: {villain.dangerRank}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6 bg-[#18080e]/95">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                  {villain.knownSchemes}
                </p>

                {/* Abilities */}
                <div className="pt-4 border-t border-red-500/20 space-y-2">
                  <span className="font-mono text-xs text-red-400 font-bold tracking-wider uppercase block mb-2">
                    IDENTIFIED WEAPONRY & COUNTER-PROTOCOLS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {villain.abilities.map((ability, aIdx) => (
                      <div
                        key={aIdx}
                        className="font-mono text-[11px] px-2.5 py-1.5 rounded bg-red-950/50 border border-red-500/30 text-rose-300 flex items-center gap-1.5"
                      >
                        <Flame size={12} className="text-red-400 flex-shrink-0" />
                        <span>{ability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
