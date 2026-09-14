import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Orbitron } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-tech",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zapzapprofessor.com"),
  title: "Zap-Zap Professor | Where Science Becomes the Superpower",
  description: "Zap Zap Professor is an original Bengali animated science-fiction action universe following a brilliant scientist hero who uses intelligence, futuristic technology, and creative problem solving to protect the world.",
  keywords: [
    "Zap Zap Professor",
    "Bengali Animation",
    "Sci-Fi Animated Series",
    "Science Superpower",
    "Bengali Cartoon",
    "Futuristic Inventions",
    "Superhero Scientist",
    "Kolkata Animation"
  ],
  authors: [{ name: "Zap Zap Professor Studios" }],
  openGraph: {
    title: "Zap-Zap Professor | Where Science Becomes the Superpower",
    description: "Original Bengali Sci-Fi Animated Universe where intelligence is the ultimate superpower. Discover futuristic inventions, epic battles, and thrilling missions.",
    url: "https://zapzapprofessor.com",
    siteName: "Zap-Zap Professor",
    images: [
      {
        url: "/images/zap_hero_lab.jpg",
        width: 1200,
        height: 630,
        alt: "Zap Zap Professor In His High-Tech Laboratory",
      },
    ],
    locale: "bn_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zap-Zap Professor | Where Science Becomes the Superpower",
    description: "Bengali animated science-fiction action franchise. Inventions, robotics, AI, and heroic science adventures.",
    images: ["/images/zap_hero_lab.jpg"],
  },
  icons: {
    icon: "/images/zap-zap-logo.jpeg",
    apple: "/images/zap-zap-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} ${orbitron.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
