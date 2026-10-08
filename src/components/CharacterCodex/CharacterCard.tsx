"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Heart } from "lucide-react";

export interface FranchiseCharacter {
  id: string;
  name: string;
  role: string;
  themeColor: "yellow" | "cyan" | "mint" | "coral" | "purple";
  imageSrc: string;
  catchphrase: string;
  bio: string;
  traits: string[];
}

interface CharacterCardProps {
  character: FranchiseCharacter;
}

const THEME_STYLES = {
  yellow: {
    bg: "bg-amber-50/80",
    border: "border-amber-200 hover:border-amber-400",
    badge: "bg-amber-100 text-amber-900 border-amber-300",
    iconColor: "text-amber-500",
    glow: "hover:shadow-amber-200/50",
    btn: "bg-amber-500 hover:bg-amber-600 text-white",
  },
  cyan: {
    bg: "bg-cyan-50/80",
    border: "border-cyan-200 hover:border-cyan-400",
    badge: "bg-cyan-100 text-cyan-900 border-cyan-300",
    iconColor: "text-cyan-500",
    glow: "hover:shadow-cyan-200/50",
    btn: "bg-cyan-500 hover:bg-cyan-600 text-white",
  },
  mint: {
    bg: "bg-emerald-50/80",
    border: "border-emerald-200 hover:border-emerald-400",
    badge: "bg-emerald-100 text-emerald-900 border-emerald-300",
    iconColor: "text-emerald-500",
    glow: "hover:shadow-emerald-200/50",
    btn: "bg-emerald-500 hover:bg-emerald-600 text-white",
  },
  coral: {
    bg: "bg-orange-50/80",
    border: "border-orange-200 hover:border-orange-400",
    badge: "bg-orange-100 text-orange-900 border-orange-300",
    iconColor: "text-orange-500",
    glow: "hover:shadow-orange-200/50",
    btn: "bg-orange-500 hover:bg-orange-600 text-white",
  },
  purple: {
    bg: "bg-purple-50/80",
    border: "border-purple-200 hover:border-purple-400",
    badge: "bg-purple-100 text-purple-900 border-purple-300",
    iconColor: "text-purple-500",
    glow: "hover:shadow-purple-200/50",
    btn: "bg-purple-500 hover:bg-purple-600 text-white",
  },
};

export default function CharacterCard({ character }: CharacterCardProps) {
  const theme = THEME_STYLES[character.themeColor] || THEME_STYLES.yellow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`relative rounded-[2rem] p-4 sm:p-5 border-2 ${theme.bg} ${theme.border} shadow-lg shadow-slate-200/60 ${theme.glow} transition-all duration-300 flex flex-col justify-between group overflow-hidden bg-white`}
    >
      {/* Top Role Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase border ${theme.badge}`}>
          {character.role}
        </span>
        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-rose-500 transition-colors">
          <Heart size={16} fill="currentColor" className="opacity-70 group-hover:opacity-100" />
        </div>
      </div>

      {/* Character Portrait Frame with Transparent Support */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/80 p-3 mb-5 shadow-inner flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={character.imageSrc}
            alt={character.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-bottom drop-shadow-md group-hover:scale-108 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Character Details */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-heading text-2xl font-black text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
            {character.name}
          </h3>
          <p className="text-xs font-bold text-amber-700 italic mb-3">
            &ldquo;{character.catchphrase}&rdquo;
          </p>
          <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">
            {character.bio}
          </p>
        </div>

        {/* Personality Tags */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 mb-4">
          {character.traits.map((trait, idx) => (
            <span
              key={idx}
              className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700"
            >
              #{trait}
            </span>
          ))}
        </div>

        {/* Explore Button */}
        <a
          href="#episodes"
          className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm ${theme.btn}`}
        >
          <span>Discover In Action</span>
          <ChevronRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}
