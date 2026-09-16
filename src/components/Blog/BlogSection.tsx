"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export default function BlogSection() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="relative py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto" id="blog">
      {/* Ambient Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-amber-400/10 via-purple-500/10 to-cyan-400/10 blur-3xl pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4"
        >
          LATEST <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600 bg-clip-text text-transparent">STORIES & BLOGS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed"
        >
          Explore in-depth articles on science lore, animation behind-the-scenes, invention breakdowns, and STEM discoveries from the world of Zap-Zap Professor.
        </motion.p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-12">
        {featuredPosts.map((post, idx) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group flex flex-col justify-between bg-white rounded-[2rem] border-2 border-slate-100 hover:border-amber-300 shadow-lg hover:shadow-2xl hover:shadow-amber-100/60 transition-all duration-300 overflow-hidden"
          >
            <div>
              {/* Cover Image */}
              <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Card Meta & Body */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-amber-600">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-heading text-xl font-black text-slate-900 group-hover:text-amber-600 transition-colors mb-3 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-slate-600 text-sm font-medium leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Read Action Footer */}
            <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden bg-amber-200 border border-amber-300">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-500">{post.author.name}</span>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-black text-amber-600 group-hover:text-amber-700 uppercase tracking-wider"
              >
                <span>Read Story</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View All Blogs CTA */}
      <div className="text-center relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-amber-200/50 hover:scale-105 active:scale-95"
        >
          <BookOpen size={16} />
          <span>Explore All Articles & Science Lore ({BLOG_POSTS.length})</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
