import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="KIBOTECH - Future Technology Learning" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-hero rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-accent rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-primary/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Brand Name */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="text-gradient">KIBOTECH</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Empowering Students,<br />
            <span className="text-primary">Shaping Futures</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We bridge the gap between education and industry by providing hands-on internships and career-focused workshops
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary/50 hover:border-primary">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">500+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">50+</div>
              <div className="text-muted-foreground">Industry Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">95%</div>
              <div className="text-muted-foreground">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;