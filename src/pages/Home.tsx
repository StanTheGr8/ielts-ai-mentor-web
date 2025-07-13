import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Star, Users, Zap } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import { Headphones, BookOpen, PenTool, Mic } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const features = [
    {
      icon: Headphones,
      title: "Listening Practice",
      description: "AI-powered listening exercises with real-time feedback and pronunciation analysis."
    },
    {
      icon: BookOpen,
      title: "Reading Comprehension",
      description: "Adaptive reading passages that adjust to your skill level with instant comprehension checks."
    },
    {
      icon: PenTool,
      title: "Writing with AI Feedback",
      description: "Get detailed feedback on grammar, vocabulary, coherence, and task achievement."
    },
    {
      icon: Mic,
      title: "Speaking Evaluation",
      description: "Practice speaking with AI that evaluates fluency, pronunciation, and coherence."
    }
  ];

  const stats = [
    { value: "10K+", label: "Students" },
    { value: "95%", label: "Success Rate" },
    { value: "4.9/5", label: "Rating" },
    { value: "50+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered IELTS Preparation
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Master the IELTS with Your
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Personal AI Instructor</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Practice Listening, Reading, Writing, and Speaking with real-time feedback. 
              Get personalized study plans and AI-generated mock tests tailored to your needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/signup">
                <Button variant="premium" size="lg" className="text-lg px-8 py-6">
                  Start Free Practice
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/mock-tests">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Try Mock Test
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform covers all four IELTS skills with personalized feedback and adaptive learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="hero" size="lg">
                Explore All Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Trusted by IELTS Learners Worldwide
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold text-foreground">4.9/5</span>
            </div>
            <p className="text-muted-foreground">Based on 2,500+ student reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                score: "IELTS 8.5",
                quote: "The AI feedback was incredibly detailed and helped me improve my writing score from 6.5 to 8.0!",
                avatar: "SC"
              },
              {
                name: "Ahmed Hassan",
                score: "IELTS 7.5",
                quote: "The speaking practice with AI made me feel confident during the actual test. Highly recommended!",
                avatar: "AH"
              },
              {
                name: "Maria Rodriguez",
                score: "IELTS 8.0",
                quote: "Mock tests were exactly like the real exam. The AI analysis helped identify my weak areas perfectly.",
                avatar: "MR"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-card rounded-2xl p-6 border border-card-border shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.score}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Achieve Your Target IELTS Score?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful students who improved their IELTS scores with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;