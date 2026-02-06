"use client";
import { motion } from "framer-motion";
import { Recycle, Zap, ShieldCheck, TrendingUp } from "lucide-react";

export default function FeatureSection() {
    const features = [
        {
            icon: <Recycle size={32} />,
            title: "Buyback Program",
            desc: "Our comprehensive solution to manage unwanted clothing while promoting environmental sustainability."
        },
        {
            icon: <Zap size={32} />,
            title: "Thrifting Platform",
            desc: "An integrated offline and online platform for conscious fashion swaps and purchases."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Offline Events",
            desc: "Direct and engaging platforms in residential societies and brand partnerships."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Unique Marketplace",
            desc: "A flexible ecosystem for consumers and sellers promoting a true circular economy."
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-white/[0.01] backdrop-blur-sm border-y border-white/[0.05]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
                    <div className="max-w-2xl">
                        <span className="text-sm font-bold tracking-widest text-white/30 block mb-4 uppercase">Technology & Fashion</span>
                        <h2 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-none text-white">
                            The infrastructure <br /> for circularity.
                        </h2>
                    </div>
                    <p className="text-white/30 font-medium max-w-sm leading-relaxed">
                        We are building the rails for a world where fashion never ends, only evolves.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`p-10 border border-white/[0.05] hover:bg-white/[0.02] transition-all duration-500 group ${i === 0 ? "md:rounded-l-3xl" : i === features.length - 1 ? "md:rounded-r-3xl" : ""
                                }`}
                        >
                            <motion.div
                                className="mb-8 p-3 bg-white/[0.05] w-fit rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-500"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                {f.icon}
                            </motion.div>
                            <h3 className="text-2xl font-serif font-bold uppercase mb-4 text-white group-hover:text-blue-500 transition-colors">{f.title}</h3>
                            <p className="text-sm text-white/40 font-medium leading-relaxed group-hover:text-white/60 transition-colors">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
