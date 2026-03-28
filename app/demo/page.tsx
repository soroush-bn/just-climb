'use client'; // This tells Next.js this is an interactive UI component, not a static server page

import { useState } from 'react';

export default function DemoPage() {
  // Equivalent to: var status by remember { mutableStateOf("IDLE") }
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

  // Equivalent to holding the values of your EditTexts
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gym: '',
    message: ''
  });

  // Equivalent to an EditText textWatcher / onValueChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Equivalent to your Submit Button's setOnClickListener
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Stops the browser from reloading the page
    setStatus('LOADING');

    try {
      // Equivalent to a Retrofit POST request
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          // ⚠️ PASTE YOUR WEB3FORMS ACCESS KEY HERE ⚠️
          access_key: '21de23c6-59a4-4249-bbf9-e44a4a8872c9', 
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', gym: '', message: '' }); // Clear form
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

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