import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Floating Food Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="w-32 h-32 rounded-full bg-primary/30 blur-3xl" />
      </div>
      <div className="absolute bottom-40 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <div className="w-40 h-40 rounded-full bg-accent/30 blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Made with Love —{" "}
            <span className="text-primary">Fresh, Hot & Irresistible!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Taste the magic of homemade sandwiches & parathas at Ria's.
          </p>

          <Button 
            size="lg" 
            variant="hero" 
            onClick={scrollToMenu}
            className="animate-bounce-slow"
          >
            Order Now
            <ArrowDown className="ml-2 animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={32} />
      </div>
    </section>
  );
};

export default Hero;
