import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Info, Phone, Mail, Globe, PhoneCall } from 'lucide-react';
import { officers } from '@/data/administration';

function OfficerCard({ officer, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const hasPhone = officer.phone && officer.phone !== 'Available on official portal';
  const hasEmail = officer.email && officer.email !== 'Available on official portal';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.93 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.4) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(212,175,55,0.25)',
        boxShadow: '0 20px 50px -12px rgba(122,31,31,0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
      }}
    >
      {/* Top gold accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-devotional-maroon via-devotional-gold to-devotional-saffron" />
      {/* Glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-devotional-gold/10" />

      {/* Photo header */}
      <div className="relative flex flex-col items-center pt-8 pb-6 px-6 border-b border-devotional-gold/15">
        <div className="relative mb-4">
          <div
            className="w-28 h-28 rounded-full overflow-hidden border-4 shadow-xl"
            style={{ borderColor: 'rgba(212,175,55,0.7)' }}
          >
            <img
              src={officer.image}
              alt={officer.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              width="112"
              height="112"
              loading="lazy"
            />
          </div>
          {/* Gold ring */}
          <div
            className="absolute -inset-1 rounded-full border-2 border-dashed border-devotional-gold/30 group-hover:border-devotional-gold/60 transition-colors duration-500"
            style={{ animation: 'spin 20s linear infinite' }}
          />
        </div>

        <h3 className="font-black text-devotional-text text-xl text-center leading-tight mb-2 group-hover:text-devotional-maroon transition-colors">
          {officer.name}
        </h3>
        <span
          className="text-[11px] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full border text-center"
          style={{
            background: 'rgba(212,175,55,0.12)',
            borderColor: 'rgba(212,175,55,0.35)',
            color: '#7A1F1F',
          }}
        >
          {officer.title}
        </span>
      </div>

      {/* Details */}
      <div className="p-6 flex-1 flex flex-col gap-4">
        {/* Office */}
        <div
          className="rounded-xl p-4"
          style={{ background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.15)' }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-devotional-gold mb-1">Office</p>
          <p className="text-sm font-semibold text-slate-800 leading-snug">{officer.office}</p>
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl p-3" style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.15)' }}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-1.5">Phone</p>
            {hasPhone ? (
              <a href={`tel:${officer.phone}`} className="text-xs font-bold text-slate-800 hover:text-orange-600 transition-colors block truncate">
                {officer.phone}
              </a>
            ) : (
              <p className="text-xs text-slate-400 italic">Portal only</p>
            )}
            {officer.landline && (
              <a href={`tel:${officer.landline}`} className="text-xs font-semibold text-slate-600 hover:text-orange-600 block truncate mt-0.5">
                {officer.landline}
              </a>
            )}
          </div>

          <div className="rounded-xl p-3" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-1.5">Email</p>
            {hasEmail ? (
              <a href={`mailto:${officer.email}`} className="text-xs font-bold text-slate-800 hover:text-red-600 transition-colors block truncate break-all">
                {officer.email}
              </a>
            ) : (
              <p className="text-xs text-slate-400 italic">Portal only</p>
            )}
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
          <span>Source: <strong className="text-slate-500">{officer.source}</strong></span>
          <span>Updated: <strong className="text-slate-500">{officer.lastUpdated}</strong></span>
        </div>
        {/* Action buttons */}
        <div className="flex gap-2 mt-auto pt-2">
          {hasPhone ? (
            <a
              href={`tel:${officer.phone}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-orange-50/50 hover:bg-orange-50 text-orange-700 border border-orange-200/60 hover:border-orange-300 px-3 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              Call
            </a>
          ) : (
            <button disabled className="flex-1 inline-flex items-center justify-center text-xs font-bold rounded-xl px-3 py-2.5 opacity-30 cursor-not-allowed border border-slate-200 text-slate-400 bg-slate-50/30">
              Call
            </button>
          )}
          {hasEmail ? (
            <a
              href={`mailto:${officer.email}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-red-50/50 hover:bg-red-50 text-red-700 border border-red-200/60 hover:border-red-300 px-3 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              Email
            </a>
          ) : (
            <button disabled className="flex-1 inline-flex items-center justify-center text-xs font-bold rounded-xl px-3 py-2.5 opacity-30 cursor-not-allowed border border-slate-200 text-slate-400 bg-slate-50/30">
              Email
            </button>
          )}
          <a
            href={officer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-50/50 hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 px-3 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95"
          >
            <Globe className="w-3.5 h-3.5 text-slate-450" />
            Web
          </a>
        </div>      </div>
    </motion.div>
  );
}

export default function Administration() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section
      id="administration"
      className="scroll-mt-20 py-16 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-devotional-gold/60 after:to-transparent"
    >
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
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
          <span className="inline-block bg-amber-950/10 text-red-950 border-amber-900/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm border border-devotional-gold/15 uppercase tracking-wider">
            Governance
          </span>
          <h2 className="block w-fit mx-auto text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-red-950 to-amber-900 mb-5 drop-shadow-sm">
            Administration
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Key administrative representatives and officials of Sitamarhi district.
          </p>
        </motion.div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-start gap-3 rounded-2xl p-4 mb-12 max-w-3xl mx-auto"
          style={{
            background: 'rgba(212,175,55,0.08)',
            border: '1px solid rgba(212,175,55,0.25)',
          }}
        >
          <Info className="w-5 h-5 text-devotional-gold shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-devotional-text">Official Information Source</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Official designations and numbers are sourced from public directories of the{' '}
              <a href="https://sitamarhi.nic.in" target="_blank" rel="noopener noreferrer" className="underline font-bold text-devotional-maroon">
                Sitamarhi District Administration
              </a>{' '}and verified portals.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {officers.map((officer, i) => (
            <OfficerCard key={officer.title} officer={officer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
