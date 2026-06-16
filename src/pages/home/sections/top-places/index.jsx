import PlaceCard from './place-card';
import { useState, useRef } from 'react';
import { MapPin, ExternalLink, ChevronRight, X, Clock, Navigation } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

import { places } from '@/pages/home/sections/top-places/placesData';

function PlaceModal({ place, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-60">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white rounded-full p-2 hover:bg-black/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <span className={`absolute bottom-4 left-4 ${place.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
              {place.tag}
            </span>
            <h3 className="absolute bottom-4 left-[calc(theme(spacing.4)+theme(spacing.20))] text-xl font-bold text-white drop-shadow">
              {place.name}
            </h3>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {place.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                {place.distance}
              </span>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed mb-4">{place.description}</p>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-5">
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1.5">📜 Historical Context</p>
              <p className="text-sm text-amber-900 leading-relaxed">{place.history}</p>
            </div>
            <div className="flex gap-3">
              <a
                href={place.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open in Maps
              </a>
              <a
                href={place.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function TopPlaces() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="places" className="scroll-mt-20 py-16 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-devotional-gold/60 after:to-transparent">
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
          className="text-center mb-14"
        >
          <span className="inline-block bg-amber-950/10 text-red-950 border-amber-900/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-devotional-gold/15 shadow-sm uppercase tracking-wider">
            Sacred Attractions
          </span>
          <h2 className="block w-fit mx-auto text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-red-950 to-amber-900 mb-5 drop-shadow-sm">
            Places to Visit
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Explore the sacred temples, pilgrimage sites and mythological landmarks that form the spiritual soul of Sita Janmabhoomi.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place, i) => (
            <PlaceCard key={place.id} place={place} onLearnMore={setSelectedPlace} index={i} />
          ))}
        </div>
      </div>
      {selectedPlace && (
        <PlaceModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
      )}
    </section>
  );
}
