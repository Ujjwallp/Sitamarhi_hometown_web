import { Phone, Siren, Flame, HeartPulse, Building2, Copy, CheckCheck, ShieldAlert, Baby, Heart } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const contacts = [
  {
    icon: Siren,
    service: 'Police Control Room',
    number: '112',
    shortDesc: 'Immediate Response',
    description: 'All-in-one emergency helpline for police assistance, active 24/7 across the state.',
    borderTheme: 'border-l-red-500 hover:border-red-300',
    iconTheme: 'bg-red-50 text-red-600 border-red-100',
    tagTheme: 'bg-red-50 text-red-700 border-red-100/50',
    btnTheme: 'bg-red-50/50 hover:bg-red-50 text-red-700 border-red-200/60 hover:border-red-300',
  },
  {
    icon: HeartPulse,
    service: 'Ambulance',
    number: '108',
    shortDesc: 'Medical Support',
    description: 'Emergency ambulance dispatch and medical transportation services for hospitals.',
    borderTheme: 'border-l-orange-500 hover:border-orange-300',
    iconTheme: 'bg-orange-50 text-orange-600 border-orange-100',
    tagTheme: 'bg-orange-50 text-orange-700 border-orange-100/50',
    btnTheme: 'bg-orange-50/50 hover:bg-orange-50 text-orange-700 border-orange-200/60 hover:border-orange-300',
  },
  {
    icon: Flame,
    service: 'Fire Service',
    number: '101',
    shortDesc: 'Fire & Rescue',
    description: 'Fire department hotline for fire outbreaks, containment, and rescue operations.',
    borderTheme: 'border-l-amber-500 hover:border-amber-300',
    iconTheme: 'bg-amber-50 text-amber-600 border-amber-100',
    tagTheme: 'bg-amber-50 text-amber-700 border-amber-100/50',
    btnTheme: 'bg-amber-50/50 hover:bg-amber-50 text-amber-700 border-amber-200/60 hover:border-amber-300',
  },
  {
    icon: Heart,
    service: 'Women Helpline',
    number: '181',
    shortDesc: 'Safety & Support',
    description: 'Immediate counseling, rescue, and referral services for women in distress.',
    borderTheme: 'border-l-rose-500 hover:border-rose-300',
    iconTheme: 'bg-rose-50 text-rose-600 border-rose-100',
    tagTheme: 'bg-rose-50 text-rose-700 border-rose-100/50',
    btnTheme: 'bg-rose-50/50 hover:bg-rose-50 text-rose-700 border-rose-200/60 hover:border-rose-300',
  },
  {
    icon: Building2,
    service: 'District Control Room',
    number: '1077',
    shortDesc: 'Local Governance',
    description: 'Disaster management, municipal assistance, and administrative emergency coordination.',
    borderTheme: 'border-l-yellow-500 hover:border-yellow-300',
    iconTheme: 'bg-yellow-50 text-yellow-600 border-yellow-100',
    tagTheme: 'bg-yellow-50 text-yellow-700 border-yellow-100/50',
    btnTheme: 'bg-yellow-50/50 hover:bg-yellow-50 text-yellow-700 border-yellow-200/60 hover:border-yellow-300',
  },
  {
    icon: Baby,
    service: 'Child Helpline',
    number: '1098',
    shortDesc: 'Child Protection',
    description: 'Nationwide toll-free outreach service for children in need of care and protection.',
    borderTheme: 'border-l-orange-500 hover:border-orange-300',
    iconTheme: 'bg-orange-50 text-orange-600 border-orange-100',
    tagTheme: 'bg-orange-50 text-orange-700 border-orange-100/50',
    btnTheme: 'bg-orange-50/50 hover:bg-orange-50 text-orange-700 border-orange-200/60 hover:border-orange-300',
  },
  {
    icon: ShieldAlert,
    service: 'Police Emergency',
    number: '100',
    shortDesc: 'Urgent Police Help',
    description: 'Direct dial helpline for immediate police response and local security threat reporting.',
    borderTheme: 'border-l-red-500 hover:border-red-300',
    iconTheme: 'bg-red-50 text-red-600 border-red-100',
    tagTheme: 'bg-red-50 text-red-700 border-red-100/50',
    btnTheme: 'bg-red-50/50 hover:bg-red-50 text-red-700 border-red-200/60 hover:border-red-300',
  },
];

function ContactCard({ contact, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [copied, setCopied] = useState(false);
  const Icon = contact.icon;

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.05, ease: 'easeOut' }}
      className={`group relative rounded-2xl bg-white/50 hover:bg-white/70 backdrop-blur-2xl backdrop-blur-2xl border border-slate-200/60 border-l-4 ${contact.borderTheme} p-5 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/80`}
    >
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${contact.iconTheme} transition-transform duration-300 group-hover:scale-105`}>
            <Icon className="w-5.5 h-5.5" />
          </div>
          <div>
            <span className={`inline-block text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${contact.tagTheme} mb-0.5`}>
              {contact.shortDesc}
            </span>
            <h3 className="font-extrabold text-slate-800 text-base leading-tight group-hover:text-devotional-maroon transition-colors duration-300">
              {contact.service}
            </h3>
          </div>
        </div>

        {/* Number Box */}
        <div className="rounded-xl p-3 bg-slate-50/50 border border-slate-100 flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Toll-Free Helpline</p>
            <p className="text-2xl font-black text-slate-800 tracking-wide">{contact.number}</p>
          </div>
          <button
            onClick={handleCopy}
            className={`p-2 rounded-lg border transition-all active:scale-95 ${contact.btnTheme}`}
            title="Copy number"
          >
            {copied ? (
              <CheckCheck className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-xs leading-relaxed mb-5 flex-grow">
          {contact.description}
        </p>
      </div>

      {/* Call button */}
      <a
        href={`tel:${contact.number}`}
        className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold border transition-all ${contact.btnTheme}`}
      >
        <Phone className="w-3.5 h-3.5" />
        Call Now
      </a>
    </motion.div>
  );
}

export default function Emergency() {
  return (
    <section
      id="emergency"
      className="scroll-mt-20 py-16 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-devotional-gold/60 after:to-transparent"
    >
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #7a1f1f 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-950/10 text-red-950 border-amber-900/20 text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-devotional-gold/15 shadow-sm uppercase tracking-wider">
            24 × 7 Helpline Support
          </span>
          <h2 className="block w-fit mx-auto text-3xl md:text-4.5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-red-950 to-amber-900 mb-4 drop-shadow-sm">
            Emergency Contacts
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Immediate helpline services for disaster management, rescue, medical, and security support. Active 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {contacts.map((contact, i) => (
            <ContactCard key={contact.service} contact={contact} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
