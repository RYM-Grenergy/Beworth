"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, Sparkles, Leaf, Recycle } from "lucide-react";
import { useState, useEffect } from "react";

import BlurText from "./BlurText";

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const floatingItems = [
        { icon: <Leaf size={20} />, initialX: "5%", initialY: "15%", delay: 0 },
        { icon: <Recycle size={24} />, initialX: "90%", initialY: "25%", delay: 0.5 },
        { icon: <Sparkles size={18} />, initialX: "15%", initialY: "75%", delay: 1 },
    ];

    return (
        <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-12 pt-32 lg:pt-0 lg:justify-center">
            {/* Interactive Mouse Glow */}
            <div
                className="pointer-events-none fixed inset-0 z-10 opacity-30 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
                }}
            />

            {/* Floating Interactive Elements */}
            {floatingItems.map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute text-blue-500/10 pointer-events-none z-0 hidden lg:block"
                    style={{
                        left: item.initialX,
                        top: item.initialY,
                        transform: `translateX(${(mousePos.x - 500) / 60}px)`
                    }}
                    animate={{
                        y: ["-20px", "20px"],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: item.delay },
                        rotate: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: item.delay },
                    }}
                >
                    {item.icon}
                </motion.div>
            ))}

            {/* Background Decorative Element - Subtler Neutral Glow */}
            <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-white/[0.02] rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-blue-600/[0.03] rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/40 mb-6 block">
                            <BlurText
                                text="Redefining Value In Fashion"
                                delay={100}
                                animateBy="words"
                            />
                        </div>

                        <div className="text-5xl md:text-7xl lg:text-[7.5rem] font-serif font-black uppercase leading-[0.85] tracking-tighter text-white">
                            <BlurText
                                text="Creating"
                                delay={150}
                                animateBy="words"
                            />
                            <BlurText
                                text="Sustainable"
                                delay={150}
                                animateBy="words"
                            />
                            <BlurText
                                text="Fashion."
                                delay={150}
                                animateBy="words"
                                className="italic text-transparent outline-text opacity-20"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="lg:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        {/* Premium Unsplash Image Card */}
                        <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl shadow-blue-500/5 max-w-sm lg:ml-auto">
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                                    alt="Sustainable Fashion Editorial"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                    <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">Exclusive Collection</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-tight">Sustainable Lux.</h3>
                            </div>
                        </div>

                        <div className="space-y-6 max-w-md lg:ml-auto text-left">
                            <p className="text-lg font-medium leading-relaxed text-white/50">
                                Founded in April 2024, Bworth Technologies addresses wardrobe clutter through circular economy and innovative buyback solutions.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-start">
                                <Link href="#ecosystem" className="bg-white text-black px-8 py-5 rounded-full font-bold flex items-center gap-2 group hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5 text-sm">
                                    EXPLORE ECOSYSTEM
                                    <ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform" />
                                </Link>
                                <Link href="#how-it-works" className="px-8 py-5 rounded-full font-bold border border-white/10 text-white hover:bg-white/5 transition-colors text-sm">
                                    HOW IT WORKS
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20 hidden md:flex"
            >
                <div className="w-[1px] h-12 bg-white"></div>
                <span className="text-[10px] font-bold tracking-widest uppercase vertical-text text-white">Scroll to explore</span>
            </motion.div>

            <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
        </section>
    );
}
