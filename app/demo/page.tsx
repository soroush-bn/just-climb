'use client'; 

import { useDemoForm } from '@/hooks/useDemoForm'; // Injecting the ViewModel!

export default function DemoPage() {
  // Observing the ViewModel
  const { status, formData, handleChange, handleSubmit } = useDemoForm();

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 bg-neutral-900 flex items-center justify-center">
      <div className="max-w-xl w-full bg-neutral-800 p-8 rounded-2xl shadow-2xl border border-neutral-700">
        
        <h1 className="text-3xl font-bold text-white mb-2">Request a Demo</h1>
        <p className="text-gray-400 mb-8">Fill out the details below and we will be in touch shortly.</p>

        {status === 'SUCCESS' ? (
          <div className="bg-green-500/10 border border-green-500 text-green-400 p-4 rounded-lg text-center font-medium">
            Awesome! Your request has been sent. We'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="john@example.com"
              />
            </div>

            {/* Gym Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Gym or Facility Name</label>
              <input
                required
                type="text"
                name="gym"
                value={formData.gym}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="e.g., Halifax Bouldering Club"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">How can we help?</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                placeholder="Tell us about your current setup..."
              ></textarea>
            </div>

            {/* Error Message */}
            {status === 'ERROR' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'LOADING'}
              className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'LOADING' ? 'Sending...' : 'Send Request'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}