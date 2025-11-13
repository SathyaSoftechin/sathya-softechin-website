import { AlertCircle, UserX, DollarSign, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Lack of Verification",
      description: "High prevalence of fake listings, scams, and bait-and-switch tactics make finding accommodation risky.",
    },
    {
      icon: UserX,
      title: "Broker Dependency",
      description: "Students are forced to go through unorganized brokers, paying high fees for unreliable information.",
    },
    {
      icon: DollarSign,
      title: "Information Asymmetry",
      description: "Properties rarely match online descriptions, leading to wasted time and deposits.",
    },
    {
      icon: MapPin,
      title: "Safety Concerns",
      description: "No reliable way to verify safety, hygiene, or neighborhood without physical visits.",
    },
  ];

  return (
    <section id="problem" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            The Problem We're Solving
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            In India's major educational and professional hubs, finding safe, verified accommodation is a
            fragmented and frustrating experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-background border-border">
              <div className="w-12 h-12 rounded-full bg-orange-light flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-navy">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
