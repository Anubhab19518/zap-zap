"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Cpu,
  Zap,
  Shield,
  Bot,
  Flame,
  Radio,
  Sparkles,
  ChevronRight,
  Layers,
} from "lucide-react";
import styles from "./BentoGrid.module.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

interface TechSpec {
  name: string;
  category: string;
  powerLevel: string;
  description: string;
  features: string[];
}

const TECH_SPECS: Record<string, TechSpec> = {
  gauntlet: {
    name: "Electro-Plasma Gauntlet V.4",
    category: "Personal Defense & Particle Control",
    powerLevel: "98.4% Sub-Atomic Output",
    description:
      "Engineered by Zap Zap to channel directed electromagnetic pulses that short-circuit hostile drones, dissolve cybernetic shields, and manipulate metal alloys.",
    features: [
      "Targeted EMP wave emitters",
      "Dynamic magnetic tractor beam",
      "Bio-feedback synchronization glove",
    ],
  },
  aiAssistant: {
    name: "AURA-7 Quantum AI Unit",
    category: "Autonomous Diagnostic Assistant",
    powerLevel: "128 PetaFLOPS Neural Core",
    description:
      "Zap Zap's laboratory companion capable of processing multi-variable physics equations in milliseconds and predicting villain combat vectors.",
    features: [
      "Real-time molecular scanning",
      "Autonomous lab machinery control",
      "Bengali & multilingual linguistic engine",
    ],
  },
  hovercraft: {
    name: "Aurora-X Anti-Gravity Jet",
    category: "Experimental Sci-Fi Vehicle",
    powerLevel: "Mach 3.5 Ion Thrusters",
    description:
      "Ultra-sleek aerodynamic hover jet powered by clean magnetic levitation rings, capable of atmospheric high-speed pursuits and stealth orbital scans.",
    features: [
      "Silent quantum vortex propulsion",
      "Kinetic deflector shields",
      "Mobile scientific sensor lab bay",
    ],
  },
};

