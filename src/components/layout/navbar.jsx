import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import sitaLogo from '@/assets/logos/sita-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Overview', href: '#overview' },
    { label: 'Places', href: '#places' },
    { label: 'Culture', href: '#culture' },
    { label: 'History', href: '#history' },
    { label: 'Map', href: '#map' },
    { label: 'Administration', href: '#administration' },
    { label: 'Emergency', href: '#emergency' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-devotional-maroon/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-[#4d1212]'
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-15">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-[46px] h-[46px] md:w-[52px] md:h-[52px] rounded-full overflow-hidden border-2 border-devotional-gold shrink-0 shadow-md">
              <img
                src={sitaLogo}
                alt="Sitamarhi Logo"
                className="w-full scale-[1.35] object-cover object-top"
                style={{ transform: 'scale(1.4) translateY(2px)' }}
                width="52"
                height="52"
              />
            </div>
            <div className="leading-none">
              <span className="font-bold text-base md:text-lg tracking-tight text-white block">Sitamarhi</span>
              <span className="text-devotional-saffron text-[10px] md:text-[11px] font-bold tracking-wide block mt-1">Sacred Birthplace of Goddess Sita</span>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-0.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-amber-400 hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-navy-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-devotional-maroon border-t border-white/10 overflow-hidden"
          >
            <div className="px-3 py-3 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
