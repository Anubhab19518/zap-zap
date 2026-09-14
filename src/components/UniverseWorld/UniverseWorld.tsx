"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Building, Rocket, Compass, Zap, Bot } from "lucide-react";

export default function UniverseWorld() {
  return (
    <section className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto" id="universe">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4"
        >
          THE WORLD OF <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">ZAP-ZAP</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg font-medium"
        >
          From the historic streets of Kolkata to deep-space dimensional gateways, explore the rich environments of Bengal’s premier science-fiction animated universe.
        </motion.p>
      </div>

      {/* 4-Card Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Bento Card 1: Historic Streets of Kolkata (Spans 7 cols - Wide Flagship Card) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 rounded-[2.5rem] bg-amber-50/70 border-2 border-amber-200/80 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-lg shadow-amber-100/50 group hover:shadow-xl hover:border-amber-400 transition-all duration-300"
        >
          <div className="flex items-center justify-between gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase tracking-wider">
              <MapPin size={13} className="text-amber-600" />
              THE CITY WE PROTECT
            </span>
            <span className="text-xs font-bold text-amber-700 font-mono">
              COORD: 22.5726° N, 88.3639° E
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center flex-1 mb-4">
            <div className="sm:col-span-7 flex flex-col justify-center">
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
                Historic Streets of Kolkata
              </h3>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-4">
                Iconic trams, vibrant yellow taxis, and bustling cultural heritage meet high-tech flying vehicles in a charming futuristic reimagining of Bengal&apos;s grand capital.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-0.5 rounded-lg bg-amber-100/80 text-amber-900 text-xs font-bold">#VictoriaMemorial</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-amber-100/80 text-amber-900 text-xs font-bold">#HeritageTram</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-amber-100/80 text-amber-900 text-xs font-bold">#YellowTaxis</span>
              </div>
            </div>

            <div className="sm:col-span-5 relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-white">
              <Image
                src="/images/zap_hero_lab.jpg"
                alt="Historic Streets of Kolkata"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Bento Card 2: The Secret Quantum Laboratory (Spans 5 cols - Tall Science Card) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 rounded-[2.5rem] bg-cyan-50/70 border-2 border-cyan-200/80 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-lg shadow-cyan-100/50 group hover:shadow-xl hover:border-cyan-400 transition-all duration-300"
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-300 text-xs font-black uppercase tracking-wider">
              <Building size={13} className="text-cyan-600" />
              HQ & INVENTIONS WORKSHOP
            </span>
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-cyan-600">
              <Bot size={16} />
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-white mb-5">
            <Image
              src="/images/lab_team_allies.jpg"
              alt="The Secret Quantum Laboratory"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div>
            <h3 className="font-heading text-2xl font-black text-slate-900 mb-2 leading-tight group-hover:text-cyan-600 transition-colors">
              Secret Quantum Laboratory
            </h3>
            <p className="text-slate-600 text-sm font-medium leading-relaxed mb-3">
              Concealed beneath a vintage colonial mansion lies Zap-Zap’s research sanctuary, equipped with particle stabilizers and AURA-7&apos;s main server core.
            </p>
            <span className="text-xs font-bold text-cyan-700 inline-flex items-center gap-1">
              <Zap size={13} /> 128 PetaFLOPS Quantum Core Active
            </span>
          </div>
        </motion.div>

        {/* Bento Card 3: The Skies of Bengal (Spans 5 cols - Action Card) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-5 rounded-[2.5rem] bg-orange-50/70 border-2 border-orange-200/80 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-lg shadow-orange-100/50 group hover:shadow-xl hover:border-orange-400 transition-all duration-300"
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 border border-orange-300 text-xs font-black uppercase tracking-wider">
              <Rocket size={13} className="text-orange-600" />
              AURORA-X FLIGHT ZONE
            </span>
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-600">
              <Zap size={16} />
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-white mb-5">
            <Image
              src="/images/futuristic_sci_fi_vehicle.jpg"
              alt="The Skies of Bengal"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div>
            <h3 className="font-heading text-2xl font-black text-slate-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">
              The Skies of Bengal
            </h3>
            <p className="text-slate-600 text-sm font-medium leading-relaxed mb-3">
              High above the clouds and monsoon thunderstorms, supersonic aerial duels test Zap-Zap&apos;s reflexes against Dr. Cyberos&apos;s rogue robot drone armadas.
            </p>
            <span className="text-xs font-bold text-orange-700 inline-flex items-center gap-1">
              <Zap size={13} /> Mach 3.5 Supersonic Intercept Ready
            </span>
          </div>
        </motion.div>

        {/* Bento Card 4: Cosmic Multiverse Rifts (Spans 7 cols - Wide Cosmic Gateway Card) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 rounded-[2.5rem] bg-purple-50/70 border-2 border-purple-200/80 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-lg shadow-purple-100/50 group hover:shadow-xl hover:border-purple-400 transition-all duration-300"
        >
          <div className="flex items-center justify-between gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 border border-purple-300 text-xs font-black uppercase tracking-wider">
              <Compass size={13} className="text-purple-600" />
              PARALLEL DIMENSIONS
            </span>
            <span className="text-xs font-bold text-purple-700 font-mono">
              QUANTUM STATUS: STABLE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center flex-1 mb-4">
            <div className="sm:col-span-7 flex flex-col justify-center">
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 mb-3 leading-tight group-hover:text-purple-600 transition-colors">
                Cosmic Multiverse Rifts
              </h3>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-4">
                Sub-atomic spatial gateways open doorways into strange cosmic realms, where alien physics, ancient galactic relics, and cosmic mysteries await the curious hero.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-0.5 rounded-lg bg-purple-100/80 text-purple-900 text-xs font-bold">#StringTheory</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-purple-100/80 text-purple-900 text-xs font-bold">#CosmicWormhole</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-purple-100/80 text-purple-900 text-xs font-bold">#ParallelRealms</span>
              </div>
            </div>

            <div className="sm:col-span-5 relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-white">
              <Image
                src="/images/space_dimensional_portal.jpg"
                alt="Cosmic Multiverse Rifts"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
