"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe } from "lucide-react";
import Hero from "./components/Hero";
import GsapTextReveal from "./components/GsapTextReveal";
import ScrollBanner from "./components/ScrollBanner";
import FeatureSection from "./components/FeatureSection";
import AppDownloadSection from "./components/AppDownloadSection";
import Footer from "./components/Footer";
import { useLanguage } from "./context/LanguageContext";
import { useTheme } from "./context/ThemeContext";
import { translations } from "./utils/translations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Mission Section Animations
      const missionTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#mission-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      missionTl
        .from(".mission-title", {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".mission-desc",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".mission-stat-card",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .from(
          ".mission-image",
          {
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          ".mission-footer",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );

      // Vision Section Animations
      const visionTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#how-it-works",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      visionTl
        .from(".vision-content", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".vision-image-container",
          {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  return (
    <main className="min-h-screen" ref={containerRef}>
      <Hero />
      <ScrollBanner />
      <div id="ecosystem">
        <FeatureSection />
      </div>

      {/* Our Mission & Legacy Section */}
      <section
        id="mission-section"
        className={`py-32 px-6 md:px-12 overflow-hidden relative border-t transition-colors ${theme === "white"
          ? "bg-[#F8FAFC] text-black border-black/[0.05]"
          : "bg-[#020610] text-white border-white/[0.05]"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
            <div className="flex-1">
              <h2 className="mission-title text-5xl md:text-8xl font-serif font-black uppercase tracking-tighter leading-none mb-12">
                {t.hero.mission_title_our} <br />{" "}
                <span className="text-5xl md:text-8xl font-serif font-black uppercase tracking-tighter leading-none mb-12">
                  {t.hero.mission_title_mission}
                </span>
              </h2>

              <div className="mission-desc">
                <GsapTextReveal
                  text={t.hero.mission_heading}
                  y={-20}
                  className="text-2xl md:text-3xl font-serif italic text-blue-500 mb-8"
                />

                <p
                  className={`text-xl md:text-2xl font-light leading-relaxed mb-12 ${theme === "white" ? "text-black/80" : "text-white/80"
                    }`}
                >
                  {t.hero.mission_desc}
                </p>
              </div>

              <div
                className={`grid grid-cols-2 gap-6 md:gap-12 border-t pt-12 ${theme === "white" ? "border-black/10" : "border-white/10"
                  }`}
              >
                <div
                  className={`mission-stat-card p-8 rounded-3xl border backdrop-blur-sm group transition-all duration-500 hover:scale-105 ${theme === "white"
                    ? "bg-black/5 border-black/5 hover:bg-black hover:text-white"
                    : "bg-white/5 border-white/5 hover:bg-white hover:text-black"
                    }`}
                >
                  <span
                    className={`text-4xl md:text-5xl font-serif italic mb-2 block text-blue-500 transition-colors ${theme === "white"
                      ? "group-hover:text-white"
                      : "group-hover:text-black"
                      }`}
                  >
                    12k+
                  </span>
                  <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold group-hover:opacity-80">
                    {t.hero.items_recycled}
                  </span>
                </div>
                <div
                  className={`mission-stat-card p-8 rounded-3xl border backdrop-blur-sm group transition-all duration-500 hover:scale-105 ${theme === "white"
                    ? "bg-black/5 border-black/5 hover:bg-black hover:text-white"
                    : "bg-white/5 border-white/5 hover:bg-white hover:text-black"
                    }`}
                >
                  <span
                    className={`text-4xl md:text-5xl font-serif italic mb-2 block text-blue-500 transition-colors ${theme === "white"
                      ? "group-hover:text-white"
                      : "group-hover:text-black"
                      }`}
                  >
                    45+
                  </span>
                  <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold group-hover:opacity-80">
                    {t.hero.brand_partners}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div
                className={`mission-image aspect-square rounded-[3rem] overflow-hidden border ${theme === "white" ? "border-black/10" : "border-white/10"
                  }`}
              >
                <Image
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
                  alt="Sustainable Fashion Concept"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>

          <div
            className={`mission-footer border-t pt-12 ${theme === "white" ? "border-black/10" : "border-white/10"
              }`}
          >
            <p
              className={`text-xl md:text-2xl font-light leading-relaxed max-w-4xl ${theme === "white" ? "text-black/80" : "text-white/80"
                }`}
            >
              {t.hero.mission_footer_desc}
            </p>
            <Link
              href="/our-mission"
              className="text-blue-500 font-bold uppercase tracking-[0.2em] flex items-center gap-4 hover:gap-6 transition-all group pt-8"
            >
              {t.hero.read_story}
              <span className="w-12 h-[1px] bg-blue-500 group-hover:w-20 transition-all"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Buyback Program Section */}
      <section
        id="how-it-works"
        className={`py-32 px-6 md:px-12 backdrop-blur-sm border-y overflow-hidden relative transition-colors ${theme === "white"
          ? "bg-black/[0.02] border-black/[0.05]"
          : "bg-white/[0.01] border-white/[0.05]"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="vision-content space-y-10">
              <div className="space-y-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Globe size={24} />
                </div>
                <h2
                  className={`text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-[0.9] ${theme === "white" ? "text-black" : "text-white"
                    }`}
                >
                  {t.hero.win_win_title_global} <br />{" "}
                  {t.hero.win_win_title_scenario}
                </h2>
                <p
                  className={`text-lg md:text-xl font-light leading-relaxed max-w-xl ${theme === "white" ? "text-black/80" : "text-white/80"
                    }`}
                >
                  {t.hero.win_win_desc}
                </p>
              </div>

              <Link
                href="/our-vision"
                className={`inline-block text-xs font-bold uppercase tracking-widest border-b border-blue-500 pb-2 text-blue-500 transition-colors ${theme === "white"
                  ? "hover:text-black hover:border-black"
                  : "hover:text-white hover:border-white"
                  }`}
              >
                {t.hero.explore_vision}
              </Link>
            </div>

            <div className="vision-image-container relative group lg:h-full">
              <div
                className={`relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border shadow-3xl h-full ${theme === "white" ? "border-black/10" : "border-white/10"
                  }`}
              >
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                  alt="Sustainable Fashion Elite"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t transition-opacity group-hover:opacity-70 ${theme === "white"
                    ? "from-[#F8FAFC] via-transparent to-transparent opacity-90"
                    : "from-[#020610] via-transparent to-transparent opacity-90"
                    }`}
                ></div>

                <div className="absolute bottom-12 left-12 right-12 z-20">
                  <h4
                    className={`font-serif italic text-6xl md:text-8xl uppercase tracking-tighter leading-none ${theme === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    {t.hero.transformation_text}
                  </h4>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10 group-hover:bg-blue-600/20 transition-all duration-700"></div>
              <div
                className={`absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-[80px] -z-10 transition-all duration-700 ${theme === "white"
                  ? "bg-black/5 group-hover:bg-black/10"
                  : "bg-white/5 group-hover:bg-white/10"
                  }`}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <AppDownloadSection />
      <Footer />
    </main>
  );
}
