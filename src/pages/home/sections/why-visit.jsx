import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, BookOpen, Route, Music2 } from 'lucide-react';

const reasons = [
  {
    icon: Sparkles,
    title: 'Birthplace of Maa Sita',
    description:
      'Sitamarhi is the most revered birthplace of Goddess Sita — the divine consort of Lord Ram and the embodiment of grace, courage, and devotion. Visiting Punaura Dham and Janaki Sthan is a once-in-a-lifetime spiritual experience for devotees of the Ramayana tradition.',
    gradient: 'from-amber-400 to-orange-500',
    cardGradient: 'from-amber-100 to-orange-200/80',
    border: 'border-amber-300/50',
    hoverBorder: 'hover:border-amber-400',
    textAccent: 'text-amber-600',
    stat: '∞ Spiritual Significance',
  },
  {
    icon: BookOpen,
    title: 'Kingdom of King Janaka',
    description:
      'The Mithila kingdom, ruled by the philosopher-king Janaka, was one of the great centres of learning, philosophy, and culture in ancient India. Its traditions of Nyaya philosophy, Maithili literature, and the Tirhuta script endure to this day across Bihar and Nepal.',
    gradient: 'from-purple-500 to-violet-700',
    cardGradient: 'from-purple-100 to-violet-200/80',
    border: 'border-purple-300/50',
    hoverBorder: 'hover:border-purple-400',
    textAccent: 'text-purple-600',
    stat: '3000+ Years of History',
  },
  {
    icon: Route,
    title: 'Sacred Pilgrimage Circuit',
    description:
      'Sitamarhi forms the centrepiece of the Sita Parikrama circuit — a deeply meaningful pilgrimage route connecting Punaura Dham, Janaki Sthan, Haleshwar Sthan, and Panth Pakar. The circuit is especially vibrant during Ram Navami, Navratri, and Vivah Panchami.',
    gradient: 'from-emerald-500 to-teal-700',
    cardGradient: 'from-emerald-100 to-teal-200/80',
    border: 'border-emerald-300/50',
    hoverBorder: 'hover:border-emerald-400',
    textAccent: 'text-emerald-600',
    stat: '4 Sacred Sites',
  },
  {
    icon: Music2,
    title: 'Rich Mithila Culture',
    description:
      "Experience Madhubani art — one of India's most celebrated folk traditions with a GI tag — along with Chhath Puja, Maithili music, and the vibrant festivals of the Mithila region. Sitamarhi offers a living encounter with a culture that has flourished for over three millennia.",
    gradient: 'from-rose-500 to-pink-700',
    cardGradient: 'from-rose-100 to-pink-200/80',
    border: 'border-rose-300/50',
    hoverBorder: 'hover:border-rose-400',
    textAccent: 'text-rose-600',
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className={`group bg-gradient-to-br ${reason.cardGradient} border ${reason.border} ${reason.hoverBorder} rounded-3xl p-7 hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 flex flex-col relative overflow-hidden`}
    >
      <div className={`absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br ${reason.gradient} opacity-10 rounded-full group-hover:opacity-20 transition-opacity`} />
      <div className={`w-14 h-14 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-navy-700 transition-colors">
        {reason.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
        {reason.description}
      </p>
      <div className={`inline-flex items-center gap-2 ${reason.textAccent} text-xs font-bold`}>
        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${reason.gradient}`} />
        {reason.stat}
      </div>
    </motion.div>
  );
}

export default function WhyVisit() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="why-visit" className="py-16 bg-devotional-bg relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #7a1f1f 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-devotional-secondary/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-devotional-secondary text-devotional-maroon border border-devotional-gold/15 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 shadow-xs">
            Why Visit
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-devotional-maroon mb-4">
            Why Visit{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-devotional-maroon via-devotional-saffron to-devotional-gold">
              Sitamarhi?
            </span>
          </h2>
          <p className="text-devotional-text/80 max-w-2xl mx-auto text-lg font-medium">
            Discover why Sitamarhi is one of the most spiritually and culturally significant destinations in all of India.
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
