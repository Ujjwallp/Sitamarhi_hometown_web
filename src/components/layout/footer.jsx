import { useRef } from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import sitaLogo from '@/assets/logos/sita-logo.png';

const usefulLinks = [
  { label: 'sitamarhi.nic.in', href: 'https://sitamarhi.nic.in' },
  { label: 'bihar.gov.in', href: 'https://www.bihar.gov.in' },
  { label: 'Parliament of India', href: 'https://sansad.in/' },
  { label: 'OpenStreetMap', href: 'https://www.openstreetmap.org/' },
];

const officialSources = [
  'Sitamarhi District Administration',
  'Government of Bihar',
  'Parliament of India',
  'OpenStreetMap',
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const ref = useRef(null);

  return (
    <footer className="bg-white/40 backdrop-blur-md text-devotional-text relative overflow-hidden border-t border-devotional-gold/30">
      {/* Decorative background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      
      {/* Dynamic top gradient line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-devotional-maroon to-transparent opacity-30" />
      
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={sitaLogo}
                alt="Maa Sita Logo"
                className="w-10 h-10 object-cover rounded-full border-2 border-devotional-gold/60 shrink-0 bg-white"
              />
              <span className="font-serif font-black text-xl text-devotional-text block tracking-wide uppercase">
                Sitamarhi
              </span>
            </div>
            <p className="text-devotional-maroon text-xs font-bold uppercase tracking-widest leading-snug">
              Sacred Birthplace of Goddess Sita
            </p>
            <p className="text-devotional-text/70 text-sm leading-relaxed">
              A premium tourism, cultural heritage, and administrative directory guide to Sitamarhi District, Bihar.
            </p>
            <div className="flex items-center gap-2 text-devotional-text/60 text-xs font-bold mt-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Bihar, India</span>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-widest text-devotional-maroon mb-6 flex items-center gap-2">
              <span className="w-3 h-[2px] bg-devotional-gold rounded-full" />
              Useful Links
            </h4>
            <ul className="space-y-3.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-devotional-text/70 hover:text-devotional-maroon text-sm font-semibold transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-devotional-text/30 group-hover:bg-devotional-maroon rounded-full transition-all flex-shrink-0" />
                    <span className="border-b border-transparent group-hover:border-devotional-maroon/30 pb-0.5">
                      {link.label}
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Official Sources */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-widest text-devotional-maroon mb-6 flex items-center gap-2">
              <span className="w-3 h-[2px] bg-devotional-gold rounded-full" />
              Official Sources
            </h4>
            <ul className="space-y-3">
              {officialSources.map((source) => (
                <li key={source} className="flex items-center gap-2.5 text-devotional-text/70 text-sm font-semibold">
                  <span className="text-devotional-gold text-xs">✓</span>
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Developer */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-widest text-devotional-maroon mb-6 flex items-center gap-2">
              <span className="w-3 h-[2px] bg-devotional-gold rounded-full" />
              Developer
            </h4>
            <div className="space-y-2">
              <p className="text-devotional-text font-extrabold text-base">Ujjwal Prakash</p>
              <p className="text-devotional-text/60 text-xs font-semibold uppercase tracking-wider">Frontend Developer</p>
              <a
                href="mailto:Ujjwallp22@gmail.com"
                className="inline-block text-devotional-maroon hover:text-devotional-text text-sm font-bold transition-all border-b border-devotional-maroon/30 hover:border-devotional-text/50 pb-0.5"
              >
                Ujjwallp22@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-devotional-gold/20 bg-white/50 relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-4">
          <p className="text-devotional-text/70 text-sm font-semibold">
            Designed & Developed by <span className="text-devotional-maroon font-extrabold">Ujjwal Prakash</span>
          </p>
          <p className="text-devotional-text/60 text-xs tracking-wide">
            React • Tailwind CSS • Leaflet Maps • OpenStreetMap
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-devotional-text/50 hover:text-devotional-maroon text-xs transition-all font-bold mt-2 hover:-translate-y-0.5"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
