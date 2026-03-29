'use client';

import { useClimberSolution } from '@/hooks/useClimberSolution';
import Link from 'next/link';

export default function ClimberSolutionPage() {
  const { features } = useClimberSolution();

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Push Your Limits.
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          JustClimb uses advanced AI to analyze your movement, suggest better beta, 
          and track your journey from V0 to Pro.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
  {features.map((feature, index) => (
    <div 
      key={index} 
      className="relative group h-[400px] rounded-3xl overflow-hidden border border-neutral-800 transition-all duration-500 hover:border-blue-500/50"
    >
      {/* BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${feature.bgImage}')` }}
      />

      {/* GRADIENT OVERLAY (The Scrim) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

      {/* CONTENT */}
      <div className="relative h-full flex flex-col justify-end p-8">
        <div className="text-4xl mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
        <p className="text-gray-300 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 mt-32">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to send your project?</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Join the waitlist to be among the first to test our AI Beta Assistant.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/login">
              <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition shadow-lg">
                Create Free Account
              </button>
            </Link>
            <Link href="/demo">
              <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition">
                Talk to Sales
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}