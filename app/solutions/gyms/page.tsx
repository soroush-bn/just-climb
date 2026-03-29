'use client';

import { useGymSolution } from '@/hooks/useGymSolution';
import Link from 'next/link';

export default function GymSolutionPage() {
  const { features } = useGymSolution();

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Smart Gyms.<br/>Better Setting.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Transform your facility into a data-driven climbing center. 
              Automate your grading process and understand your community like never before.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
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

      {/* Business CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="relative overflow-hidden bg-neutral-900 border border-neutral-800 rounded-[2rem] p-12">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold mb-6">Future-Proof Your Facility</h2>
            <p className="text-gray-400 mb-10 max-w-xl">
              From local bouldering caves to massive commercial centers, 
              JustClimb provides the tools to engage climbers and streamline operations.
            </p>
            <Link href="/demo">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-4 px-12 rounded-full transition-transform hover:scale-105">
                Book a Platform Demo
              </button>
            </Link>
          </div>
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
        </div>
      </section>
    </main>
  );
}