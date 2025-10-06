import { useEffect, useRef, useState } from "react";
import { Heart, Award, Users } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish prepared with care and authentic homemade recipes"
    },
    {
      icon: Award,
      title: "Fresh Ingredients",
      description: "Only the finest, freshest ingredients in every bite"
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "Recipes passed down through generations"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-hero"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our <span className="text-primary">Story</span>
          </h2>
          
          <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            At Ria's Sandwiches, we believe that the best food comes from the heart. 
            Our journey began in a humble kitchen where traditional recipes met modern tastes. 
            Every paratha is hand-rolled with love, every sandwich crafted with care. 
            We use only the freshest ingredients and authentic spices to bring you 
            flavors that feel like home.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`text-center p-6 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
