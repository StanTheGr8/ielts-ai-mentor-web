export interface UserProfile {
  id: string;
  name: string;
  email: string;
  profile_pic_url: string; // Changed to snake_case for SQL compatibility
  joined_date: string;
}
