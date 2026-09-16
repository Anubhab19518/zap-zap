"use client";

import React, { useState } from "react";
import { Share2, Check, Link2 } from "lucide-react";
import { FacebookIcon } from "@/components/Icons/SocialIcons";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/blog/${slug}`;
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error("Failed to copy link:", e);
      }
    }
  };

  const encodedTitle = encodeURIComponent(title);
  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(`${window.location.origin}/blog/${slug}`) : "";

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-slate-400 mr-1 hidden sm:inline flex items-center gap-1">
        <Share2 size={13} />
        SHARE:
      </span>

      {/* Copy Link Button */}
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-800 text-xs font-bold transition-all border border-slate-200 cursor-pointer"
        title="Copy article link"
      >
        {copied ? (
          <>
            <Check size={13} className="text-emerald-600" />
            <span className="text-emerald-700">Copied!</span>
          </>
        ) : (
          <>
            <Link2 size={13} />
            <span>Copy Link</span>
          </>
        )}
      </button>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-all text-xs font-black"
        aria-label="Share on X"
      >
        𝕏
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-500 hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-all"
        aria-label="Share on WhatsApp"
      >
        <span className="text-xs font-bold">WA</span>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-all"
        aria-label="Share on Facebook"
      >
        <FacebookIcon size={14} />
      </a>
    </div>
  );
}
