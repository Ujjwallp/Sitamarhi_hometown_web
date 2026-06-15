import { Phone, Siren, Flame, HeartPulse, Building2, Copy, CheckCheck, ShieldAlert, Baby, Heart } from 'lucide-react';
import { useState } from 'react';

const contacts = [
  {
    icon: Siren,
    service: 'Police Control Room',
    number: '112',
    shortDesc: 'Immediate Response',
    description: 'All-in-one emergency helpline for police assistance, active 24/7 across the state.',
    gradient: 'from-red-500 to-rose-700',
    cardGradient: 'from-red-100 to-rose-200/80',
    textColor: 'text-red-700',
    borderAccent: 'border-l-red-600',
  },
  {
    icon: HeartPulse,
    service: 'Ambulance',
    number: '108',
    shortDesc: 'Medical Support',
    description: 'Emergency ambulance dispatch and medical transportation services for hospitals.',
    gradient: 'from-emerald-400 to-teal-600',
    cardGradient: 'from-emerald-100 to-teal-200/80',
    textColor: 'text-emerald-700',
    borderAccent: 'border-l-emerald-600',
  },
  {
    icon: Flame,
    service: 'Fire Service',
    number: '101',
    shortDesc: 'Fire & Rescue',
    description: 'Fire department hotline for fire outbreaks, containment, and rescue operations.',
    gradient: 'from-orange-400 to-amber-600',
    cardGradient: 'from-orange-100 to-amber-200/80',
    textColor: 'text-orange-700',
    borderAccent: 'border-l-orange-600',
  },
  {
    icon: Heart,
    service: 'Women Helpline',
    number: '181',
    shortDesc: 'Safety & Support',
    description: 'Immediate counseling, rescue, and referral services for women in distress.',
    gradient: 'from-pink-500 to-rose-600',
    cardGradient: 'from-pink-100 to-rose-200/80',
    textColor: 'text-rose-700',
    borderAccent: 'border-l-rose-600',
  },
  {
    icon: Building2,
    service: 'District Control Room',
    number: '1077',
    shortDesc: 'Local Governance',
    description: 'Disaster management, municipal assistance, and administrative emergency coordination.',
    gradient: 'from-amber-500 to-yellow-600',
    cardGradient: 'from-amber-100 to-yellow-200/80',
    textColor: 'text-amber-700',
    borderAccent: 'border-l-amber-600',
  },
  {
    icon: Baby,
    service: 'Child Helpline',
    number: '1098',
    shortDesc: 'Child Protection',
    description: 'Nationwide toll-free outreach service for children in need of care and protection.',
    gradient: 'from-violet-500 to-purple-700',
    cardGradient: 'from-violet-100 to-purple-200/80',
    textColor: 'text-purple-700',
    borderAccent: 'border-l-purple-600',
  },
  {
    icon: ShieldAlert,
    service: 'Police Emergency',
    number: '100',
    shortDesc: 'Urgent Police Help',
    description: 'Traditional direct dial helpline for immediate police response and local security threat reporting.',
    gradient: 'from-blue-500 to-indigo-600',
    cardGradient: 'from-blue-100 to-indigo-200/80',
    textColor: 'text-blue-700',
    borderAccent: 'border-l-blue-600',
  },
];

function ContactCard({ contact }) {
  const [copied, setCopied] = useState(false);
  const Icon = contact.icon;

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`group bg-gradient-to-br ${contact.cardGradient} border-l-4 ${contact.borderAccent} border border-r-black/5 border-t-black/5 border-b-black/5 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4 shadow-sm relative overflow-hidden`}>
      <div className={`absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br ${contact.gradient} opacity-10 rounded-full group-hover:opacity-20 transition-opacity`} />
      
      <div className="flex items-center gap-3 relative z-10">
        <div className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-extrabold text-devotional-text text-base leading-tight group-hover:text-amber-800 transition-colors">{contact.service}</h3>
          <p className={`text-[10px] font-bold uppercase tracking-wider ${contact.textColor} mt-0.5`}>{contact.shortDesc}</p>
        </div>
      </div>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-devotional-gold/10 shadow-sm flex items-center justify-between relative z-10">
        <p className={`text-xl font-extrabold bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent tracking-wide`}>{contact.number}</p>
        <button
          onClick={handleCopy}
          className="p-1.5 hover:bg-stone-100 rounded-lg text-stone-400 hover:text-stone-600 transition-colors"
          title="Copy number"
        >
          {copied ? (
            <CheckCheck className="w-4 h-4 text-emerald-600" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      <p className="text-devotional-text/80 text-xs sm:text-sm leading-relaxed mb-3 relative z-10">
        {contact.description}
      </p>
      <div className="mt-auto relative z-10">
        <a
          href={`tel:${contact.number}`}
          className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${contact.gradient} px-4 py-2.5 rounded-xl text-white text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all`}
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>
    </div>
  );
}

export default function Emergency() {
  return (
    <section id="emergency" className="py-16 bg-devotional-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-devotional-secondary text-devotional-maroon text-sm font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm border border-devotional-gold/15">
            24 × 7 Helpline
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-devotional-maroon mb-4">Emergency Contacts</h2>
          <p className="text-devotional-text/80 max-w-2xl mx-auto text-base sm:text-lg">
            Immediate helpline services for disaster management, rescue, medical, and security support.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {contacts.map((contact) => (
            <ContactCard key={contact.service} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
