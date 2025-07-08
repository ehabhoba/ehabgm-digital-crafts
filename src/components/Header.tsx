import { Button } from "@/components/ui/button";
import { Globe, Menu, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EhabGM</h1>
              <p className="text-xs text-muted-foreground">Online Services</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              الخدمات
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-smooth">
              أعمالنا
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-smooth">
              الأسعار
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              التواصل
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <Button variant="hero" size="sm" className="hidden md:flex">
              <MessageCircle className="w-4 h-4 ml-2" />
              ابدأ مشروعك الآن
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;