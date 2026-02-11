"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Target, Recycle, Users } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function OurMission() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];

  const missionPoints = [
    {
      icon: <Recycle size={28} />,
      title: "Circular Lifecycle",
      desc: "Extending the life of every garment through our unique buyback program."
    },
    {
      icon: <Users size={28} />,
      title: "Community Engagement",
      desc: "Organizing offline events in residential societies to build direct platforms."
    },
    {
      icon: <Target size={28} />,
      title: "Dead Stock Clearance",
      desc: "Assisting brands in clearing dead stock, promoting a waste-free industry."
    }
  ];

  return (
    <main
      className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#14A3C7] text-white"
        }`}
    >
      <section
        className={`relative pt-40 pb-24 px-6 md:px-12 transition-colors ${theme === "white" ? "bg-black/[0.02]" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 font-bold tracking-widest text-xs uppercase mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {t.common.back_home}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-black uppercase tracking-tighter leading-[0.85] mb-12">
              {t.mission_page.title_our} <br /> {t.mission_page.title_mission}
            </h1>
          </motion.div>
        </div>
      </section>

      <section
        className={`py-24 px-6 md:px-12 border-t transition-colors ${theme === "white" ? "border-black/5" : "border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <div className="space-y-12">
              <p
                className={`text-2xl md:text-4xl font-serif font-medium leading-tight ${theme === "white" ? "text-black/90" : "text-white"
                  }`}
              >
                Revolutionizing the fashion industry through a unique buyback program that ensures zero waste.
              </p>

              <p
                className={`text-lg md:text-xl font-light leading-relaxed text-justify ${theme === "white" ? "text-black/50" : "text-white"
                  }`}
              >
                Our mission is to extend the lifecycle of every item by allowing consumers to return their clothes after use. We aim to solve the problem of wardrobe clutter by offering a sustainable solution that benefits both consumers and sellers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                {missionPoints.map((point, i) => (
                  <div
                    key={i}
                    className={`p-8 rounded-3xl border hover:bg-blue-600 transition-all duration-500 group ${theme === "white"
                      ? "bg-black/5 border-black/5"
                      : "bg-white/5 border-white/5"
                      }`}
                  >
                    <div className="mb-6 text-blue-400 group-hover:text-white transition-colors">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold uppercase mb-3">
                      {point.title}
                    </h3>
                    <p
                      className={`text-sm group-hover:text-white/80 transition-colors uppercase tracking-wider font-bold ${theme === "white" ? "text-black/40" : "text-white"
                        }`}
                    >
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className={`text-lg leading-relaxed text-justify pt-8 border-t ${theme === "white"
                  ? "text-black/50 border-black/5"
                  : "text-white border-white/5"
                  }`}
              >
                By organizing offline events in residential societies and partnering with brands, we intend to create a direct and engaging platform for our customers. We are committed to providing a flexible commission program for sellers and ensuring the clearance of dead stock, thus promoting a circular economy.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 hidden lg:block"></div>

          <div className="lg:col-span-4">
            <div
              className={`p-10 border rounded-[3rem] backdrop-blur-xl sticky top-40 ${theme === "white"
                ? "border-blue-500/20 bg-blue-600/5"
                : "border-blue-500/30 bg-blue-600/5"
                }`}
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-black mb-6 block">
                Core Goal
              </span>
              <p className="text-2xl font-serif font-black uppercase mb-8 italic text-black">
                Sustainability integrated into every thread.
              </p>
              <p
                className={`text-sm font-medium leading-relaxed mb-8 ${theme === "white" ? "text-black/40" : "text-white"
                  }`}
              >
                We are committed to fostering trust and building long-term relationships through innovative and sustainable solutions.
              </p>
              <div
                className={`w-full h-[1px] mb-8 ${theme === "white" ? "bg-black/10" : "bg-white/10"
                  }`}
              ></div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-black">
                #CircularCulture
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
