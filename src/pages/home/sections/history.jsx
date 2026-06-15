import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Crown, BookOpen, Scroll, Landmark, Building2, Leaf } from 'lucide-react';

const treeNodes = [
  {
    type: 'root',
    title: 'Birthplace of Goddess Sita',
    subtitle: 'The Divine Origin',
    description: 'Sitamarhi is revered globally as the sacred birthplace of Maa Sita, discovered by King Janaka. This divine event establishes the spiritual foundation of the region.',
    icon: Sparkles,
  },
  {
    type: 'trunk',
    title: 'Ramayana Era',
    subtitle: 'Ancient Epoch',
    description: 'The era of the Ramayana shapes the core identity of Sitamarhi, marked by the Sita Parikrama and ancient shrines like Haleshwar Sthan.',
    icon: Scroll,
  },
  {
    type: 'branch',
    title: 'Mithila Kingdom',
    subtitle: 'Golden Age of Philosophy',
    description: 'Under King Janaka, the region became a flourishing center for Nyaya philosophy, Vedic learning, and early Maithili culture.',
    icon: Crown,
  },
  {
    type: 'branch',
    title: 'Medieval Cultural Growth',
    subtitle: 'Art & Tradition',
    description: 'The continuous evolution of Madhubani art, Chhath Puja traditions, and the Tirhuta script kept the cultural fabric vibrant through centuries.',
    icon: BookOpen,
  },
  {
    type: 'branch',
    title: 'British Period',
    subtitle: 'Administrative Formation',
    description: 'Sitamarhi was organized as a formal sub-division of the Muzaffarpur district in 1875, bringing modern administrative frameworks to the region.',
    icon: Landmark,
  },
  {
    type: 'branch',
    title: 'Modern Sitamarhi',
    subtitle: 'Independent District',
    description: 'On December 11, 1972, Sitamarhi was established as an independent district, embarking on an era of modern governance and tourism development.',
    icon: Building2,
  },
];

function TreeNode({ node, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  if (node.type === 'root') {
    return (
      <div className="flex flex-col items-center mb-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="premium-card p-8 text-center max-w-xl mx-auto border-b-4 border-b-devotional-gold relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-devotional-gold to-amber-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <node.icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-xs font-bold text-devotional-gold uppercase tracking-widest mt-4 block mb-2">{node.subtitle}</span>
          <h3 className="text-3xl font-serif font-bold text-devotional-maroon mb-4">{node.title}</h3>
          <p className="text-slate-600 font-medium">{node.description}</p>
        </motion.div>
      </div>
    );
  }

  if (node.type === 'trunk') {
    return (
      <div className="flex flex-col items-center mb-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-devotional-maroon text-white p-6 rounded-3xl max-w-md mx-auto text-center shadow-xl border-4 border-devotional-gold/30"
        >
          <span className="text-xs font-bold text-devotional-gold uppercase tracking-widest block mb-1">{node.subtitle}</span>
          <h3 className="text-2xl font-serif font-bold mb-3">{node.title}</h3>
          <p className="text-white/80 text-sm">{node.description}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col md:flex-row items-center relative my-8 z-10">
      <div className={`w-full md:w-1/2 flex justify-center ${isLeft ? 'md:justify-end md:pr-16' : 'md:order-2 md:justify-start md:pl-16'}`}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="premium-card p-6 max-w-sm w-full relative group"
        >
          <div className={`absolute top-6 ${isLeft ? '-right-4' : '-left-4'} w-8 h-8 bg-white border border-devotional-gold/30 rounded-full flex items-center justify-center shadow-sm z-20 md:hidden`}>
            <Leaf className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-xs font-bold text-category-heritage-accent uppercase tracking-wider block mb-1">{node.subtitle}</span>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-devotional-maroon transition-colors">{node.title}</h3>
          <p className="text-slate-600 text-sm">{node.description}</p>
        </motion.div>
      </div>

      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
        <div className="w-8 h-8 rounded-full bg-white border-4 border-emerald-600 shadow-md flex items-center justify-center">
          <Leaf className="w-3 h-3 text-emerald-600" />
        </div>
      </div>

      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-1 z-10 bg-gradient-to-r from-emerald-600/60 to-emerald-600/60 ${isLeft ? 'right-1/2 w-16' : 'left-1/2 w-16'}`} />
      
      <div className={`hidden md:block w-1/2 ${isLeft ? 'md:order-2' : ''}`} />
    </div>
  );
}

export default function History() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="history" className="py-20 bg-devotional-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #7a1f1f 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl sm:text-6xl font-extrabold text-devotional-maroon mb-6">
            Roots of Sitamarhi
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Journey through time from the divine origins of Maa Sita to the modern administrative district.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto pt-8">
          {/* The Trunk Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-900 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.3)] z-0 hidden md:block">
            {/* Trunk bark texture via CSS overlay */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, #000 10px, #000 20px)' }} />
          </div>
          
          <div className="flex flex-col">
            {treeNodes.map((node, i) => (
              <TreeNode key={node.title} node={node} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
