"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    category: "ABOUT THE SHOW",
    question: "What is Zap-Zap Professor and what is the concept?",
    answer:
      "Zap-Zap Professor is an original Bengali science-fiction animated franchise. It follows a brilliant young scientist who uses creative physics, non-lethal inventions, and quick thinking — rather than physical violence — to outsmart rogue machines and protect Bengal.",
  },
  {
    category: "AUDIENCE & RATING",
    question: "What age demographic is Zap-Zap Professor suitable for?",
    answer:
      "The series is crafted for kids, young adults, and animation enthusiasts of all ages (ages 6 to 16+ and families). Every episode balances high-energy action with educational STEM principles and wholesome humor.",
  },
  {
    category: "WHERE TO WATCH",
    question: "Where can we watch the episodes?",
    answer:
      "All official animated episodes and behind-the-scenes specials stream for free on our official YouTube channel (@zapzapprofessor). New episodes premiere regularly alongside digital web comics.",
  },
  {
    category: "LANGUAGE & CULTURE",
    question: "Is the series available in Bengali and other languages?",
    answer:
      "Yes! The primary dialogue is recorded in rich, energetic Bengali featuring original voice actors, complete with English subtitles for global audiences. Dubbed versions in other regional languages are planned.",
  },
  {
    category: "COLLABORATIONS",
    question: "How can brands, schools, or animators collaborate with Zap-Zap?",
    answer:
      "We warmly welcome partnerships with STEM educators, animation studios, voice artists, and educational brands. Reach out via our official contact terminal below or email us directly at zapzapprofessor@gmail.com.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-4 md:px-8 max-w-5xl mx-auto" id="faq">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4"
        >
          FREQUENTLY ASKED <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">QUESTIONS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg font-medium"
        >
          Everything you need to know about the show, episode release schedule, educational themes, and how to get involved.
        </motion.p>
      </div>

      {/* Accordion Cards */}
      <div className="space-y-4">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`card-franchise overflow-hidden transition-all duration-300 border-2 ${
                isOpen ? "border-amber-400 bg-amber-50/40 shadow-lg shadow-amber-200/30" : "border-slate-100 bg-white"
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div>
                  <span className="text-[11px] font-black text-amber-600 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-black text-slate-900 leading-snug">
                    {item.question}
                  </h3>
                </div>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-amber-500 text-white shadow-md" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 text-slate-600 font-medium text-sm sm:text-base leading-relaxed border-t border-slate-100">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
