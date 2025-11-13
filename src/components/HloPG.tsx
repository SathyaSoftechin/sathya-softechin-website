import { Shield, Users, Image, Star, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HloPG = () => {
  const features = [
    {
      icon: Shield,
      title: "Verification as a Service",
      description: "Every property is physically verified by our team. Only verified listings get the 'HloPG Verified' badge.",
    },
    {
      icon: Users,
      title: "Broker-Free Platform",
      description: "Direct connection between property owners and users, eliminating middlemen and reducing costs.",
    },
    {
      icon: Image,
      title: "Transparent Listings",
      description: "High-resolution verified photos, 360° tours, and comprehensive amenity checklists for every property.",
    },
    {
      icon: Star,
      title: "Community Trust",
      description: "Genuine, verified reviews from past and current tenants help you make informed decisions.",
    },
  ];

  return (
    <section id="hlopg" className="py-20 px-4 bg-purple-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-purple flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold text-white">h</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Introducing <span className="text-purple">HloPG</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A mobile-first platform bringing trust, transparency, and efficiency to the hostel and
            PG finding process. Connect directly with verified property owners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow bg-background border-border">
              <div className="w-14 h-14 rounded-full bg-purple-light flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Badge className="bg-purple-light text-purple border-purple/20 px-6 py-3 text-base font-medium">
            <Rocket className="h-4 w-4 mr-2" />
            Currently in Development - Coming Soon
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default HloPG;
