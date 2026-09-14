"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { YoutubeIcon } from "../Icons/SocialIcons";

export interface FranchiseEpisode {
  id: string;
  category: string;
  episodeTag: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  badgeColor: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  episodeTag: string;
}

const FEATURED_EPISODES: FranchiseEpisode[] = [
  {
    id: "0qwy91Ee-bU",
    category: "SEASON 01 • EPISODE 01",
    episodeTag: "PILOT ADVENTURE",
    title: "কালীপুরের আকাশে মহাকাশযান | The Spaceship Over Kalipur",
    description: "When an unidentified spaceship hovers over the skies of Kalipur, Zap-Zap Professor and AURA-7 launch their high-tech laboratory telemetry to investigate the extraterrestrial mystery.",
    thumbnail: "/images/zap_hero_lab.jpg",
    duration: "14:20",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
  },
  {
    id: "0qwy91Ee-bU",
    category: "SEASON 01 • EPISODE 02",
    episodeTag: "ROBOT SHOWDOWN",
    title: "The Battle Against Dr. Cyberos & Rogue Drones",
    description: "Rogue inventor Dr. Cyberos attempts to drain the metropolitan energy grid. Zap-Zap deploys his Electro-Plasma Gauntlet in an exhilarating science duel.",
    thumbnail: "/images/dr_cyberos_villain.jpg",
    duration: "16:45",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
  },
  {
    id: "0qwy91Ee-bU",
    category: "SEASON 01 • EPISODE 03",
    episodeTag: "HIGH-SPEED CHASE",
    title: "Mach 3.5 Hypersonic Sky Chase Across Bengal",
    description: "Piloting the Aurora-X anti-gravity jet through supersonic storm turbulence to prevent an illegal technology heist over the skies of Bengal.",
    thumbnail: "/images/futuristic_sci_fi_vehicle.jpg",
    duration: "18:00",
    badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
  },
  {
    id: "0qwy91Ee-bU",
    category: "SEASON 01 • EPISODE 04",
    episodeTag: "AI PROTOCOL",
    title: "AURA-7 & The Secret Quantum Frequency",
    description: "Zap-Zap's laboratory AI detects an encrypted planetary frequency originating from the cosmos, unlocking ancient scientific formulas.",
    thumbnail: "/images/quantum_ai_robot.jpg",
    duration: "15:10",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
  },
  {
    id: "0qwy91Ee-bU",
    category: "SEASON 01 • EPISODE 05",
    episodeTag: "MULTIVERSE RIFT",
    title: "Sub-Atomic Gateway & The Cosmic Portal",
    description: "Cosmic string theory anomaly opens a portal into uncharted parallel dimensions, setting the stage for the next major chapter.",
    thumbnail: "/images/space_dimensional_portal.jpg",
    duration: "21:15",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
  },
];

interface EpisodeTerminalProps {
  initialVideos?: VideoItem[];
}

export default function EpisodeTerminal({ initialVideos }: EpisodeTerminalProps) {
  const [selectedVideo, setSelectedVideo] = useState<FranchiseEpisode | null>(null);

  const episodes: FranchiseEpisode[] =
    initialVideos && initialVideos.length > 0
      ? initialVideos.map((v, i) => ({
          id: v.id,
          category: `SEASON 01 • ${v.episodeTag || `EPISODE 0${i + 1}`}`,
          episodeTag: v.episodeTag || "ANIMATED ADVENTURE",
          title: v.title,
          description: v.description || "Join Zap-Zap Professor and AURA-7 in their latest scientific adventure!",
          thumbnail: v.thumbnail || "/images/zap_hero_lab.jpg",
          duration: "15:00",
          badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
        }))
      : FEATURED_EPISODES;

  const mainFeatured = episodes[0];
  const otherEpisodes = episodes.slice(1);

  return (
    <section className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto" id="episodes">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4"
        >
          WATCH <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">ZAP-ZAP</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg font-medium"
        >
          Stream full animated episodes, epic villain battles, and exciting science missions on YouTube and official platforms!
        </motion.p>
      </div>

      {/* Main Big Featured Video Card (Pinkfong Style) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => setSelectedVideo(mainFeatured)}
        className="relative rounded-[2.5rem] bg-white border-2 border-slate-100 overflow-hidden shadow-2xl shadow-slate-200/80 mb-12 cursor-pointer group transition-all duration-300 hover:shadow-orange-200/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Large Video Thumbnail (7 cols) */}
          <div className="lg:col-span-7 relative aspect-video bg-slate-900 overflow-hidden">
            <Image
              src={mainFeatured.thumbnail}
              alt={mainFeatured.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

            {/* Glowing Big Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center pl-1 shadow-2xl shadow-orange-500/60 group-hover:scale-115 transition-transform duration-300">
                <Play size={32} fill="currentColor" />
              </div>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-xl text-xs font-bold font-mono">
              {mainFeatured.duration}
            </div>
          </div>

          {/* Featured Episode Details (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase">
                  {mainFeatured.episodeTag}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase">
                  {mainFeatured.category}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 mb-4 group-hover:text-amber-600 transition-colors leading-tight">
                {mainFeatured.title}
              </h3>

              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mb-6">
                {mainFeatured.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="btn-zap-primary px-6 py-3 text-xs font-black uppercase tracking-wider">
                <Play size={15} fill="currentColor" />
                <span>Play Full Episode</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid of Other Episodes (Pinkfong Collection Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {otherEpisodes.map((ep, idx) => (
          <motion.div
            key={ep.id + idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedVideo(ep)}
            className="card-franchise p-4 flex flex-col justify-between cursor-pointer group bg-white border border-slate-100"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-sm">
              <Image
                src={ep.thumbnail}
                alt={ep.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center pl-0.5 shadow-lg">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                {ep.duration}
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <span className="text-[10px] font-black text-amber-600 uppercase tracking-wider block mb-1">
                  {ep.category}
                </span>
                <h4 className="font-heading font-black text-slate-900 text-base group-hover:text-amber-600 transition-colors line-clamp-2 mb-2 leading-snug">
                  {ep.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed mb-3">
                  {ep.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-amber-600 group-hover:text-orange-600">
                <span>WATCH MISSION</span>
                <Play size={12} fill="currentColor" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Official YouTube Channel Callout (Pinkfong Style Banner) */}
      <div className="mt-14 p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-white shadow-xl shadow-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-center sm:text-left">
          <div className="w-16 h-16 rounded-3xl bg-white text-red-600 flex items-center justify-center shadow-lg flex-shrink-0">
            <YoutubeIcon size={36} />
          </div>
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white leading-tight">
              Subscribe on YouTube
            </h3>
            <p className="text-sm sm:text-base text-white/90 font-medium">
              Join thousands of young science explorers! New Bengali animation episodes every month.
            </p>
          </div>
        </div>

        <a
          href="https://www.youtube.com/channel/UCMoKurzjPxYRwWUSGS1eXeQ"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-white text-slate-900 font-black text-sm uppercase tracking-wider shadow-lg hover:bg-slate-50 transition-all hover:scale-105 whitespace-nowrap"
        >
          Subscribe Now
        </a>
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-all"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-none"
              />
            </div>
            <div className="p-6 bg-white">
              <span className="text-xs font-bold text-amber-500 uppercase">{selectedVideo.category}</span>
              <h3 className="text-xl font-black text-slate-900 mb-1">{selectedVideo.title}</h3>
              <p className="text-sm text-slate-600 font-medium">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
