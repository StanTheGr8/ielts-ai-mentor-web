import { CheckCircle, Headphones, BookOpen, PenTool, Mic, Brain, Target, Clock, BarChart3 } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Features = () => {
  const mainFeatures = [
    {
      icon: Headphones,
      title: "AI-Powered Listening Practice",
      description: "Practice with diverse accents and topics. Our AI analyzes your comprehension patterns and provides targeted feedback to improve your listening skills."
    },
    {
      icon: BookOpen,
      title: "Adaptive Reading Comprehension",
      description: "Dynamic reading passages that adapt to your skill level. Get instant feedback on comprehension and vocabulary with AI-powered explanations."
    },
    {
      icon: PenTool,
      title: "Writing with Expert AI Feedback",
      description: "Receive detailed analysis on task achievement, coherence, vocabulary, and grammar. Our AI provides specific suggestions for improvement."
    },
    {
      icon: Mic,
      title: "Advanced Speaking Evaluation",
      description: "Practice speaking with AI that evaluates pronunciation, fluency, grammar, and vocabulary. Get band scores and detailed feedback instantly."
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: "Intelligent Analysis",
      description: "Advanced AI algorithms analyze your performance patterns and identify areas for improvement."
    },
    {
      icon: Target,
      title: "Personalized Study Plans",
      description: "Custom study plans generated based on your current level and target score goals."
    },
    {
      icon: Clock,
      title: "Real-time Feedback",
      description: "Get instant feedback on all exercises, just like having a personal tutor available 24/7."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Detailed analytics and progress reports to track your improvement over time."
    }
  ];

  const benefits = [
    "Unlimited practice sessions",
    "AI-generated mock tests",
    "Detailed performance analytics",
    "Multiple accent exposure",
    "Grammar and vocabulary enhancement",
    "Band score predictions",
    "Flexible study scheduling",
    "Expert content curation"
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Comprehensive IELTS Preparation
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Powered by AI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the future of IELTS preparation with our AI-powered platform that adapts to your learning style and provides personalized feedback across all four skills.
          </p>
          <Link to="/signup">
            <Button variant="premium" size="lg">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Master All Four IELTS Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform covers every aspect of the IELTS test with AI-powered feedback and personalized learning paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="lg:p-8"
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced AI Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge artificial intelligence that understands your learning patterns and provides intelligent feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our platform provides comprehensive tools and features designed to help you achieve your target IELTS score efficiently and effectively.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-card rounded-3xl p-8 border border-card-border shadow-large">
              <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="mb-6 opacity-90">
                  Join thousands of students who have improved their IELTS scores with our AI-powered platform.
                </p>
                <Link to="/signup">
                  <Button variant="secondary" size="lg" className="w-full">
                    Begin Free Trial
                  </Button>
                </Link>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  No credit card required • 7-day free trial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in just three simple steps and begin your journey to IELTS success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Take Assessment",
                description: "Complete our initial assessment to determine your current IELTS level and create a personalized study plan."
              },
              {
                step: "02",
                title: "Practice with AI",
                description: "Engage with AI-powered exercises across all four skills: Listening, Reading, Writing, and Speaking."
              },
              {
                step: "03",
                title: "Track Progress",
                description: "Monitor your improvement with detailed analytics and adjust your study plan as you progress."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;