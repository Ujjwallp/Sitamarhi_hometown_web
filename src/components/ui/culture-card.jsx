import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export default function CultureCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const gradients = [
    'from-rose-50 to-pink-100/80 border-pink-200/50',
    'from-amber-50 to-orange-100/80 border-orange-200/50',
    'from-emerald-50 to-teal-100/80 border-teal-200/50',
    'from-violet-50 to-purple-100/80 border-purple-200/50',
  ];
  const cardStyle = gradients[index % gradients.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className={`group bg-gradient-to-br ${cardStyle} rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col border h-full`}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className={`absolute top-3 right-3 bg-gradient-to-r ${item.tagColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md`} >
          {item.tag}
        </span>
        <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white drop-shadow-md">{item.title}</h3>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{item.description}</p>

        <div className="flex items-start gap-2.5 bg-white/60 border border-white shadow-sm rounded-xl p-3.5 mt-auto">
          <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-700 leading-snug font-medium">{item.fact}</p>
        </div>
      </div>
    </motion.div>
  );
}