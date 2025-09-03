import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, CheckCircle2, ArrowRight } from "lucide-react";

const Activities = () => {
  const upcomingActivities = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Intensive 3-day workshop covering React, Node.js, and full-stack development",
      date: "March 15-17, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "KIBOTECH Main Campus",
      participants: 45,
      maxParticipants: 50,
      category: "Workshop",
      status: "upcoming"
    },
    {
      id: 2,
      title: "AI & Machine Learning Seminar",
      description: "Explore the latest trends in artificial intelligence and machine learning applications",
      date: "March 22, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Virtual Event",
      participants: 120,
      maxParticipants: 150,
      category: "Seminar",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Mobile App Development Challenge",
      description: "24-hour hackathon to build innovative mobile applications",
      date: "March 28-29, 2024",
      time: "6:00 PM - 6:00 PM",
      location: "KIBOTECH Innovation Lab",
      participants: 32,
      maxParticipants: 40,
      category: "Hackathon",
      status: "upcoming"
    }
  ];

  const completedActivities = [
    {
      id: 4,
      title: "Cybersecurity Fundamentals",
      description: "Introduction to cybersecurity principles and best practices",
      date: "February 28, 2024",
      participants: 85,
      category: "Workshop",
      status: "completed",
      feedback: 4.8
    },
    {
      id: 5,
      title: "Data Science & Analytics",
      description: "Hands-on workshop covering Python, pandas, and data visualization",
      date: "February 20-21, 2024", 
      participants: 67,
      category: "Workshop",
      status: "completed",
      feedback: 4.9
    },
    {
      id: 6,
      title: "Cloud Computing with AWS",
      description: "Introduction to Amazon Web Services and cloud architecture",
      date: "February 15, 2024",
      participants: 112,
      category: "Seminar",
      status: "completed",
      feedback: 4.7
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Workshop": return "bg-primary text-primary-foreground";
      case "Seminar": return "bg-secondary text-secondary-foreground";
      case "Hackathon": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Activities & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our hands-on workshops, seminars, and challenges designed to enhance your tech skills
            and connect with fellow innovators.
          </p>
        </div>

        {/* Upcoming Activities */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mr-4">Upcoming Activities</h3>
            <Badge variant="secondary" className="px-3 py-1">
              {upcomingActivities.length} Events
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingActivities.map((activity) => (
              <Card key={activity.id} className="card-gradient border-border/50 hover:border-primary/50 transition-smooth group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(activity.category)}>
                      {activity.category}
                    </Badge>
                    <div className="text-xs text-muted-foreground">
                      {activity.participants}/{activity.maxParticipants} joined
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {activity.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {activity.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {activity.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {activity.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {activity.participants} participants
                  </div>
                  <Button variant="hero" className="w-full mt-4 group">
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Completed Activities */}
        <div>
          <div className="flex items-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mr-4">Completed Activities</h3>
            <Badge variant="outline" className="px-3 py-1">
              {completedActivities.length} Events
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedActivities.map((activity) => (
              <Card key={activity.id} className="card-gradient border-border/30 opacity-90 hover:opacity-100 transition-smooth">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(activity.category)}>
                      {activity.category}
                    </Badge>
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <CardTitle className="text-xl text-foreground/90">
                    {activity.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                    {activity.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                    {activity.participants} participants
                  </div>
                  {activity.feedback && (
                    <div className="flex items-center justify-between pt-2 border-t border-border/30">
                      <span className="text-sm text-muted-foreground">Feedback:</span>
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-sm font-medium ml-1">{activity.feedback}/5</span>
                      </div>
                    </div>
                  )}
                  <Button variant="outline" className="w-full mt-4" disabled>
                    Event Completed
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 rounded-lg bg-gradient-card border border-border/50">
          <h3 className="text-2xl font-bold text-gradient mb-4">
            Don't Miss Our Next Event
          </h3>
          <p className="text-muted-foreground mb-6">
            Stay updated with the latest activities and be the first to register for upcoming events.
          </p>
          <Button variant="hero" size="lg">
            Subscribe to Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;