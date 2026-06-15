import { Globe, Mountain, Train, Bus, Hospital, School, GraduationCap, Shield, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    label: 'District Website',
    description: 'Official Sitamarhi portal',
    href: 'https://sitamarhi.nic.in',
    color: 'bg-blue-50 hover:bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-100 hover:border-blue-300',
    external: true,
  },
  {
    icon: Mountain,
    label: 'Bihar Tourism',
    description: 'Plan your visit',
    href: 'https://www.bihartourism.gov.in',
    color: 'bg-emerald-50 hover:bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-100 hover:border-emerald-300',
    external: true,
  },
  {
    icon: Train,
    label: 'Railway Station',
    description: 'Sitamarhi Junction',
    href: 'https://www.google.com/maps/search/?api=1&query=Sitamarhi+Railway+Station',
    color: 'bg-orange-50 hover:bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-100 hover:border-orange-300',
    external: true,
  },
  {
    icon: Bus,
    label: 'Bus Stand',
    description: 'Sitamarhi Bus Terminal',
    href: 'https://www.google.com/maps/search/?api=1&query=Sitamarhi+Bus+Stand',
    color: 'bg-amber-50 hover:bg-amber-100',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-100 hover:border-amber-300',
    external: true,
  },
  {
    icon: Hospital,
    label: 'Hospitals',
    description: 'Medical facilities',
    href: 'https://www.google.com/maps/search/?api=1&query=hospitals+in+Sitamarhi',
    color: 'bg-red-50 hover:bg-red-100',
    iconColor: 'text-red-600',
    borderColor: 'border-red-100 hover:border-red-300',
    external: true,
  },
  {
    icon: School,
    label: 'Schools',
    description: 'Government schools',
    href: 'https://www.google.com/maps/search/?api=1&query=schools+in+Sitamarhi',
    color: 'bg-violet-50 hover:bg-violet-100',
    iconColor: 'text-violet-600',
    borderColor: 'border-violet-100 hover:border-violet-300',
    external: true,
  },
  {
    icon: GraduationCap,
    label: 'Colleges',
    description: 'Higher education',
    href: 'https://www.google.com/maps/search/?api=1&query=colleges+in+Sitamarhi',
    color: 'bg-cyan-50 hover:bg-cyan-100',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-100 hover:border-cyan-300',
    external: true,
  },
  {
    icon: Shield,
    label: 'Police Stations',
    description: 'Law enforcement',
    href: 'https://www.google.com/maps/search/?api=1&query=police+station+Sitamarhi',
    color: 'bg-navy-50 hover:bg-navy-100',
    iconColor: 'text-navy-700',
    borderColor: 'border-navy-100 hover:border-navy-300',
    external: true,
  },
];

export default function QuickAccess() {
  return (
    <section id="quick-access" className="py-12 bg-devotional-bg border-b border-devotional-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-devotional-maroon mb-2">Quick Access</h2>
          <p className="text-devotional-text/75 text-sm">Instant links to important services and places in Sitamarhi</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.label}
                href={service.href}
                target={service.external ? '_blank' : undefined}
                rel={service.external ? 'noopener noreferrer' : undefined}
                className={`bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center text-center gap-2 transition-all duration-200 group hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 relative overflow-hidden`}
              >
                <div className={`w-12 h-12 ${service.color} border ${service.borderColor} rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>
                <p className="text-xs font-bold text-slate-900 leading-tight mt-1">{service.label}</p>
                <p className="text-xs text-slate-500 leading-tight hidden sm:block">{service.description}</p>
                <ArrowUpRight className={`w-3.5 h-3.5 ${service.iconColor} opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 right-3`} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
