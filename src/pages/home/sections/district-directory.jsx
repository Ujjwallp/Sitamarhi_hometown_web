import { useRef } from 'react';
import { Phone, Mail, Globe, Shield, Building2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const directory = [
  {
    name: 'District Magistrate Office',
    phone: '06226-250439',
    email: 'dm-sitamarhi@nic.in',
    website: 'https://sitamarhi.nic.in',
    icon: Building2,
    color: 'text-devotional-maroon',
    bg: 'bg-devotional-secondary',
    border: 'border-devotional-gold/25',
  },
  {
    name: 'SP Office',
    phone: '06226-250526',
    email: 'sp-sitamarhi-bih@nic.in',
    website: 'http://biharpolice.bih.nic.in',
    icon: Shield,
    color: 'text-devotional-maroon',
    bg: 'bg-devotional-secondary',
    border: 'border-devotional-gold/25',
  },
  {
    name: 'Collectorate Dumra',
    phone: 'Available on official district portal',
    email: 'Available on official district portal',
    website: 'https://sitamarhi.nic.in',
    icon: Building2,
    color: 'text-devotional-maroon',
    bg: 'bg-devotional-secondary',
    border: 'border-devotional-gold/25',
  },
  {
    name: 'District Control Room',
    phone: '06226-252225',
    email: 'Available on official district portal',
    website: 'https://sitamarhi.nic.in',
    icon: Shield,
    color: 'text-devotional-maroon',
    bg: 'bg-devotional-secondary',
    border: 'border-devotional-gold/25',
  },
];

function DirectoryCard({ entry, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = entry.icon;

  const isPhonePublic = entry.phone && entry.phone !== 'Available on official district portal';
  const isEmailPublic = entry.email && entry.email !== 'Available on official district portal';

  const gradients = [
    'from-emerald-50 to-teal-100/80 border-teal-200/50',
    'from-blue-50 to-indigo-100/80 border-indigo-200/50',
    'from-amber-50 to-orange-100/80 border-orange-200/50',
    'from-rose-50 to-pink-100/80 border-pink-200/50',
    'from-violet-50 to-purple-100/80 border-purple-200/50',
  ];
  const cardStyle = gradients[index % gradients.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      className={`bg-gradient-to-br ${cardStyle} rounded-2xl border p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group`}
    >
      <div>
        <div className="flex items-center gap-3.5 mb-5">
          <div className={`w-12 h-12 rounded-xl ${entry.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
            <Icon className={`w-6 h-6 ${entry.color}`} />
          </div>
          <div>
            <h3 className="font-extrabold text-devotional-text text-base leading-tight">{entry.name}</h3>
            {entry.detail && <p className="text-xs text-slate-500 font-semibold mt-0.5">{entry.detail}</p>}
          </div>
        </div>
        <div className="space-y-3 mb-6">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Phone</span>
            {isPhonePublic ? (
              <a href={`tel:${entry.phone}`} className="text-sm font-semibold text-slate-700 hover:text-devotional-maroon hover:underline flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-450" />
                {entry.phone}
              </a>
            ) : (
              <p className="text-xs text-slate-400 font-medium italic">Available on official district portal</p>
            )}
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Email</span>
            {isEmailPublic ? (
              <a href={`mailto:${entry.email}`} className="text-sm font-semibold text-slate-700 hover:text-devotional-maroon hover:underline flex items-center gap-1.5 break-all">
                <Mail className="w-3.5 h-3.5 text-slate-450" />
                {entry.email}
              </a>
            ) : (
              <p className="text-xs text-slate-400 font-medium italic">Available on official district portal</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-2 pt-4 border-t border-slate-200">
        {isPhonePublic ? (
          <a
            href={`tel:${entry.phone}`}
            className="flex-1 inline-flex items-center justify-center bg-white/60 hover:bg-white text-slate-800 border border-white px-3 py-2 rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            Call
          </a>
        ) : (
          <button
            disabled
            className="flex-1 inline-flex items-center justify-center bg-slate-50 text-slate-300 px-3 py-2 rounded-xl text-xs font-bold border border-slate-100 cursor-not-allowed"
          >
            Call
          </button>
        )}

        <a
          href={entry.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1 bg-white/60 hover:bg-white text-slate-800 border border-white px-3 py-2 rounded-xl text-xs font-bold transition-colors shadow-sm"
        >
          <Globe className="w-3 h-3" />
          Portal
        </a>
      </div>
    </motion.div>
  );
}

export default function DistrictDirectory() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="directory" className="py-16 bg-devotional-bg border-t border-devotional-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-devotional-secondary text-devotional-maroon text-sm font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm border border-devotional-secondary">
            District Directory
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-devotional-maroon mb-4">
            District Contact Directory
          </h2>
          <p className="text-devotional-text/80 max-w-2xl mx-auto text-base sm:text-lg">
            Direct public contact nodes for essential government offices and administrative desks in Sitamarhi.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {directory.map((entry, i) => (
            <DirectoryCard key={entry.name} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
