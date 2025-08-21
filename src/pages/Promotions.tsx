import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Clock, Gift, Percent, Users, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Promotions: React.FC = () => {
  const currentPromotions = [
    {
      id: 1,
      title: 'Счастливые часы',
      description: 'Скидка 30% на все пиццы с 14:00 до 17:00',
      discount: '30%',
      validUntil: '2024-12-31',
      conditions: 'Только для заказов в ресторане',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
      type: 'time',
      active: true
    },
    {
      id: 2,
      title: 'Семейный комбо',
      description: '2 большие пиццы + напитки + десерт за 1999₽',
      discount: 'Экономия 500₽',
      validUntil: '2024-12-31',
      conditions: 'При заказе от 2000₽',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
      type: 'combo',
      active: true
    },
    {
      id: 3,
      title: 'Первый заказ',
      description: 'Скидка 25% на первый заказ для новых клиентов',
      discount: '25%',
      validUntil: '2024-12-31',
      conditions: 'Промокод: WELCOME25',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
      type: 'new-customer',
      active: true
    }
  ];

  const weeklyDeals = [
    { day: 'Понедельник', deal: 'Пицца дня со скидкой 20%', icon: <Star className="w-5 h-5" /> },
    { day: 'Вторник', deal: 'Вторая пицца за полцены', icon: <Percent className="w-5 h-5" /> },
    { day: 'Среда', deal: 'Бесплатная доставка', icon: <Gift className="w-5 h-5" /> },
    { day: 'Четверг', deal: 'Комбо для студентов -30%', icon: <Users className="w-5 h-5" /> },
    { day: 'Пятница', deal: 'Пицца + напиток = скидка 15%', icon: <Percent className="w-5 h-5" /> },
    { day: 'Суббота', deal: 'Семейный день: 3 пиццы по цене 2', icon: <Users className="w-5 h-5" /> },
    { day: 'Воскресенье', deal: 'Сладкие пиццы со скидкой 25%', icon: <Star className="w-5 h-5" /> }
  ];

  const loyaltyProgram = {
    levels: [
      { name: 'Бронза', orders: '1-10', discount: '5%', bonus: 'Бесплатный напиток' },
      { name: 'Серебро', orders: '11-25', discount: '10%', bonus: 'Бесплатная доставка' },
      { name: 'Золото', orders: '26-50', discount: '15%', bonus: 'Подарочная пицца' },
      { name: 'Платина', orders: '50+', discount: '20%', bonus: 'VIP обслуживание' }
    ]
  };

  const getPromotionIcon = (type: string) => {
    switch (type) {
      case 'time': return <Clock className="w-6 h-6" />;
      case 'combo': return <Users className="w-6 h-6" />;
      case 'new-customer': return <Gift className="w-6 h-6" />;
      default: return <Percent className="w-6 h-6" />;
    }
  };

  const getPromotionColor = (type: string) => {
    switch (type) {
      case 'time': return 'bg-blue-100 text-blue-800';
      case 'combo': return 'bg-green-100 text-green-800';
      case 'new-customer': return 'bg-purple-100 text-purple-800';
      default: return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Акции и предложения</h1>
            <p className="text-xl opacity-90">
              Экономьте на любимых пиццах с нашими выгодными предложениями
            </p>
          </div>
        </div>
      </div>

      {/* Current Promotions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Текущие акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPromotions.map((promotion) => (
              <Card key={promotion.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={promotion.image}
                    alt={promotion.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-4 right-4 ${getPromotionColor(promotion.type)}`}>
                    {promotion.active ? 'Активна' : 'Скоро'}
                  </Badge>
                  <div className="absolute top-4 left-4 bg-white rounded-full p-2">
                    <div className="text-red-600">
                      {getPromotionIcon(promotion.type)}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{promotion.title}</span>
                    <Badge variant="outline" className="text-red-600 border-red-600">
                      {promotion.discount}
                    </Badge>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{promotion.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>До {promotion.validUntil}</span>
                    </div>
                    <p className="text-gray-500">{promotion.conditions}</p>
                  </div>

                  <Link to="/menu">
                    <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                      Воспользоваться
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Deals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Предложения недели</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {weeklyDeals.map((deal, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-2 text-red-600">
                    {deal.icon}
                  </div>
                  <CardTitle className="text-sm font-semibold">{deal.day}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600">{deal.deal}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Программа лояльности</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Чем больше заказываете, тем больше экономите! Накапливайте баллы и получайте эксклюзивные привилегии.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loyaltyProgram.levels.map((level, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-shadow ${
                index === 3 ? 'ring-2 ring-yellow-400' : ''
              }`}>
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    index === 0 ? 'bg-orange-100 text-orange-600' :
                    index === 1 ? 'bg-gray-100 text-gray-600' :
                    index === 2 ? 'bg-yellow-100 text-yellow-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    <Star className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{level.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{level.orders} заказов</p>
                    <p className="font-semibold text-lg">Скидка {level.discount}</p>
                    <p className="text-sm text-gray-600">{level.bonus}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/loyalty">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Присоединиться к программе
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Эксклюзивные предложения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Gift className="w-6 h-6 text-red-600" />
                    <span>День рождения</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Скидка 50% в день рождения при предъявлении документа</p>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-red-600" />
                    <span>Корпоративные заказы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Специальные цены для офисов и мероприятий от 10 пицц</p>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Не пропустите новые акции!</h2>
            <p className="text-gray-600 mb-8">
              Подпишитесь на нашу рассылку и первыми узнавайте о новых предложениях и скидках
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Button className="bg-red-600 hover:bg-red-700 px-8">
                Подписаться
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Нажимая "Подписаться", вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotions;