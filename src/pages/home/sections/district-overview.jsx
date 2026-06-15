import { useRef } from 'react';
import { Map, Users, BookOpen, LayoutGrid, Home, GitFork, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    icon: Users,
    label: 'Population',
    value: '34.2 Lakh',
    bgColor: 'bg-devotional-secondary',
    iconColor: 'text-devotional-maroon',
    borderColor: 'border-devotional-gold/20',
  },
  {
    icon: Map,
    label: 'Area',
    value: '2,294 km²',
    bgColor: 'bg-devotional-secondary',
    iconColor: 'text-devotional-maroon',
    borderColor: 'border-devotional-gold/20',
  },
  {
    icon: LayoutGrid,
    label: 'Blocks',
    value: '17',
    bgColor: 'bg-devotional-secondary',
    iconColor: 'text-devotional-maroon',
    borderColor: 'border-devotional-gold/20',
  },
  {
    icon: GitFork,
    label: 'Panchayats',
    value: '250+',
    bgColor: 'bg-devotional-secondary',
    iconColor: 'text-devotional-maroon',
    borderColor: 'border-devotional-gold/20',
  },
  {
    icon: Home,
    label: 'Villages',
    value: '845',
    bgColor: 'bg-devotional-secondary',
    iconColor: 'text-devotional-maroon',
    borderColor: 'border-devotional-gold/20',
  },
  {
    icon: BookOpen,
    label: 'Literacy Rate',
    value: '52.05%',
    bgColor: 'bg-devotional-secondary',
    iconColor: 'text-devotional-maroon',
    borderColor: 'border-devotional-gold/20',
  },
];

function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <div
      className={`group bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 rounded-3xl border border-devotional-gold/30 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4 relative overflow-hidden`}
    >
      <div className="flex items-center justify-between relative">
        <div className={`p-3 ${stat.bgColor} rounded-xl`}>
          <Icon className={`w-6 h-6 ${stat.iconColor}`} />
        </div>
        <TrendingUp className={`w-4 h-4 ${stat.iconColor} opacity-40`} />
      </div>

      <div className="relative">
        <p className="text-3xl font-extrabold text-devotional-maroon">
          {stat.value}
        </p>
        <p className="text-devotional-text/80 text-sm font-bold mt-1">{stat.label}</p>
      </div>
    </div>
  );
}

export default function DistrictOverview() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="overview" className="py-16 bg-devotional-bg border-b border-devotional-gold/20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #7a1f1f 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-devotional-secondary text-devotional-maroon text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-devotional-gold/15 shadow-xs">
            District at a Glance
          </span>
          <h2 className="text-4xl font-extrabold text-devotional-maroon mb-4">Sitamarhi in Numbers</h2>
          <p className="text-devotional-text/80 max-w-2xl mx-auto text-lg">
            Key statistics sourced from official district records.
          </p>
          <p className="text-devotional-text/60 text-xs mt-2">
            Source:{' '}
            <a
              href="https://sitamarhi.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-devotional-maroon hover:underline font-bold"
            >
              sitamarhi.nic.in
            </a>
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
