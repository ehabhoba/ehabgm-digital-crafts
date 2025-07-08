import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Megaphone, 
  Globe, 
  Search, 
  FileText, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "التصميم الجرافيكي",
      description: "شعارات، هوية بصرية، بوستات سوشيال ميديا، وجميع التصاميم الإبداعية",
      features: ["تصميم شعارات احترافية", "بوستات سوشيال ميديا", "هوية بصرية متكاملة", "كروت شخصية وبروشورات"],
      priceFrom: "من 150 جنيه",
      popular: true
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "الإعلانات الممولة",
      description: "إدارة حملات إعلانية على فيسبوك، إنستقرام، جوجل وجميع المنصات",
      features: ["إعلانات فيسبوك وإنستقرام", "حملات جوجل آدز", "استهداف الجمهور المناسب", "تحليل النتائج والتحسين"],
      priceFrom: "من 350 جنيه",
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "المواقع والمتاجر الإلكترونية",
      description: "تصميم مواقع تعريفية ومتاجر إلكترونية متكاملة مع بوابات الدفع",
      features: ["مواقع تعريفية احترافية", "متاجر إلكترونية متكاملة", "تصميم متجاوب", "بوابات دفع آمنة"],
      priceFrom: "من 1500 جنيه",
      popular: false
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "تحسين محركات البحث",
      description: "تحسين ظهور موقعك في نتائج البحث وزيادة الزوار المستهدفين",
      features: ["تحليل SEO شامل", "تحسين المحتوى", "بناء الروابط", "تقارير دورية"],
      priceFrom: "من 400 جنيه",
      popular: false
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "كتابة المحتوى والسير الذاتية",
      description: "كتابة محتوى تسويقي وتصميم سير ذاتية احترافية",
      features: ["محتوى SEO", "سير ذاتية احترافية", "محتوى سوشيال ميديا", "كتابة إعلانية"],
      priceFrom: "من 150 جنيه",
      popular: false
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "استشارات تسويقية",
      description: "استشارات مخصصة لتطوير استراتيجيات التسويق الرقمي",
      features: ["تحليل المنافسين", "استراتيجية تسويقية", "خطة عمل رقمية", "متابعة الأداء"],
      priceFrom: "من 300 جنيه",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">خدماتنا</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            خدمات رقمية شاملة لنمو مشروعك
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الرقمية الاحترافية التي تساعدك على بناء حضور قوي على الإنترنت وتحقيق أهدافك التجارية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-primary ring-opacity-50' : ''
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 right-4 bg-accent text-accent-foreground">
                  الأكثر طلباً
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{service.priceFrom}</span>
                    <Badge variant="outline">يبدأ</Badge>
                  </div>
                  <Button className="w-full group" variant="outline">
                    اطلب الخدمة الآن
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Megaphone className="w-5 h-5 ml-2" />
            احصل على استشارة مجانية
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;