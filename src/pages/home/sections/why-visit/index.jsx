import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, BookOpen, Route, Music2 } from 'lucide-react';

const reasons = [
  {
    icon: Sparkles,
    title: 'Birthplace of Maa Sita',
    description:
      'Sitamarhi is the most revered birthplace of Goddess Sita — the divine consort of Lord Ram and the embodiment of grace, courage, and devotion. A once-in-a-lifetime spiritual experience.',
    theme: 'border-t-amber-500 hover:border-amber-300',
    iconTheme: 'bg-amber-50 text-amber-600 border-amber-100/60',
    tagTheme: 'bg-amber-50 text-amber-700 border-amber-100/60',
    stat: '∞ Spiritual Significance',
  },
  {
    icon: BookOpen,
    title: 'Kingdom of King Janaka',
    description:
      'The Mithila kingdom was a great centre of learning, philosophy, and culture in ancient India. Traditions of Nyaya philosophy, Maithili literature, and the Tirhuta script endure to this day.',
    theme: 'border-t-orange-500 hover:border-orange-300',
    iconTheme: 'bg-orange-50 text-orange-600 border-orange-100/60',
    tagTheme: 'bg-orange-50 text-orange-700 border-orange-100/60',
    stat: '3000+ Years of History',
  },
  {
    icon: Route,
    title: 'Sacred Pilgrimage Circuit',
    description:
      'Sitamarhi forms the centrepiece of the Sita Parikrama circuit — connecting Punaura Dham, Janaki Sthan, Haleshwar Sthan, and Panth Pakar. Especially vibrant during Ram Navami and Vivah Panchami.',
    theme: 'border-t-yellow-500 hover:border-yellow-300',
    iconTheme: 'bg-yellow-50 text-yellow-600 border-yellow-100/60',
    tagTheme: 'bg-yellow-50 text-yellow-700 border-yellow-100/60',
    stat: '4 Sacred Sites',
  },
  {
    icon: Music2,
    title: 'Rich Mithila Culture',
    description:
      "Experience Madhubani art — one of India's most celebrated folk traditions with a GI tag — along with Chhath Puja, Maithili music, and vibrant festivals that have flourished for millennia.",
    theme: 'border-t-red-500 hover:border-red-300',
    iconTheme: 'bg-red-50 text-red-600 border-red-100/60',
    tagTheme: 'bg-red-50 text-red-700 border-red-100/60',
    stat: '3000+ Years of Culture',
  },
];

function ReasonCard({ reason, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = reason.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      className={`group relative rounded-2xl bg-white/50 hover:bg-white/70 backdrop-blur-2xl backdrop-blur-2xl border border-slate-200/60 border-t-4 ${reason.theme} p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/80 flex flex-col justify-between h-full`}
    >
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-slate-50/50 blur-2xl group-hover:bg-slate-100/50 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1">
        
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${reason.iconTheme} mb-4 transition-transform duration-300 group-hover:scale-105 shrink-0`}>
          <Icon className="w-5.5 h-5.5" />
        </div>

        <h3 className="text-lg font-black text-slate-800 mb-2 leading-snug group-hover:text-devotional-maroon transition-colors">
          {reason.title}
        </h3>

        <p className="text-slate-500 text-xs leading-relaxed font-semibold flex-1 mb-5">
          {reason.description}
        </p>

        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg w-fit border ${reason.tagTheme}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          <span className="text-[10px] font-extrabold tracking-wider uppercase">
            {reason.stat}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyVisit() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section
      id="why-visit"
      className="scroll-mt-20 py-16 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-devotional-gold/60 after:to-transparent"
    >
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #7a1f1f 2px, transparent 2px)', backgroundSize: '40px 40px' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-amber-950/10 text-red-950 border-amber-900/20 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-devotional-gold/15 shadow-sm uppercase tracking-wider">
            Heritage & Significance
          </span>
          <h2 className="block w-fit mx-auto text-3xl md:text-4.5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-red-950 to-amber-900 mb-4 drop-shadow-sm">
            Why Visit Sitamarhi?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Discover why Sitamarhi is one of the most spiritually and culturally significant destinations in India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
