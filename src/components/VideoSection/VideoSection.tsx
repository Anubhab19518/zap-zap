"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Radio, ExternalLink, X, Clock } from "lucide-react";
import { YoutubeIcon } from "../Icons/SocialIcons";
import styles from "./VideoSection.module.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration?: string;
  episodeTag: string;
}

const FALLBACK_EPISODES: VideoItem[] = [
  {
    id: "0qwy91Ee-bU",
    title: "কালীপুরের আকাশে মহাকাশযান | Kalipurer Akashe Mohakashjaan | Zapzap Professor | Bangla Cartoon",
    description: "When an unidentified spaceship hovers over the skies of Kalipur, Zap Zap Professor initiates high-tech laboratory telemetry to investigate the extraterrestrial anomaly.",
    thumbnail: "/images/zap_hero_lab.jpg",
    publishedAt: "Latest Episode",
    duration: "14:20",
    episodeTag: "TRANSMISSION 01",
  },
  {
    id: "0qwy91Ee-bU",
    title: "Episode 2: Rise of the Cybernetic Syndicate",
    description: "Rogue inventor Dr. Cyberos attempts to siphon the city's power grid with dark energy drones. Zap Zap deploys his electro-plasma gauntlet.",
    thumbnail: "/images/supervillain_dark_tech.jpg",
    publishedAt: "Season 1",
    duration: "16:45",
    episodeTag: "TRANSMISSION 02",
  },
  {
    id: "0qwy91Ee-bU",
    title: "Episode 3: The AURA-7 Protocol",
    description: "Zap Zap's laboratory AI detects an encrypted planetary frequency originating from the cosmos, unlocking new scientific mysteries.",
    thumbnail: "/images/quantum_ai_robot.jpg",
    publishedAt: "Season 1",
    duration: "15:10",
    episodeTag: "TRANSMISSION 03",
  },
  {
    id: "0qwy91Ee-bU",
    title: "Episode 4: Mach 3 Sky Chase",
    description: "Piloting the Aurora-X anti-gravity jet through supersonic turbulence to intercept an illegal tech heist over futuristic Bengal.",
    thumbnail: "/images/futuristic_sci_fi_vehicle.jpg",
    publishedAt: "Season 1",
    duration: "18:00",
    episodeTag: "TRANSMISSION 04",
  },
  {
    id: "0qwy91Ee-bU",
    title: "Episode 5: The Sub-Atomic Gauntlet",
    description: "Surrounded in an abandoned research facility, Zap Zap uses harmonic resonance and scientific intuition to outsmart an entire robotic army.",
    thumbnail: "/images/energy_disruptor_gauntlet.jpg",
    publishedAt: "Season 1",
    duration: "17:30",
    episodeTag: "TRANSMISSION 05",
  },
];

interface VideoSectionProps {
  initialVideos?: VideoItem[];
}

