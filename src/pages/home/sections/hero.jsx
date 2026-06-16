import { motion } from 'framer-motion';
import { Info, Compass, Map } from 'lucide-react';
import heroBg from '@/assets/images/hero/hero-bg.png';

const stats = [
  { value: '34.2 Lakh', label: 'Population', icon: '👥' },
  { value: '17', label: 'Blocks', icon: '🏛️' },
  { value: '273+', label: 'Panchayats', icon: '📜' },
  { value: '845', label: 'Villages', icon: '🏡' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[calc(100vh-56px)] sm:h-[calc(100vh-70px)] min-h-[600px] flex items-center overflow-hidden bg-[#1a0505]"
    >
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'right center',
        }}
      />
      
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#2D0A0A] via-[#2D0A0A]/95 to-[#2D0A0A]/20 lg:to-transparent z-0"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1a0505] via-transparent to-black/30 z-0"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
          <motion.div
            className="lg:col-span-8 xl:col-span-7 flex flex-col justify-center text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            
            <div className="inline-flex items-center gap-2 bg-[#FF9933]/15 border border-[#FF9933]/40 px-3.5 py-1 rounded-full text-[11px] font-bold text-devotional-saffron mb-4 tracking-widest max-w-max shadow-lg shadow-black/20 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-devotional-saffron" />
              📍 MITHILA REGION • BIHAR, INDIA
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] font-black tracking-tight mb-3 leading-[1.1]">
              <span className="text-white block drop-shadow-sm">Sitamarhi</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-devotional-gold to-[#FF9933] block mt-0.5 animate-shimmer">
                Sacred Birthplace
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-devotional-gold to-amber-300 block">
                of Goddess Sita
              </span>
            </h1>

            <div className="flex items-center gap-3 my-2">
              <div className="h-[1px] bg-gradient-to-r from-devotional-gold/60 to-transparent w-20" />
              <span className="text-devotional-gold text-base select-none filter drop-shadow">🪷</span>
              <div className="h-[1px] bg-gradient-to-r from-devotional-gold/60 to-transparent w-20" />
            </div>

            <p className="text-amber-50/80 text-xs sm:text-sm mb-5 leading-relaxed max-w-lg font-medium filter drop-shadow">
              Welcome to Sitamarhi, the divine birthplace of Maa Sita and the spiritual heart of Mithila. Explore ancient temples, rich traditions, cultural heritage, and the legacy of King Janaka's kingdom.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#places"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-devotional-gold to-amber-500 hover:from-amber-500 hover:to-devotional-gold text-slate-950 font-black px-5 py-3 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/10 text-xs hover:-translate-y-0.5"
              >
                <Compass className="w-4 h-4 shrink-0" />
                <span>Explore Sacred Places &rarr;</span>
              </a>
              <a
                href="#map"
                className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-2xl hover:bg-white/15 text-white font-extrabold px-5 py-3 rounded-xl border border-white/20 transition-all shadow-md text-xs hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Map className="w-4 h-4 shrink-0" />
                <span>Interactive Map &rarr;</span>
              </a>
              <a
                href="#overview"
                className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-[#7a1f1f] font-black px-5 py-3 rounded-xl border border-white/25 transition-all shadow-md text-xs hover:-translate-y-0.5"
              >
                <Info className="w-4 h-4 shrink-0 text-[#7a1f1f]" />
                <span className="text-[#7a1f1f] font-black">District Details &rarr;</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl border-t border-white/10 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-black/45 backdrop-blur-2xl border border-white/10 rounded-xl py-2.5 px-2 text-center flex flex-col items-center justify-between hover:bg-black/55 transition-colors shadow-lg"
                >
                  <div className="text-lg mb-1 select-none">{stat.icon}</div>
                  <div className="flex-grow flex flex-col justify-center">
                    <p className="text-base sm:text-lg font-black text-devotional-gold leading-none">
                      {stat.value}
                    </p>
                    <p className="text-[9px] sm:text-[10px] mt-1 font-bold tracking-wider uppercase" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
        </div>
      </div>
    </section>
  );
}
