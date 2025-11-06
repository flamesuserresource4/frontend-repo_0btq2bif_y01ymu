import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Inquiry: Laboratory Network & Cybersecurity');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@labsecure.example?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-white via-emerald-50 to-teal-50 py-20">
      <div className="absolute inset-x-0 -top-10 mx-auto h-40 max-w-5xl rounded-3xl bg-gradient-to-r from-emerald-100/60 via-teal-100/60 to-cyan-100/60 blur-2xl" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 sm:text-4xl">Ready to secure your lab?</h2>
          <p className="mt-3 text-emerald-800/80">
            Tell us about your environment—LIMS, ELN, instruments, compliance needs—and we’ll design a tailored network & security plan.
          </p>
          <div className="mt-6 rounded-xl border border-emerald-200 bg-white p-4 shadow-sm">
            <ul className="list-disc pl-5 text-sm text-emerald-800/80">
              <li>Free discovery call</li>
              <li>Assessment of current architecture</li>
              <li>Actionable roadmap with timelines</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-emerald-900">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-emerald-900 shadow-sm focus:border-emerald-400 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-900">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-emerald-900 shadow-sm focus:border-emerald-400 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-900">Message</label>
              <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required className="mt-1 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-emerald-900 shadow-sm focus:border-emerald-400 focus:outline-none" />
            </div>
            <button type="submit" className="mt-2 rounded-md bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700">Request a consult</button>
          </div>
        </form>
      </div>
    </section>
  );
}
