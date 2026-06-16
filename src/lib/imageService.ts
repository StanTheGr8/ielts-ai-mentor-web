import { supabase } from './supabase';

export const imageService = {
  /**
   * Uploads an image to Supabase Storage bucket 'avatars'.
   */
  async uploadImage(file: File): Promise<string> {
    console.log(`Uploading image ${file.name} to Supabase Storage...`);

    // Create a unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `profiles/${fileName}`;

    // Upload to the 'avatars' bucket
    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(filePath, file);

    if (error) throw error;

    // Get the public URL for the uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    return publicUrl;
  },

  async deleteImage(url: string): Promise<void> {
    // Extract path from URL
    const path = url.split('/').pop();
    if (!path) return;

    const { error } = await supabase.storage
      .from('avatars')
      .remove([`profiles/${path}`]);

    if (error) throw error;
  }
};
