import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <div className={`group relative bg-gradient-card rounded-2xl p-6 border border-card-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${className}`}>
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;