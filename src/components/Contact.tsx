import { Mail, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow border-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-orange-light flex items-center justify-center flex-shrink-0">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-navy">Email Us</h3>
                <a 
                  href="mailto:info@sathyasoftech.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@sathyasoftech.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-orange-light flex items-center justify-center flex-shrink-0">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-navy">Visit Us</h3>
                <p className="text-muted-foreground leading-relaxed">
                  First Floor, Mounika Towers<br />
                  2-32, Kavuri Hills, Madhapur<br />
                  Hyderabad, Telangana 500033
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
