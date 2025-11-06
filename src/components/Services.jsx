import React from 'react';
import { ShieldCheck, Network, Lock, Server } from 'lucide-react';

const services = [
  {
    title: 'Laboratory Network Design',
    description:
      'Resilient LAN/WAN topologies, VLAN segmentation, SD-WAN for multi-site labs, and Wi‑Fi for cleanroom environments.',
    icon: Network,
    color: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Zero‑Trust Security',
    description:
      'Identity-aware access, micro-segmentation, MFA, and privileged access control tailored to instruments and LIMS.',
    icon: Lock,
    color: 'from-teal-400 to-cyan-400',
  },
  {
    title: 'Managed SOC & Monitoring',
    description:
      'SIEM integration, IDS/IPS, endpoint telemetry, and real-time alerting with clear incident runbooks.',
    icon: ShieldCheck,
    color: 'from-cyan-400 to-emerald-400',
  },
  {
    title: 'Secure Infrastructure',
    description:
      'Hardened servers, backups, and DR strategies for LIMS, ELN, sequencing, and imaging platforms.',
    icon: Server,
    color: 'from-emerald-400 to-cyan-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-gradient-to-b from-white to-emerald-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 sm:text-4xl">Products & Services</h2>
          <p className="mt-3 text-emerald-800/80">Turn-key solutions for secure, high-performing laboratory environments.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon, color }) => (
            <div key={title} className="group rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow` }>
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-800/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
