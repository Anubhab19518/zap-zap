import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ShareButtons from "@/components/Blog/ShareButtons";
import { BLOG_POSTS, getBlogPostBySlug, getAllBlogSlugs } from "@/data/blogs";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  FileText,
  Quote,
  CheckCircle2,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Zap-Zap Professor",
    };
  }

  return {
    title: `${post.title} | Zap-Zap Professor Laboratory Chronicles`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Related articles (excluding current one)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fafaf9] text-slate-900 flex flex-col relative overflow-x-hidden selection:bg-amber-400 selection:text-slate-950">
      <Header />

      <article className="pt-36 sm:pt-40 pb-20 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center flex-wrap gap-2 text-xs font-bold text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-600 transition-colors">HOME</Link>
          <ChevronRight size={12} />
          <Link href="/blog" className="hover:text-amber-600 transition-colors">BLOGS</Link>
          <ChevronRight size={12} />
          <span className="text-slate-900 line-clamp-1">{post.title}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-black text-slate-600 hover:text-amber-600 transition-colors uppercase tracking-wider group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Chronicles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
              <Calendar size={13} />
              <span>{post.date}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600">
              <Clock size={13} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed mb-8">
            {post.subtitle}
          </p>

          {/* Author Card & Share Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-amber-200 border-2 border-amber-300 flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading text-sm font-black text-slate-900">{post.author.name}</h4>
                <p className="text-xs text-slate-500 font-medium">{post.author.role}</p>
              </div>
            </div>

            <ShareButtons title={post.title} slug={post.slug} />
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-200/80 mb-12 bg-slate-900">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover object-center"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-10">
          {post.sections.map((sec, idx) => (
            <section key={idx} className="space-y-6">
              {sec.heading && (
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight pt-4 border-t border-slate-100 first:border-0 first:pt-0">
                  {sec.heading}
                </h2>
              )}

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-700 leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              {/* Callout Box (Science Fact / Lab Note / Quote) */}
              {sec.callout && (
                <div
                  className={`p-6 rounded-2xl border-2 my-6 ${
                    sec.callout.type === "science-fact"
                      ? "bg-cyan-50/80 border-cyan-300 text-cyan-950 shadow-md shadow-cyan-100/50"
                      : sec.callout.type === "lab-note"
                      ? "bg-amber-50/80 border-amber-300 text-amber-950 shadow-md shadow-amber-100/50"
                      : "bg-purple-50/80 border-purple-300 text-purple-950 shadow-md shadow-purple-100/50"
                  }`}
                >
                  <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider mb-2">
                    {sec.callout.type === "science-fact" && <Lightbulb size={16} className="text-cyan-600" />}
                    {sec.callout.type === "lab-note" && <FileText size={16} className="text-amber-600" />}
                    {sec.callout.type === "quote" && <Quote size={16} className="text-purple-600" />}
                    <span>{sec.callout.title || (sec.callout.type === "quote" ? "Key Insight" : "Laboratory Note")}</span>
                  </div>
                  <p className="text-sm sm:text-base font-medium leading-relaxed">
                    {sec.callout.text}
                  </p>
                </div>
              )}

              {/* Secondary Article Image */}
              {sec.image && (
                <figure className="my-8">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
                    <Image
                      src={sec.image.src}
                      alt={sec.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 896px"
                      className="object-cover object-center"
                    />
                  </div>
                  {sec.image.caption && (
                    <figcaption className="text-center text-xs text-slate-500 font-medium mt-3 italic">
                      🔬 {sec.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* Bullet Points */}
              {sec.bulletPoints && (
                <ul className="space-y-3 my-4 list-none pl-0">
                  {sec.bulletPoints.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-800">
                      <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Related Articles Section */}
        <div className="mt-16 pt-12 border-t-2 border-slate-200/80">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading text-2xl font-black text-slate-900 tracking-tight">
              MORE FROM THE <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">LABORATORY</span>
            </h3>
            <Link
              href="/blog"
              className="text-xs font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <Link
                key={rPost.slug}
                href={`/blog/${rPost.slug}`}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200 hover:border-amber-300 p-4 shadow-sm hover:shadow-lg transition-all"
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3">
                    <Image
                      src={rPost.coverImage}
                      alt={rPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-heading text-sm font-black text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                    {rPost.title}
                  </h4>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>{rPost.readTime}</span>
                  <ArrowRight size={12} className="text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
