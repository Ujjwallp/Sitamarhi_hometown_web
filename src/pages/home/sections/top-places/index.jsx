import PlaceCard from './place-card';
import { useState, useRef } from 'react';
import { MapPin, ExternalLink, ChevronRight, X, Clock, Navigation } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

import janakiSthan from '@/pages/home/sections/top-places/images/janaki-sthan.webp';
import punauraDham from '@/pages/home/sections/top-places/images/punaura-dham.jpg';
import haleshwarSthan from '@/pages/home/sections/top-places/images/haleshwar-sthan.jpg';
import panthPakar from '@/pages/home/sections/top-places/images/panth-pakar-real.jpg';

const places = [
  {
    id: 'janaki-sthan',
    name: 'Janaki Sthan',
    shortDesc: 'Sacred temple complex dedicated to Goddess Sita — the most revered shrine in all of Sitamarhi.',
    description: 'Janaki Sthan is the spiritual heart of Sitamarhi. This sacred temple complex is dedicated to Goddess Sita and marks the spot associated with her divine presence. Pilgrims from across India and Nepal visit this revered site throughout the year. The temple is adorned with intricate architecture reflecting the Mithila tradition and hosts grand festivals during Navratri and Ram Navami.',
    location: 'Sitamarhi Town, Bihar',
    distance: '~1 km from city centre',
    image: janakiSthan,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Janaki+Sthan+Sitamarhi',
    directionsUrl: 'https://www.google.com/maps/dir//Janaki+Sthan+Sitamarhi',
    tag: 'Spiritual',
    category: 'sacred',
    tagColor: 'bg-category-sacred-accent',
    fact: 'One of the most revered Sita temples in all of North Bihar.',
    history: 'The temple complex has been a centre of devotion for centuries, drawing pilgrims and scholars who trace the Ramayana\'s connection to the Mithila region.',
  },
  {
    id: 'punaura-dham',
    name: 'Punaura Dham',
    shortDesc: 'The believed birthplace of Goddess Sita — the most sacred pilgrimage site in Sitamarhi.',
    description: 'Punaura Dham is widely regarded as the exact birthplace of Goddess Sita, making it the holiest site in all of Sitamarhi. According to the Ramayana, Sita was discovered by King Janaka in a golden vessel while ploughing a field here. The site features a grand temple, a sacred pond, and beautifully landscaped gardens that host thousands of devotees every year.',
    location: 'Punaura, Sitamarhi, Bihar',
    distance: '~8 km from Sitamarhi',
    image: punauraDham,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Punaura+Dham+Sitamarhi',
    directionsUrl: 'https://www.google.com/maps/dir//Punaura+Dham+Sitamarhi',
    tag: 'Pilgrimage',
    category: 'sacred',
    tagColor: 'bg-category-sacred-accent',
    fact: 'Recognised as the birthplace of Goddess Sita from the Ramayana.',
    history: 'King Janaka discovered Sita here while ploughing the earth during a ritual. The site has been a major pilgrimage destination for devotees of Maa Sita for thousands of years.',
  },
  {
    id: 'haleshwar-sthan',
    name: 'Haleshwar Sthan',
    shortDesc: 'Ancient Shiva temple on the banks of the Bagmati River — a revered centre of Shaiva tradition.',
    description: 'Haleshwar Sthan is an ancient temple dedicated to Lord Shiva, situated on the sacred banks of the Bagmati River. The temple is deeply embedded in the spiritual and cultural fabric of the Mithila region and is a significant pilgrimage destination, particularly during Shivratri when thousands gather to offer prayers. The surrounding landscape offers a serene natural setting for meditation and reflection.',
    location: 'Haleshwar, Sitamarhi, Bihar',
    distance: '~15 km from Sitamarhi',
    image: haleshwarSthan,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Haleshwar+Sthan+Sitamarhi',
    directionsUrl: 'https://www.google.com/maps/dir//Haleshwar+Sthan+Sitamarhi',
    tag: 'Heritage',
    category: 'heritage',
    tagColor: 'bg-category-heritage-accent',
    fact: 'Ancient riverbank shrine with centuries of unbroken living tradition.',
    history: 'One of the oldest Shiva temples in North Bihar, Haleshwar Sthan has been a centre of Shaiva worship along the Bagmati River for many centuries, pre-dating the Mughal period.',
  },
  {
    id: 'panth-pakar',
    name: 'Panth Pakar',
    shortDesc: 'Sacred banyan tree where Goddess Sita is said to have rested — a revered site in Mithila folklore.',
    description: "Panth Pakar is one of the most spiritually significant natural landmarks in Sitamarhi. According to local tradition rooted in the Ramayana, Goddess Sita rested beneath this ancient sacred banyan tree while travelling towards Janakpur. The site has been a place of veneration for generations of Mithila devotees. The banyan tree's massive, sprawling canopy creates a naturally serene space for prayer and contemplation.",
    location: 'Sitamarhi, Bihar',
    distance: '~5 km from city centre',
    image: panthPakar,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Panth+Pakar+Sitamarhi',
    directionsUrl: 'https://www.google.com/maps/dir//Panth+Pakar+Sitamarhi',
    tag: 'Sacred Site',
    category: 'sacred',
    tagColor: 'bg-category-sacred-accent',
    fact: 'Associated with the Ramayana tradition of Mithila.',
    history: 'Panth Pakar ("the tree on the path") is described in local oral tradition as the resting place of Maa Sita on her journey. It has been venerated as a sacred site for centuries, blending nature with religious memory.',
  },
];

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
