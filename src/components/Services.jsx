import React, { useState } from 'react';
import { ShieldCheck, Network, Lock, Server } from 'lucide-react';
import Modal from './Modal';

const services = [
  {
    title: 'Laboratory Network Design',
    description:
      'Resilient LAN/WAN topologies, VLAN segmentation, SD-WAN for multi-site labs, and Wi‑Fi for cleanroom environments.',
    details:
      'We assess instrument connectivity, LIMS/ELN needs, and regulatory constraints to blueprint a segmented, high-availability network. Deliverables include topology diagrams, IP schema, VLAN plans, NAC policies, and rollout sequencing without downtime.',
    icon: Network,
    color: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Zero‑Trust Security',
    description:
      'Identity-aware access, micro-segmentation, MFA, and privileged access control tailored to instruments and LIMS.',
    details:
      'Adopt zero-trust with device identity, strong MFA, least-privilege roles, and micro-segmentation for instrument subnets. We integrate SSO, PAM, and policy-as-code with change control and auditing baked-in.',
    icon: Lock,
    color: 'from-teal-400 to-cyan-400',
  },
  {
    title: 'Managed SOC & Monitoring',
    description:
      'SIEM integration, IDS/IPS, endpoint telemetry, and real-time alerting with clear incident runbooks.',
    details:
      'We deploy log pipelines, IDS/IPS, and EDR to capture events from endpoints, instruments, and network gear. Our SOC provides 24/7 alert triage, threat hunting, and incident response runbooks aligned to ISO 27001.',
    icon: ShieldCheck,
    color: 'from-cyan-400 to-emerald-400',
  },
  {
    title: 'Secure Infrastructure',
    description:
      'Hardened servers, backups, and DR strategies for LIMS, ELN, sequencing, and imaging platforms.',
    details:
      'We harden OS and middleware, implement immutable backups, and design DR with RPO/RTO objectives. Includes validation protocols, configuration baselines, and automated patching windows.',
    icon: Server,
    color: 'from-emerald-400 to-cyan-400',
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const current = openIndex !== null ? services[openIndex] : null;

  return (
    <section id="services" className="w-full bg-gradient-to-b from-white to-emerald-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 sm:text-4xl">Products & Services</h2>
          <p className="mt-3 text-emerald-800/80">Turn-key solutions for secure, high-performing laboratory environments.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon, color }, idx) => (
            <button
              key={title}
              onClick={() => setOpenIndex(idx)}
              className="group rounded-2xl border border-emerald-100 bg-white p-6 text-left shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow`}>
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-800/80">{description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-emerald-700">Learn more →</span>
            </button>
          ))}
        </div>
      </div>

      <Modal open={openIndex !== null} onClose={() => setOpenIndex(null)} title={current?.title || ''}>
        <p>{current?.details}</p>
      </Modal>
    </section>
  );
}
