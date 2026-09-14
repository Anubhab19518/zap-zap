import Header from "@/components/Header/Header";
import HeroCommandCenter from "@/components/Hero/HeroCommandCenter";
import CharacterCodex from "@/components/CharacterCodex/CharacterCodex";
import StickyUniverseExplorer from "@/components/StickyExplorer/StickyUniverseExplorer";
import InventionLab from "@/components/InventionLab/InventionLab";
import EpisodeTerminal from "@/components/EpisodeTerminal/EpisodeTerminal";
import UniverseWorld from "@/components/UniverseWorld/UniverseWorld";
import UniverseRoadmap from "@/components/Roadmap/UniverseRoadmap";
import FaqAccordion from "@/components/Faq/FaqAccordion";
import Footer from "@/components/Footer/Footer";

const DEFAULT_CHANNEL_ID = "UCMoKurzjPxYRwWUSGS1eXeQ";

async function getYouTubeVideos() {
  const apiKey = process.env.YOUTUBE_API_KEY || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID || DEFAULT_CHANNEL_ID;

  if (!apiKey) {
    return [];
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.warn("YouTube API responded with status:", res.status);
      return [];
    }

    const data = await res.json();
    if (!data.items || !Array.isArray(data.items)) {
      return [];
    }

    interface YouTubeSearchItem {
      id?: { videoId?: string };
      snippet?: {
        title?: string;
        description?: string;
        publishedAt?: string;
        thumbnails?: {
          maxres?: { url?: string };
          high?: { url?: string };
          medium?: { url?: string };
        };
      };
    }

    return (data.items as YouTubeSearchItem[])
      .filter((item) => item.id?.videoId)
      .slice(0, 5)
      .map((item, index: number) => ({
        id: item.id?.videoId || "",
        title: item.snippet?.title || "Zap-Zap Professor Episode",
        description: item.snippet?.description || "",
        thumbnail:
          item.snippet?.thumbnails?.maxres?.url ||
          item.snippet?.thumbnails?.high?.url ||
          item.snippet?.thumbnails?.medium?.url ||
          "/images/zap_hero_lab.jpg",
        publishedAt: item.snippet?.publishedAt
          ? new Date(item.snippet.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : "Recently Premiered",
        episodeTag: `EPISODE 0${index + 1}`,
      }));
  } catch (err) {
    console.error("Error fetching YouTube videos:", err);
    return [];
  }
}

export default async function Home() {
  const initialVideos = await getYouTubeVideos();
  const featuredVideoId = initialVideos[0]?.id || "0qwy91Ee-bU";

  return (
    <main className="min-h-screen bg-[#fafaf9] text-slate-900 flex flex-col relative overflow-x-hidden selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Pinkfong-Style Clean Navigation */}
      <Header />

      {/* 2. Animated Franchise Opening Hero */}
      <HeroCommandCenter featuredVideoId={featuredVideoId} />

      {/* 3. Character-First Content Exploration ("Meet the Universe") */}
      <CharacterCodex />

      {/* 4. Signature 6-Stage Animated Episode Story Journey (GSAP Sticky Scroll) */}
      <StickyUniverseExplorer />

      {/* 5. Playful Inventions Lab ("Discover the Inventions") */}
      <InventionLab />

      {/* 6. Media & Video Hub ("Watch Zap-Zap") */}
      <EpisodeTerminal initialVideos={initialVideos} />

      {/* 7. World-Building Lore ("The World of Zap-Zap") */}
      <UniverseWorld />

      {/* 8. Expanding Franchise Roadmap */}
      <UniverseRoadmap />

      {/* 9. Family Questions & Answers */}
      <FaqAccordion />

      {/* 10. Illustrated Character-Driven Warm Franchise Footer */}
      <Footer />
    </main>
  );
}
