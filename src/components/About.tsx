import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="text-gradient">KIBOTECH</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            KIBOTECH is a forward-thinking software startup dedicated to building innovative digital solutions while empowering future tech professionals.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Building the Next Generation of Tech Leaders
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer expert-led trainings and hands-on internships across cutting-edge domains. Our startup is dedicated to helping students develop practical skills through structured internships, immersive workshops, and real-time project exposure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a dynamic team of industry professionals, educators, and tech experts passionate about creating real-world learning experiences for college students.
              </p>
            </div>
            
            <Button variant="accent" size="lg" className="group">
              Learn More About Us
              <Target className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </Button>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="card-gradient border-border/50 hover:border-primary/50 transition-smooth card-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Expert Training</h4>
                <p className="text-muted-foreground">
                  Industry-led workshops and training programs
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50 hover:border-primary/50 transition-smooth card-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Hands-on Experience</h4>
                <p className="text-muted-foreground">
                  Real-world projects and internship opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50 hover:border-primary/50 transition-smooth card-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold">Industry Recognition</h4>
                <p className="text-muted-foreground">
                  Certificates and skills valued by employers
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50 hover:border-primary/50 transition-smooth card-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/80 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h4 className="text-xl font-semibold">Career Focus</h4>
                <p className="text-muted-foreground">
                  Direct pathway from learning to employment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;