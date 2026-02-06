"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Send } from "lucide-react";
import Footer from "../components/Footer";

export default function ContactUs() {
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
              Get In <br /> <span className="text-blue-500 italic">Touch.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight">Let's start a <br />conversation.</h2>
              <p className="text-white/40 font-medium leading-relaxed max-w-sm">
                Have questions about our buyback program or want to partner with us? We're here to help revolutionize fashion together.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 block mb-1">Phone</span>
                  <p className="text-xl font-bold">+91 8826668050</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 block mb-1">Email</span>
                  <p className="text-xl font-bold underline decoration-blue-500/30 underline-offset-8">info@bworth.co.in</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 block mb-1">Location</span>
                  <p className="text-xl font-bold">Gurugram, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-xl">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Your Name *</label>
                    <input type="text" placeholder="NAME" className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-blue-500 outline-none transition-colors font-bold placeholder:text-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Your Email *</label>
                    <input type="email" placeholder="EMAIL" className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-blue-500 outline-none transition-colors font-bold placeholder:text-white/10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Mobile Number *</label>
                  <input type="tel" placeholder="+91" className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-blue-500 outline-none transition-colors font-bold placeholder:text-white/10" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Comments *</label>
                  <textarea rows="4" placeholder="HOW CAN WE HELP?" className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-blue-500 outline-none transition-colors font-bold placeholder:text-white/10 resize-none" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white p-6 rounded-full font-bold uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 group">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
