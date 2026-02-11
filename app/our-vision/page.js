"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Eye, Sparkles, Globe } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function OurVision() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];

  return (
    <main
      className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#14A3C7] text-white"
        }`}
    >
      {/* Header */}
      <section className="relative pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold tracking-widest text-xs uppercase mb-12 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            {t.common.back_home}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Our <br /> Vision.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Vision Blocks */}
      <section
        className={`py-24 px-6 md:px-12 border-t transition-colors ${theme === "white"
          ? "border-black/5 bg-black/[0.02]"
          : "border-white/5 bg-white/[0.01]"
          }`}
      >
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">

              <h2 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tighter leading-none">
                A Global <br /> Win-Win Scenario.
              </h2>
              <p
                className={`text-xl md:text-2xl font-light leading-relaxed text-justify ${theme === "white" ? "text-black/50" : "text-white"
                  }`}
              >
                BWorth Technologies Private Limited envisions creating a sustainable ecosystem within the fashion marketplace, where both consumers and sellers benefit in a win-win scenario. Our goal is to transform the fast fashion industry by promoting sustainability and environmental consciousness.
              </p>
            </div>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden group shadow-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1673356302169-574db56b52cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Global Transformation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
              <p className="absolute bottom-12 left-12 right-12 text-5xl font-serif font-black uppercase tracking-tighter italic text-white opacity-40">
                Global Transformation
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-[4rem] overflow-hidden group shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000&auto=format&fit=crop"
                alt="Responsible Fashion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
              <p className="absolute bottom-12 left-12 right-12 text-5xl font-serif font-black uppercase tracking-tighter italic text-white opacity-40">
                Responsible Fashion
              </p>
            </div>
            <div className="order-1 lg:order-2 space-y-8">

              <h2 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tighter leading-none">
                Responsible <br />{" "}
                Consumption.
              </h2>
              <p
                className={`text-xl md:text-2xl font-light leading-relaxed text-justify ${theme === "white" ? "text-black/50" : "text-white"
                  }`}
              >
                By addressing the common issue of overfilled wardrobes with clothes that are no longer worn but not entirely discarded, we aim to provide a solution that not only helps individuals manage their wardrobe efficiently but also contributes to environmental sustainability. Our vision is to make fashion consumption more responsible and to instill a sense of value in every garment purchased.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px #3b82f6;
          color: transparent;
        }
      `}</style>
    </main>
  );
}
