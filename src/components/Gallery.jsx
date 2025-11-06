import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZXJ2ZXIlMjByYWNrcyUyMGluJTIwYXxlbnwwfDB8fHwxNzYyMzk5NTMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Server racks in a secure data center',
  },
  {
    src: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Laboratory equipment connected to networked systems',
  },
  {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    alt: 'Team collaborating on cybersecurity monitoring',
  },
  {
    src: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1200&auto=format&fit=crop',
    alt: 'Close-up of network cabling in lab environment',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 sm:text-4xl">Gallery</h2>
          <p className="mt-3 text-emerald-800/80">A glimpse into secure, precision-driven laboratory networks.</p>
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
