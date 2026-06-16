import { useRef, useState } from 'react';
import { Search, MapPin, Building2, Users, Map as MapIcon, ChevronRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const blocks = [
  { name: 'Bairgania', subdivision: 'Bairgania', population: '~1.8L', area: '~145 km²' },
  { name: 'Bajpatti', subdivision: 'Sitamarhi', population: '~1.2L', area: '~98 km²' },
  { name: 'Bathnaha', subdivision: 'Sitamarhi', population: '~1.5L', area: '~112 km²' },
  { name: 'Belsand', subdivision: 'Sitamarhi', population: '~1.3L', area: '~102 km²' },
  { name: 'Bokhara', subdivision: 'Bairgania', population: '~1.1L', area: '~88 km²' },
  { name: 'Choraut', subdivision: 'Sitamarhi', population: '~1.4L', area: '~108 km²' },
  { name: 'Dumra', subdivision: 'Sitamarhi', population: '~2.1L', area: '~160 km²' },
  { name: 'Majorganj', subdivision: 'Pupri', population: '~1.0L', area: '~82 km²' },
  { name: 'Nanpur', subdivision: 'Pupri', population: '~1.2L', area: '~95 km²' },
  { name: 'Parihar', subdivision: 'Bairgania', population: '~1.3L', area: '~104 km²' },
  { name: 'Parsauni', subdivision: 'Pupri', population: '~1.1L', area: '~90 km²' },
  { name: 'Pupri', subdivision: 'Pupri', population: '~1.9L', area: '~148 km²' },
  { name: 'Riga', subdivision: 'Sitamarhi', population: '~1.6L', area: '~125 km²' },
  { name: 'Runisaidpur', subdivision: 'Pupri', population: '~1.4L', area: '~110 km²' },
  { name: 'Sonbarsa', subdivision: 'Sitamarhi', population: '~1.0L', area: '~80 km²' },
  { name: 'Suppi', subdivision: 'Sitamarhi', population: '~1.1L', area: '~87 km²' },
  { name: 'Sursand', subdivision: 'Pupri', population: '~1.3L', area: '~100 km²' },
];

const SUBDIVISION_STYLES = {
  Sitamarhi: { 
    borderTheme: 'hover:border-amber-300 border-t-4 border-t-amber-500',
    iconTheme: 'bg-amber-50 text-amber-600 border-amber-100/60',
    pillTheme: 'bg-amber-50 text-amber-700 border-amber-100/60',
    iconColor: 'text-amber-600',
    dotBg: 'bg-amber-500',
  },
  Bairgania: { 
    borderTheme: 'hover:border-teal-300 border-t-4 border-t-teal-500',
    iconTheme: 'bg-teal-50 text-teal-600 border-teal-100/60',
    pillTheme: 'bg-teal-50 text-teal-700 border-teal-100/60',
    iconColor: 'text-teal-600',
    dotBg: 'bg-teal-500',
  },
  Pupri: { 
    borderTheme: 'hover:border-indigo-300 border-t-4 border-t-indigo-500',
    iconTheme: 'bg-indigo-50 text-indigo-600 border-indigo-100/60',
    pillTheme: 'bg-indigo-50 text-indigo-700 border-indigo-100/60',
    iconColor: 'text-indigo-600',
    dotBg: 'bg-indigo-500',
  },
};

function BlockCard({ block, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const styles = SUBDIVISION_STYLES[block.subdivision] || SUBDIVISION_STYLES.Sitamarhi;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 8) * 0.04, ease: 'easeOut' }}
      className={`relative rounded-2xl bg-white/50 hover:bg-white/70 backdrop-blur-2xl backdrop-blur-2xl border border-slate-200/60 ${styles.borderTheme} p-5 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/80 flex flex-col justify-between h-full`}
    >
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-slate-50/50 blur-2xl group-hover:bg-slate-100/50 transition-all duration-500 pointer-events-none" />

      <div>
        <div className="flex items-start justify-between mb-4 relative z-10 gap-3">
          <div className="flex flex-col gap-1.5">
            <span className={`inline-flex items-center text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${styles.pillTheme}`}>
              {block.subdivision} Sub-division
            </span>
            <h3 className="font-extrabold text-xl text-slate-800 leading-tight group-hover:text-devotional-maroon transition-colors duration-300">
              {block.name}
            </h3>
          </div>
          <div className={`p-2.5 rounded-xl border ${styles.iconTheme} transition-transform duration-300 group-hover:scale-105 shrink-0`}>
            <Building2 className="w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
          <div className="bg-slate-50/50 rounded-xl p-2.5 border border-slate-100">
            <div className="flex items-center gap-1.5 mb-1 text-slate-400">
              <Users className="w-3.5 h-3.5" />
              <p className="text-[9px] font-extrabold uppercase tracking-wider">Population</p>
            </div>
            <p className="text-sm font-bold text-slate-700">{block.population}</p>
          </div>
          <div className="bg-slate-50/50 rounded-xl p-2.5 border border-slate-100">
            <div className="flex items-center gap-1.5 mb-1 text-slate-400">
              <MapIcon className="w-3.5 h-3.5" />
              <p className="text-[9px] font-extrabold uppercase tracking-wider">Area</p>
            </div>
            <p className="text-sm font-bold text-slate-700">{block.area}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 relative z-10">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          Sitamarhi, Bihar
        </div>
        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-devotional-maroon group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </motion.div>
  );
}

