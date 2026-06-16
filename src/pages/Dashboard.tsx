import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Save, LogOut, User, Mail } from 'lucide-react';
import { userService } from '@/lib/userService';
import { imageService } from '@/lib/imageService';
import { toast } from 'sonner';

const Dashboard = () => {
  const [profile, setProfile] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    async function loadProfile() {
      const data = await userService.getProfile();
      if (data) {
        setProfile(data);
        setFormData({ name: data.name, email: data.email });
      } else {
        // Redirect to sign-in if no profile exists
        window.location.href = '/signin';
      }
    }
    loadProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setImagePreview(URL.createObjectURL(file));
      setUploading(true);
      const imageUrl = await imageService.uploadImage(file);
      
      const updatedProfile = await userService.updateProfile({ profilePicUrl: imageUrl });
      setProfile(updatedProfile);
      toast.success("Profile picture updated successfully!");
    } catch (error) {
      toast.error("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  const handleSaveProfile = async () => {
    try {
      const updatedProfile = await userService.updateProfile(formData);
      setProfile(updatedProfile);
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to save profile.");
    }
  };

  const handleLogout = async () => {
    await userService.clearProfile();
    window.location.href = '/signin';
  };

  if (!profile) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">User Dashboard</h1>
          <Button variant="ghost" onClick={handleLogout} className="text-destructive hover:bg-destructive/10">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <Card className="md:col-span-1 h-fit">
            <CardHeader className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 group">
                <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-glow">
                  <AvatarImage src={imagePreview || profile.profile_pic_url} alt={profile.name} />
                  <AvatarFallback className="text-2xl font-bold">{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <label className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-lg">
                  <Camera className="w-4 h-4" />
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    disabled={uploading}
                  />
                </label>
                {uploading && (
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    Uploading...
                  </div>
                )}
              </div>
              <CardTitle className="text-2xl font-bold">{profile.name}</CardTitle>
              <CardDescription>{profile.email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="w-4 h-4 mr-2" />
                <span>Member since {profile.joined_date}</span>
              </div>
            </CardContent>
          </Card>

          {/* User Info Section */}
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Manage your personal details and preferences</CardDescription>
              </div>
              <Button 
                variant={isEditing ? "secondary" : "outline"} 
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground flex items-center">
                      <User className="w-4 h-4 mr-2" /> Full Name
                    </label>
                    {isEditing ? (
                      <Input 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="Your name" 
                      />
                    ) : (
                      <div className="text-lg font-medium p-2 rounded-md bg-muted/50 border border-border">
                        {profile.name}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground flex items-center">
                      <Mail className="w-4 h-4 mr-2" /> Email Address
                    </label>
                    {isEditing ? (
                      <Input 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="email@example.com" 
                      />
                    ) : (
                      <div className="text-lg font-medium p-2 rounded-md bg-muted/50 border border-border">
                        {profile.email}
                      </div>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end pt-4">
                    <Button onClick={handleSaveProfile} className="px-8">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
