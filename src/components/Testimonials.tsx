import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart } from "lucide-react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The parathas remind me of my mom's cooking! Absolutely delicious and fresh.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      text: "Best sandwiches in town! The chicken mayo is my go-to comfort food.",
      rating: 5
    },
    {
      name: "Sneha Patel",
      text: "Warm, homely flavors that never disappoint. Ria's is now my favorite!",
      rating: 5
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-hero"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Heart className="text-destructive animate-pulse" size={40} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Customer <span className="text-primary">Love</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our happy customers have to say about us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-card hover:bg-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="text-primary animate-pulse" 
                      size={20} 
                      fill="currentColor"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
