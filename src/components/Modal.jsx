import React from 'react';

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-[92%] max-w-xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-emerald-100">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-emerald-900">{title}</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-md px-2 py-1 text-emerald-700 hover:bg-emerald-50"
          >
            ✕
          </button>
        </div>
        <div className="mt-4 text-emerald-800/90 leading-6 text-sm">
          {children}
        </div>
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Got it</button>
        </div>
      </div>
    </div>
  );
}
