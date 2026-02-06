"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, Lock, RefreshCw } from "lucide-react";
import Footer from "../components/Footer";

export default function Policies() {
  const policyCategories = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Privacy Policy",
      desc: "How we protect and manage your personal data within our ecosystem."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Buyback Terms",
      desc: "Guidelines and conditions for our flagship clothing buyback program."
    },
    {
      icon: <Lock size={24} />,
      title: "User Agreement",
      desc: "Standard terms of service for navigating the Bworth marketplace."
    },
    {
      icon: <FileText size={24} />,
      title: "Shipping & Handling",
      desc: "Policies regarding the transit and delivery of your sustainable fashion."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A1128] text-white">
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
              Our <br /> <span className="text-blue-500 italic">Policies.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {policyCategories.map((cat, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 group">
                <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-serif font-bold uppercase mb-4 tracking-tight">{cat.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-medium mb-8">
                  {cat.desc}
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-blue-400 group-hover:text-white flex items-center gap-2">
                  Read Policy
                  <span className="w-4 h-[1px] bg-blue-400 group-hover:w-8 group-hover:bg-white transition-all"></span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-32 max-w-4xl mx-auto space-y-24">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tighter">Transparency & Trust.</h2>
              <p className="text-lg md:text-xl font-light leading-relaxed text-white/50 text-justify">
                At Bworth Technologies, we believe that transparency is the cornerstone of sustainability. Our policies are designed to build a secure, fair, and open environment for both consumers and brand partners. We are committed to evolving our terms as we continue to innovate within the circular economy.
              </p>
            </div>

            <div className="p-12 md:p-16 border-l-4 border-blue-600 bg-blue-600/5 rounded-r-[3rem]">
              <h3 className="text-2xl font-serif font-black uppercase mb-6 italic">Sustainability Commitment</h3>
              <p className="text-lg leading-relaxed text-white/70 italic">
                "Our policies are more than legal requirements; they are a reflection of our mission to preserve the planet's beauty. Every transaction within our ecosystem is governed by our dedication to zero-waste and carbon footprint reduction."
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase">Effective Date</p>
              <p className="text-4xl font-serif font-bold italic text-white/80 transition-colors">January 01, 2026</p>
              <p className="text-xs text-white/20 font-bold uppercase tracking-widest pt-4">© Bworth Technologies Pvt Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
