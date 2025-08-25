import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Users, Calendar, Clock, Star, CheckCircle, Phone } from 'lucide-react';
import { toast } from '../components/ui/use-toast';

const Catering: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: '',
    message: ''
  });

  const cateringPackages = [
    {
      id: 1,
      name: 'Офисный обед',
      description: 'Идеально для корпоративных мероприятий и деловых встреч',
      price: 'от 800₽/чел',
      minGuests: 10,
      includes: ['Ассорти пицц', 'Салаты', 'Напитки', 'Одноразовая посуда'],
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg'
    },
    {
      id: 2,
      name: 'День рождения',
      description: 'Сделаем ваш праздник незабываемым',
      price: 'от 1200₽/чел',
      minGuests: 15,
      includes: ['Праздничные пиццы', 'Десерты', 'Украшение стола', 'Аниматор'],
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg'
    },
    {
      id: 3,
      name: 'Свадебный банкет',
      description: 'Особенное меню для особенного дня',
      price: 'от 2000₽/чел',
      minGuests: 30,
      includes: ['Премиум пиццы', 'Закуски', 'Торт', 'Декор', 'Обслуживание'],
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg'
    },
    {
      id: 4,
      name: 'Детский праздник',
      description: 'Веселье и вкусная еда для маленьких гостей',
      price: 'от 600₽/чел',
      minGuests: 8,
      includes: ['Детские пиццы', 'Соки', 'Игры', 'Подарки'],
      image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg'
    }
  ];

  const services = [
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: 'Любое количество гостей',
      description: 'От 8 до 500 человек'
    },
    {
      icon: <Calendar className="w-8 h-8 text-red-600" />,
      title: 'Гибкое планирование',
      description: 'Заказ за 24 часа'
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: 'Точно в срок',
      description: 'Доставка минута в минуту'
    },
    {
      icon: <Star className="w-8 h-8 text-red-600" />,
      title: 'Премиум качество',
      description: 'Только свежие продукты'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.eventDate || !formData.guestCount) {
      toast({
        title: 'Заполните обязательные поля',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в течение часа для уточнения деталей',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      guestCount: '',
      eventType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Кейтеринг от Мама Мия</h1>
            <p className="text-xl opacity-90">
              Организуем питание для любых мероприятий - от деловых встреч до свадебных торжеств
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Пакеты кейтеринга</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cateringPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-red-600">
                    {pkg.price}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{pkg.name}</span>
                    <span className="text-sm text-gray-500">от {pkg.minGuests} чел</span>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Включено:</h4>
                    {pkg.includes.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Заказать кейтеринг</CardTitle>
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
                      <Label htmlFor="eventDate">Дата мероприятия *</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guestCount">Количество гостей *</Label>
                      <Input
                        id="guestCount"
                        type="number"
                        min="8"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({...formData, guestCount: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="eventType">Тип мероприятия</Label>
                      <Input
                        id="eventType"
                        value={formData.eventType}
                        onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                        placeholder="День рождения, корпоратив..."
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Дополнительные пожелания</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Особые требования, аллергии, предпочтения..."
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

      {/* Contact CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl opacity-90 mb-8">
            Позвоните нам, и мы поможем подобрать идеальное решение для вашего мероприятия
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catering;