import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Navigation, ChevronRight, ExternalLink } from 'lucide-react';

export default function PlaceCard({ place, onLearnMore, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.93 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.4) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(212,175,55,0.22)',
        boxShadow: '0 20px 50px -12px rgba(122,31,31,0.1), inset 0 1px 0 rgba(255,255,255,0.6)',
      }}
      onClick={() => onLearnMore(place)}
    >
      
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-devotional-maroon via-devotional-gold to-devotional-saffron z-10" />

      <div className="relative h-52 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <span
          className={`absolute top-3 left-3 ${place.tagColor} text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-lg border border-white/20 z-10`}
        >
          {place.tag}
        </span>

        <div className="absolute bottom-3 left-4 right-4 z-10">
          <h3 className="text-xl font-black text-white drop-shadow-lg leading-tight group-hover:text-devotional-gold transition-colors duration-300">
            {place.name}
          </h3>
          <div className="flex items-center gap-3 mt-1 text-xs font-semibold text-white/85">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-devotional-gold" />
              {place.location}
            </span>
            <span className="text-devotional-gold/60">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-devotional-gold" />
              {place.distance}
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col relative">
        
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-devotional-gold/8 rounded-full blur-3xl pointer-events-none" />

        <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-4 font-medium relative z-10">
          {place.shortDesc}
        </p>

        <div
          className="rounded-xl p-3 mb-4 relative z-10"
          style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}
        >
          <p className="text-xs text-amber-900 font-semibold leading-snug">
            <span className="mr-1.5">✨</span>
            {place.fact}
          </p>
        </div>

        <div className="flex gap-2 mt-auto relative z-10">
          <a
            href={place.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border border-slate-200/60 bg-white/60 hover:bg-white text-slate-700 shadow-sm hover:shadow-md"
          >
            <Navigation className="w-3.5 h-3.5 text-slate-500" />
            Navigate
          </a>
          <button
            onClick={(e) => { e.stopPropagation(); onLearnMore(place); }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-devotional-maroon to-[#5a1515] hover:from-[#5a1515] hover:to-[#4a0f0f] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-devotional-maroon/20 hover:shadow-lg hover:shadow-devotional-maroon/40 hover:-translate-y-0.5"
          >
            Explore More
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}