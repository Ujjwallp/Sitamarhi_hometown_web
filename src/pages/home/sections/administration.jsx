import OfficerCard from '@/components/ui/officer-card';
import { useRef } from 'react';
import { Info } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { officers } from '@/data/administration';



export default function Administration() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="administration" className="py-16 bg-devotional-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-devotional-secondary text-devotional-maroon text-sm font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm border border-devotional-secondary">
            Governance
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-devotional-maroon mb-4">Administration</h2>
          <p className="text-devotional-text/80 max-w-2xl mx-auto text-base sm:text-lg">
            Key administrative representatives and officials of Sitamarhi district.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-start gap-3 bg-white border border-devotional-secondary rounded-2xl p-4 mb-12 max-w-3xl mx-auto shadow-sm"
        >
          <Info className="w-5 h-5 text-devotional-saffron shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-devotional-text">Official Information Source</p>
            <p className="text-xs text-slate-650 mt-1 leading-relaxed">
              Official designations and numbers are sourced from public directories of the{' '}
              <a href="https://sitamarhi.nic.in" target="_blank" rel="noopener noreferrer" className="underline font-bold text-devotional-maroon">
                Sitamarhi District Administration
              </a> and verified portals.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
          {officers.map((officer, i) => (
            <OfficerCard key={officer.title} officer={officer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
