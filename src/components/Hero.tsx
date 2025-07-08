import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="text-sm px-4 py-2 animate-slide-up">
            <Star className="w-4 h-4 ml-2 text-accent" />
            خدمات رقمية احترافية منذ 2020
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="block">EhabGM</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Online Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              منصة شاملة تقدم خدمات التصميم الجرافيكي، التسويق الإلكتروني، 
              وإنشاء المواقع والمتاجر الإلكترونية بجودة عالمية وأسعار تنافسية
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">دعم متواصل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">رضا العملاء</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <ArrowRight className="w-5 h-5 ml-2" />
              ابدأ مشروعك الآن
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Users className="w-5 h-5 ml-2" />
              شاهد أعمالنا
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-smooth">
              <Zap className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">تسليم سريع</h3>
              <p className="text-sm text-muted-foreground">إنجاز المشاريع في أقل وقت ممكن مع الحفاظ على أعلى جودة</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-smooth">
              <Star className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">جودة احترافية</h3>
              <p className="text-sm text-muted-foreground">تصاميم وخدمات بمعايير عالمية تناسب جميع المشاريع</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-smooth">
              <Users className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">دعم مستمر</h3>
              <p className="text-sm text-muted-foreground">فريق متاح على مدار 24 ساعة لتلبية جميع احتياجاتك</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;