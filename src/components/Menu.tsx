import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import paneerParatha from "@/assets/paneer-paratha.jpg";
import alooCheeseParatha from "@/assets/aloo-cheese-paratha.jpg";
import grilledVegSandwich from "@/assets/grilled-veg-sandwich.jpg";
import chickenMayoSandwich from "@/assets/chicken-mayo-sandwich.jpg";

const Menu = () => {
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

  const menuItems = [
    {
      name: "Paneer Paratha",
      image: paneerParatha,
      description: "Stuffed with spiced cottage cheese, perfectly crispy and golden"
    },
    {
      name: "Aloo Cheese Paratha",
      image: alooCheeseParatha,
      description: "Loaded with spiced potatoes and melted cheese goodness"
    },
    {
      name: "Grilled Veg Sandwich",
      image: grilledVegSandwich,
      description: "Fresh veggies, melted cheese, grilled to perfection"
    },
    {
      name: "Chicken Mayo Sandwich",
      image: chickenMayoSandwich,
      description: "Tender chicken with creamy mayo, fresh and flavorful"
    }
  ];

  return (
    <section 
      id="menu"
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Bestsellers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites that keep our customers coming back for more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer overflow-hidden border-2 border-border hover:border-primary transition-all duration-500 hover:-translate-y-3 hover:shadow-glow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
