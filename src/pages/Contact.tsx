import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Headphones } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "support@ieltsai.com",
      subtext: "We respond within 2 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      subtext: "Mon-Fri, 9 AM - 6 PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      contact: "123 Education St, Learning City",
      subtext: "Schedule an appointment"
    },
    {
      icon: Clock,
      title: "Support Hours",
      description: "We're here to help",
      contact: "24/7 AI Chat Support",
      subtext: "Human support: Mon-Fri"
    }
  ];

  const faqItems = [
    {
      question: "How does AI feedback work?",
      answer: "Our AI analyzes your responses using advanced natural language processing to provide detailed feedback on grammar, vocabulary, coherence, and task achievement."
    },
    {
      question: "Can I practice speaking with the AI?",
      answer: "Yes! Our AI speaking evaluator can assess your pronunciation, fluency, and vocabulary in real-time, providing band scores and improvement suggestions."
    },
    {
      question: "How accurate are the mock test scores?",
      answer: "Our AI scoring system has been trained on thousands of IELTS responses and provides band score predictions with 95% accuracy compared to official IELTS scores."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, our platform is web-based and fully responsive. We're working on mobile apps for iOS and Android, coming soon!"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about IELTS AI? We're here to help you succeed. 
            Reach out to our support team for assistance with your IELTS preparation journey.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <Card className="p-8 bg-gradient-card border-card-border shadow-medium">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What can we help you with?"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your question or feedback..."
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 bg-gradient-card border-card-border hover:shadow-medium transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{info.description}</p>
                        <p className="text-foreground font-medium">{info.contact}</p>
                        <p className="text-muted-foreground text-sm">{info.subtext}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our AI-powered IELTS preparation platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((faq, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-card-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Multiple Ways to Get Help
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the support option that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-card border-card-border text-center hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Live Chat</h3>
              <p className="text-muted-foreground mb-6">
                Get instant help with our AI-powered chat support, available 24/7.
              </p>
              <Button variant="outline" className="w-full">Start Chat</Button>
            </Card>

            <Card className="p-8 bg-gradient-card border-card-border text-center hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community Forum</h3>
              <p className="text-muted-foreground mb-6">
                Connect with other IELTS learners and share experiences.
              </p>
              <Button variant="outline" className="w-full">Join Forum</Button>
            </Card>

            <Card className="p-8 bg-gradient-card border-card-border text-center hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Phone Support</h3>
              <p className="text-muted-foreground mb-6">
                Speak directly with our support team during business hours.
              </p>
              <Button variant="outline" className="w-full">Call Now</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;