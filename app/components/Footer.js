import Link from "next/link";
import { ArrowUpRight, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Mission", href: "/our-mission" },
    { name: "Our Vision", href: "/our-vision" },
    { name: "Brands", href: "/brands" },
    { name: "Policies", href: "/policies" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="bg-[#0A1128] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <Link href="/" className="block mb-8">
              <img
                src="/logo2.4046ff39ad9795bdb70f.4046ff39ad9795bdb70f.jpeg"
                alt="Bworth Logo"
                className="h-10 w-auto object-contain invert hue-rotate-180"
              />
            </Link>
            <p className="text-xl font-medium text-white/40 leading-relaxed mb-10 max-w-sm">
              The leading technology partner for circular luxury and sustainable fashion innovation.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer bg-white/5"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/20 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg font-serif font-bold uppercase group flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all font-sans" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/20 mb-6">Contact Details</h4>
              <div className="space-y-2">
                <p className="text-2xl font-serif font-bold text-white/80">+91 8826668050</p>
                <p className="text-lg font-medium text-blue-500 underline decoration-blue-500/30 underline-offset-8">info@bworth.co.in</p>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/20 mb-4">Location</h4>
              <p className="text-sm font-bold text-white/40 tracking-widest uppercase">Gurugram, Haryana, India</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-white/5 gap-8">
          <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/20">
            © {currentYear} beworth technologies pvt ltd.
          </p>
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.5em] uppercase text-white/20">
            <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
