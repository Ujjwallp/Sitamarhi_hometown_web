import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, ChevronRight, Clock, Navigation } from 'lucide-react';

export default function PlaceCard({ place, onLearnMore, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const gradients = [
    'from-amber-50 to-orange-100/80 border-orange-200/50',
    'from-blue-50 to-indigo-100/80 border-indigo-200/50',
    'from-emerald-50 to-teal-100/80 border-teal-200/50',
    'from-rose-50 to-pink-100/80 border-pink-200/50',
  ];
  const cardStyle = gradients[index % gradients.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className={`group bg-gradient-to-br ${cardStyle} rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col border`}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className={`absolute top-4 left-4 ${place.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
          {place.tag}
        </span>
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {place.distance}
        </div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-md">{place.name}</h3>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-3">
          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="truncate">{place.location}</span>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
          {place.shortDesc}
        </p>
        <div className="bg-white/60 border border-white rounded-xl px-3 py-2.5 mb-5 shadow-sm">
          <p className="text-xs text-slate-700 font-medium">✨ {place.fact}</p>
        </div>
        <div className="flex gap-2.5 mt-auto">
          <a
            href={place.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            Directions
          </a>
          <button
            onClick={() => onLearnMore(place)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white px-3 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            Learn More
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}