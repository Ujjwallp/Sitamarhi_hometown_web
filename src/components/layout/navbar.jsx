import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import sitaLogo from '@/assets/logos/sita-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (isClickScrolling.current) return;
      
      const sections = ['home', 'overview', 'places', 'culture', 'history', 'map', 'administration', 'emergency'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    isClickScrolling.current = true;
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  const links = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Overview', href: '#overview', id: 'overview' },
    { label: 'Places', href: '#places', id: 'places' },
    { label: 'Culture', href: '#culture', id: 'culture' },
    { label: 'History', href: '#history', id: 'history' },
    { label: 'Map', href: '#map', id: 'map' },
    { label: 'Administration', href: '#administration', id: 'administration' },
    { label: 'Emergency', href: '#emergency', id: 'emergency' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#FFF5E4] shadow-sm border-devotional-gold/30 py-2'
          : 'bg-[#FFF5E4] border-black/5 py-3'
      } text-devotional-text`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#home" onClick={() => handleLinkClick('home')} className="flex items-center gap-3 group">
            <div className="w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] rounded-full overflow-hidden border-2 border-devotional-gold shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300 bg-white">
              <img
                src={sitaLogo}
                alt="Sitamarhi Logo"
                className="w-full h-full scale-[1.35] object-cover object-top"
                style={{ transform: 'scale(1.4) translateY(2px)' }}
                width="46"
                height="46"
              />
            </div>
            <div className="leading-none">
              <span className="font-serif font-black text-sm sm:text-base md:text-lg tracking-wider text-devotional-text block group-hover:text-devotional-maroon transition-colors">SITAMARHI</span>
              <span className="text-devotional-maroon text-[9px] sm:text-[10px] font-bold tracking-wide block mt-0.5">Birthplace of Maa Sita</span>
            </div>
          </a>
          
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive 
                      ? 'text-devotional-maroon border-b-2 border-devotional-maroon rounded-none' 
                      : 'text-devotional-text/70 hover:text-devotional-maroon hover:bg-devotional-maroon/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-black/5 transition-colors border border-black/10 flex items-center justify-center w-10 h-10 text-devotional-text"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-black/5 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-3 space-y-1">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      handleLinkClick(link.id);
                    }}
                    className={`block px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-devotional-maroon/10 text-devotional-maroon shadow-sm'
                        : 'text-devotional-text/70 hover:bg-black/5 hover:text-devotional-text'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
