export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  badgeColor: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  tags: string[];
  sections: {
    heading?: string;
    paragraphs: string[];
    image?: {
      src: string;
      caption: string;
      alt: string;
    };
    callout?: {
      type: "science-fact" | "lab-note" | "quote";
      title?: string;
      text: string;
    };
    bulletPoints?: string[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "the-vision-behind-zap-zap-professor",
    title: "Where Science Becomes the Superpower: The Vision Behind Zap-Zap Professor",
    subtitle: "How our animation studio created an original Bengali superhero who triumphs with intellect, equations, and futuristic inventions.",
    excerpt: "Discover why Zap-Zap Professor is redefining children's entertainment by making scientific discovery the greatest heroic superpower.",
    category: "FRANCHISE ORIGINS",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    date: "Sep 12, 2026",
    readTime: "5 min read",
    author: {
      name: "Zap-Zap Creative Team",
      role: "Lead Storytellers & Animators",
      avatar: "/images/zap-zap-avatar.png",
    },
    coverImage: "/images/zap_hero_lab.jpg",
    tags: ["#BengaliAnimation", "#SciFiHero", "#STEMEducation", "#Innovation"],
    sections: [
      {
        heading: "A New Kind of Hero for Bengal and the World",
        paragraphs: [
          "For decades, animated superheroes have relied primarily on superhuman muscle, magical amulets, or raw destructive strength. When our creative team in Kolkata sat down to brainstorm Zap-Zap Professor, we asked a fundamental question: What if the hero's ultimate weapon was curiosity?",
          "Zap-Zap Professor represents a profound cultural shift. He is a brilliant scientist living right in the vibrant heart of Bengal. Rather than destroying cities to stop an adversary, Zap-Zap calculates trajectory vectors, crafts non-lethal energy disruptors, and turns complex physics into exhilarating adventures.",
        ],
        callout: {
          type: "quote",
          title: "The Creator's Creed",
          text: "True strength isn't measured by what you can break, but by what you can understand, build, and protect.",
        },
      },
      {
        heading: "Inside the High-Tech Laboratory",
        paragraphs: [
          "Every great scientist needs a sanctuary. Zap-Zap's Kolkata laboratory is designed as a futuristic marvel, powered by clean magnetic plasma and quantum computational arrays. Here, experiments are running around the clock, testing everything from atmospheric scrubbers to hypersonic propulsion.",
          "Surrounded by holographic blueprints and glowing test chambers, Zap-Zap works side-by-side with his robotic companion AURA-7 and a team of passionate young student inventors.",
        ],
        image: {
          src: "/images/energy_disruptor_gauntlet.jpg",
          caption: "Blueprint prototype of the Electro-Plasma Gauntlet V.4 used for non-lethal magnetic EMP deactivations.",
          alt: "Electro-Plasma Gauntlet Prototype",
        },
      },
      {
        heading: "Inspiring the Next Generation of Thinkers",
        paragraphs: [
          "Our goal extends far beyond entertaining animation. We want every child watching Zap-Zap Professor to feel that science is thrilling, accessible, and deeply empowering. In every episode, scientific concepts such as magnetic levitation, ion propulsion, and algorithmic computing are woven directly into the core story stakes.",
        ],
        bulletPoints: [
          "Promoting scientific literacy and creative critical thinking.",
          "Celebrating Bengali heritage while pioneering international animation standards.",
          "Showcasing that teamwork and intellect can solve any crisis without physical violence.",
        ],
      },
    ],
  },
  {
    slug: "engineering-aura-7-quantum-ai",
    title: "Engineering AURA-7: Designing Bengal's First Quantum AI Companion",
    subtitle: "From quantum neural network diagrams to voice modulations: the making of Zap-Zap's most loyal robotic ally.",
    excerpt: "Explore the technical architecture, personality design, and visual evolution of AURA-7, the autonomous lab assistant with a heart of gold.",
    category: "INVENTION SPOTLIGHT",
    badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
    date: "Aug 28, 2026",
    readTime: "4 min read",
    author: {
      name: "Dr. Anirban & Animation Lab",
      role: "Robotics & CGI Designers",
      avatar: "/images/zap-zap-avatar.png",
    },
    coverImage: "/images/quantum_ai_robot.jpg",
    tags: ["#QuantumAI", "#AURA7", "#Robotics", "#LabPartner"],
    sections: [
      {
        heading: "More Than Code: Building a Friendly AI",
        paragraphs: [
          "When designing AURA-7, our objective was to avoid cold, dystopian robot tropes. We wanted an AI character that feels lively, curious, protective, and genuinely warm. AURA-7 is not just Zap-Zap's computational supercomputer—she is family.",
          "With an expressive visor that lights up in gentle cyan and turquoise hues, AURA-7 processes over 10,000 scientific formulas per second while never missing a chance to tease Zap-Zap about forgetting his morning tea.",
        ],
        callout: {
          type: "science-fact",
          title: "AURA-7 Telemetry Specs",
          text: "Quantum Core: 128-Qubit Sub-Zero Processor | Optics: Multi-Spectrum LIDAR & Holographic Emitter | Energy: Self-Regenerating Solar Photons.",
        },
      },
      {
        heading: "Holographic Defense & Real-Time Scanning",
        paragraphs: [
          "In battle, AURA-7 projects geometric force barriers to deflect rogue machinery and instantly analyzes villain gadgets to detect vulnerabilities. Her computational speed allows Zap-Zap to formulate the exact frequency needed to disarm threats harmlessly.",
        ],
        image: {
          src: "/images/zap_hero_lab.jpg",
          caption: "AURA-7 coordinating telemetry simulations alongside Zap-Zap in the central command laboratory.",
          alt: "AURA-7 in the central laboratory",
        },
      },
    ],
  },
  {
    slug: "aerodynamics-of-aurora-x-sky-cruiser",
    title: "Supersonic Aerodynamics: How We Built the Aurora-X Sky Cruiser",
    subtitle: "Take flight with the Mach 3.5 anti-gravity jet capable of patrolling the skies of Bengal in seconds.",
    excerpt: "A behind-the-scenes look at the physics of ion ring levitation and the 3D CGI rendering behind our most thrilling sky pursuit episodes.",
    category: "VEHICLE SCHEMATICS",
    badgeColor: "bg-orange-100 text-orange-900 border-orange-300",
    date: "Aug 15, 2026",
    readTime: "4 min read",
    author: {
      name: "Sky Lab CGI Unit",
      role: "Vehicle Design & Visual FX",
      avatar: "/images/zap-zap-avatar.png",
    },
    coverImage: "/images/futuristic_sci_fi_vehicle.jpg",
    tags: ["#AuroraX", "#Supersonic", "#IonPropulsion", "#SciFiVehicle"],
    sections: [
      {
        heading: "Breaking Mach 3.5 with Zero Fossil Fuels",
        paragraphs: [
          "The Aurora-X Sky Cruiser is the crown jewel of Zap-Zap's transportation fleet. When danger erupts across the state—from the Sundarbans to North Bengal—the Aurora-X scrambles in seconds.",
          "Powered by twin rotating magnetic ion rings, the jet eliminates aerodynamic friction through a localized micro-gravitational field. This allows supersonic turns that would otherwise be impossible under conventional flight physics.",
        ],
        callout: {
          type: "lab-note",
          title: "Propulsion Note",
          text: "The Aurora-X produces zero carbon emissions, leaving behind only an ethereal glowing rainbow vapor trail of harmless energized ozone.",
        },
      },
      {
        heading: "Designing the Visual Silhouette",
        paragraphs: [
          "We drew inspiration from both aerospace stealth gliders and aerodynamic avian forms. The sleek aerodynamic orange and titanium body glides effortlessly, providing young viewers with a visually stunning vehicle that sparks fascination for aeronautical engineering.",
        ],
      },
    ],
  },
  {
    slug: "inside-the-rival-lab-dr-cyberos",
    title: "Inside the Rival Lab: The Dark Science of Dr. Cyberos",
    subtitle: "Understanding the motivations, mechanical armies, and high-stakes rivalry between Zap-Zap and Dr. Cyberos.",
    excerpt: "Meet Dr. Cyberos—the theatrical rogue inventor whose runaway automated drones test Zap-Zap's intellect in every encounter.",
    category: "VILLAIN DOSSIER",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    date: "Jul 30, 2026",
    readTime: "6 min read",
    author: {
      name: "Lore Archive Team",
      role: "Universe Archivists",
      avatar: "/images/zap-zap-avatar.png",
    },
    coverImage: "/images/dr_cyberos_villain.jpg",
    tags: ["#DrCyberos", "#RogueInventor", "#SciFiVillain", "#Rivalry"],
    sections: [
      {
        heading: "A Genius Gone Astray",
        paragraphs: [
          "Every great superhero requires an intellectual match. Dr. Cyberos was once a brilliant researcher whose obsession with total mechanical automation alienated him from ethical science. Believing that machines should govern human affairs, he built an underground robotic empire.",
          "Unlike standard cartoon villains who seek pointless destruction, Cyberos sees himself as a visionary. This creates a compelling battle of ideas: Zap-Zap believes technology should empower human curiosity, while Cyberos believes it should control it.",
        ],
        image: {
          src: "/images/supervillain_dark_tech.jpg",
          caption: "Surveillance log from Dr. Cyberos's covert subterranean tech foundry in Kolkata.",
          alt: "Dr Cyberos Dark Tech Foundry",
        },
      },
      {
        heading: "The Power of Non-Destructive Resolution",
        paragraphs: [
          "Zap-Zap never seeks to destroy Cyberos. Instead, each confrontation is an intellectual game of chess where Zap-Zap rewrites rogue subroutines, de-escalates mechanical overloads, and reminds Cyberos of the ethical beauty of true science.",
        ],
      },
    ],
  },
  {
    slug: "sub-atomic-portals-multiverse-rift",
    title: "Sub-Atomic Portals: Exploring the Multiverse Rift Phenomenon",
    subtitle: "How string theory, dimensional gateways, and cosmic physics form the bedrock of the expanding Zap-Zap universe.",
    excerpt: "Unravel the science behind the cosmic anomalies opening across parallel dimensions and what it means for the future of the series.",
    category: "COSMIC LORE",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    date: "Jul 18, 2026",
    readTime: "5 min read",
    author: {
      name: "Zap-Zap Physics Advisors",
      role: "Science & Lore Consultants",
      avatar: "/images/zap-zap-avatar.png",
    },
    coverImage: "/images/space_dimensional_portal.jpg",
    tags: ["#Multiverse", "#QuantumPhysics", "#CosmicRift", "#FutureEpisodes"],
    sections: [
      {
        heading: "When Physics Crosses Dimensions",
        paragraphs: [
          "In Season 1, Episode 5, Zap-Zap and his allies encounter the Sub-Atomic Gateway—a tear in the space-time fabric caused by ancient cosmic harmonics. This event expands the scope of the universe from metropolitan adventures to grand multiverse explorations.",
          "Our writers consult real principles of quantum entanglement and theoretical wormhole geometry to create sci-fi storylines that remain grounded in genuine curiosity.",
        ],
        image: {
          src: "/images/lab_team_allies.jpg",
          caption: "The Bengal Quantum Allies tracking dimensional frequencies from the laboratory observation deck.",
          alt: "Bengal Quantum Allies observing anomalies",
        },
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