export default function Blocks() {
  const [query, setQuery] = useState('');
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  const filtered = blocks.filter((b) =>
    b.name.toLowerCase().includes(query.toLowerCase()) ||
    b.subdivision.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="blocks" className="scroll-mt-20 py-16 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-devotional-gold/60 after:to-transparent">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-devotional-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-amber-950/10 text-red-950 border-amber-900/20 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-devotional-gold/15 shadow-sm uppercase tracking-wider">
            Administrative Subdivisions
          </span>
          <h2 className="block w-fit mx-auto text-3xl md:text-4.5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-amber-900 mb-4 drop-shadow-sm">
            Blocks of Sitamarhi
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Sitamarhi district is structured into <strong className="text-devotional-maroon font-bold">17 administrative blocks</strong> across 3 key sub-divisions: Sitamarhi, Bairgania, and Pupri.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-2xl px-3.5 py-1.5 rounded-full shadow-sm border border-slate-200/60">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm" />
              <span className="text-xs font-bold text-slate-600">Sitamarhi Sub-division</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-2xl px-3.5 py-1.5 rounded-full shadow-sm border border-slate-200/60">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 shadow-sm" />
              <span className="text-xs font-bold text-slate-600">Bairgania Sub-division</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-2xl px-3.5 py-1.5 rounded-full shadow-sm border border-slate-200/60">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-sm" />
              <span className="text-xs font-bold text-slate-600">Pupri Sub-division</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto mb-10 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-devotional-maroon/10 via-devotional-gold/15 to-devotional-maroon/10 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500 pointer-events-none"></div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-devotional-maroon/50" />
            <input
              type="text"
              placeholder="Search blocks or sub-divisions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 rounded-xl border border-devotional-gold/20 bg-white/50 backdrop-blur-2xl backdrop-blur-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-devotional-maroon/20 text-slate-700 text-sm font-semibold transition-all shadow-sm placeholder:text-slate-400"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((block, i) => (
              <BlockCard key={block.name} block={block} index={i} />
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="col-span-full flex flex-col items-center justify-center text-center py-20 bg-white/30 backdrop-blur-2xl rounded-2xl border border-slate-200/50 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 border border-slate-100">
                <Search className="w-6 h-6 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-1">No blocks found</h3>
              <p className="text-slate-500 text-sm">We couldn't find any blocks matching "{query}"</p>
              <p className="text-slate-400 text-xs mt-2">Try searching by: Sitamarhi, Bairgania, or Pupri</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
