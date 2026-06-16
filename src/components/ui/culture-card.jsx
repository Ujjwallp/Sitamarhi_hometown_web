import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export default function CultureCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative flex flex-col h-full overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 shadow-lg shadow-amber-900/5 hover:shadow-2xl hover:shadow-amber-900/20"
    >
      <div className="relative h-44 overflow-hidden rounded-t-3xl">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-orange-900/30 to-transparent mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        
        <span className={`absolute top-4 right-4 bg-gradient-to-r ${item.tagColor} text-white text-[10px] uppercase tracking-wider font-extrabold px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20`} >
          {item.tag}
        </span>
        <h3 className="absolute bottom-5 left-5 text-2xl font-black text-white drop-shadow-lg leading-tight group-hover:text-amber-400 transition-colors duration-300">{item.title}</h3>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between relative">
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <p className="text-slate-700 text-sm leading-relaxed mb-4 flex-1 font-medium relative z-10">{item.description}</p>

        <div className="flex items-start gap-3 bg-gradient-to-br from-amber-50/90 to-orange-50/50 border border-amber-200/60 shadow-inner rounded-2xl p-3 mt-auto relative z-10 group-hover:bg-amber-50 transition-colors">
          <div className="p-1.5 bg-amber-100 rounded-lg shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-xs text-amber-900 leading-snug font-semibold">{item.fact}</p>
        </div>
      </div>
    </motion.div>
  );
}