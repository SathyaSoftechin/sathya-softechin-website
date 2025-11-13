import { Button } from "@/components/ui/button";
import logo from "@/assets/sathya-logo.png";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Sathya Softech-in" className="h-12" />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("problem")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            The Problem
          </button>
          <button 
            onClick={() => scrollToSection("hlopg")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            HloPG
          </button>
          <button 
            onClick={() => scrollToSection("values")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Our Values
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
          >
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
