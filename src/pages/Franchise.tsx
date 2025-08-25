import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Store, TrendingUp, Users, Award, DollarSign, MapPin, Phone, Mail } from 'lucide-react';
import { toast } from '../components/ui/use-toast';

const Franchise: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    investment: '',
    message: ''
  });

  const franchisePackages = [
    {
      name: 'Стандарт',
      investment: '2,500,000',
      area: '80-120',
      payback: '18-24',
      features: [
        'Полный пакет документов',
        'Обучение персонала',
        'Поставка оборудования',
        'Маркетинговая поддержка',
        'Дизайн-проект помещения'
      ],
      popular: false
    },
    {
      name: 'Премиум',
      investment: '4,000,000',
      area: '120-200',
      payback: '24-30',
      features: [
        'Все из пакета Стандарт',
        'VIP зона',
        'Расширенное меню',
        'Персональный менеджер',
        'Эксклюзивная территория',
        'Дополнительные услуги'
      ],
      popular: true
    },
    {
      name: 'Экспресс',
      investment: '1,500,000',
      area: '40-80',
      payback: '12-18',
      features: [
        'Компактный формат',
        'Быстрый запуск',
        'Минимальные вложения',
        'Доставка и самовывоз',
        'Базовое обучение'
      ],
      popular: false
    }
  ];

  const advantages = [
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: 'Проверенная модель',
      description: '10 лет успешной работы на рынке'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: 'Высокая прибыльность',
      description: 'Рентабельность до 25%'
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: 'Полная поддержка',
      description: 'От открытия до развития бизнеса'
    },
    {
      icon: <Store className="w-8 h-8 text-red-600" />,
      title: 'Узнаваемый бренд',
      description: 'Сильная репутация и лояльность клиентов'
    }
  ];

  const supportSteps = [
    {
      step: 1,
      title: 'Подбор помещения',
      description: 'Помогаем найти идеальную локацию для вашего ресторана'
    },
    {
      step: 2,
      title: 'Дизайн и ремонт',
      description: 'Создаем уникальный дизайн в фирменном стиле'
    },
    {
      step: 3,
      title: 'Поставка оборудования',
      description: 'Комплектуем кухню профессиональным оборудованием'
    },
    {
      step: 4,
      title: 'Обучение персонала',
      description: 'Готовим команду по нашим стандартам качества'
    },
    {
      step: 5,
      title: 'Маркетинговый запуск',
      description: 'Проводим рекламную кампанию открытия'
    },
    {
      step: 6,
      title: 'Постоянная поддержка',
      description: 'Сопровождаем ваш бизнес на всех этапах развития'
    }
  ];

  const requirements = [
    'Опыт работы в сфере общественного питания (желательно)',
    'Собственные инвестиции от 1,5 млн рублей',
    'Готовность к активному участию в управлении',
    'Соответствие помещения нашим требованиям',
    'Соблюдение стандартов качества и сервиса'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.city) {
      toast({
        title: 'Заполните обязательные поля',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в течение 24 часов для обсуждения деталей',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      experience: '',
      investment: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Store className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Франшиза Мама Мия</h1>
            <p className="text-xl opacity-90">
              Станьте частью успешной сети итальянских пиццерий. Проверенная бизнес-модель с полной поддержкой
            </p>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества франшизы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Пакеты франшизы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {franchisePackages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${
                pkg.popular ? 'ring-2 ring-red-600' : ''
              }`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600">
                    Популярный
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-red-600 mt-2">
                    {pkg.investment} ₽
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Площадь:</span>
                      <span className="font-semibold">{pkg.area} м²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Окупаемость:</span>
                      <span className="font-semibold">{pkg.payback} мес</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold">Включено:</h4>
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full ${
                    pkg.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-700'
                  }`}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Этапы поддержки</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportSteps.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold">{step.step}</span>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Требования к партнерам</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                      <span>{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Заявка на франшизу</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="city">Город *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="experience">Опыт в ресторанном бизнесе</Label>
                      <Input
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                        placeholder="Количество лет"
                      />
                    </div>

                    <div>
                      <Label htmlFor="investment">Размер инвестиций</Label>
                      <Input
                        id="investment"
                        value={formData.investment}
                        onChange={(e) => setFormData({...formData, investment: e.target.value})}
                        placeholder="В рублях"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о себе и своих планах..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p>+7 (495) 123-45-67</p>
                <p className="text-sm opacity-90">Пн-Пт: 9:00-18:00</p>
              </div>

              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p>franchise@mamamia.ru</p>
                <p className="text-sm opacity-90">Ответим в течение дня</p>
              </div>

              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Офис</h3>
                <p>ул. Тверская, 15</p>
                <p className="text-sm opacity-90">Москва, Россия</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;