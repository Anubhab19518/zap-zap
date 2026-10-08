"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { YoutubeIcon, InstagramIcon, FacebookIcon } from "../Icons/SocialIcons";

export default function Footer() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
      setSuccessInfo(data.message || "Professor Bhichitro and the team will review your transmission and get back to you shortly.");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      const msg = err instanceof Error ? err.message : "An unexpected error occurred while sending your message.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#fdfbf7] via-[#fffdf9] to-[#fef3c7]/30 text-slate-800 pt-20 pb-12 px-4 md:px-8 mt-20 border-t-2 border-amber-200/70 overflow-hidden" id="contact">
      {/* Decorative Warm Top Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-cyan-400" />

      <div className="max-w-7xl mx-auto">
        {/* Top Character Greeting & Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200/80">
          {/* Left Column: Franchise Info & Official Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand & Character Avatar */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-14 h-14 rounded-full bg-amber-400 p-0.5 shadow-md overflow-hidden border-2 border-amber-300 flex items-center justify-center">
                  <Image
                    src="/photos/bichitro.png"
                    alt="Professor Bhichitro"
                    width={56}
                    height={56}
                    className="object-contain w-full h-full p-0.5"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-black text-slate-900 leading-none">
                    ZAP-ZAP <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">PROFESSOR</span>
                  </h3>
                  <span className="text-[11px] font-extrabold text-amber-600 tracking-wider uppercase block mt-1">
                    WHERE SCIENCE BECOMES THE SUPERPOWER
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-8">
                An original Bengali animated sci-fi series celebrating intellect, scientific curiosity, and thrilling adventures for children and families worldwide.
              </p>

              {/* Official Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <span>Zap Zap Professor, 1 kamardanga Road, Kolkata - 700046, West Bengal, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-8 h-8 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <span>+91 8697983911</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <span>zapzapprofessor@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.youtube.com/channel/UCMoKurzjPxYRwWUSGS1eXeQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-white hover:bg-red-500 hover:text-white text-red-600 border border-slate-200 flex items-center justify-center transition-all shadow-sm hover:shadow-md hover:scale-105"
                aria-label="YouTube"
              >
                <YoutubeIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/zapzapprofessor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-white hover:bg-pink-500 hover:text-white text-pink-600 border border-slate-200 flex items-center justify-center transition-all shadow-sm hover:shadow-md hover:scale-105"
                aria-label="Instagram"
              >
                <InstagramIcon size={19} />
              </a>
              <a
                href="https://www.facebook.com/zapzapprofessor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-white hover:bg-blue-600 hover:text-white text-blue-600 border border-slate-200 flex items-center justify-center transition-all shadow-sm hover:shadow-md hover:scale-105"
                aria-label="Facebook"
              >
                <FacebookIcon size={19} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border-2 border-amber-200/70 rounded-[2.25rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-amber-100/50">
            <div className="mb-6">
              <span className="text-xs font-black text-amber-600 uppercase tracking-wider block mb-1">
                COMMUNICATION & INQUIRIES
              </span>
              <h4 className="font-heading text-2xl font-black text-slate-900">
                Send a Message to the Laboratory Team
              </h4>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-center flex flex-col items-center animate-in fade-in duration-300">
                <CheckCircle2 size={44} className="text-emerald-500 mb-3" />
                <h5 className="font-heading text-xl font-bold text-slate-900 mb-1">Message Received!</h5>
                <p className="text-sm text-slate-600 mb-4 max-w-md">
                  {successInfo || "Professor Bhichitro and the team will review your transmission and get back to you shortly."}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-colors text-white text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-3">
                    <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold">{errorMessage}</p>
                      <p className="mt-1 text-[11px] text-red-600">
                        You can also email us directly at{" "}
                        <a
                          href={`mailto:zapzapprofessor@gmail.com?subject=${encodeURIComponent(formState.subject || "Inquiry for Zap-Zap Professor")}&body=${encodeURIComponent(formState.message || "")}`}
                          className="underline font-bold hover:text-red-800"
                        >
                          zapzapprofessor@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      disabled={isLoading}
                      placeholder="e.g. Anubhab"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white transition-colors disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      disabled={isLoading}
                      placeholder="name@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white transition-colors disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    disabled={isLoading}
                    placeholder="e.g. Collaboration / Episode Feedback / Event"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    disabled={isLoading}
                    rows={4}
                    placeholder="Write your thoughts, questions, or ideas for the team..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white transition-colors resize-none disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-zap-primary w-full py-4 text-xs font-black uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-75"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Franchise Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Zap Zap Professor. All rights reserved. Original Bengali Animated Series.</p>
          <div className="flex items-center gap-6">
            <Link href="/#characters" className="hover:text-amber-600 transition-colors font-bold">Characters</Link>
            <Link href="/#story" className="hover:text-amber-600 transition-colors font-bold">Story</Link>
            <Link href="/#inventions" className="hover:text-cyan-600 transition-colors font-bold">Inventions</Link>
            <Link href="/#episodes" className="hover:text-orange-600 transition-colors font-bold">Watch</Link>
            <Link href="/#universe" className="hover:text-blue-600 transition-colors font-bold">Universe</Link>
            <Link href="/blog" className="hover:text-amber-600 transition-colors font-bold">Blogs</Link>
            <Link href="/#faq" className="hover:text-slate-900 transition-colors font-bold">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
