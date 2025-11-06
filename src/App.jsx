import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-100/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="text-lg font-semibold tracking-tight text-emerald-800">LabSecure</a>
        <nav className="hidden gap-6 text-sm text-emerald-800/80 sm:flex">
          <a href="#about" className="hover:text-emerald-900">About</a>
          <a href="#services" className="hover:text-emerald-900">Services</a>
          <a href="#team" className="hover:text-emerald-900">Manager</a>
          <a href="#gallery" className="hover:text-emerald-900">Gallery</a>
          <a href="#contact" className="hover:text-emerald-900">Contact</a>
        </nav>
        <a href="#contact" className="hidden rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700 sm:inline-block">Get Started</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-emerald-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-emerald-800/70">© {new Date().getFullYear()} LabSecure. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-emerald-800/70">
            <a href="#about" className="hover:text-emerald-900">About</a>
            <a href="#services" className="hover:text-emerald-900">Services</a>
            <a href="#gallery" className="hover:text-emerald-900">Gallery</a>
            <a href="#contact" className="hover:text-emerald-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-inter text-emerald-900">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
