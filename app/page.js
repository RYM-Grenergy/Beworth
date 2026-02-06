"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Hero from "./components/Hero";
import BlurText from "./components/BlurText";
import ScrollBanner from "./components/ScrollBanner";
import FeatureSection from "./components/FeatureSection";
import AppDownloadSection from "./components/AppDownloadSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ScrollBanner />
      <div id="ecosystem">
        <FeatureSection />
      </div>

      {/* Our Mission & Legacy Section */}
      <section className="py-32 px-6 md:px-12 bg-[#020610] text-white overflow-hidden relative border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-8xl font-serif font-black uppercase tracking-tighter leading-none mb-12">
                Our <br /> <span className="italic text-white/20 outline-text !-webkit-text-stroke-white">Mission.</span>
              </h2>

              <BlurText
                text="Creating Sustainable Fashion."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl md:text-3xl font-serif italic text-blue-500 mb-8"
              />

              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/40 mb-12">
                Our mission is to revolutionize the fashion industry through a unique buyback program that allows consumers to return their clothes after a period of use.
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-12 border-t border-white/10 pt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm group hover:bg-white hover:text-black transition-all duration-500"
                >
                  <span className="text-4xl md:text-5xl font-serif italic mb-2 block text-blue-500 group-hover:text-black transition-colors">12k+</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold group-hover:opacity-80">Items Recycled</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm group hover:bg-white hover:text-black transition-all duration-500"
                >
                  <span className="text-4xl md:text-5xl font-serif italic mb-2 block text-blue-500 group-hover:text-black transition-colors">45+</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold group-hover:opacity-80">Brand Partners</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
                  alt="Sustainable Fashion Concept"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-12"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/40 max-w-4xl">
              We strive to integrate sustainability into the fabric of fashion, preserving the planet's beauty for future generations. By extending every item's lifecycle, we're building a world where fashion never ends.
            </p>
            <Link href="/our-mission" className="text-blue-500 font-bold uppercase tracking-[0.2em] flex items-center gap-4 hover:gap-6 transition-all group pt-8">
              READ OUR FULL STORY
              <span className="w-12 h-[1px] bg-blue-500 group-hover:w-20 transition-all"></span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vision & Buyback Program Section */}
      <section id="how-it-works" className="py-32 px-6 md:px-12 bg-white/[0.01] border-y border-white/[0.05] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Globe size={24} />
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-[0.9] text-white">
                  A Global <br /> Win-Win Scenario.
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/40 max-w-xl">
                  BWorth Technologies Private Limited envisions creating a sustainable ecosystem within the fashion marketplace, where both consumers and sellers benefit in a win-win scenario. Our goal is to transform the fast fashion industry by promoting sustainability and environmental consciousness.
                </p>
              </div>

              <Link href="/our-vision" className="inline-block text-xs font-bold uppercase tracking-widest border-b border-blue-500 pb-2 text-blue-500 hover:text-white hover:border-white transition-colors">
                Explore our full vision
              </Link>
            </motion.div>

            <motion.div
              className="relative group lg:h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl h-full">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                  alt="Sustainable Fashion Elite"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020610] via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-70"></div>

                <div className="absolute bottom-12 left-12 right-12 z-20">
                  <h4 className="text-white font-serif italic text-6xl md:text-8xl uppercase tracking-tighter leading-none">
                    Transformation
                  </h4>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10 group-hover:bg-blue-600/20 transition-all duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full blur-[80px] -z-10 group-hover:bg-white/10 transition-all duration-700"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <AppDownloadSection />
      <Footer />
    </main>
  );
}