export default function VideoSection({ initialVideos }: VideoSectionProps) {
  // Ensure we display exactly the top 5 videos (1 featured + 4 grid)
  const rawVideos = initialVideos && initialVideos.length > 0 ? initialVideos : FALLBACK_EPISODES;
  const videos = rawVideos.slice(0, 5);

  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const getEmbedUrl = (videoId: string) => {
    // If videoId is valid 11 chars or standard id, embed it directly
    const validId = videoId && videoId.length >= 8 ? videoId : "0qwy91Ee-bU";
    return `https://www.youtube-nocookie.com/embed/${validId}?autoplay=1&rel=0`;
  };

  return (
    <section className={styles.videoSection} id="episodes">
      <div className={styles.container}>
        {/* Section Header */}
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <div className="sciFiBadge">
              <Radio size={13} />
              <span>YOUTUBE BROADCAST // TRANSMISSIONS</span>
            </div>
            <h2 className={styles.sectionTitle}>
              LATEST <span className="neonText">ANIMATED EPISODES</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Stream original Bengali science-fiction action episodes, missions, and character shorts directly from our official YouTube Channel.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Video Highlight (Video #1) */}
        {videos.length > 0 && (
          <ScrollReveal>
            <div className={styles.featuredCard} onClick={() => setSelectedVideo(videos[0])}>
              <div className={styles.featuredMediaWrap}>
                <Image
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className={styles.featuredThumb}
                />
                <div className={styles.featuredOverlay} />
                <div className={styles.featuredPlayButton}>
                  <Play size={28} fill="currentColor" />
                </div>
                <div className={styles.liveBroadcastPill}>
                  <span className="pulseDot" />
                  <span>FEATURED TRANSMISSION</span>
                </div>
              </div>

              <div className={styles.featuredContent}>
                <div className={styles.tagRow}>
                  <span className={styles.featuredTag}>{videos[0].episodeTag}</span>
                  {videos[0].duration && (
                    <span className={styles.durationTag}>
                      <Clock size={12} /> {videos[0].duration}
                    </span>
                  )}
                </div>
                <h3 className={styles.featuredTitle}>{videos[0].title}</h3>
                <p className={styles.featuredDesc}>{videos[0].description}</p>
                
                <div className={styles.featuredFooter}>
                  <button className="neonButtonPrimary" style={{ padding: "0.6rem 1.4rem" }}>
                    <Play size={16} fill="currentColor" />
                    <span>Watch Full Episode</span>
                  </button>
                  <a
                    href="https://www.youtube.com/channel/UCMoKurzjPxYRwWUSGS1eXeQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ytChannelLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <YoutubeIcon size={18} />
                    <span>Subscribe on YouTube</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Grid of 4 Remaining Videos (Videos #2, #3, #4, #5) */}
        {videos.length > 1 && (
          <div className={styles.videoGrid}>
            {videos.slice(1).map((vid, index) => (
              <ScrollReveal key={vid.id + index} delay={index * 80}>
                <div className={styles.videoCard} onClick={() => setSelectedVideo(vid)}>
                  <div className={styles.thumbnailWrapper}>
                    <Image
                      src={vid.thumbnail}
                      alt={vid.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
                      className={styles.thumbnailImg}
                    />
                    <div className={styles.thumbnailGradient} />
                    <div className={styles.playIconOverlay}>
                      <Play size={20} fill="currentColor" />
                    </div>
                    <span className={styles.cardEpisodeBadge}>{vid.episodeTag}</span>
                    {vid.duration && (
                      <span className={styles.cardDurationBadge}>
                        <Clock size={11} /> {vid.duration}
                      </span>
                    )}
                  </div>

                  <div className={styles.cardInfo}>
                    <span className={styles.cardDate}>{vid.publishedAt}</span>
                    <h4 className={styles.cardTitle}>{vid.title}</h4>
                    <p className={styles.cardDesc}>{vid.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Channel Banner Callout */}
        <ScrollReveal>
          <div className={styles.channelBanner}>
            <div className={styles.channelInfoWrap}>
              <div className={styles.channelIconCircle}>
                <YoutubeIcon size={28} className="neonText" />
              </div>
              <div>
                <h3 className={styles.bannerHeading}>Official Zap-Zap Professor YouTube Channel</h3>
                <p className={styles.bannerText}>
                  Join thousands of animation and science enthusiasts. Subscribe for weekly Bengali animated adventures!
                </p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/channel/UCMoKurzjPxYRwWUSGS1eXeQ"
              target="_blank"
              rel="noopener noreferrer"
              className="neonButtonPrimary"
            >
              <YoutubeIcon size={18} />
              <span>Visit Channel (UCMoKurzjPxYRwWUSGS1eXeQ)</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Video Modal Player with direct YouTube Video ID */}
      {selectedVideo && (
        <div className={styles.modalOverlay} onClick={() => setSelectedVideo(null)}>
          <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedVideo(null)}
              aria-label="Close Episode Video"
            >
              <X size={24} />
            </button>
            <div className={styles.videoPlayerFrame}>
              <iframe
                src={getEmbedUrl(selectedVideo.id)}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.modalMeta}>
              <span className={styles.modalTag}>{selectedVideo.episodeTag}</span>
              <h3 className={styles.modalTitle}>{selectedVideo.title}</h3>
              <p className={styles.modalDescription}>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
