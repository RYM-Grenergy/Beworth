"use client";
import { motion } from "framer-motion";

export default function ScrollBanner() {
  const text = "SUSTAINABLE FUTURE";
  const items = Array(10).fill(text);

  return (
    <div className="bg-black text-white py-6 md:py-8 overflow-hidden transform md:-rotate-1 relative z-10 my-24 border-y border-white/10 shadow-2xl">
      <div className="flex relative items-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          className="flex whitespace-nowrap"
        >
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-3xl md:text-6xl font-serif font-black tracking-tighter mx-4 md:mx-12">
                {item}
              </span>
              <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-500 rotate-45 mx-4 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
