import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Crown, BookOpen, Scroll, Landmark, Building2 } from 'lucide-react';

const eras = [
  {
    icon: Sparkles,
    subtitle: 'The Divine Origin',
    title: 'Birthplace of Goddess Sita',
    description:
      'Sitamarhi is revered globally as the sacred birthplace of Maa Sita, discovered by King Janaka. This divine event establishes the spiritual foundation of the entire region.',
    year: 'Mythological Era',
    accentColor: '#fbbf24',
    theme: 'border-t-amber-500 hover:border-amber-300',
    iconTheme: 'bg-amber-50 text-amber-600 border-amber-100/60',
    tagTheme: 'bg-amber-50 text-amber-700 border-amber-100/60',
    yearColor: 'text-amber-700',
    barTheme: 'bg-amber-500',
  },
  {
    icon: Scroll,
    subtitle: 'Ancient Epoch',
    title: 'Ramayana Era',
    description:
      'The era of the Ramayana shapes the core identity of Sitamarhi, marked by the Sita Parikrama and ancient shrines like Haleshwar Sthan that pilgrims still visit today.',
    year: 'Treta Yuga',
    accentColor: '#f97316',
    theme: 'border-t-orange-500 hover:border-orange-300',
    iconTheme: 'bg-orange-50 text-orange-600 border-orange-100/60',
    tagTheme: 'bg-orange-50 text-orange-700 border-orange-100/60',
    yearColor: 'text-orange-700',
    barTheme: 'bg-orange-500',
  },
  {
    icon: Crown,
    subtitle: 'Golden Age of Philosophy',
    title: 'Mithila Kingdom',
    description:
      'Under King Janaka, the region became a flourishing centre for Nyaya philosophy, Vedic learning, and early Maithili culture — a beacon of wisdom in the ancient world.',
    year: '~ 1000 BCE',
    accentColor: '#ef4444',
    theme: 'border-t-red-500 hover:border-red-300',
    iconTheme: 'bg-red-50 text-red-600 border-red-100/60',
    tagTheme: 'bg-red-50 text-red-700 border-red-100/60',
    yearColor: 'text-red-700',
    barTheme: 'bg-red-500',
  },
  {
    icon: BookOpen,
    subtitle: 'Art & Tradition',
    title: 'Medieval Cultural Growth',
    description:
      'The continuous evolution of Madhubani art, Chhath Puja traditions, and the Tirhuta script kept the cultural fabric vibrant through centuries of changing rule.',
    year: '600 – 1800 CE',
    accentColor: '#f59e0b',
    theme: 'border-t-amber-500 hover:border-amber-300',
    iconTheme: 'bg-amber-50 text-amber-600 border-amber-100/60',
    tagTheme: 'bg-amber-50 text-amber-700 border-amber-100/60',
    yearColor: 'text-amber-700',
    barTheme: 'bg-amber-500',
  },
  {
    icon: Landmark,
    subtitle: 'Administrative Formation',
    title: 'British Period',
    description:
      'Sitamarhi was organised as a formal sub-division of the Muzaffarpur district in 1875, bringing modern administrative frameworks and infrastructure to the region.',
    year: '1875 CE',
    accentColor: '#f97316',
    theme: 'border-t-orange-500 hover:border-orange-300',
    iconTheme: 'bg-orange-50 text-orange-600 border-orange-100/60',
    tagTheme: 'bg-orange-50 text-orange-700 border-orange-100/60',
    yearColor: 'text-orange-700',
    barTheme: 'bg-orange-500',
  },
  {
    icon: Building2,
    subtitle: 'Independent District',
    title: 'Modern Sitamarhi',
    description:
      'On December 11, 1972, Sitamarhi was established as an independent district, embarking on an era of modern governance, heritage tourism, and cultural renaissance.',
    year: 'Dec 11, 1972',
    accentColor: '#eab308',
    theme: 'border-t-yellow-500 hover:border-yellow-300',
    iconTheme: 'bg-yellow-50 text-yellow-600 border-yellow-100/60',
    tagTheme: 'bg-yellow-50 text-yellow-700 border-yellow-100/60',
    yearColor: 'text-yellow-700',
    barTheme: 'bg-yellow-500',
  },
];

function EraCard({ era, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;
  const Icon = era.icon;

  return (
    <div className="relative flex items-center w-full my-6">
      {/* Timeline dot */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center"
        style={{ filter: `drop-shadow(0 0 6px ${era.accentColor}50)` }}
      >
        <div
          className="w-4.5 h-4.5 rounded-full border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-110"
          style={{ background: era.accentColor }}
        />
      </div>

      {/* Connector line to card */}
      <div
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] w-12 z-10 opacity-40 ${isLeft ? 'right-[calc(50%+8px)]' : 'left-[calc(50%+8px)]'}`}
        style={{ background: `linear-gradient(${isLeft ? 'to left' : 'to right'}, transparent, ${era.accentColor})` }}
      />

      {/* Card side */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
        className={`w-full md:w-[46%] ${isLeft ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'}`}
      >
        <div
          className={`relative rounded-2xl bg-white/50 hover:bg-white/70 backdrop-blur-2xl backdrop-blur-2xl border border-slate-200/60 border-t-4 ${era.theme} p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/80 flex flex-col justify-between h-full group`}
        >
          {/* Decorative highlight */}
          <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-slate-50/50 blur-2xl group-hover:bg-slate-100/50 transition-all duration-500 pointer-events-none" />

          <div className="relative z-10">
            {/* Header row */}
            <div className="flex items-start justify-between mb-4 gap-3">
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${era.iconTheme} transition-transform duration-300 group-hover:scale-105 shrink-0`}>
                <Icon className="w-5.5 h-5.5" />
              </div>

              {/* Year badge */}
              <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${era.tagTheme}`}>
                {era.year}
              </span>
            </div>

            {/* Text */}
            <p className={`text-[10px] font-extrabold uppercase tracking-wider mb-1 ${era.yearColor}`}>
              {era.subtitle}
            </p>
            <h3 className="text-xl font-black text-slate-800 mb-2 leading-snug group-hover:text-devotional-maroon transition-colors duration-300">
              {era.title}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed font-semibold">
              {era.description}
            </p>

            {/* Bottom accent bar */}
            <div className={`mt-4 h-[1.5px] w-10 rounded-full opacity-60 ${era.barTheme}`} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function History() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section
      id="history"
      className="scroll-mt-20 py-16 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-devotional-gold/60 after:to-transparent"
    >
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #7a1f1f 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-amber-950/10 text-red-950 border-amber-900/20 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-devotional-gold/15 shadow-sm uppercase tracking-wider">
            Historical Legacy
          </span>
          <h2 className="block w-fit mx-auto text-3xl md:text-4.5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-red-950 to-amber-900 mb-4 drop-shadow-sm">
            Roots of Sitamarhi
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Journey through time from the divine origins of Maa Sita to the modern administrative district.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1.5px] hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, #D4AF37 8%, #D4AF37 92%, transparent)' }}
          />

          {eras.map((era, i) => (
            <EraCard key={era.title} era={era} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
