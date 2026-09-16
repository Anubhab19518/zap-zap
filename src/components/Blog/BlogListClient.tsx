"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, BookOpen, ChevronRight } from "lucide-react";
import { BlogPost } from "@/data/blogs";

interface BlogListClientProps {
  initialPosts: BlogPost[];
}

const CATEGORIES = [
  "ALL",
  "FRANCHISE ORIGINS",
  "INVENTION SPOTLIGHT",
  "VEHICLE SCHEMATICS",
  "VILLAIN DOSSIER",
  "COSMIC LORE",
];

export default function BlogListClient({ initialPosts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = initialPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "ALL" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredPost = initialPosts[0];

  return (
    <div className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-amber-600 transition-colors">HOME</Link>
        <ChevronRight size={12} />
        <span className="text-slate-900">LABORATORY BLOGS & STORIES</span>
      </nav>

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
          LABORATORY <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600 bg-clip-text text-transparent">CHRONICLES</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
          Deep-dive articles into character backstories, physics behind inventions, studio animation secrets, and STEM guides for young scientists.
        </p>
      </div>

      {/* Featured Hero Article Banner */}
      {selectedCategory === "ALL" && searchQuery === "" && featuredPost && (
        <div className="mb-16">
          <div className="relative bg-white rounded-[2.5rem] border-2 border-amber-200/80 shadow-2xl shadow-amber-100/60 overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Image Side */}
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px] lg:min-h-[420px] overflow-hidden bg-slate-900">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Text Side */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-white via-white to-amber-50/40">
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-3">
                    <span className="flex items-center gap-1 text-slate-500">
                      <Calendar size={13} />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-600">
                      <Clock size={13} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-amber-600 transition-colors mb-3 leading-snug">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-6 line-clamp-3">
                    {featuredPost.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-amber-100 border border-amber-300">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold">{featuredPost.date}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-heading font-black text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer border ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 border-slate-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-amber-400 transition-colors shadow-sm"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col justify-between bg-white rounded-[2rem] border-2 border-slate-100 hover:border-amber-300 shadow-lg hover:shadow-2xl hover:shadow-amber-100/60 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                    />
                  </Link>

                  {/* Body */}
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

                    <p className="text-slate-600 text-sm font-medium leading-relaxed line-clamp-3 mb-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
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
                    <span>Read Article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 max-w-md mx-auto">
          <BookOpen size={40} className="mx-auto text-slate-400 mb-3" />
          <h3 className="font-heading text-lg font-bold text-slate-900 mb-1">No articles found</h3>
          <p className="text-xs text-slate-500 mb-4">Try searching for a different keyword or category.</p>
          <button
            onClick={() => {
              setSelectedCategory("ALL");
              setSearchQuery("");
            }}
            className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold uppercase cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
