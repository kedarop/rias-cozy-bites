import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-destructive" size={24} fill="currentColor" />
            <p className="text-2xl font-bold">Ria's Sandwiches</p>
          </div>
          <p className="text-lg mb-4">
            Where Every Bite Feels Like Home
          </p>
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Ria's Sandwiches. Made with love for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
