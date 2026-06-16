import { useRef } from 'react';
import { Map, Users, BookOpen, LayoutGrid, Home, GitFork } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    icon: Users,
    label: 'Population',
    value: '34.2L',
    sub: 'Census 2011',
    theme: 'border-t-amber-500 hover:border-amber-300',
    iconTheme: 'bg-amber-50 text-amber-600 border-amber-100/60',
    accentText: 'text-amber-700',
  },
  {
    icon: Map,
    label: 'Total Area',
    value: '2,294',
    sub: 'km² geographic',
    theme: 'border-t-orange-500 hover:border-orange-300',
    iconTheme: 'bg-orange-50 text-orange-600 border-orange-100/60',
    accentText: 'text-orange-700',
  },
  {
    icon: LayoutGrid,
    label: 'Admin Blocks',
    value: '17',
    sub: 'across 3 subdivisions',
    theme: 'border-t-yellow-500 hover:border-yellow-300',
    iconTheme: 'bg-yellow-50 text-yellow-600 border-yellow-100/60',
    accentText: 'text-yellow-700',
  },
  {
    icon: GitFork,
    label: 'Panchayats',
    value: '250+',
    sub: 'gram panchayats',
    theme: 'border-t-red-500 hover:border-red-300',
    iconTheme: 'bg-red-50 text-red-600 border-red-100/60',
    accentText: 'text-red-700',
  },
  {
    icon: Home,
    label: 'Villages',
    value: '845',
    sub: 'registered villages',
    theme: 'border-t-orange-600 hover:border-orange-400',
    iconTheme: 'bg-orange-50 text-orange-700 border-orange-200/60',
    accentText: 'text-orange-800',
  },
  {
    icon: BookOpen,
    label: 'Literacy Rate',
    value: '52.05%',
    sub: 'as per Census 2011',
    theme: 'border-t-amber-600 hover:border-amber-400',
    iconTheme: 'bg-amber-50 text-amber-700 border-amber-200/60',
    accentText: 'text-amber-800',
  },
];

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      className={`group relative rounded-2xl bg-white/50 hover:bg-white/70 backdrop-blur-2xl backdrop-blur-2xl border border-slate-200/60 border-t-4 ${stat.theme} p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/80 flex flex-col justify-between h-full`}
    >
      {/* Decorative top right highlight */}
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-slate-50/50 blur-2xl group-hover:bg-slate-100/50 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Icon */}
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${stat.iconTheme} transition-transform duration-300 group-hover:scale-105 shrink-0`}>
          <Icon className="w-5.5 h-5.5" />
        </div>

        {/* Value */}
        <div>
          <p className="text-4xl font-black text-slate-800 tracking-tight leading-none">
            {stat.value}
          </p>
          <p className="text-base font-extrabold text-slate-700 mt-2 leading-tight">{stat.label}</p>
          <p className={`text-xs font-bold mt-1 ${stat.accentText}`}>
            {stat.sub}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function DistrictOverview() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section
      id="overview"
      className="scroll-mt-20 py-16 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-devotional-gold/60 after:to-transparent"
    >
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #7a1f1f 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-amber-950/10 text-red-950 border-amber-900/20 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-devotional-gold/15 shadow-sm uppercase tracking-wider">
            District Overview
          </span>
          <h2 className="block w-fit mx-auto text-3xl md:text-4.5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-red-950 to-amber-900 mb-4 drop-shadow-sm">
            Sitamarhi in Numbers
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base font-medium">
            Key statistics sourced from official records at{' '}
            <a href="https://sitamarhi.nic.in" target="_blank" rel="noopener noreferrer" className="font-bold text-devotional-maroon hover:underline">
              sitamarhi.nic.in
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
