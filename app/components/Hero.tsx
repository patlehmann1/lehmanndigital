'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          opacity: 0.5,
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Available badge */}
        <div
          className={`inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm mb-8 ${
            mounted ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <span className="status-dot w-2 h-2 rounded-full bg-green-500 inline-block" />
          Available for new projects
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight ${
            mounted ? 'animate-fade-up delay-100' : 'opacity-0'
          }`}
        >
          Software that scales
          <span className="block text-blue-600 mt-2">with your business</span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto ${
            mounted ? 'animate-fade-up delay-200' : 'opacity-0'
          }`}
        >
          Senior full-stack developer with 7+ years building .NET and TypeScript
          applications — from greenfield projects to scaling legacy systems.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            mounted ? 'animate-fade-up delay-300' : 'opacity-0'
          }`}
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get in touch
          </a>
          <a
            href="#services"
            className="inline-block text-slate-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-lg border border-slate-200 hover:border-blue-300 bg-white transition-colors duration-200"
          >
            See what I do
          </a>
        </div>
      </div>
    </section>
  )
}
