import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGVyaWxlJTIwbGFiJTIwYmVuY2glMjB3aXRofGVufDB8MHx8fDE3NjI0MDA3NjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Sterile lab bench with beakers and flasks under soft light',
  },
  {
    src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop',
    alt: 'Microscope with connected data acquisition in laboratory',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
    alt: 'Researcher handling pipette with PPE in controlled environment',
  },
  {
    src: 'https://images.unsplash.com/photo-1599318142003-2570ff9dda6c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZXNlYXJjaGVyJTIwaGFuZGxpbmclMjBwaXBldHRlJTIwd2l0aHxlbnwwfDB8fHwxNzYyNDAwNzYyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Glassware with pastel liquids reflecting lab branding',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 sm:text-4xl">Gallery</h2>
          <p className="mt-3 text-emerald-800/80">Pastel visuals of instrumentation, workflows, and secure lab spaces.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, idx) => (
            <div key={idx} className="group overflow-hidden rounded-xl border border-emerald-100 bg-emerald-50/30">
              <img
                src={img.src}
                alt={img.alt}
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
