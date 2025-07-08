-- إنشاء جدول العملاء
CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  company TEXT,
  preferred_language TEXT DEFAULT 'ar',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- إنشاء جدول الخدمات
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name_ar TEXT NOT NULL,
  name_en TEXT,
  description_ar TEXT,
  description_en TEXT,
  category TEXT NOT NULL,
  price_from INTEGER NOT NULL,
  price_to INTEGER,
  duration_days INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- إنشاء جدول الطلبات
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE,
  service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
  service_name TEXT NOT NULL,
  description TEXT,
  budget INTEGER,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')),
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  deadline DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- إنشاء جدول رسائل التواصل
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  service_type TEXT,
  is_read BOOLEAN DEFAULT false,
  replied_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- إنشاء جدول أعمال البورتفوليو
CREATE TABLE public.portfolio_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title_ar TEXT NOT NULL,
  title_en TEXT,
  description_ar TEXT,
  description_en TEXT,
  category TEXT NOT NULL,
  image_url TEXT,
  project_url TEXT,
  technologies TEXT[],
  completion_date DATE,
  client_name TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- تفعيل Row Level Security
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;

-- سياسات الأمان للخدمات (قراءة عامة)
CREATE POLICY "Services are viewable by everyone" 
ON public.services 
FOR SELECT 
USING (is_active = true);

-- سياسات الأمان لأعمال البورتفوليو (قراءة عامة)
CREATE POLICY "Portfolio items are viewable by everyone" 
ON public.portfolio_items 
FOR SELECT 
USING (is_published = true);

-- سياسات الأمان لرسائل التواصل (إدراج عام)
CREATE POLICY "Anyone can send contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

-- سياسات الأمان للعملاء (إدراج عام)
CREATE POLICY "Anyone can create client profile" 
ON public.clients 
FOR INSERT 
WITH CHECK (true);

-- سياسات الأمان للطلبات (إدراج عام)
CREATE POLICY "Anyone can create orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (true);

-- إنشاء دالة لتحديث التوقيت
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- إنشاء محفزات التحديث التلقائي
CREATE TRIGGER update_clients_updated_at
  BEFORE UPDATE ON public.clients
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_portfolio_items_updated_at
  BEFORE UPDATE ON public.portfolio_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- إدراج بيانات الخدمات الأساسية
INSERT INTO public.services (name_ar, name_en, description_ar, description_en, category, price_from, price_to, duration_days) VALUES
('تصميم شعار بسيط', 'Basic Logo Design', 'تصميم شعار نصي أو رمزي بسيط', 'Simple text or icon logo design', 'graphic_design', 150, 300, 3),
('تصميم شعار احترافي', 'Professional Logo Design', 'تصميم شعار احترافي مع دراسة الهوية', 'Professional logo with brand identity study', 'graphic_design', 400, 700, 5),
('تصميم كارت شخصي', 'Business Card Design', 'تصميم بطاقة عمل احترافية', 'Professional business card design', 'graphic_design', 150, 300, 2),
('تصميم بوست سوشيال ميديا', 'Social Media Post', 'تصميم منشور لوسائل التواصل', 'Social media post design', 'social_media', 100, 250, 1),
('إعلان ممول', 'Paid Advertisement', 'إدارة إعلان ممول على المنصات', 'Paid ad management on platforms', 'marketing', 350, 1000, 7),
('موقع تعريفي', 'Business Website', 'تصميم موقع تعريفي احترافي', 'Professional business website', 'web_development', 1500, 3000, 14),
('متجر إلكتروني', 'E-commerce Store', 'تصميم متجر إلكتروني متكامل', 'Complete e-commerce store', 'web_development', 2500, 5000, 21),
('تصميم سيرة ذاتية', 'CV Design', 'تصميم سيرة ذاتية احترافية', 'Professional CV design', 'graphic_design', 150, 250, 2);

-- إدراج عينات من أعمال البورتفوليو
INSERT INTO public.portfolio_items (title_ar, title_en, description_ar, description_en, category, is_featured) VALUES
('تصميم هوية بصرية لمطعم شرقي', 'Oriental Restaurant Brand Identity', 'تصميم شعار وهوية بصرية كاملة لمطعم شرقي', 'Complete logo and brand identity for oriental restaurant', 'graphic_design', true),
('موقع إلكتروني لشركة تقنية', 'Tech Company Website', 'تصميم وتطوير موقع إلكتروني لشركة تقنية', 'Website design and development for tech company', 'web_development', true),
('حملة إعلانية لمتجر أزياء', 'Fashion Store Ad Campaign', 'إدارة حملة إعلانية ممولة لمتجر أزياء', 'Paid advertising campaign for fashion store', 'marketing', true),
('تطبيق جوال للتوصيل', 'Delivery Mobile App', 'تصميم واجهات تطبيق جوال للتوصيل', 'Mobile app UI design for delivery service', 'ui_ux', false);