'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth'; // Injecting the ViewModel!

export default function LoginPage() {
  // Local UI state (Just what the user is typing right now)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Observing the ViewModel
  const { signIn, signUp, loading, error } = useAuth();

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 bg-neutral-900 flex items-center justify-center">
      <div className="max-w-md w-full bg-neutral-800 p-8 rounded-2xl shadow-2xl border border-neutral-700">
        
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="climber@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          {/* Observing the ViewModel's error state */}
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={() => signIn(email, password)} // Passing events to the ViewModel
              disabled={loading} // Observing the ViewModel's loading state
              className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => signUp(email, password)}
              disabled={loading}
              className="flex-1 bg-neutral-700 text-white font-bold py-3 rounded-lg hover:bg-neutral-600 transition disabled:opacity-50"
            >
              Sign Up
            </button>
          </div>
        </form>

      </div>
    </main>
  );
}