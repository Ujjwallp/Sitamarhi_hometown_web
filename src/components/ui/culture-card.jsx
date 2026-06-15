import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export default function CultureCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="group bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col border border-stone-200 hover:border-rose-400 h-full relative"
    >
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-br from-rose-400 to-pink-500 opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none" />
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-rose-950/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className={`absolute top-3 right-3 bg-gradient-to-r ${item.tagColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md`} >
          {item.tag}
        </span>
        <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white drop-shadow-md">{item.title}</h3>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <p className="text-devotional-text/85 text-sm leading-relaxed mb-4 flex-1">{item.description}</p>

        <div className="flex items-start gap-2.5 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100 rounded-xl p-3.5 mt-auto relative z-10">
          <Lightbulb className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
          <p className="text-xs text-rose-800 leading-snug font-semibold">{item.fact}</p>
        </div>
      </div>
    </motion.div>
  );
}