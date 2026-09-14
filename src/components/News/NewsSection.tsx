"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsItem {
  id: string;
  category: string;
  badgeColor: string;
  date: string;
  title: string;
  summary: string;
  imageSrc: string;
}

const NEWS_ARTICLES: NewsItem[] = [
  {
    id: "comic-release",
    category: "DIGITAL COMICS",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    date: "AUG 2026",
    title: "Official Zap-Zap Digital Science Comic Volume 1 Released!",
    summary: "Dive deeper into Zap-Zap’s early lab days with our new interactive web comic, packed with fun science puzzles for young readers.",
    imageSrc: "/images/zap_hero_lab.jpg",
  },
  {
    id: "studio-spotlight",
    category: "ANIMATION SPOTLIGHT",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    date: "AUG 2026",
    title: "Behind the Scenes: How We Animated the Aurora-X Mach 3.5 Chase",
    summary: "Our Bengal animation studio reveals the storyboard sketches, 3D CGI layering, and sound design behind our most thrilling sky pursuit.",
    imageSrc: "/images/futuristic_sci_fi_vehicle.jpg",
  },
  {
    id: "science-workshop",
    category: "COMMUNITY & STEM",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    date: "JUL 2026",
    title: "Zap-Zap Science Camp: Hands-on Experiments for Young Prodigies",
    summary: "Bringing animated physics to life! Students learn how magnetic levitation and clean solar energy work through safe DIY experiments.",
    imageSrc: "/images/lab_team_allies.jpg",
  },
];

export default function NewsSection() {
  return (
    <section className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto" id="news">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4"
        >
          WHAT’S NEW IN <span className="bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">ZAP-ZAP</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg font-medium"
        >
          Stay updated with our latest animated episode premieres, digital comic book releases, studio behind-the-scenes, and community workshops.
        </motion.p>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {NEWS_ARTICLES.map((article, idx) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="card-franchise overflow-hidden flex flex-col justify-between group cursor-pointer bg-white border-2 border-slate-100"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <Image
                src={article.imageSrc}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full font-black text-[11px] uppercase tracking-wider shadow-sm border ${article.badgeColor}`}>
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mb-2">
                  <Calendar size={13} />
                  <span>{article.date}</span>
                </div>
                <h3 className="font-heading text-xl font-black text-slate-900 group-hover:text-purple-600 transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-black text-purple-600 group-hover:text-purple-700">
                <span>READ STORY</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
