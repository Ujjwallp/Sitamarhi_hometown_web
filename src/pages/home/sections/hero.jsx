import { motion } from 'framer-motion';
import { Info, Compass, Map } from 'lucide-react';
import heroBg from '@/assets/images/hero/hero-bg.png';

const stats = [
  { value: '34.2 Lakh', label: 'Population' },
  { value: '17', label: 'Blocks' },
  { value: '273+', label: 'Panchayats' },
  { value: '845', label: 'Villages' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-8 lg:py-10 flex items-center overflow-hidden bg-devotional-bg"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          opacity: 1
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#FAF6ED]/90 via-[#FAF6ED]/70 to-transparent"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
          <motion.div
            className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center animate-fade-in"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-[#F3E6CB] border border-devotional-gold/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-devotional-maroon mb-4 tracking-wide max-w-max shadow-sm">
              📍 Mithila Region • Bihar, India
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.3rem] font-extrabold tracking-tight mb-3 leading-[1.08] text-left">
              <span className="text-devotional-maroon block">Sitamarhi</span>
              <span className="text-[#A86E20] block">Sacred Birthplace</span>
              <span className="text-[#A86E20] block">of Goddess Sita</span>
            </h1>
            <div className="flex items-center gap-3 my-2.5">
              <div className="h-[1px] bg-devotional-gold/30 w-16" />
              <span className="text-devotional-gold text-xs select-none">🪷</span>
              <div className="h-[1px] bg-devotional-gold/30 w-16" />
            </div>
            <p className="text-devotional-text/90 text-sm sm:text-base mb-4 leading-relaxed max-w-lg font-medium text-left">
              Welcome to Sitamarhi, the divine birthplace of Maa Sita and the spiritual heart of Mithila. Explore ancient temples, rich traditions, cultural heritage, and the timeless legacy of King Janaka's kingdom.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#places"
                className="inline-flex items-center gap-2.5 bg-[#A86E20] hover:bg-[#8E5A17] text-white font-extrabold px-6 py-3 rounded-xl transition-all shadow-md text-sm hover:-translate-y-0.5"
              >
                <Compass className="w-4 h-4 shrink-0" />
                <span>Explore Sacred Places &rarr;</span>
              </a>
              <a
                href="#map"
                className="inline-flex items-center gap-2.5 bg-devotional-maroon hover:bg-devotional-maroon/90 text-white font-extrabold px-6 py-3 rounded-xl transition-all shadow-md text-sm hover:-translate-y-0.5"
              >
                <Map className="w-4 h-4 shrink-0" />
                <span>Interactive Map &rarr;</span>
              </a>
              <a
                href="#overview"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-devotional-maroon border border-devotional-maroon/30 px-6 py-3 rounded-xl font-bold transition-all shadow-sm text-sm hover:-translate-y-0.5"
              >
                <Info className="w-4 h-4 shrink-0" />
                <span>District Details &rarr;</span>
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {stats.map((stat, idx) => {
                const icons = ['👥', '🏛️', '👥', '🏡'];
                const gradients = [
                  'from-blue-50/95 to-indigo-100/90 border-indigo-200/50',
                  'from-emerald-50/95 to-teal-100/90 border-teal-200/50',
                  'from-amber-50/95 to-orange-100/90 border-orange-200/50',
                  'from-rose-50/95 to-pink-100/90 border-pink-200/50',
                ];
                const cardStyle = gradients[idx % gradients.length];
                
                return (
                  <div
                    key={stat.label}
                    className={`bg-gradient-to-br ${cardStyle} border rounded-3xl p-4 text-center hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 shadow-md flex flex-col items-center justify-between`}
                  >
                    <div className="text-devotional-gold text-lg mb-2 select-none">{icons[idx]}</div>
                    <div className="flex-grow flex flex-col justify-center">
                      <p className="text-xl sm:text-2xl font-extrabold text-devotional-maroon leading-none">
                        {stat.value}
                      </p>
                      <p className="text-devotional-text/70 text-xs mt-2 font-bold tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

        </div>
      </div>
    </section>
  );
}
