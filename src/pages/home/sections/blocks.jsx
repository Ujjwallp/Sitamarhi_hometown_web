import { useRef, useState } from 'react';
import { Search, MapPin, Building2, Users, Map as MapIcon } from 'lucide-react';
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

const SUBDIVISION_COLORS = {
  Sitamarhi: { bg: 'bg-[#7A1F1F]', text: 'text-white', border: 'border-[#5a1515]', dot: 'bg-white', gradient: 'from-red-100 to-rose-200/80 border-rose-300/50' },
  Bairgania: { bg: 'bg-[#0F766E]', text: 'text-white', border: 'border-[#0a5c56]', dot: 'bg-white', gradient: 'from-emerald-100 to-teal-200/80 border-teal-300/50' },
  Pupri:     { bg: 'bg-[#1E40AF]', text: 'text-white', border: 'border-[#1a358f]', dot: 'bg-white', gradient: 'from-blue-100 to-indigo-200/80 border-indigo-300/50' },
};

function BlockCard({ block, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const colors = SUBDIVISION_COLORS[block.subdivision] || SUBDIVISION_COLORS.Sitamarhi;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 8) * 0.05, ease: 'easeOut' }}
      className={`group bg-gradient-to-br ${colors.gradient} border rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
    >
      <div className="absolute top-3 right-3 w-7 h-7 bg-devotional-secondary/60 border border-devotional-gold/15 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold text-devotional-maroon">{(index + 1).toString().padStart(2, '0')}</span>
      </div>

      <div className="flex items-start gap-3">
        <div className="p-2.5 bg-devotional-secondary border border-devotional-gold/15 rounded-xl shrink-0">
          <Building2 className="w-5 h-5 text-devotional-maroon" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-devotional-text text-base leading-tight mb-1 pr-6">{block.name}</p>
          <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
            {block.subdivision} Sub-division
          </span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-stone-100 grid grid-cols-2 gap-2">
        <div className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <div>
            <p className="text-xs text-stone-500 leading-none">Population</p>
            <p className="text-xs font-semibold text-devotional-text mt-0.5">{block.population}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <MapIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <div>
            <p className="text-xs text-stone-500 leading-none">Area</p>
            <p className="text-xs font-semibold text-devotional-text mt-0.5">{block.area}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1 text-xs text-devotional-text/60">
        <MapPin className="w-3 h-3" />
        Sitamarhi District, Bihar
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
    <section id="blocks" className="py-16 bg-devotional-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-devotional-secondary text-devotional-maroon text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-devotional-gold/15 shadow-xs">
            Administrative Divisions
          </span>
          <h2 className="text-4xl font-extrabold text-devotional-maroon mb-4">Blocks of Sitamarhi</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Sitamarhi district is divided into <strong>17 blocks</strong> across 3 sub-divisions — Sitamarhi, Bairgania, and Pupri.
          </p>
          <p className="text-xs text-devotional-text/60 font-medium mt-2">Source: Official district administration records</p>
          <div className="flex items-center justify-center gap-6 mt-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#7A1F1F]" />
              <span className="text-xs font-semibold text-devotional-text">Sitamarhi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#0F766E]" />
              <span className="text-xs font-semibold text-devotional-text">Bairgania</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#1E40AF]" />
              <span className="text-xs font-semibold text-devotional-text">Pupri</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto mb-10 relative"
        >
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search blocks or sub-divisions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-devotional-gold/40 bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-devotional-maroon/30 focus:border-devotional-maroon/40 text-devotional-text text-sm transition-all shadow-sm"
          />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((block, i) => (
              <BlockCard key={block.name} block={block} index={i} />
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16"
            >
              <p className="text-4xl mb-3">🔍</p>
              <p className="text-stone-600 font-medium">No blocks found matching "{query}"</p>
              <p className="text-slate-400 text-sm mt-1">Try searching by sub-division: Sitamarhi, Bairgania, or Pupri</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
