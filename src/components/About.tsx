import { Target, Eye, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To build high-quality, in-house software products that simplify complex, everyday challenges for professionals and students across India.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become a trusted name in the Indian startup ecosystem, known for creating practical technology that genuinely improves people's lives.",
    },
    {
      icon: Award,
      title: "Our Approach",
      description: "We build technology to solve real problems, not for the sake of technology. Every product starts with deep understanding of user needs.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            About Sathya Softech-in
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're a private software startup based in Hyderabad, Telangana, dedicated to identifying and
            solving real-world problems for Indian consumers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="w-16 h-16 rounded-full bg-orange-light flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
