import { useRef } from 'react';
import { ArrowUp, ExternalLink, Globe } from 'lucide-react';
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
    <footer className="bg-[#2D0A0A] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="h-1.5 w-full bg-gradient-to-r from-devotional-saffron via-devotional-gold to-devotional-maroon" />
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={sitaLogo}
                alt="Maa Sita Logo"
                className="w-10 h-10 object-cover rounded-full border border-devotional-gold shrink-0"
              />
              <span className="font-serif font-extrabold text-lg text-white block tracking-wide">SITAMARHI</span>
            </div>
            <p className="text-devotional-saffron text-xs font-bold uppercase tracking-wider mb-3 leading-snug">
              Sacred Birthplace of Goddess Sita
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              A Cultural, Heritage, Tourism and Administrative Guide to Sitamarhi District.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>Bihar, India</span>
            </div>
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-devotional-saffron rounded-full" />
              Useful Links
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-devotional-saffron text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-800 group-hover:bg-devotional-saffron rounded-full transition-colors flex-shrink-0" />
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-devotional-saffron rounded-full" />
              Official Sources
            </h4>
            <ul className="space-y-3">
              {officialSources.map((source) => (
                <li key={source} className="flex items-center gap-2 text-slate-450 text-sm">
                  <span className="text-devotional-gold">✓</span>
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-devotional-saffron rounded-full" />
              Developer
            </h4>
            <div className="space-y-1">
              <p className="text-white font-extrabold text-base">Ujjwal Prakash</p>
              <p className="text-slate-450 text-xs font-semibold uppercase tracking-wider">Frontend Developer</p>
              <a
                href="mailto:Ujjwallp22@gmail.com"
                className="text-devotional-saffron hover:text-devotional-gold text-sm font-medium transition-colors block pt-1"
              >
                Ujjwallp22@gmail.com
              </a>
            </div>
          </div>
          
        </div>
      </div>
      <div className="border-t border-[#3D1414] bg-[#1E0505]/40 relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-3">
          <p className="text-slate-400 text-sm font-semibold">
            Designed & Developed by <span className="text-devotional-saffron font-bold">Ujjwal Prakash</span>
          </p>
          <p className="text-slate-500 text-xs tracking-wide">
            Technology Stack: React • TypeScript • Tailwind CSS • Leaflet Maps • OpenStreetMap
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-devotional-saffron text-xs transition-colors font-semibold mt-2"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
