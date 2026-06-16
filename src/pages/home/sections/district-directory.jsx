import { useRef } from 'react';
import { Phone, Mail, Globe, Shield, Building2, PhoneCall } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const directory = [
  {
    name: 'District Magistrate Office',
    role: 'District Administration',
    phone: '06226-250439',
    email: 'dm-sitamarhi@nic.in',
    website: 'https://sitamarhi.nic.in',
    icon: Building2,
    borderTheme: 'border-l-amber-500 hover:border-amber-300',
    iconTheme: 'bg-amber-50 text-amber-600 border-amber-100/60',
    tagTheme: 'bg-amber-50 text-amber-700 border-amber-100/60',
    btnTheme: 'bg-amber-50/50 hover:bg-amber-50 text-amber-700 border-amber-200/60 hover:border-amber-300',
  },
  {
    name: 'SP Office',
    role: 'Superintendent of Police',
    phone: '06226-250526',
    email: 'sp-sitamarhi-bih@nic.in',
    website: 'http://biharpolice.bih.nic.in',
    icon: Shield,
    borderTheme: 'border-l-orange-500 hover:border-orange-300',
    iconTheme: 'bg-orange-50 text-orange-600 border-orange-100/60',
    tagTheme: 'bg-orange-50 text-orange-700 border-orange-100/60',
    btnTheme: 'bg-orange-50/50 hover:bg-orange-50 text-orange-700 border-orange-200/60 hover:border-orange-300',
  },
  {
    name: 'Collectorate Dumra',
    role: 'Sub-Division Office',
    phone: null,
    email: null,
    website: 'https://sitamarhi.nic.in',
    icon: Building2,
    borderTheme: 'border-l-yellow-500 hover:border-yellow-300',
    iconTheme: 'bg-yellow-50 text-yellow-600 border-yellow-100/60',
    tagTheme: 'bg-yellow-50 text-yellow-700 border-yellow-100/60',
    btnTheme: 'bg-yellow-50/50 hover:bg-yellow-50 text-yellow-700 border-yellow-200/60 hover:border-yellow-300',
  },
  {
    name: 'District Control Room',
    role: 'Emergency Coordination',
    phone: '06226-252225',
    email: null,
    website: 'https://sitamarhi.nic.in',
    icon: Shield,
    borderTheme: 'border-l-red-500 hover:border-red-300',
    iconTheme: 'bg-red-50 text-red-600 border-red-100/60',
    tagTheme: 'bg-red-50 text-red-700 border-red-100/60',
    btnTheme: 'bg-red-50/50 hover:bg-red-50 text-red-700 border-red-200/60 hover:border-red-300',
  },
];

function DirectoryCard({ entry, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = entry.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      className={`group relative rounded-2xl bg-white/50 hover:bg-white/70 backdrop-blur-2xl backdrop-blur-2xl border border-slate-200/60 border-l-4 ${entry.borderTheme} p-5 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/80`}
    >
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-start gap-3.5 mb-4">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${entry.iconTheme} transition-transform duration-300 group-hover:scale-105 shrink-0`}>
            <Icon className="w-5.5 h-5.5" />
          </div>
          <div>
            <span className={`inline-block text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${entry.tagTheme} mb-1`}>
              {entry.role}
            </span>
            <h3 className="font-extrabold text-slate-800 text-base leading-tight group-hover:text-devotional-maroon transition-colors duration-300">
              {entry.name}
            </h3>
          </div>
        </div>

        {/* Contact info list */}
        <div className="space-y-2.5 mb-5 flex-grow">
          <div className="flex items-center gap-2.5">
            <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {entry.phone ? (
              <a
                href={`tel:${entry.phone}`}
                className="text-xs font-bold text-slate-650 hover:text-devotional-maroon transition-colors"
              >
                {entry.phone}
              </a>
            ) : (
              <span className="text-xs text-slate-400 italic font-semibold">Available on portal</span>
            )}
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {entry.email ? (
              <a
                href={`mailto:${entry.email}`}
                className="text-xs font-bold text-slate-650 hover:text-devotional-maroon transition-colors truncate"
              >
                {entry.email}
              </a>
            ) : (
              <span className="text-xs text-slate-400 italic font-semibold">Available on portal</span>
            )}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        {entry.phone ? (
          <a
            href={`tel:${entry.phone}`}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold border transition-all ${entry.btnTheme}`}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Call
          </a>
        ) : (
          <button
            disabled
            className="flex-1 inline-flex items-center justify-center text-xs font-bold rounded-xl px-3 py-2 opacity-30 cursor-not-allowed border border-slate-200 text-slate-400 bg-slate-50"
          >
            Call
          </button>
        )}
        <a
          href={entry.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 bg-white border border-slate-200 hover:border-slate-350 transition-all active:scale-95"
        >
          <Globe className="w-3.5 h-3.5 text-slate-400" />
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
    <section
      id="directory"
      className="scroll-mt-20 py-16 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-devotional-gold/60 after:to-transparent"
    >
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #7a1f1f 1px, transparent 1px)', backgroundSize: '32px 32px' }}
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
            District Directory
          </span>
          <h2 className="block w-fit mx-auto text-3xl md:text-4.5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-red-950 to-amber-900 mb-4 drop-shadow-sm">
            District Contact Directory
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-medium">
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
