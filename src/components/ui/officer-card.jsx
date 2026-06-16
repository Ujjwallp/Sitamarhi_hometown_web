import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function OfficerCard({ officer, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const hasPhone = officer.phone && officer.phone !== 'Available on official portal';
  const hasEmail = officer.email && officer.email !== 'Available on official portal';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative flex flex-col h-full overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/60 shadow-lg shadow-devotional-maroon/5 hover:shadow-2xl hover:shadow-devotional-maroon/15"
    >
      <div className="bg-gradient-to-br from-[#7A1F1F]/10 via-[#7A1F1F]/5 to-[#7A1F1F]/10 p-6 relative overflow-hidden flex flex-col items-center text-center border-b border-white/50">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-10 translate-x-10" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-devotional-gold/5 rounded-full blur-2xl translate-y-10 -translate-x-8" />
        
        <div className="relative z-10 w-28 h-28 rounded-full border-[4px] border-devotional-gold/80 shadow-md overflow-hidden bg-white mb-4 hover:scale-[1.05] hover:border-devotional-gold transition-all duration-500 ease-in-out shrink-0 ring-4 ring-devotional-gold/15">
          <img
            src={officer.image}
            alt={officer.name}
            className="w-full h-full object-cover object-center"
            width="112"
            height="112"
            loading="lazy"
          />
        </div>
        <h3 className="text-slate-900 font-serif font-black text-xl leading-tight z-10 tracking-wide drop-shadow-sm group-hover:text-devotional-maroon transition-colors">
          {officer.name}
        </h3>
        <p className="text-devotional-maroon text-[11px] font-bold mt-2 tracking-[1.5px] uppercase z-10 bg-devotional-secondary/60 px-4 py-1.5 rounded-full border border-devotional-gold/30 shadow-inner">
          {officer.title}
        </p>
      </div>
      
      <div className="p-7 flex-1 flex flex-col justify-between relative">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-5 mb-8 relative z-10">
          <div className="bg-white/60 rounded-2xl p-4 border border-white/80 shadow-sm hover:bg-white/80 transition-colors">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-devotional-gold" />
              Office Address
            </span>
            <p className="text-sm font-bold text-slate-800 leading-snug">
              {officer.office}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/60 rounded-2xl p-4 border border-white/80 shadow-sm hover:bg-white/80 transition-colors">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Contact
              </span>
              <div className="space-y-1.5">
                {hasPhone ? (
                  <a href={`tel:${officer.phone}`} className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors block truncate">{officer.phone}</a>
                ) : (
                  <p className="text-xs font-medium text-slate-400 italic">Portal only</p>
                )}
                {officer.landline && (
                  <a href={`tel:${officer.landline}`} className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors block truncate">{officer.landline}</a>
                )}
              </div>
            </div>
            
            <div className="bg-white/60 rounded-2xl p-4 border border-white/80 shadow-sm hover:bg-white/80 transition-colors">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Email
              </span>
              {hasEmail ? (
                <a href={`mailto:${officer.email}`} className="text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors block truncate break-all">{officer.email}</a>
              ) : (
                <p className="text-xs font-medium text-slate-400 italic">Portal only</p>
              )}
            </div>
          </div>
          
          <div className="pt-2 flex items-center justify-between flex-wrap gap-2 text-[10px] text-slate-400/80 font-medium">
            <span>Source: <strong className="text-slate-500">{officer.source}</strong></span>
            <span>Updated: <strong className="text-slate-500">{officer.lastUpdated}</strong></span>
          </div>
        </div>
        
        <div className="flex gap-3 relative z-10 mt-auto">
          {hasPhone ? (
            <a
              href={`tel:${officer.phone}`}
              className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 py-3.5 rounded-xl text-xs font-bold transition-all text-center shadow-md shadow-blue-900/20 hover:shadow-lg hover:-translate-y-0.5"
            >
              Call
            </a>
          ) : (
            <button
              disabled
              className="flex-1 inline-flex items-center justify-center bg-slate-100 text-slate-400 px-3 py-3.5 rounded-xl text-xs font-bold border border-slate-200 cursor-not-allowed"
            >
              Call
            </button>
          )}

          {hasEmail ? (
            <a
              href={`mailto:${officer.email}`}
              className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-3 py-3.5 rounded-xl text-xs font-bold transition-all text-center shadow-md shadow-emerald-900/20 hover:shadow-lg hover:-translate-y-0.5"
            >
              Email
            </a>
          ) : (
            <button
              disabled
              className="flex-1 inline-flex items-center justify-center bg-slate-100 text-slate-400 px-3 py-3.5 rounded-xl text-xs font-bold border border-slate-200 cursor-not-allowed"
            >
              Email
            </button>
          )}

          <a
            href={officer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-slate-800 to-navy-950 hover:from-navy-950 hover:to-black text-white px-3 py-3.5 rounded-xl text-xs font-bold transition-all text-center shadow-md shadow-slate-900/20 hover:shadow-lg hover:-translate-y-0.5"
          >
            Website
          </a>
        </div>
      </div>
    </motion.div>
  );
}