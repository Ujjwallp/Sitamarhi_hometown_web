import { useRef, useEffect, useState } from 'react';
import { Navigation, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const CATEGORIES = ['All', 'Religious Sites', 'Transport', 'Administration', 'Healthcare', 'Airport'];

const landmarks = [
  {
    id: 'janaki-sthan',
    name: 'Janaki Sthan',
    lat: 26.5895, lng: 85.4935,
    category: 'Religious Sites',
    address: 'Sitamarhi Town, Bihar 843302',
    description: 'Sacred temple complex dedicated to Goddess Sita — the most revered shrine in Sitamarhi.',
    image: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Janaki+Sthan+Sitamarhi',
    directionsUrl: 'https://www.google.com/maps/dir//Janaki+Sthan+Sitamarhi',
    markerColor: '#f59e0b', emoji: '🛕',
  },
  {
    id: 'punaura-dham',
    name: 'Punaura Dham',
    lat: 26.6012, lng: 85.4567,
    category: 'Religious Sites',
    address: 'Punaura, Sitamarhi, Bihar 843302',
    description: 'Believed birthplace of Goddess Sita — the most sacred pilgrimage site in the district.',
    image: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Punaura+Dham+Sitamarhi',
    directionsUrl: 'https://www.google.com/maps/dir//Punaura+Dham+Sitamarhi',
    markerColor: '#f59e0b', emoji: '🛕',
  },
  {
    id: 'haleshwar-sthan',
    name: 'Haleshwar Sthan',
    lat: 26.5734, lng: 85.4201,
    category: 'Religious Sites',
    address: 'Haleshwar, Sitamarhi, Bihar 843302',
    description: 'Ancient Shiva temple on the banks of Bagmati River — a revered centre of Shaiva tradition.',
    image: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Haleshwar+Sthan+Sitamarhi',
    directionsUrl: 'https://www.google.com/maps/dir//Haleshwar+Sthan+Sitamarhi',
    markerColor: '#f59e0b', emoji: '🛕',
  },
  {
    id: 'panth-pakar',
    name: 'Panth Pakar',
    lat: 26.5780, lng: 85.5100,
    category: 'Religious Sites',
    address: 'Sitamarhi, Bihar 843302',
    description: 'Sacred banyan tree where Goddess Sita is said to have rested — revered in the Ramayana tradition.',
    image: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Panth+Pakar+Sitamarhi',
    directionsUrl: 'https://www.google.com/maps/dir//Panth+Pakar+Sitamarhi',
    markerColor: '#f59e0b', emoji: '🌳',
  },
  {
    id: 'sitamarhi-junction',
    name: 'Sitamarhi Junction Railway Station',
    lat: 26.5930, lng: 85.4850,
    category: 'Transport',
    address: 'Railway Station Road, Sitamarhi, Bihar 843302',
    description: 'Major railway station connecting Sitamarhi with Patna, Muzaffarpur, Darbhanga, Raxaul and Delhi.',
    image: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sitamarhi+Junction+Railway+Station',
    directionsUrl: 'https://www.google.com/maps/dir//Sitamarhi+Junction+Railway+Station',
    markerColor: '#3b82f6', emoji: '🚂',
  },
  {
    id: 'sitamarhi-bus-stand',
    name: 'Sitamarhi Bus Stand',
    lat: 26.5905, lng: 85.4880,
    category: 'Transport',
    address: 'National Highway 77, Sitamarhi Town, Bihar 843302',
    description: 'Primary road transport hub providing bus connectivity across Bihar and nearby districts.',
    image: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sitamarhi+Bus+Stand+Bihar',
    directionsUrl: 'https://www.google.com/maps/dir//Sitamarhi+Bus+Stand+Bihar',
    markerColor: '#3b82f6', emoji: '🚌',
  },
  {
    id: 'collectorate-dumra',
    name: 'Collectorate Dumra',
    lat: 26.5640, lng: 85.5250,
    category: 'Administration',
    address: 'Collectorate Road, Dumra, Sitamarhi, Bihar 843301',
    description: 'District Collectorate at Dumra — the seat of the District Magistrate and central administration.',
    image: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Collectorate+Dumra+Sitamarhi',
    directionsUrl: 'https://www.google.com/maps/dir//Collectorate+Dumra+Sitamarhi',
    markerColor: '#10b981', emoji: '🏛️',
  },
  {
    id: 'sp-office',
    name: 'SP Office Sitamarhi',
    lat: 26.5870, lng: 85.4920,
    category: 'Administration',
    address: 'Dumra Road, Sitamarhi, Bihar 843301',
    description: 'Superintendent of Police Office — headquarters of the district police force.',
    image: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Superintendent+of+Police+Office+Sitamarhi',
    directionsUrl: 'https://www.google.com/maps/dir//SP+Office+Sitamarhi',
    markerColor: '#10b981', emoji: '🚔',
  },
  {
    id: 'sadar-hospital',
    name: 'Sadar Hospital Sitamarhi',
    lat: 26.5855, lng: 85.4895,
    category: 'Healthcare',
    address: 'Hospital Road, Sitamarhi, Bihar 843302',
    description: 'Major government healthcare facility serving the district — primary referral hospital.',
    image: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sadar+Hospital+Sitamarhi',
    directionsUrl: 'https://www.google.com/maps/dir//Sadar+Hospital+Sitamarhi',
    markerColor: '#ef4444', emoji: '🏥',
  },
  {
    id: 'darbhanga-airport',
    name: 'Darbhanga Airport',
    lat: 26.1914, lng: 85.9169,
    category: 'Airport',
    address: 'Darbhanga Airport Road, Darbhanga, Bihar 846005',
    description: 'Nearest airport (~80 km) — connects the Mithila region with major Indian cities.',
    image: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Darbhanga+Airport',
    directionsUrl: 'https://www.google.com/maps/dir//Darbhanga+Airport',
    markerColor: '#8b5cf6', emoji: '✈️',
  },
];

const CATEGORY_COLORS = {
  'Religious Sites': '#f59e0b',
  'Transport': '#3b82f6',
  'Administration': '#10b981',
  'Healthcare': '#ef4444',
  'Airport': '#8b5cf6',
};

const CATEGORY_EMOJIS = {
  'All': '🗺️',
  'Religious Sites': '🛕',
  'Transport': '🚌',
  'Administration': '🏛️',
  'Healthcare': '🏥',
  'Airport': '✈️',
};

export default function MapSection() {
  const containerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});
  const [activeCategory, setActiveCategory] = useState('All');
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  useEffect(() => {
    if (mapInstanceRef.current || !containerRef.current) return;

    import('leaflet').then((L) => {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(containerRef.current, {
        center: [26.5887, 85.4924],
        zoom: 12,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      landmarks.forEach((place) => {
        const color = CATEGORY_COLORS[place.category] || '#f59e0b';

        const customIcon = L.divIcon({
          className: '',
          html: `<div style="
            width:42px;height:42px;
            background:${color};
            border:3px solid white;
            border-radius:50% 50% 50% 0;
            transform:rotate(-45deg);
            box-shadow:0 4px 14px rgba(0,0,0,0.35);
            cursor:pointer;
            transition:transform 0.2s ease,box-shadow 0.2s ease;
          ">
            <span style="display:block;transform:rotate(45deg);font-size:18px;line-height:36px;text-align:center;">${place.emoji}</span>
          </div>`,
          iconSize: [42, 42],
          iconAnchor: [21, 42],
          popupAnchor: [0, -46],
        });

        const imageBlock = place.image
          ? `<div style="position:relative;height:140px;overflow:hidden;background:#1a0a00;">
               <img src="${place.image}" alt="${place.name}"
                 style="width:100%;height:100%;object-fit:cover;display:block;"
                 onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,${color}33,${color}66)';this.parentElement.innerHTML+='<div style=\\'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;\\'><span style=\\'font-size:44px;\\'>${place.emoji}</span></div>'" />
               <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.60),transparent)"></div>
             </div>`
          : `<div style="height:80px;background:linear-gradient(135deg,${color}22,${color}44);display:flex;align-items:center;justify-content:center;">
               <span style="font-size:40px;">${place.emoji}</span>
             </div>`;

        const popupContent = `
          <div style="width:250px;font-family:'Inter',system-ui,sans-serif;overflow:hidden;border-radius:16px;background:white;">
            ${imageBlock}
            <div style="padding:14px 15px 15px;">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;">
                <span style="width:8px;height:8px;border-radius:50%;background:${color};flex-shrink:0;"></span>
                <span style="font-size:10px;font-weight:700;color:${color};text-transform:uppercase;letter-spacing:0.06em;">${place.category}</span>
              </div>
              <h3 style="font-size:14px;font-weight:800;color:#0a1628;margin:0 0 3px;line-height:1.3;">${place.name}</h3>
              <p style="color:#64748b;font-size:10px;margin:0 0 8px;line-height:1.4;">📍 ${place.address}</p>
              <p style="color:#475569;font-size:12px;margin:0 0 12px;line-height:1.6;">${place.description}</p>
              <div style="display:flex;gap:7px;">
                <a href="${place.mapUrl}" target="_blank" rel="noopener noreferrer"
                  style="flex:1;display:flex;align-items:center;justify-content:center;gap:4px;background:#f8fafc;border:1px solid #e2e8f0;color:#334155;padding:7px 10px;border-radius:10px;text-decoration:none;font-size:11px;font-weight:700;">
                  🗺️ Maps
                </a>
                <a href="${place.directionsUrl}" target="_blank" rel="noopener noreferrer"
                  style="flex:1;display:flex;align-items:center;justify-content:center;gap:4px;background:#0a1628;color:white;padding:7px 10px;border-radius:10px;text-decoration:none;font-size:11px;font-weight:700;">
                  📍 Directions
                </a>
              </div>
            </div>
          </div>`;

        const marker = L.marker([place.lat, place.lng], { icon: customIcon })
          .bindPopup(popupContent, { maxWidth: 270, className: 'sitamarhi-popup' })
          .addTo(map);

        markersRef.current[place.id] = { marker, category: place.category };
      });

      mapInstanceRef.current = map;
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    Object.values(markersRef.current).forEach(({ marker, category }) => {
      const show = activeCategory === 'All' || category === activeCategory;
      if (show && !mapInstanceRef.current.hasLayer(marker)) marker.addTo(mapInstanceRef.current);
      if (!show && mapInstanceRef.current.hasLayer(marker)) mapInstanceRef.current.removeLayer(marker);
    });
  }, [activeCategory]);

  const visibleLandmarks = activeCategory === 'All'
    ? landmarks
    : landmarks.filter((l) => l.category === activeCategory);

  return (
    <section id="map" className="scroll-mt-20 py-16 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-devotional-gold/60 after:to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-amber-950/10 text-red-950 border-amber-900/20 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-devotional-gold/15 shadow-sm uppercase tracking-wider">
            Interactive Map Guide
          </span>
          <h2 className="block w-fit mx-auto text-3xl md:text-4.5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-red-950 to-amber-900 mb-4 drop-shadow-sm">Explore on Map</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Click any marker to discover details and get directions to key religious, administrative, and utility landmarks.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-8 bg-slate-50/50 p-2 rounded-2xl border border-slate-200/50 max-w-3xl mx-auto backdrop-blur-2xl"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-devotional-maroon text-white border-devotional-maroon shadow-md scale-[1.02]'
                  : 'bg-white/50 backdrop-blur-2xl text-slate-600 border border-slate-200/60 hover:border-devotional-maroon/30 hover:text-devotional-maroon hover:bg-white'
              }`}
            >
              <span className="mr-1.5">{CATEGORY_EMOJIS[cat]}</span>
              {cat}
            </button>
          ))}
        </motion.div>
        
        <div className="mb-8 relative z-10">
          <div className="rounded-2xl p-1 bg-gradient-to-br from-devotional-gold/40 via-slate-200 to-devotional-maroon/30 shadow-xl shadow-slate-100/80 border border-slate-200/40">
            <div className="rounded-xl overflow-hidden relative z-10 border border-white">
              <div ref={containerRef} style={{ height: '520px', width: '100%' }} />
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-2.5 justify-center max-w-5xl mx-auto">
          {visibleLandmarks.map((place) => (
            <a
              key={place.id}
              href={place.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/50 hover:bg-white/70 backdrop-blur-2xl border border-slate-200/60 hover:border-devotional-gold/50 text-slate-700 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm hover:-translate-y-0.5"
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: CATEGORY_COLORS[place.category] }} />
              {place.name}
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-devotional-maroon" />
            </a>
          ))}
          <a
            href="https://www.google.com/maps/dir//Sitamarhi,+Bihar/@26.5886856,85.40354255,12z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-devotional-maroon hover:bg-devotional-maroon/90 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md hover:-translate-y-0.5 active:scale-95"
          >
            <Navigation className="w-3.5 h-3.5" />
            Get Directions to Sitamarhi
          </a>
        </div>
      </div>

      <style>{`
        .sitamarhi-popup .leaflet-popup-content-wrapper {
          padding: 0 !important;
          border-radius: 16px !important;
          overflow: hidden !important;
          box-shadow: 0 16px 48px rgba(0,0,0,0.22) !important;
          border: none !important;
        }
        .sitamarhi-popup .leaflet-popup-content {
          margin: 0 !important;
          line-height: 1 !important;
          width: auto !important;
        }
        .sitamarhi-popup .leaflet-popup-tip-container { display: none !important; }
        .sitamarhi-popup .leaflet-popup-close-button {
          color: white !important;
          font-size: 18px !important;
          top: 8px !important;
          right: 8px !important;
          z-index: 10 !important;
          background: rgba(0,0,0,0.4) !important;
          border-radius: 50% !important;
          width: 24px !important;
          height: 24px !important;
          line-height: 22px !important;
          text-align: center !important;
        }
      `}</style>
    </section>
  );
}
