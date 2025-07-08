import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Globe,
  Mail,
  Clock,
  MapPin
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "واتساب",
      description: "للتواصل المباشر والاستفسارات السريعة",
      value: "+201022679250",
      action: "تواصل عبر واتساب",
      href: "https://wa.me/201022679250",
      primary: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "الهاتف",
      description: "للمكالمات المباشرة والاستشارات",
      value: "01140057253",
      action: "اتصال مباشر",
      href: "tel:+201140057253",
      primary: false
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      href: "https://facebook.com/graphicdesiner1",
      color: "text-blue-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram", 
      href: "https://instagram.com/ehab.gm1",
      color: "text-pink-600"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/ehabgm-online-services",
      color: "text-blue-700"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: "YouTube",
      href: "https://youtube.com/@ehabgm",
      color: "text-red-600"
    }
  ];

  const paymentMethods = [
    {
      method: "فودافون كاش",
      number: "01022679250",
      icon: "📱"
    },
    {
      method: "إنستا باي",
      number: "ehab5199 / 01022679250",
      icon: "🏦"
    },
    {
      method: "تحويل بنكي",
      number: "يتم تحديده عند الاتفاق",
      icon: "🏛️"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">تواصل معنا</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ابدأ مشروعك معنا اليوم
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            نحن متاحون على مدار 24 ساعة لتلبية احتياجاتك وتقديم أفضل الحلول الرقمية لمشروعك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 ${
                    method.primary ? 'ring-2 ring-primary ring-opacity-50' : ''
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        method.primary ? 'bg-gradient-primary text-white' : 'bg-muted text-primary'
                      }`}>
                        {method.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        {method.primary && (
                          <Badge variant="default" className="mt-1">الأساسي</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <div className="text-lg font-mono text-primary">{method.value}</div>
                    <Button 
                      className="w-full" 
                      variant={method.primary ? "hero" : "outline"}
                      onClick={() => window.open(method.href, '_blank')}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Info */}
            <Card className="bg-gradient-card shadow-elegant">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Clock className="w-8 h-8 text-primary" />
                    <h3 className="font-semibold">ساعات العمل</h3>
                    <p className="text-sm text-muted-foreground">24/7 دعم متواصل</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <MapPin className="w-8 h-8 text-primary" />
                    <h3 className="font-semibold">الموقع</h3>
                    <p className="text-sm text-muted-foreground">القاهرة، مصر</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Mail className="w-8 h-8 text-primary" />
                    <h3 className="font-semibold">البريد الإلكتروني</h3>
                    <p className="text-sm text-muted-foreground">via ehabgm.online</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment & Social */}
          <div className="space-y-6">
            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white ml-3">
                    💳
                  </div>
                  طرق الدفع
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((payment, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <span className="text-2xl">{payment.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{payment.method}</div>
                      <div className="text-xs text-muted-foreground">{payment.number}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-6 h-6 text-primary ml-3" />
                  تابعنا على
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center space-x-2"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <span className={social.color}>{social.icon}</span>
                      <span className="text-xs">{social.name}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick CTA */}
            <Card className="bg-gradient-hero text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">مستعجل؟</h3>
                <p className="text-sm mb-4 opacity-90">تواصل معنا الآن للحصول على رد فوري</p>
                <Button 
                  variant="outline" 
                  className="w-full bg-white text-primary hover:bg-gray-100"
                  onClick={() => window.open('https://wa.me/201022679250', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  واتساب فوري
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;