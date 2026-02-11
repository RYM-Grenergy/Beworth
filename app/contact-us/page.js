"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, Mail, MapPin, Send } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function ContactUs() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];

  return (
    <main
      className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#14A3C7] text-white"
        }`}
    >
      <section
        className={`relative pt-40 pb-24 px-6 md:px-12 transition-colors ${theme === "white"
          ? "bg-black/[0.02] border-b border-black/5"
          : "bg-white/[0.02] border-b border-white/5"
          }`}
      >
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
              Let's start a <br /> conversation.
            </h1>
          </motion.div>
        </div>
      </section>

      <section
        className={`py-24 px-6 md:px-12 border-t transition-colors ${theme === "white" ? "border-black/5" : "border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <Image
                src="/logo.png"
                alt="Bworth Logo"
                width={150}
                height={50}
                className={`mb-8 ${theme === "white" ? "" : "invert hue-rotate-180"}`}
              />
              <p
                className={`font-medium leading-relaxed max-w-sm ${theme === "white" ? "text-black" : "text-white"
                  }`}
              >
                Have questions about our buyback program or want to partner with us? We're here to help revolutionize fashion together.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 ${theme === "white" ? "bg-black/5" : "bg-white/5"
                    }`}
                >
                  <Phone size={24} />
                </div>
                <div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold block mb-1 ${theme === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    Phone
                  </span>
                  <p className="text-xl font-bold">+91 8826668050</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 ${theme === "white" ? "bg-black/5" : "bg-white/5"
                    }`}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold block mb-1 ${theme === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    Email
                  </span>
                  <p className="text-xl font-bold underline decoration-blue-500/30 underline-offset-8">
                    info@bworth.co.in
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 ${theme === "white" ? "bg-black/5" : "bg-white/5"
                    }`}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold block mb-1 ${theme === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    Location
                  </span>
                  <p className="text-xl font-bold">Gurugram, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 md:p-12 border rounded-[3rem] backdrop-blur-xl transition-colors ${theme === "white"
                ? "bg-black/[0.02] border-black/5"
                : "bg-white/[0.02] border-white/5"
                }`}
            >
              <form className="space-y-8" action="#" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${theme === "white" ? "text-black" : "text-white"
                        }`}
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="NAME"
                      autoComplete="name"
                      minLength={2}
                      maxLength={50}
                      pattern="[a-zA-Z\s]+"
                      title="Name should only contain letters and spaces."
                      className={`w-full border-b p-4 focus:border-blue-500 outline-none transition-colors font-bold ${theme === "white"
                        ? "bg-black/5 border-black/10 placeholder:text-black/50 text-black"
                        : "bg-white/5 border-white/10 placeholder:text-white/40 text-white"
                        }`}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${theme === "white" ? "text-black" : "text-white"
                        }`}
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="EMAIL"
                      autoComplete="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      title="Please enter a valid email address."
                      className={`w-full border-b p-4 focus:border-blue-500 outline-none transition-colors font-bold ${theme === "white"
                        ? "bg-black/5 border-black/10 placeholder:text-black/50 text-black"
                        : "bg-white/5 border-white/10 placeholder:text-white/40 text-white"
                        }`}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="tel"
                    className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${theme === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    Mobile Number *
                  </label>
                  <input
                    id="tel"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    autoComplete="tel"
                    pattern="[+]?[0-9]{10,14}"
                    title="Phone number should be 10-14 digits, optionally starting with +."
                    className={`w-full border-b p-4 focus:border-blue-500 outline-none transition-colors font-bold ${theme === "white"
                      ? "bg-black/5 border-black/10 placeholder:text-black/50 text-black"
                      : "bg-white/5 border-white/10 placeholder:text-white/40 text-white"
                      }`}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="comments"
                    className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${theme === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    Comments *
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows="4"
                    minLength={10}
                    maxLength={1000}
                    placeholder="HOW CAN WE HELP?"
                    className={`w-full border-b p-4 focus:border-blue-500 outline-none transition-colors font-bold resize-none ${theme === "white"
                      ? "bg-black/5 border-black/10 placeholder:text-black/50 text-black"
                      : "bg-white/5 border-white/10 placeholder:text-white/40 text-white"
                      }`}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-6 rounded-full font-bold uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 group"
                >
                  Send Message
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
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
