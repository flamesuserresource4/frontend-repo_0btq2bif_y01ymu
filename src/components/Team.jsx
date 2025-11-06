import React from 'react';
import { User } from 'lucide-react';

const managers = [
  {
    name: 'Dr. Amina Rahman',
    role: 'Laboratory Manager',
    bio: 'Leads operations with a focus on quality systems, data integrity, and regulatory compliance.',
  },
  {
    name: 'Ethan Cole',
    role: 'Network & Security Lead',
    bio: 'Architects resilient network topologies and zero‑trust controls for research environments.',
  },
];

export default function Team() {
  return (
    <section id="team" className="w-full bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 sm:text-4xl">Leadership</h2>
          <p className="mt-3 text-emerald-800/80">Meet the team guiding secure, reliable laboratory operations.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {managers.map((m) => (
            <article key={m.name} className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <User />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-900">{m.name}</h3>
                <p className="text-sm font-medium text-emerald-700">{m.role}</p>
                <p className="mt-2 text-sm text-emerald-800/80">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
