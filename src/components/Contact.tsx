import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-muted/30" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your tech journey? We'd love to hear from you. Contact us today to learn more about our programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-border/50 card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center space-x-3">
                <MessageSquare className="w-6 h-6 text-primary" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <Input
                    id="interest"
                    placeholder="e.g., Web Development, Data Science"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals and how we can help you..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full group">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="card-gradient border-border/50 card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">hello@kibotech.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/80 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">Tech Hub, Innovation City</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-gradient border-border/50 card-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start border-primary/30 hover:border-primary">
                  <Mail className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button variant="outline" className="w-full justify-start border-accent/30 hover:border-accent">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Live Chat Support
                </Button>
                <Button variant="outline" className="w-full justify-start border-secondary/30 hover:border-secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  Request Callback
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="card-gradient border-border/50 card-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;