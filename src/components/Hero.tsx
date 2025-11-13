import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Building Software That Solves{" "}
          <span className="text-primary">Real Problems</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Sathya Softech-in is a Hyderabad-based startup creating intuitive, reliable
          solutions for everyday challenges faced by Indian students and professionals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection("hlopg")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 group"
          >
            Discover HloPG
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("about")}
            className="border-2 font-semibold px-8"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
