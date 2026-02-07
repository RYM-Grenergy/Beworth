"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", count: "01" },
    { name: "About Us", href: "/about-us", count: "02" },
    { name: "Our Mission", href: "/our-mission", count: "03" },
    { name: "Our Vision", href: "/our-vision", count: "04" },
    { name: "Brands", href: "/brands", count: "05" },
    { name: "Contact Us", href: "/contact-us", count: "06" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[80] transition-all duration-300 px-6 py-4 md:px-12 md:py-6 ${scrolled
          ? "bg-[#020610]/90 backdrop-blur-md border-b border-white/[0.05]"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="Bworth Logo"
              className="h-10 w-auto object-contain invert hue-rotate-180"
            />
          </Link>

          <div className="flex items-center gap-6 md:gap-10">


            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all active:scale-95 group shadow-xl shadow-white/5"
            >
              <span className="text-sm font-bold tracking-wider">MENU</span>
              <Menu size={18} className="group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#0A1128] z-[100] flex flex-col md:flex-row overflow-hidden text-white"
          >
            {/* Left side info (Optional/Desktop) */}
            <div className="hidden md:flex w-1/3 border-r border-white/5 flex-col justify-between p-8 xl:p-12 bg-white/[0.02]">
              <div>
                <Link href="/" className="block">
                  <img
                    src="/logo.png"
                    alt="Bworth Logo"
                    className="h-16 w-auto object-contain invert hue-rotate-180 mb-6"
                  />
                </Link>
                <p className="mt-6 text-white/40 max-w-xs font-medium leading-relaxed text-sm xl:text-base">
                  Building a sustainable fashion ecosystem through circular economy and innovative buyback solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-white/20 hover:text-blue-400 transition-colors cursor-pointer group">
                  <Globe size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">ENGLISH / हिन्दी</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/10">
                  © {new Date().getFullYear()} BEWORTH TECHNOLOGIES
                </div>
              </div>
            </div>

            {/* Right side navigation */}
            <div className="flex-1 flex flex-col h-full overflow-y-auto">
              <div className="sticky top-0 z-10 flex justify-between items-center md:justify-end p-6 md:p-8 bg-[#0A1128]/80 backdrop-blur-sm">
                <div className="md:hidden">
                  <img
                    src="/logo.png"
                    alt="Bworth Logo"
                    className="h-10 w-auto object-contain invert hue-rotate-180"
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-black transition-all border border-white/10 rounded-full group bg-white/5"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest">CLOSE</span>
                  <X size={20} className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              <div className="flex-1 px-6 md:px-12 pb-12 flex flex-col justify-center min-h-[min-content]">
                <div className="max-w-4xl w-full mx-auto space-y-1 md:space-y-0">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        variants={linkVariants}
                        className="group"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-baseline gap-3 md:gap-6 py-3 md:py-4 xl:py-5 border-b border-white/5 group-hover:border-white/10 md:group-hover:pl-4 transition-all duration-300"
                        >
                          <span className={`text-[9px] md:text-[10px] font-mono font-bold transition-colors mb-1 ${isActive ? "text-blue-400" : "text-white/20"
                            }`}>
                            {link.count}
                          </span>
                          <span className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif font-black uppercase tracking-tighter transition-all group-hover:scale-[1.01] inline-block ${isActive ? "italic text-blue-500" : "text-white/80 group-hover:text-white"
                            }`}>
                            {link.name}
                          </span>
                          <ArrowRight
                            size={32}
                            className={`ml-auto transition-all duration-300 text-blue-400 hidden md:block ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0"
                              }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-12 md:hidden flex justify-between text-[10px] font-bold tracking-widest uppercase text-white/10">
                  <span>Sustainability</span>
                  <span>Fashion</span>
                  <span>Future</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
