"use client";
import { motion } from "framer-motion";
import { Smartphone, Download, Star, ShieldCheck, Zap, Recycle, Coins, Leaf } from "lucide-react";

export default function AppDownloadSection() {
    const features = [
        { icon: <Zap size={20} />, title: "Shop Smart", desc: "Discover stylish, sustainable fashion." },
        { icon: <Coins size={20} />, title: "Sell & Earn", desc: "Exchange clothes for BWorth Coins." },
        { icon: <Recycle size={20} />, title: "Recycle", desc: "Upcycle and reduce textile waste." },
        { icon: <Leaf size={20} />, title: "Carbon Savings", desc: "Track your CO₂ savings." },
    ];

    return (
        <section className="py-32 px-6 md:px-12 bg-[#020610] relative overflow-hidden">
            {/* Background Decorative - Subtler white glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/[0.02] blur-[150px] -z-10"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                <div className="flex-1 space-y-12">
                    <div className="space-y-6">
                        <span className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase">Mobile App</span>
                        <h2 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-none text-white">
                            BWorth in your <br /> <span className="italic text-white/20 outline-text !-webkit-text-stroke-white">Pocket.</span>
                        </h2>
                        <p className="text-xl font-light text-white/50 leading-relaxed max-w-xl">
                            India’s first sustainable fashion marketplace. Buy, Sell, Recycle, and Earn Rewards—all in one app.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="flex gap-4 group">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold uppercase text-white tracking-tight">{feature.title}</h4>
                                    <p className="text-sm text-white/30">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center pt-8">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.BworthGo&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-10 py-6 rounded-full font-bold uppercase tracking-widest flex items-center gap-4 hover:bg-blue-600 hover:text-white transition-all shadow-2xl shadow-white/5 group"
                        >
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] opacity-60 font-sans">GET IT ON</span>
                                <span className="text-lg">Google Play</span>
                            </div>
                            <Download size={24} className="group-hover:translate-y-1 transition-transform" />
                        </a>

                        <div className="flex gap-10">
                            <div className="text-center">
                                <span className="block text-2xl font-serif font-bold text-white leading-none">50+</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Downloads</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-2xl font-serif font-bold text-white leading-none">18+</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Rated</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                        <Smartphone size={12} /> This app is available for all of your devices
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
                                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Your Balance</span>
                                <div className="flex items-baseline gap-2 mt-2">
                                    <span className="text-4xl font-serif font-bold text-white">2,450</span>
                                    <span className="text-xs font-bold text-white/40">BWorth Coins</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Sustainability Stats</span>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <Leaf size={16} className="text-green-500 mb-2" />
                                        <span className="block text-lg font-serif font-bold text-white">12.4kg</span>
                                        <span className="text-[10px] uppercase text-white/20">CO₂ Saved</span>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <Recycle size={16} className="text-blue-500 mb-2" />
                                        <span className="block text-lg font-serif font-bold text-white">8 Items</span>
                                        <span className="text-[10px] uppercase text-white/20">Recycled</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-3xl">
                                <span className="text-xs font-bold text-white/60 mb-4 block uppercase tracking-widest">Sustainable Picks</span>
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

                    {/* Floating Elements */}
                    <div className="absolute -right-6 top-1/4 p-4 bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl shadow-2xl animate-bounce-slow">
                        <div className="flex items-center gap-3">
                            <ShieldCheck size={16} className="text-blue-500" />
                            <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">Secured by Turbopack</span>
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
