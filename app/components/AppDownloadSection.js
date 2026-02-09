"use client";
import { motion } from "framer-motion";
import { Smartphone, Download, Star, ShieldCheck, Zap, Recycle, Coins, Leaf } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function AppDownloadSection() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const t = translations[language];

    const features = [
        { icon: <Zap size={20} />, title: t.app_download.shop_smart, desc: t.app_download.shop_smart_desc },
        { icon: <Coins size={20} />, title: t.app_download.sell_earn, desc: t.app_download.sell_earn_desc },
        { icon: <Recycle size={20} />, title: t.app_download.recycle, desc: t.app_download.recycle_desc },
        { icon: <Leaf size={20} />, title: t.app_download.carbon_savings, desc: t.app_download.carbon_savings_desc },
    ];

    return (
        <section
            className={`py-32 px-6 md:px-12 relative overflow-hidden transition-colors ${theme === "white" ? "bg-[#F8FAFC]" : "bg-[#020610]"
                }`}
        >
            {/* Background Decorative - Subtler white glow */}
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[150px] -z-10 ${theme === "white" ? "bg-blue-600/[0.05]" : "bg-blue-600/[0.02]"
                    }`}
            ></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                <div className="flex-1 space-y-12">
                    <div className="space-y-6">
                        <span className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase">
                            {t.app_download.mobile_app}
                        </span>
                        <h2
                            className={`text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-none ${theme === "white" ? "text-black" : "text-white"
                                }`}
                        >
                            {t.app_download.pocket_title_bworth} <br />{" "}
                            <span
                                className={`italic outline-text !-webkit-text-stroke-white ${theme === "white"
                                    ? "text-black/10"
                                    : "text-white/20"
                                    }`}
                            >
                                {t.app_download.pocket_title_pocket}
                            </span>
                        </h2>
                        <p
                            className={`text-xl font-light leading-relaxed max-w-xl ${theme === "white"
                                ? "text-black/50"
                                : "text-white/50"
                                }`}
                        >
                            {t.app_download.desc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="flex gap-4 group">
                                <div
                                    className={`w-12 h-12 border rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all ${theme === "white"
                                        ? "bg-black/5 border-black/10"
                                        : "bg-white/5 border-white/10"
                                        }`}
                                >
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4
                                        className={`font-serif font-bold uppercase tracking-tight ${theme === "white"
                                            ? "text-black"
                                            : "text-white"
                                            }`}
                                    >
                                        {feature.title}
                                    </h4>
                                    <p
                                        className={`text-sm ${theme === "white"
                                            ? "text-black/40"
                                            : "text-white/30"
                                            }`}
                                    >
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center pt-8">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.BworthGo&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-10 py-6 rounded-full font-bold uppercase tracking-widest flex items-center gap-4 hover:bg-blue-600 hover:text-white transition-all shadow-2xl group ${theme === "white"
                                ? "bg-black text-white shadow-black/5"
                                : "bg-white text-black shadow-white/5"
                                }`}
                        >
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] opacity-60 font-sans">
                                    {t.app_download.get_it_on}
                                </span>
                                <span className="text-lg">
                                    {t.app_download.google_play}
                                </span>
                            </div>
                            <Download
                                size={24}
                                className="group-hover:translate-y-1 transition-transform"
                            />
                        </a>

                        <div className="flex gap-10">
                            <div className="text-center">
                                <span
                                    className={`block text-2xl font-serif font-bold leading-none ${theme === "white"
                                        ? "text-black"
                                        : "text-white"
                                        }`}
                                >
                                    50+
                                </span>
                                <span
                                    className={`text-[10px] uppercase tracking-widest font-bold ${theme === "white"
                                        ? "text-black/40"
                                        : "text-white/40"
                                        }`}
                                >
                                    {t.app_download.downloads}
                                </span>
                            </div>
                            <div className="text-center">
                                <span
                                    className={`block text-2xl font-serif font-bold leading-none ${theme === "white"
                                        ? "text-black"
                                        : "text-white"
                                        }`}
                                >
                                    18+
                                </span>
                                <span
                                    className={`text-[10px] uppercase tracking-widest font-bold ${theme === "white"
                                        ? "text-black/40"
                                        : "text-white/40"
                                        }`}
                                >
                                    {t.app_download.rated}
                                </span>
                            </div>
                        </div>
                    </div>

                    <p
                        className={`text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 ${theme === "white"
                            ? "text-black/20"
                            : "text-white/20"
                            }`}
                    >
                        <Smartphone size={12} /> {t.app_download.available_msg}
                    </p>
                </div>

                <div className="flex-1 relative w-full max-w-md">
                    {/* Digital Mobile Mockup using only CSS/Code */}
                    <div className="relative w-full aspect-[9/19] bg-[#0A0F1E] rounded-[3rem] border-[8px] border-white/10 p-6 shadow-[0_0_100px_rgba(59,130,246,0.1)] overflow-hidden">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl"></div>

                        {/* App Content Mockup */}
                        <div className="mt-12 space-y-8">
                            <div className="flex justify-between items-center">
                                <div className="h-8 w-auto flex items-center justify-center">
                                    <img
                                        src="/logo.png"
                                        alt="Bworth Logo"
                                        className="h-full w-auto object-contain invert hue-rotate-180"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-white/10"></div>
                                </div>
                            </div>

                            <div className="p-6 bg-blue-600/20 border border-blue-500/20 rounded-3xl">
                                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{t.app_download.your_balance}</span>
                                <div className="flex items-baseline gap-2 mt-2">
                                    <span className="text-4xl font-serif font-bold text-white">2,450</span>
                                    <span className="text-xs font-bold text-white/40">{t.app_download.coins}</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{t.app_download.stats}</span>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <Leaf size={16} className="text-green-500 mb-2" />
                                        <span className="block text-lg font-serif font-bold text-white">12.4kg</span>
                                        <span className="text-[10px] uppercase text-white/20">{t.app_download.co2_saved}</span>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <Recycle size={16} className="text-blue-500 mb-2" />
                                        <span className="block text-lg font-serif font-bold text-white">8 Items</span>
                                        <span className="text-[10px] uppercase text-white/20">{t.app_download.recycled}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-3xl">
                                <span className="text-xs font-bold text-white/60 mb-4 block uppercase tracking-widest">{t.app_download.picks}</span>
                                <div className="flex gap-4">
                                    <div className="w-24 h-32 bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=200&h=300&fit=crop&q=80" className="w-full h-full object-cover opacity-80" alt="Sustainable Shirts" />
                                    </div>
                                    <div className="w-24 h-32 bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=300&fit=crop&q=80" className="w-full h-full object-cover opacity-80" alt="Sustainable Jacket" />
                                    </div>
                                    <div className="w-24 h-32 bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=300&fit=crop&q=80" className="w-full h-full object-cover opacity-80" alt="Sustainable Jeans" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Nav Mockup */}
                        <div className="absolute bottom-6 left-6 right-6 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-around">
                            <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
                            <div className="w-6 h-6 bg-white/10 rounded-md"></div>
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-[-10px] shadow-lg shadow-blue-500/50">
                                <Download size={16} className="text-white" />
                            </div>
                            <div className="w-6 h-6 bg-white/10 rounded-md"></div>
                            <div className="w-6 h-6 bg-white/10 rounded-md"></div>
                        </div>
                    </div>


                </div>
            </div>

            <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}
