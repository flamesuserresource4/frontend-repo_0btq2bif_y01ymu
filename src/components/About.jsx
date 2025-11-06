import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="absolute inset-x-0 -top-20 mx-auto h-40 max-w-5xl rounded-3xl bg-gradient-to-r from-emerald-100/60 via-teal-100/60 to-cyan-100/60 blur-2xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 sm:text-4xl">About Us</h2>
          <p className="mt-3 text-emerald-800/80">
            We are a specialist team focused on building reliable, secure, and compliant network infrastructures for laboratories. Our mission is to protect research integrity and ensure operational continuity through proactive cybersecurity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
            <h3 className="text-lg font-semibold text-emerald-900">Compliance First</h3>
            <p className="mt-2 text-sm text-emerald-800/80">ISO 27001, HIPAA, and GLP-ready designs that align with your lab's regulatory landscape.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-6 ring-1 ring-teal-100">
            <h3 className="text-lg font-semibold text-emerald-900">Network Reliability</h3>
            <p className="mt-2 text-sm text-emerald-800/80">Segmented architectures, zero-trust principles, and high-availability core switching.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-6 ring-1 ring-cyan-100">
            <h3 className="text-lg font-semibold text-emerald-900">Security Operations</h3>
            <p className="mt-2 text-sm text-emerald-800/80">24/7 monitoring, incident response playbooks, and continuous vulnerability management.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
