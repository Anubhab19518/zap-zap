"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Compass, Atom, ShieldAlert, Cpu, Sparkles, X } from "lucide-react";
import styles from "./Hero.module.css";

interface HeroProps {
  featuredVideoId?: string;
}

export default function Hero({ featuredVideoId = "0qwy91Ee-bU" }: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className={styles.heroSection}>
      {/* Background Image with Cinematic Gradient Mask */}
      <div className={styles.mediaContainer}>
        <Image
          src="/images/zap_hero_lab.jpg"
          alt="Zap Zap Professor in futuristic laboratory"
          fill
          priority
          sizes="100vw"
          className={styles.heroBackground}
        />
        <div className={styles.gradientOverlay} />
        <div className={styles.radialGlow} />
        <div className={styles.scanlineOverlay} />
      </div>

      {/* Hero Content Container */}
      <div className={styles.contentWrapper}>
        <div className={styles.badgeRow}>
          <div className="sciFiBadge">
            <span className="pulseDot" />
            <span>ORIGINAL BENGALI SCI-FI ANIMATION</span>
          </div>
          <div className="sciFiBadge sciFiBadgeAmber">
            <Sparkles size={12} />
            <span>INTELLIGENCE IS THE SUPERPOWER</span>
          </div>
        </div>

        <h1 className={styles.heroTitle}>
          WHERE SCIENCE <br />
          <span className="neonText">BECOMES THE</span> <br />
          <span className={styles.superpowerGradient}>SUPERPOWER</span>
        </h1>

        <p className={styles.heroDescription}>
          Step into the high-tech universe of <strong>Zap Zap Professor</strong> — a fearless Bengali scientist hero who wields futuristic inventions, quantum robotics, and relentless intellect to outthink darkness and protect the world.
        </p>

        {/* Action Buttons */}
        <div className={styles.buttonGroup}>
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="neonButtonPrimary"
            id="hero-watch-trailer-btn"
          >
            <Play size={18} fill="currentColor" />
            <span>Watch Universe Trailer</span>
          </button>

          <a
            href="#universe"
            className="neonButtonSecondary"
            id="hero-explore-universe-btn"
          >
            <Compass size={18} className="neonText" />
            <span>Explore Universe & Inventions</span>
          </a>
        </div>

        {/* Sci-Fi Stat Matrix Cards */}
        <div className={styles.statMatrix}>
          <div className={styles.statCard}>
            <div className={styles.statIconWrapper}>
              <Atom size={22} className="neonText" />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Original Bengali Sci-Fi</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIconWrapper}>
              <Cpu size={22} className="amberText" />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Experimental Inventions</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIconWrapper}>
              <ShieldAlert size={22} className="emeraldText" />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Missions & Mysteries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Video Modal */}
      {isVideoModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsVideoModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeModalBtn}
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close Video Trailer"
            >
              <X size={24} />
            </button>
            <div className={styles.iframeContainer}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${featuredVideoId || "0qwy91Ee-bU"}?autoplay=1&rel=0`}
                title="Zap Zap Professor Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
