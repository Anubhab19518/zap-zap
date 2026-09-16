import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BlogListClient from "@/components/Blog/BlogListClient";
import { BLOG_POSTS } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Laboratory Chronicles & Blogs | Zap-Zap Professor",
  description: "Read the latest science articles, animation behind-the-scenes, invention breakdowns, and cosmic lore from the world of Zap-Zap Professor.",
  openGraph: {
    title: "Laboratory Chronicles & Blogs | Zap-Zap Professor",
    description: "Read the latest science articles, animation behind-the-scenes, invention breakdowns, and cosmic lore from the world of Zap-Zap Professor.",
    images: ["/images/zap_hero_lab.jpg"],
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9] text-slate-900 flex flex-col relative overflow-x-hidden selection:bg-amber-400 selection:text-slate-950">
      <Header />
      <BlogListClient initialPosts={BLOG_POSTS} />
      <Footer />
    </main>
  );
}
