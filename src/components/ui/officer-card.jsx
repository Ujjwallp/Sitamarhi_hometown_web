import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function OfficerCard({ officer, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const hasPhone = officer.phone && officer.phone !== 'Available on official portal';
  const hasEmail = officer.email && officer.email !== 'Available on official portal';

  const cardStyle = 'from-category-services-start to-category-services-end border-category-services-border';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      className={`group bg-gradient-to-br ${cardStyle} rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col border`}
    >
      <div className="bg-white/40 border-b border-white p-6 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-8" />
        <div className="relative z-10 w-[96px] h-[96px] rounded-full border-[3px] border-[#D4AF37] shadow-md overflow-hidden bg-white mb-4 hover:scale-[1.03] transition-all duration-300 ease-in-out shrink-0">
          <img
            src={officer.image}
            alt={officer.name}
            className="w-full h-full object-cover object-center"
            width="96"
            height="96"
            loading="lazy"
          />
        </div>
        <h3 className="text-slate-900 font-bold text-lg leading-tight z-10 tracking-wide">
          {officer.name}
        </h3>
        <p className="text-slate-500 text-xs font-bold mt-1 tracking-[1px] uppercase z-10">
          {officer.title}
        </p>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-4 mb-6">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Office Address</span>
            <p className="text-sm font-semibold text-devotional-text flex items-start gap-1.5 leading-snug">
              <span className="shrink-0 mt-0.5">🏢</span>
              <span>{officer.office}</span>
            </p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Contact</span>
            <div className="space-y-1">
              {hasPhone ? (
                <p className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                  <span>📱</span>
                  <a href={`tel:${officer.phone}`} className="hover:underline hover:text-devotional-text transition-colors">{officer.phone}</a>
                </p>
              ) : (
                <p className="text-xs font-medium text-slate-400 italic">Available on official portal</p>
              )}
              {officer.landline && (
                <p className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                  <span>☎️</span>
                  <a href={`tel:${officer.landline}`} className="hover:underline hover:text-devotional-text transition-colors">{officer.landline}</a>
                </p>
              )}
            </div>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Email</span>
            {hasEmail ? (
              <p className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 break-all">
                <span>✉️</span>
                <a href={`mailto:${officer.email}`} className="hover:underline hover:text-devotional-text transition-colors">{officer.email}</a>
              </p>
            ) : (
              <p className="text-xs font-medium text-slate-400 italic">Available on official portal</p>
            )}
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-[10px] text-slate-400">
            <span>Source: <strong className="text-slate-500 font-semibold">{officer.source}</strong></span>
            <span>Updated: <strong className="text-slate-500 font-semibold">{officer.lastUpdated}</strong></span>
          </div>
        </div>
        <div className="flex gap-2">
          {hasPhone ? (
            <a
              href={`tel:${officer.phone}`}
              className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2.5 rounded-xl text-xs font-bold transition-colors text-center shadow-sm"
            >
              Call
            </a>
          ) : (
            <button
              disabled
              className="flex-1 inline-flex items-center justify-center bg-slate-50 text-slate-300 px-3 py-2.5 rounded-xl text-xs font-bold border border-slate-100 cursor-not-allowed"
            >
              Call
            </button>
          )}

          {hasEmail ? (
            <a
              href={`mailto:${officer.email}`}
              className="flex-1 inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2.5 rounded-xl text-xs font-bold transition-colors text-center shadow-sm"
            >
              Email
            </a>
          ) : (
            <button
              disabled
              className="flex-1 inline-flex items-center justify-center bg-slate-50 text-slate-300 px-3 py-2.5 rounded-xl text-xs font-bold border border-slate-100 cursor-not-allowed"
            >
              Email
            </button>
          )}

          <a
            href={officer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-3 py-2.5 rounded-xl text-xs font-bold transition-colors text-center shadow-sm"
          >
            Website
          </a>
        </div>
      </div>
    </motion.div>
  );
}