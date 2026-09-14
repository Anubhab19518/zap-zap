"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, User, Zap, X } from "lucide-react";

interface HeroCommandCenterProps {
  featuredVideoId?: string;
}

export default function HeroCommandCenter({
  featuredVideoId = "0qwy91Ee-bU",
}: HeroCommandCenterProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] w-full flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#fffbeb] via-[#f8fafc] to-[#ffffff]">
      {/* Decorative Playful Floating Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text & Call to Action (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Oversized Friendly Bold Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            WHERE SCIENCE BECOMES THE{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
              SUPERPOWER!
            </span>
          </h1>

          {/* Short Emotional Brand Statement */}
          <p className="text-base sm:text-xl text-slate-600 font-medium mb-8 leading-relaxed max-w-xl">
            A brilliant young scientist. Impossible futuristic inventions. Extraordinary adventures defending Bengal and the multiverse!
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="btn-zap-primary w-full sm:w-auto px-8 py-4 text-sm sm:text-base tracking-wider uppercase font-black"
            >
              <Play size={18} fill="currentColor" />
              <span>WATCH THE UNIVERSE</span>
            </button>

            <a
              href="#characters"
              className="btn-zap-secondary w-full sm:w-auto px-7 py-4 text-sm sm:text-base tracking-wider uppercase font-bold"
            >
              <User size={18} className="text-cyan-600" />
              <span>MEET CHARACTERS</span>
            </a>
          </div>

          {/* Quick Franchise Highlights */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-sm">
              <Zap size={14} className="text-amber-500" /> 50+ Inventions
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-sm">
              Fun For All Ages
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-sm">
              4K Cinematic Quality
            </span>
          </div>
        </motion.div>

        {/* Right Character Showcase Visual (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Outer Illustrated Halo */}
          <div className="relative w-[300px] sm:w-[380px] md:w-[420px] aspect-square rounded-[3rem] bg-gradient-to-tr from-amber-400 via-orange-400 to-cyan-400 p-2.5 shadow-2xl shadow-orange-500/20">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white">
              <Image
                src="/images/zap_hero_lab.jpg"
                alt="Zap-Zap Professor and Inventions"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating Character Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-100 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-white font-black flex-shrink-0 shadow-md">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-slate-900 text-sm">ZAP-ZAP PROFESSOR</h4>
                  <p className="text-xs text-slate-500 font-medium">Chief Scientist & Protector of Bengal</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-all"
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${featuredVideoId}?autoplay=1&rel=0`}
                title="Zap Zap Professor Mission Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-none"
              />
            </div>
            <div className="p-6 bg-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">OFFICIAL ANIMATED TRAILER</span>
                <h3 className="text-lg font-black text-slate-900">Zap-Zap Professor: Where Science Becomes the Superpower</h3>
              </div>
              <a
                href="https://www.youtube.com/channel/UCMoKurzjPxYRwWUSGS1eXeQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-zap-primary px-5 py-2.5 text-xs font-black uppercase"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
