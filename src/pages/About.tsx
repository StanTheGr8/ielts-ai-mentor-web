import { Brain, Target, Users, Zap, Award, Globe, Heart, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
  const aiTechnologies = [
    {
      name: "GPT-4",
      description: "Advanced language model for generating questions and providing detailed feedback"
    },
    {
      name: "Whisper",
      description: "Speech recognition technology for accurate speaking evaluation and pronunciation analysis"
    },
    {
      name: "LangChain",
      description: "Framework for building AI applications with context-aware language understanding"
    },
    {
      name: "Transformer Models",
      description: "Deep learning architecture for natural language processing and comprehension"
    },
    {
      name: "Neural Networks",
      description: "Machine learning algorithms for pattern recognition and adaptive learning"
    },
    {
      name: "Cloud AI",
      description: "Scalable cloud infrastructure ensuring fast, reliable AI-powered feedback"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Accessibility",
      description: "Making high-quality IELTS preparation accessible to learners worldwide, regardless of location or background."
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Leveraging cutting-edge AI technology to create the most effective and personalized learning experience."
    },
    {
      icon: Heart,
      title: "Student Success",
      description: "Every feature we build is designed with one goal: helping students achieve their target IELTS scores."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Empowering students from all corners of the world to unlock international opportunities through IELTS success."
    }
  ];

  const stats = [
    { value: "50+", label: "Countries Served" },
    { value: "10,000+", label: "Students Helped" },
    { value: "95%", label: "Success Rate" },
    { value: "4.9/5", label: "Student Rating" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Revolutionizing IELTS Preparation
              <span className="bg-gradient-primary bg-clip-text text-transparent"> with AI</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our mission is to democratize access to high-quality IELTS preparation by harnessing the power 
              of artificial intelligence. We believe every student deserves personalized, expert-level guidance 
              on their journey to IELTS success.
            </p>
            <Link to="/signup">
              <Button variant="premium" size="lg">
                Join Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  IELTS AI was born from a simple observation: millions of students worldwide struggle with 
                  IELTS preparation due to limited access to quality resources and personalized feedback. 
                  Traditional preparation methods are often expensive, time-consuming, and one-size-fits-all.
                </p>
                <p>
                  We set out to change this by creating an AI-powered platform that provides the same level 
                  of personalized attention as a private tutor, but accessible to everyone, anywhere, anytime. 
                  Our team of educators, AI researchers, and IELTS experts collaborated to build a system 
                  that truly understands how students learn.
                </p>
                <p>
                  Today, we're proud to serve students from over 50 countries, helping them achieve their 
                  dreams of studying abroad, immigrating to English-speaking countries, or advancing their careers.
                </p>
              </div>
            </div>
            <div className="bg-gradient-card rounded-3xl p-8 border border-card-border shadow-large">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape the future of IELTS preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-card-border text-center hover:shadow-medium transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              The Technology Behind Our Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage the most advanced AI technologies available to provide you with intelligent, 
              personalized, and effective IELTS preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTechnologies.map((tech, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-card-border hover:shadow-medium transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{tech.name}</h3>
                </div>
                <p className="text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Impact */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-card rounded-3xl p-8 border border-card-border shadow-large">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's leading AI-powered language learning platform, making high-quality 
                test preparation accessible to every student, regardless of their geographical location 
                or economic background. We envision a future where AI tutors provide personalized guidance 
                that adapts to each learner's unique needs and pace.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Making a Global Impact
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Quality Education for All
                    </h3>
                    <p className="text-muted-foreground">
                      Breaking down barriers to quality IELTS preparation and making it accessible worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Student-Centered Approach
                    </h3>
                    <p className="text-muted-foreground">
                      Every decision we make prioritizes student success and learning outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Global Opportunities
                    </h3>
                    <p className="text-muted-foreground">
                      Helping students unlock international education and career opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Experience AI-Powered Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who have transformed their IELTS preparation with our innovative platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;