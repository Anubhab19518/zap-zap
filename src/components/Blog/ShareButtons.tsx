"use client";

import React, { useState } from "react";
import { Share2, Check, Link2 } from "lucide-react";
import { FacebookIcon, WhatsappIcon, XIcon } from "@/components/Icons/SocialIcons";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/blog/${slug}`;
    }
    return `https://zapzapprofessor.com/blog/${slug}`;
  };

  const handleCopyLink = async () => {
    const url = getShareUrl();
    if (!url) return;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Failed to copy link:", e);
    }
  };

  const handleShare = (platform: "twitter" | "whatsapp" | "facebook") => {
    const url = getShareUrl();
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);

    let targetUrl = "";
    if (platform === "twitter") {
      targetUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
    } else if (platform === "whatsapp") {
      targetUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
    } else if (platform === "facebook") {
      targetUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    }

    if (targetUrl && typeof window !== "undefined") {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="flex items-center flex-wrap gap-2">
      <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-slate-400 whitespace-nowrap mr-1">
        <Share2 size={13} className="flex-shrink-0" />
        <span>SHARE:</span>
      </span>

      {/* Copy Link Button */}
      <button
        type="button"
        onClick={handleCopyLink}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-800 text-xs font-bold transition-all border border-slate-200 cursor-pointer flex-shrink-0"
        title="Copy article link"
      >
        {copied ? (
          <>
            <Check size={13} className="text-emerald-600 flex-shrink-0" />
            <span className="text-emerald-700">Copied!</span>
          </>
        ) : (
          <>
            <Link2 size={13} className="flex-shrink-0" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      {/* Twitter / X */}
      <button
        type="button"
        onClick={() => handleShare("twitter")}
        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-all flex-shrink-0 cursor-pointer"
        aria-label="Share on X"
        title="Share on X"
      >
        <XIcon size={13} />
      </button>

      {/* WhatsApp */}
      <button
        type="button"
        onClick={() => handleShare("whatsapp")}
        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-500 hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-all flex-shrink-0 cursor-pointer"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
      >
        <WhatsappIcon size={16} />
      </button>

      {/* Facebook */}
      <button
        type="button"
        onClick={() => handleShare("facebook")}
        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-all flex-shrink-0 cursor-pointer"
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <FacebookIcon size={14} />
      </button>
    </div>
  );
}
