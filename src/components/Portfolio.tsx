import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('is_published', true)
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPortfolioItems(data || []);
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'graphic_design':
        return 'تصميم جرافيكي';
      case 'marketing':
        return 'تسويق رقمي';
      case 'web_development':
        return 'تطوير ويب';
      case 'ui_ux':
        return 'تصميم UI/UX';
      default:
        return category;
    }
  };

  if (loading) {
    return (
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">جاري تحميل الأعمال...</div>
        </div>
      </section>
    );
  }

  const staticPortfolioItems = [
    {
      title: "مجموعة أعمال التصميم الجرافيكي",
      description: "شعارات، هويات بصرية، وتصاميم إبداعية لمختلف المشاريع",
      category: "تصميم جرافيكي",
      rating: 4.9,
      projects: "200+ مشروع"
    },
    {
      title: "حملات إعلانية ناجحة",
      description: "نماذج من الحملات الإعلانية المدارة بنتائج استثنائية",
      category: "تسويق رقمي",
      rating: 4.8,
      projects: "150+ حملة"
    },
    {
      title: "مواقع ومتاجر إلكترونية",
      description: "مواقع ومتاجر احترافية مع تصميم متجاوب وأداء عالي",
      category: "تطوير ويب",
      rating: 4.9,
      projects: "50+ موقع"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">أعمالنا</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            نماذج من مشاريعنا المميزة
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            تصفح مجموعة مختارة من أعمالنا السابقة التي تعكس جودة وإبداع خدماتنا في مختلف المجالات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {(portfolioItems.length > 0 ? portfolioItems : staticPortfolioItems).map((item, index) => (
            <Card key={item.id || index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">
                    {portfolioItems.length > 0 ? getCategoryName(item.category) : item.category}
                  </Badge>
                  {portfolioItems.length > 0 && item.is_featured && (
                    <Badge variant="default" className="bg-accent">مميز</Badge>
                  )}
                  {portfolioItems.length === 0 && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {portfolioItems.length > 0 ? item.title_ar : item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {portfolioItems.length > 0 ? item.description_ar : item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {portfolioItems.length > 0 
                      ? (item.completion_date ? `مكتمل ${new Date(item.completion_date).getFullYear()}` : 'مشروع حديث')
                      : item.projects
                    }
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    <Eye className="w-4 h-4 ml-1" />
                    عرض الأعمال
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Portfolio CTA */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center shadow-elegant">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              استكشف المجموعة الكاملة لأعمالنا
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              شاهد المئات من المشاريع المكتملة بنجاح والتي حققت نتائج استثنائية لعملائنا
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => window.open('https://ehabgm.mystrikingly.com', '_blank')}
              >
                <ExternalLink className="w-5 h-5 ml-2" />
                مشاهدة البورتفوليو الكامل
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Eye className="w-5 h-5 ml-2" />
                طلب عرض مخصص
              </Button>
            </div>

            {/* Additional Links */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">روابط إضافية لأعمالنا:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="link" 
                  size="sm"
                  onClick={() => window.open('https://ehabgm.store', '_blank')}
                >
                  متجرنا الإلكتروني
                </Button>
                <Button 
                  variant="link" 
                  size="sm"
                  onClick={() => window.open('https://ehabgm.wordpress.com', '_blank')}
                >
                  مدونة ووردبريس
                </Button>
                <Button 
                  variant="link" 
                  size="sm"
                  onClick={() => window.open('https://ehabgm.online', '_blank')}
                >
                  الموقع الرسمي
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;