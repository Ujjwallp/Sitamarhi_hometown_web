import { useRef } from 'react';
import {
  Sparkles, Crown, BookOpen, Scroll, Landmark, Flag, Building2, MapPin
} from 'lucide-react';

import { timeline } from '@/data/timeline';

function HeritageNode({ item, index }) {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  const gradients = [
    'from-[#FFF8ED] to-amber-100/80 border-amber-200/50',
    'from-rose-50 to-pink-100/80 border-pink-200/50',
    'from-cyan-50 to-sky-100/80 border-sky-200/50',
    'from-emerald-50 to-teal-100/80 border-teal-200/50',
  ];
  const cardStyle = gradients[index % gradients.length];

  return (
    <div className="w-full flex flex-col md:flex-row items-center relative my-4 md:my-3">
      <div className={`w-full md:w-1/2 flex justify-center ${isLeft ? 'md:justify-end md:pr-12' : 'md:order-2 md:justify-start md:pl-12'}`}>
        <div className="w-full max-w-md px-4">
          <div className={`bg-gradient-to-br ${cardStyle} border rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group`}>
            <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 ${isLeft ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'} group-hover:shadow transition-shadow`}>
              <Icon className="w-6 h-6 text-devotional-maroon" />
            </div>

            <div className="mb-3">
              <span className="inline-block bg-devotional-secondary text-devotional-maroon text-[11px] font-bold tracking-wide px-3 py-1 rounded-full shadow-xs">
                {item.badge}
              </span>
              <span className="block text-[10px] text-slate-400 font-bold uppercase mt-1">
                {item.subtitle}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-amber-600 transition-colors">
              {item.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              {item.description}
            </p>

            <span className={`absolute top-4 text-[10px] font-extrabold text-orange-600 bg-white border border-orange-200 rounded-full px-2 py-0.5 shadow-sm ${isLeft ? 'right-4 md:right-auto md:left-4' : 'right-4'}`}>
              {(index + 1).toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
        <div className="w-5 h-5 rounded-full bg-white border-4 border-devotional-saffron shadow-sm" />
      </div>
      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 z-10 ${isLeft ? 'right-1/2' : 'left-1/2'}`}>
        <div className="w-full border-t border-dashed border-devotional-saffron/60" />
      </div>
      <div className={`hidden md:block w-1/2 ${isLeft ? 'md:order-2' : ''}`} />
    </div>
  );
}

export default function History() {
  const headerRef = useRef(null);

  return (
    <section id="history" className="py-16 bg-devotional-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-radial-gradient from-devotional-secondary/30 to-transparent pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-radial-gradient from-devotional-secondary/30 to-transparent pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12" ref={headerRef}>
          <span className="inline-block bg-devotional-secondary text-devotional-maroon text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-3 shadow-xs border border-devotional-gold/15">
            🏺 Historical Legacy
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-devotional-maroon mb-4">
            Heritage Timeline
          </h2>
          <p className="text-devotional-text/80 max-w-2xl mx-auto text-base sm:text-lg">
            Explore the sacred roots, ancient learning excellence, and historical milestones of Sita Janmabhoomi.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-devotional-saffron via-devotional-gold to-devotional-maroon/40" />
          <div className="flex flex-col gap-2">
            {timeline.map((item, i) => (
              <HeritageNode key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
