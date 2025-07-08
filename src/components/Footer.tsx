import { Button } from "@/components/ui/button";
import { Globe, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "الخدمات", href: "#services" },
    { name: "أعمالنا", href: "#portfolio" },
    { name: "الأسعار", href: "#pricing" },
    { name: "التواصل", href: "#contact" }
  ];

  const externalLinks = [
    { name: "الموقع الرسمي", href: "https://ehabgm.online" },
    { name: "المتجر الإلكتروني", href: "https://ehab.shop" },
    { name: "البورتفوليو", href: "https://ehabgm.mystrikingly.com" },
    { name: "مدونة ووردبريس", href: "https://ehabgm.wordpress.com" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">EhabGM</h3>
                <p className="text-sm text-muted-foreground">Online Services</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              منصة شاملة تقدم حلولاً متكاملة في المجالات الرقمية بما يشمل التصميم الجرافيكي، 
              التسويق الإلكتروني، وإنشاء المواقع والمتاجر الإلكترونية بجودة عالمية وأسعار تنافسية.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>صُنع بـ</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>في القاهرة، مصر</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">مواقعنا</h4>
            <ul className="space-y-3">
              {externalLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    size="sm"
                    className="p-0 h-auto text-muted-foreground hover:text-primary text-sm justify-start"
                    onClick={() => window.open(link.href, '_blank')}
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 mr-1" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} جميع الحقوق محفوظة لشركة EhabGM Online Services
            </p>
            <div className="flex items-center space-x-4">
              <Button
                variant="link"
                size="sm"
                onClick={() => window.open('https://wa.me/201022679250', '_blank')}
                className="text-primary hover:text-primary-glow"
              >
                تواصل معنا
              </Button>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm text-muted-foreground">
                دعم 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;