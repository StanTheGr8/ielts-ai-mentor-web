import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : {
      auth: { 
        getUser: async () => ({ data: { user: null }, error: { message: 'Missing Supabase Config' } }),
        signInWithPassword: async () => ({ data: null, error: { message: 'Missing Supabase Config' } }),
        signOut: async () => ({ data: null, error: { message: 'Missing Supabase Config' } }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: async () => ({ data: null, error: { message: 'Missing Supabase Config' } }),
          }),
        }),
      }),
      storage: {
        from: () => ({
          upload: async () => ({ data: null, error: { message: 'Missing Supabase Config' } }),
          getPublicUrl: () => ({ data: { publicUrl: '' } }),
          remove: async () => ({ data: null, error: { message: 'Missing Supabase Config' } }),
        }),
      },
    };
