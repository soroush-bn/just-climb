import { createClient } from '@/utils/supabase/client';

// We initialize the database connection once here
const supabase = createClient();

export const AuthRepository = {
  
  async signUp(email: string, password: string) {
    // We just return the raw response back to whoever called this
    return await supabase.auth.signUp({ email, password });
  },

  async signIn(email: string, password: string) {
    return await supabase.auth.signInWithPassword({ email, password });
  },

  async signOut() {
    return await supabase.auth.signOut();
  },

  async getCurrentUser() {
    return await supabase.auth.getUser();
  }
};