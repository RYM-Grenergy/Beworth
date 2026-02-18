"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Slightly reduced duration for smoother navigation feel
        return () => clearTimeout(timer);
    }, [pathname]); // Runs on every route change

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="relative flex flex-col items-center">
                        {/* Modern Minimalistic Spinner */}
                        <div className="relative w-24 h-24 mb-8">
                            {/* Background Circle */}
                            <motion.div
                                className="absolute inset-0 border-4 border-white/10 rounded-full"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            {/* Spinning Arc */}
                            <motion.div
                                className="absolute inset-0 border-t-4 border-[#14A3C7] rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner Pulse */}
                            <motion.div
                                className="absolute inset-0 m-auto w-2 h-2 bg-white rounded-full"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>

                        {/* Text Reveal Animation */}
                        <div className="overflow-hidden flex flex-col items-center">
                            <motion.span
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="text-white font-serif uppercase tracking-[0.3em] text-lg font-bold mb-2"
                            >
                                BWorth
                            </motion.span>

                            <motion.span
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                className="text-[#14A3C7] text-[10px] uppercase tracking-[0.2em] font-medium"
                            >
                                Sustainable Fashion
                            </motion.span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
