import { supabase } from './supabase';
import { UserProfile } from './types';

export const userService = {
  async getProfile(): Promise<UserProfile | null> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error || !data) return null;
    return data as UserProfile;
  },

  async updateProfile(updates: Partial<UserProfile>, userId?: string): Promise<UserProfile> {
    let currentUserId = userId;

    if (!currentUserId) {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');
      currentUserId = user.id;
    }

    const { data, error } = await supabase
      .from('profiles')
      .upsert({
        id: currentUserId,
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) throw error;
    return data as UserProfile;
  },

  async clearProfile() {
    await supabase.auth.signOut();
  }
};
