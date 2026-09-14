"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Play, Rocket, User, Compass, Zap, Tv, Globe } from "lucide-react";
import { YoutubeIcon, InstagramIcon, FacebookIcon } from "../Icons/SocialIcons";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/", icon: Rocket },
    { name: "CHARACTERS", href: "#characters", icon: User },
    { name: "STORY", href: "#story", icon: Compass },
    { name: "INVENTIONS", href: "#inventions", icon: Zap },
    { name: "EPISODES", href: "#episodes", icon: Tv },
    { name: "UNIVERSE", href: "#universe", icon: Globe },
  ];

  return (
    <header
      className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.navBar}>
        {/* Brand Logo & Character Badge */}
        <Link href="/" className={styles.logoLink} onClick={() => setMobileMenuOpen(false)}>
          <div className={styles.logoAvatar}>
            <Image
              src="/images/zap-zap-avatar.png"
              alt="Zap Zap Professor"
              width={42}
              height={42}
              className={styles.avatarImg}
              priority
            />
          </div>
          <div className={styles.brandTitleWrap}>
            <span className={styles.brandTitle}>ZAP-ZAP</span>
            <span className={styles.brandSubtitle}>PROFESSOR</span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.navItem}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions & Socials */}
        <div className={styles.actionGroup}>
          <div className={styles.socialGroup}>
            <a
              href="https://www.youtube.com/channel/UCMoKurzjPxYRwWUSGS1eXeQ"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="YouTube"
            >
              <YoutubeIcon size={16} />
            </a>
            <a
              href="https://www.instagram.com/zapzapprofessor/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <InstagramIcon size={15} />
            </a>
            <a
              href="https://www.facebook.com/zapzapprofessor"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Facebook"
            >
              <FacebookIcon size={15} />
            </a>
          </div>

          <a href="#episodes" className="btn-zap-primary px-5 py-2.5 text-xs font-black tracking-wider uppercase">
            <Play size={13} fill="currentColor" />
            <span>WATCH NOW</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => {
              const IconComp = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={styles.mobileNavItem}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={styles.mobileNavIconWrap}>
                    <IconComp size={16} />
                  </div>
                  <span>{link.name}</span>
                </Link>
              );
            })}

            <div className={styles.mobileSocialRow}>
              <a
                href="https://www.youtube.com/channel/UCMoKurzjPxYRwWUSGS1eXeQ"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSocialPill}
              >
                <YoutubeIcon size={15} /> YouTube
              </a>
              <a
                href="https://www.instagram.com/zapzapprofessor/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSocialPill}
              >
                <InstagramIcon size={15} /> Instagram
              </a>
              <a
                href="https://www.facebook.com/zapzapprofessor"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSocialPill}
              >
                <FacebookIcon size={15} /> Facebook
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
