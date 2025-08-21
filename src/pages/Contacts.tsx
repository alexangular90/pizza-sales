import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';
import { toast } from '../components/ui/use-toast';

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Заполните обязательные поля',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    // Здесь бы был запрос к API
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const locations = [
    {
      name: 'Основной ресторан',
      address: 'ул. Тверская, 15, Москва',
      phone: '+7 (495) 123-45-67',
      hours: '10:00 - 23:00',
      features: ['Зал на 50 мест', 'Детская зона', 'Wi-Fi']
    },
    {
      name: 'Филиал на Арбате',
      address: 'ул. Арбат, 28, Москва',
      phone: '+7 (495) 123-45-68',
      hours: '11:00 - 22:00',
      features: ['Зал на 30 мест', 'Терраса', 'Парковка']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl opacity-90">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Как с нами связаться</h2>
            
            {/* Quick Contact */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>Быстрый заказ</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">Круглосуточная линия заказов</p>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Позвонить сейчас
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">info@mamamia.ru</p>
                      <p className="text-sm text-gray-500">Ответим в течение 2 часов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Мессенджеры</h3>
                      <p className="text-gray-600">WhatsApp: +7 (495) 123-45-67</p>
                      <p className="text-gray-600">Telegram: @mamamia_pizza</p>
                      <p className="text-sm text-gray-500">Онлайн с 10:00 до 23:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Время работы</h3>
                      <p className="text-gray-600">Понедельник - Воскресенье</p>
                      <p className="text-gray-600">10:00 - 23:00</p>
                      <p className="text-sm text-gray-500">Доставка до 22:30</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Тема</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Наши рестораны</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span>{location.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Адрес:</p>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Телефон:</p>
                      <p className="text-gray-600">{location.phone}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Время работы:</p>
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Особенности:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {location.features.map((feature, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Как нас найти</h2>
          <Card>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <p className="text-gray-500">Здесь будет интерактивная карта</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Какое время доставки?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Среднее время доставки составляет 30-45 минут в зависимости от загруженности 
                  и удаленности адреса. Мы всегда стараемся доставить заказ как можно быстрее.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Какая минимальная сумма заказа?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Минимальная сумма заказа для доставки составляет 500 рублей. 
                  При заказе от 1000 рублей доставка бесплатная.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Принимаете ли вы банковские карты?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, мы принимаем все виды банковских карт, а также наличные. 
                  Также доступна оплата через мобильные приложения.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;