import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:pt-32 lg:pb-24">
        <div className="flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 w-fit rounded-full bg-white/70 px-3 py-1 text-emerald-700 shadow-sm ring-1 ring-emerald-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Secure by Design
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-emerald-900 sm:text-5xl lg:text-6xl">
            Laboratory Network & Cybersecurity
          </h1>
          <p className="mt-4 text-lg leading-7 text-emerald-800/80 sm:max-w-xl">
            We safeguard scientific data and lab operations with resilient networks, compliant security, and real‑time visibility—
            crafted for modern laboratories.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700 transition">
              Explore Services
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md bg-white/80 px-5 py-3 text-emerald-800 shadow ring-1 ring-emerald-200 backdrop-blur hover:bg-white">
              About Us
            </a>
          </div>
        </div>

        <div className="relative mt-12 h-[420px] w-full rounded-xl bg-white/40 shadow-inner ring-1 ring-emerald-200/50 backdrop-blur lg:mt-0 lg:h-[520px]">
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-50/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
