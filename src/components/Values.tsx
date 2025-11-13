import { Lightbulb, Heart, Eye, Award } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Problem-First",
      description: "We build technology to solve a real problem, not for the sake of technology.",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Our users' safety, time, and trust are at the center of all our design decisions.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We believe in building an ecosystem of trust, starting with our own products.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We are committed to building reliable, secure, and polished products.",
    },
  ];

  return (
    <section id="values" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground">
            These principles guide everything we do at Sathya Softech-in.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 rounded-full bg-orange-light flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
