import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Truck, Clock, MapPin, Calculator, Phone, CheckCircle } from 'lucide-react';

const Delivery: React.FC = () => {
  const [address, setAddress] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState<{
    zone: string;
    time: string;
    cost: number;
    available: boolean;
  } | null>(null);

  const deliveryZones = [
    { name: 'Центр', radius: '0-5 км', time: '20-30 мин', cost: 0, minOrder: 500 },
    { name: 'Ближние районы', radius: '5-10 км', time: '30-45 мин', cost: 150, minOrder: 700 },
    { name: 'Дальние районы', radius: '10-15 км', time: '45-60 мин', cost: 250, minOrder: 1000 },
    { name: 'Пригород', radius: '15-25 км', time: '60-90 мин', cost: 400, minOrder: 1500 }
  ];

  const deliveryFeatures = [
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: 'Быстрая доставка',
      description: 'Среднее время доставки 30-45 минут'
    },
    {
      icon: <Truck className="w-8 h-8 text-red-600" />,
      title: 'Отслеживание заказа',
      description: 'Следите за статусом заказа в реальном времени'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-600" />,
      title: 'Гарантия качества',
      description: 'Доставляем горячую и свежую пиццу'
    },
    {
      icon: <Phone className="w-8 h-8 text-red-600" />,
      title: 'Связь с курьером',
      description: 'Курьер свяжется с вами перед доставкой'
    }
  ];

  const paymentMethods = [
    { name: 'Наличные', description: 'Оплата курьеру при получении' },
    { name: 'Банковская карта', description: 'Visa, MasterCard, МИР' },
    { name: 'Онлайн-оплата', description: 'Через сайт или приложение' },
    { name: 'Мобильные платежи', description: 'Apple Pay, Google Pay, Samsung Pay' }
  ];

  const handleAddressCheck = () => {
    if (!address.trim()) return;

    // Имитация проверки адреса
    const zones = ['Центр', 'Ближние районы', 'Дальние районы', 'Пригород'];
    const randomZone = zones[Math.floor(Math.random() * zones.length)];
    const zoneInfo = deliveryZones.find(z => z.name === randomZone);

    if (zoneInfo) {
      setDeliveryInfo({
        zone: zoneInfo.name,
        time: zoneInfo.time,
        cost: zoneInfo.cost,
        available: true
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Доставка пиццы</h1>
            <p className="text-xl opacity-90">
              Быстрая и надежная доставка горячей пиццы прямо к вашему порогу
            </p>
          </div>
        </div>
      </div>

      {/* Address Check */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center space-x-2">
                  <Calculator className="w-6 h-6 text-red-600" />
                  <span>Проверить стоимость доставки</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="Введите ваш адрес"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleAddressCheck} className="bg-red-600 hover:bg-red-700">
                    Проверить
                  </Button>
                </div>

                {deliveryInfo && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">Доставка доступна!</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Зона:</span>
                        <p className="font-semibold">{deliveryInfo.zone}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Время:</span>
                        <p className="font-semibold">{deliveryInfo.time}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Стоимость:</span>
                        <p className="font-semibold">
                          {deliveryInfo.cost === 0 ? 'Бесплатно' : `${deliveryInfo.cost} ₽`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества нашей доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Зоны доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{zone.name}</span>
                    <Badge variant={index === 0 ? "default" : "outline"} className={index === 0 ? "bg-green-600" : ""}>
                      {zone.radius}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{zone.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Truck className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">
                        {zone.cost === 0 ? 'Бесплатно' : `${zone.cost} ₽`}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">От {zone.minOrder} ₽</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{method.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Rules */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Условия доставки</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Время работы доставки</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Понедельник - Четверг: 10:00 - 22:30</li>
                    <li>• Пятница - Суббота: 10:00 - 23:30</li>
                    <li>• Воскресенье: 11:00 - 22:00</li>
                    <li>• Последний заказ за 30 минут до закрытия</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Важная информация</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Бесплатная доставка от 1000 ₽</li>
                    <li>• Доставка в пределах МКАД</li>
                    <li>• Курьер ждет 10 минут бесплатно</li>
                    <li>• Возможна доставка в офис</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Гарантии качества</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Пунктуальность</h3>
                    <p className="text-sm text-gray-600">
                      Если опоздаем более чем на 15 минут - скидка 20%
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Качество</h3>
                    <p className="text-sm text-gray-600">
                      Пицца доставляется горячей в специальных термосумках
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Поддержка</h3>
                    <p className="text-sm text-gray-600">
                      Круглосуточная поддержка по телефону +7 (495) 123-45-67
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы заказать?</h2>
          <p className="text-xl opacity-90 mb-8">
            Выберите свою любимую пиццу и мы доставим её быстро и горячей!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Заказать онлайн
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Позвонить: +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;