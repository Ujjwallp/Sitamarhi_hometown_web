import { Phone, Siren, Flame, HeartPulse, Building2, Copy, CheckCheck, ShieldAlert, Baby, Heart } from 'lucide-react';
import { useState } from 'react';

const contacts = [
  {
    icon: Siren,
    service: 'Police Control Room',
    number: '112',
    shortDesc: 'Immediate Response',
    description: 'All-in-one emergency helpline for police assistance, active 24/7 across the state.',
    color: 'bg-devotional-maroon',
    textColor: 'text-devotional-maroon',
    borderAccent: 'border-l-devotional-maroon',
    btnColor: 'bg-devotional-maroon hover:bg-devotional-saffron text-white',
  },
  {
    icon: HeartPulse,
    service: 'Ambulance',
    number: '108',
    shortDesc: 'Medical Support',
    description: 'Emergency ambulance dispatch and medical transportation services for hospitals.',
    color: 'bg-emerald-600',
    textColor: 'text-emerald-700',
    borderAccent: 'border-l-emerald-600',
    btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
  },
  {
    icon: Flame,
    service: 'Fire Service',
    number: '101',
    shortDesc: 'Fire & Rescue',
    description: 'Fire department hotline for fire outbreaks, containment, and rescue operations.',
    color: 'bg-orange-600',
    textColor: 'text-orange-700',
    borderAccent: 'border-l-orange-600',
    btnColor: 'bg-orange-600 hover:bg-orange-700 text-white',
  },
  {
    icon: Heart,
    service: 'Women Helpline',
    number: '181',
    shortDesc: 'Safety & Support',
    description: 'Immediate counseling, rescue, and referral services for women in distress.',
    color: 'bg-rose-600',
    textColor: 'text-rose-700',
    borderAccent: 'border-l-rose-600',
    btnColor: 'bg-rose-600 hover:bg-rose-700 text-white',
  },
  {
    icon: Building2,
    service: 'District Control Room',
    number: '1077',
    shortDesc: 'Local Governance',
    description: 'Disaster management, municipal assistance, and administrative emergency coordination.',
    color: 'bg-amber-600',
    textColor: 'text-amber-700',
    borderAccent: 'border-l-amber-600',
    btnColor: 'bg-amber-600 hover:bg-amber-700 text-white',
  },
  {
    icon: Baby,
    service: 'Child Helpline',
    number: '1098',
    shortDesc: 'Child Protection',
    description: 'Nationwide toll-free outreach service for children in need of care and protection.',
    color: 'bg-purple-600',
    textColor: 'text-purple-700',
    borderAccent: 'border-l-purple-600',
    btnColor: 'bg-purple-600 hover:bg-purple-700 text-white',
  },
  {
    icon: ShieldAlert,
    service: 'Police Emergency',
    number: '100',
    shortDesc: 'Urgent Police Help',
    description: 'Traditional direct dial helpline for immediate police response and local security threat reporting.',
    color: 'bg-blue-600',
    textColor: 'text-blue-700',
    borderAccent: 'border-l-blue-600',
    btnColor: 'bg-blue-600 hover:bg-blue-700 text-white',
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
    <div className={`bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 ${contact.borderAccent} border border-r-devotional-gold/20 border-t-devotional-gold/20 border-b-devotional-gold/20 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4 shadow-sm`}>
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center shadow-sm shrink-0`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-extrabold text-devotional-text text-base leading-tight">{contact.service}</h3>
          <p className={`text-[10px] font-bold uppercase tracking-wider ${contact.textColor} mt-0.5`}>{contact.shortDesc}</p>
        </div>
      </div>
      <div className="bg-stone-50 rounded-xl px-4 py-3 border border-stone-200 shadow-sm flex items-center justify-between">
        <p className="text-xl font-extrabold text-devotional-text tracking-wide">{contact.number}</p>
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

      <p className="text-devotional-text/80 text-xs sm:text-sm leading-relaxed mb-3">
        {contact.description}
      </p>
      <div className="mt-auto">
        <a
          href={`tel:${contact.number}`}
          className={`w-full inline-flex items-center justify-center gap-2 ${contact.btnColor} px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm`}
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
