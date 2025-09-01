import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, Users, Zap, ArrowRight, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Expert-Led Training",
      description: "Cutting-edge courses designed by industry professionals covering the latest technologies and methodologies.",
      features: ["Live Interactive Sessions", "Industry Case Studies", "Certification Programs", "24/7 Learning Support"],
      gradient: "bg-gradient-hero"
    },
    {
      icon: Briefcase,
      title: "Hands-on Internships",
      description: "Real-world internship opportunities with top companies to gain practical experience and build your portfolio.",
      features: ["Live Project Work", "Mentorship Program", "Industry Exposure", "Portfolio Development"],
      gradient: "bg-gradient-accent"
    },
    {
      icon: Users,
      title: "Immersive Workshops",
      description: "Interactive workshops focused on practical skills development and collaborative learning experiences.",
      features: ["Group Projects", "Peer Learning", "Expert Guidance", "Networking Opportunities"],
      gradient: "bg-primary/80"
    },
    {
      icon: Zap,
      title: "Real-time Projects",
      description: "Work on live projects with real clients to understand the complete software development lifecycle.",
      features: ["Client Interaction", "Agile Methodology", "Code Reviews", "Deployment Experience"],
      gradient: "bg-secondary/80"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a dynamic team of industry professionals, educators, and tech experts passionate about creating real-world learning experiences for college students.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-gradient border-border/50 hover:border-primary/50 transition-smooth card-shadow group hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Star className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button variant="outline" className="w-full border-primary/30 hover:border-primary group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center space-y-8 p-12 rounded-2xl card-gradient border border-border/50 card-shadow">
          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Tech Journey?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our comprehensive training programs and internship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Apply for Internship
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary/50 hover:border-primary">
              Browse Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;