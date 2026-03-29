import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthRepository } from '@/repositories/AuthRepository'; // Injecting the Model!

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    // The ViewModel asks the Model to do the heavy lifting
    const { error } = await AuthRepository.signUp(email, password);
    
    if (error) {
      setError(error.message);
    } else {
      alert('Success! Check your email for a confirmation link.');
    }
    setLoading(false);
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    // The ViewModel asks the Model to do the heavy lifting
    const { error } = await AuthRepository.signIn(email, password);
    
    if (error) {
      setError(error.message);
    } else {
      router.push('/profile');
    }
    setLoading(false);
  };

  return {
    signIn,
    signUp,
    loading,
    error,
  };
}