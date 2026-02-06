"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Eye, Sparkles, Globe } from "lucide-react";
import Footer from "../components/Footer";

export default function OurVision() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white">
      {/* Header */}
      <section className="relative pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-widest text-xs uppercase mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Our <br /> <span className="text-transparent outline-text !-webkit-text-stroke-blue-500 italic">Vision.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Vision Blocks */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 rotate-3">
                <Globe size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tighter leading-none">
                A Global <br /> Win-Win Scenario.
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/50 text-justify">
                BWorth Technologies Private Limited envisions creating a sustainable ecosystem within the fashion marketplace, where both consumers and sellers benefit in a win-win scenario. Our goal is to transform the fast fashion industry by promoting sustainability and environmental consciousness.
              </p>
            </div>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542601906970-351950ed87a5?q=80&w=1000&auto=format&fit=crop"
                alt="Sustainable Future"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
              <p className="absolute bottom-12 left-12 right-12 text-5xl font-serif font-black uppercase tracking-tighter italic text-white opacity-40">
                Transformation
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-[4rem] overflow-hidden group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000&auto=format&fit=crop"
                alt="Responsible Fashion"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
              <p className="absolute bottom-12 left-12 right-12 text-5xl font-serif font-black uppercase tracking-tighter italic text-white opacity-40">
                Responsibility
              </p>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-500 -rotate-3">
                <Sparkles size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tighter leading-none">
                Responsible <br /> Consumption.
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/50 text-justify">
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