export default function BentoGrid() {
  const [selectedTech, setSelectedTech] = useState<string>("gauntlet");
  const currentTech = TECH_SPECS[selectedTech];

  return (
    <section className={styles.bentoSection} id="inventions">
      <div className={styles.container}>
        {/* Section Header */}
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <div className="sciFiBadge">
              <Layers size={13} />
              <span>LABORATORY ARCHIVES // BENTO SHOWCASE</span>
            </div>
            <h2 className={styles.sectionTitle}>
              INVENTIONS, ALLIES & <span className="neonText">FORCES OF DARKNESS</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Explore the futuristic gadgets, intelligent robotics, and formidable adversaries that define the Zap Zap universe.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid Layout */}
        <div className={styles.bentoGrid}>
          {/* Card 1: Major Feature - Interactive Inventions Lab (Spans 2 cols, 2 rows) */}
          <ScrollReveal className={styles.bentoItemMajor}>
            <div className={styles.majorCardContent}>
              <div className={styles.majorImageWrap}>
                <Image
                  src="/images/energy_disruptor_gauntlet.jpg"
                  alt="Futuristic Inventions and Energy Gauntlet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className={styles.bentoCoverImage}
                />
                <div className={styles.imageDarkGradient} />
                
                <div className={styles.floatingTechPill}>
                  <Zap size={14} className="neonText" />
                  <span>EXPERIMENTAL LAB ARSENAL</span>
                </div>
              </div>

              <div className={styles.majorDetails}>
                <div className={styles.techTabs}>
                  <button
                    className={`${styles.tabBtn} ${
                      selectedTech === "gauntlet" ? styles.tabBtnActive : ""
                    }`}
                    onClick={() => setSelectedTech("gauntlet")}
                  >
                    <Zap size={14} /> Electro Gauntlet
                  </button>
                  <button
                    className={`${styles.tabBtn} ${
                      selectedTech === "aiAssistant" ? styles.tabBtnActive : ""
                    }`}
                    onClick={() => setSelectedTech("aiAssistant")}
                  >
                    <Bot size={14} /> AURA-7 AI
                  </button>
                  <button
                    className={`${styles.tabBtn} ${
                      selectedTech === "hovercraft" ? styles.tabBtnActive : ""
                    }`}
                    onClick={() => setSelectedTech("hovercraft")}
                  >
                    <Cpu size={14} /> Aurora-X Jet
                  </button>
                </div>

                <div className={styles.techInfoBlock}>
                  <div className={styles.techTitleRow}>
                    <h3 className={styles.techName}>{currentTech.name}</h3>
                    <span className={styles.powerBadge}>{currentTech.powerLevel}</span>
                  </div>
                  <span className={styles.techCategory}>{currentTech.category}</span>
                  <p className={styles.techDescription}>{currentTech.description}</p>

                  <div className={styles.featuresList}>
                    {currentTech.features.map((feat, index) => (
                      <div key={index} className={styles.featureItem}>
                        <div className={styles.featureBullet} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Zap Zap Hero Dossier (Tall Column) */}
          <ScrollReveal className={styles.bentoItemHero}>
            <div className={styles.heroCardContent}>
              <div className={styles.heroImageWrap}>
                <Image
                  src="/images/zap_hero_lab.jpg"
                  alt="Zap Zap Scientist Hero"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className={styles.bentoCoverImage}
                />
                <div className={styles.heroOverlayGradient} />
              </div>

              <div className={styles.heroTextContent}>
                <div className="sciFiBadge sciFiBadgeAmber" style={{ width: "fit-content" }}>
                  <Sparkles size={12} />
                  <span>THE SCIENTIST HERO</span>
                </div>
                <h3 className={styles.heroCardTitle}>Zap Zap</h3>
                <p className={styles.heroCardTagline}>
                  Brilliant Scientist • Fearless Adventurer • Master Problem Solver
                </p>
                <p className={styles.heroCardBio}>
                  Armed with boundless curiosity and an unyielding moral compass, Zap Zap proves that the true measure of a superhero isn&apos;t physical force, but the courage to think, innovate, and discover.
                </p>
                <div className={styles.heroTraits}>
                  <span className={styles.traitChip}>✓ Strategic Thinker</span>
                  <span className={styles.traitChip}>✓ Quantum Physicist</span>
                  <span className={styles.traitChip}>✓ Protector of Bengal</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Intelligent Robotics & AI Partner */}
          <ScrollReveal className={styles.bentoItemAi}>
            <div className={styles.aiCardContent}>
              <div className={styles.aiImageWrap}>
                <Image
                  src="/images/quantum_ai_robot.jpg"
                  alt="AURA-7 AI Companion Robot"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.bentoCoverImage}
                />
                <div className={styles.imageVignetteSubtle} />
              </div>
              <div className={styles.cardOverlayText}>
                <div className={styles.cardHeaderSmall}>
                  <Bot size={18} className="neonText" />
                  <span className={styles.smallCardCategory}>AI ALLY</span>
                </div>
                <h4 className={styles.cardTitle}>AURA-7 & Smart Robotics</h4>
                <p className={styles.cardDesc}>
                  Autonomous laboratory robotics executing quantum algorithms and real-time mission telemetry.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: High-Tech Vehicles & Mobility */}
          <ScrollReveal className={styles.bentoItemVehicle}>
            <div className={styles.vehicleCardContent}>
              <div className={styles.vehicleImageWrap}>
                <Image
                  src="/images/futuristic_sci_fi_vehicle.jpg"
                  alt="Aurora-X Anti-Gravity Jet"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.bentoCoverImage}
                />
                <div className={styles.imageVignetteSubtle} />
              </div>
              <div className={styles.cardOverlayText}>
                <div className={styles.cardHeaderSmall}>
                  <Shield size={18} className="amberText" />
                  <span className={styles.smallCardCategory}>EXPERIMENTAL VEHICLE</span>
                </div>
                <h4 className={styles.cardTitle}>Aurora-X Anti-Gravity Jet</h4>
                <p className={styles.cardDesc}>
                  Engineered with silent ion rings for hypersonic rapid-response defense across futuristic skies.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 5: Supervillains & Dark Technology */}
          <ScrollReveal className={styles.bentoItemVillain}>
            <div className={styles.villainCardContent}>
              <div className={styles.villainImageWrap}>
                <Image
                  src="/images/supervillain_dark_tech.jpg"
                  alt="Rogue Evil Cybernetic Supervillains"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.bentoCoverImage}
                />
                <div className={styles.villainGradient} />
              </div>
              <div className={styles.villainTextContent}>
                <div className={styles.threatBadge}>
                  <Flame size={14} className="crimsonText" />
                  <span>FORCES OF DARKNESS</span>
                </div>
                <h3 className={styles.villainTitle}>Rogue Scientists & Cybernetic Threats</h3>
                <p className={styles.villainDesc}>
                  Formidable opponents wielding corrupted dark energy machines, rogue AI syndicates, and illegal bio-mechanical mutations. Each villain tests Zap Zap’s intellect in unexpected ways.
                </p>
                <div className={styles.villainList}>
                  <span className={styles.villainTag}>• Dr. Cyberos</span>
                  <span className={styles.villainTag}>• The Void Syndicate</span>
                  <span className={styles.villainTag}>• Project Oblivion</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 6: Bengali Sci-Fi Animation DNA */}
          <ScrollReveal className={styles.bentoItemBengali}>
            <div className={styles.dnaCardInner}>
              <div className={styles.dnaIconBox}>
                <Radio size={24} className="neonText" />
              </div>
              <div className={styles.dnaContent}>
                <span className={styles.dnaSubtitle}>CULTURAL & CREATIVE VISION</span>
                <h4 className={styles.dnaTitle}>100% Bengali Voice & Cinematic Storytelling</h4>
                <p className={styles.dnaDescription}>
                  Bridging world-class animation standards with rich Bengali narrative heritage. Exciting dialogues, original soundtrack, and science that sparks curiosity in the next generation.
                </p>
                <a href="#episodes" className={styles.dnaLink}>
                  <span>Experience The Series</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
