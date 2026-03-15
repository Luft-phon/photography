"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { href: "/", labelKey: "home", bg: "bg-[#FF8EA7]", fg: "text-black" },
  { href: "/gallery", labelKey: "gallery", bg: "bg-[#CB9CFF]", fg: "text-black" },
  { href: "/about", labelKey: "about", bg: "bg-[#FCBB01]", fg: "text-black" },
  { href: "/contact", labelKey: "contact", bg: "bg-[#5D201D]", fg: "text-white" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "vi" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-8 py-6 mix-blend-difference text-white pointer-events-none">
        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase relative z-[70] pointer-events-auto">
          Luftphon
        </Link>
        <ul className="hidden md:flex items-center gap-8 pointer-events-auto">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href as any}
                className={`text-sm tracking-widest uppercase transition-colors ${pathname === link.href ? "text-white font-medium" : "text-neutral-400 hover:text-white"
                  }`}
              >
                {t(link.labelKey)}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-white"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLanguage}
              className="text-sm tracking-widest uppercase transition-colors text-neutral-400 hover:text-white"
            >
              {t('switchLang')}
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className={`md:hidden flex flex-col items-center justify-center gap-1.5 z-[70] p-2 hover:opacity-70 transition-opacity pointer-events-auto ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label="Open Menu"
        >
          <span className="w-8 h-px bg-white block" />
          <span className="w-8 h-px bg-white block" />
          <span className="w-8 h-px bg-white block" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] md:hidden pointer-events-none"
          >
            <div 
              className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-auto" 
              onClick={() => setIsOpen(false)} 
            />
            
            <div className="absolute top-6 right-6 flex flex-col items-end gap-3 pointer-events-auto z-[110]">
              <motion.button
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => setIsOpen(false)}
                className="w-[84px] h-[84px] bg-[#FDD4ED] rounded-full flex items-center justify-center hover:scale-105 transition-transform mb-4 shadow-lg origin-center"
                aria-label="Close Menu"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>

              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25, delay: i * 0.05 }}
                  className="w-full flex justify-end"
                >
                  <Link
                    href={link.href as any}
                    className={`${link.bg} ${link.fg} px-10 py-[18px] rounded-full text-4xl font-bold lowercase tracking-tight hover:scale-105 transition-transform shadow-lg block text-center min-w-[200px]`}
                  >
                    {t(link.labelKey)}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25, delay: links.length * 0.05 }}
                className="w-full flex justify-end mt-2"
              >
                <button
                  onClick={toggleLanguage}
                  className="bg-neutral-800 text-white px-10 py-[18px] rounded-full text-3xl font-bold lowercase tracking-tight hover:scale-105 transition-transform shadow-lg block text-center min-w-[200px]"
                >
                  {t('switchLang')}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
