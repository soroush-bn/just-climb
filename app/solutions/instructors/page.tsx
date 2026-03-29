'use client';

import { useCoachSolution } from '@/hooks/useCoachSolution';
import Link from 'next/link';

export default function InstructorSolutionPage() {
  const { features } = useCoachSolution();

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Coach Smarter.<br/>Train Harder.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Take the guesswork out of training. Use high-fidelity data and AI video analysis 
            to identify your athletes' weaknesses and turn them into strengths.
          </p>
        </div>
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

      {/* Testimonial / Trust Section */}
      <section className="max-w-5xl mx-auto px-6 mt-32">
        <div className="border-t border-neutral-800 pt-16 flex flex-col items-center">
          <blockquote className="text-2xl md:text-3xl italic text-gray-300 text-center mb-8">
            "JustClimb has completely changed how I provide feedback to my remote students. The AI overlay makes movement flaws obvious."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
            <div>
              <p className="font-bold text-white">Alex Johnson</p>
              <p className="text-sm text-gray-500">Professional Climbing Coach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="mt-24 text-center">
        <Link href="/demo">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg hover:shadow-purple-500/20">
            Apply for Early Access
          </button>
        </Link>
      </div>
    </main>
  );
}