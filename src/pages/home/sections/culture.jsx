import CultureCard from '@/components/ui/culture-card';
import { useRef } from 'react';
import { Lightbulb } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

import { cultureItems } from '@/data/culture';



export default function Culture() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="culture" className="py-16 bg-devotional-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-devotional-secondary text-devotional-maroon text-sm font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm border border-devotional-secondary">
            Culture &amp; Heritage
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-devotional-maroon mb-4">The Soul of Mithila</h2>
          <p className="text-devotional-text/80 max-w-2xl mx-auto text-base sm:text-lg">
            Discover the art forms, languages, festivals, and living traditions that have shaped the Mithila civilisation for millennia.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureItems.map((item, i) => (
            <CultureCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
