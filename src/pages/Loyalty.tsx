import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Star, Gift, Crown, Diamond, Percent, Users, Calendar, Trophy } from 'lucide-react';
import { toast } from '../components/ui/use-toast';

const Loyalty: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [userLevel, setUserLevel] = useState('bronze');
  const [currentPoints, setCurrentPoints] = useState(1250);

  const loyaltyLevels = [
    {
      name: 'Бронза',
      key: 'bronze',
      minOrders: 1,
      maxOrders: 10,
      discount: 5,
      pointsMultiplier: 1,
      color: 'bg-orange-100 text-orange-800',
      icon: <Star className="w-8 h-8 text-orange-600" />,
      benefits: [
        'Скидка 5% на все заказы',
        '1 балл за каждые 100₽',
        'Уведомления об акциях',
        'Бесплатная доставка от 1500₽'
      ]
    },
    {
      name: 'Серебро',
      key: 'silver',
      minOrders: 11,
      maxOrders: 25,
      discount: 10,
      pointsMultiplier: 1.5,
      color: 'bg-gray-100 text-gray-800',
      icon: <Gift className="w-8 h-8 text-gray-600" />,
      benefits: [
        'Скидка 10% на все заказы',
        '1.5 балла за каждые 100₽',
        'Бесплатная доставка от 1000₽',
        'Приоритетная поддержка',
        'Подарок в день рождения'
      ]
    },
    {
      name: 'Золото',
      key: 'gold',
      minOrders: 26,
      maxOrders: 50,
      discount: 15,
      pointsMultiplier: 2,
      color: 'bg-yellow-100 text-yellow-800',
      icon: <Crown className="w-8 h-8 text-yellow-600" />,
      benefits: [
        'Скидка 15% на все заказы',
        '2 балла за каждые 100₽',
        'Всегда бесплатная доставка',
        'Эксклюзивные предложения',
        'Бесплатная пицца в день рождения',
        'Доступ к закрытым мероприятиям'
      ]
    },
    {
      name: 'Платина',
      key: 'platinum',
      minOrders: 51,
      maxOrders: Infinity,
      discount: 20,
      pointsMultiplier: 3,
      color: 'bg-purple-100 text-purple-800',
      icon: <Diamond className="w-8 h-8 text-purple-600" />,
      benefits: [
        'Скидка 20% на все заказы',
        '3 балла за каждые 100₽',
        'VIP обслуживание',
        'Персональный менеджер',
        'Эксклюзивное меню',
        'Приглашения на дегустации',
        'Возможность бронирования столов'
      ]
    }
  ];

  const currentLevelData = loyaltyLevels.find(level => level.key === userLevel);
  const nextLevel = loyaltyLevels[loyaltyLevels.findIndex(level => level.key === userLevel) + 1];

  const specialOffers = [
    {
      title: 'Двойные баллы',
      description: 'Получайте x2 баллы за заказы по выходным',
      validUntil: '2024-03-31',
      icon: <Percent className="w-6 h-6 text-red-600" />
    },
    {
      title: 'Приведи друга',
      description: 'Получите 500 баллов за каждого приведенного друга',
      validUntil: '2024-12-31',
      icon: <Users className="w-6 h-6 text-red-600" />
    },
    {
      title: 'День рождения',
      description: 'Бесплатная пицца в месяц вашего дня рождения',
      validUntil: 'Постоянно',
      icon: <Gift className="w-6 h-6 text-red-600" />
    }
  ];

  const pointsHistory = [
    { date: '2024-01-15', description: 'Заказ #1234', points: 150, type: 'earned' },
    { date: '2024-01-10', description: 'Скидка на заказ', points: -200, type: 'spent' },
    { date: '2024-01-05', description: 'Заказ #1233', points: 120, type: 'earned' },
    { date: '2024-01-01', description: 'Новогодний бонус', points: 500, type: 'bonus' }
  ];

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber) {
      toast({
        title: 'Введите номер телефона',
        description: 'Пожалуйста, введите ваш номер телефона',
        variant: 'destructive'
      });
      return;
    }

    setIsRegistered(true);
    toast({
      title: 'Добро пожаловать в программу лояльности!',
      description: 'Вы получили 100 приветственных баллов',
    });
  };

  const progressToNextLevel = nextLevel 
    ? Math.min(100, ((currentPoints / 1000) * 100)) 
    : 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Программа лояльности</h1>
            <p className="text-xl opacity-90">
              Заказывайте больше, экономьте больше! Получайте баллы за каждый заказ и обменивайте их на скидки
            </p>
          </div>
        </div>
      </div>

      {!isRegistered ? (
        /* Registration Form */
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Присоединиться к программе</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegistration} className="space-y-4">
                    <div>
                      <Label htmlFor="phone">Номер телефона</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <p>Присоединившись к программе, вы получите:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>100 приветственных баллов</li>
                        <li>Скидку 5% на первый заказ</li>
                        <li>Уведомления об акциях</li>
                      </ul>
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" size="lg">
                      Присоединиться
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* User Dashboard */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Current Status */}
                <div className="lg:col-span-2">
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        {currentLevelData?.icon}
                        <span>Ваш статус: {currentLevelData?.name}</span>
                        <Badge className={currentLevelData?.color}>
                          {currentLevelData?.discount}% скидка
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600">{currentPoints}</div>
                          <div className="text-sm text-gray-600">Баллов</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600">23</div>
                          <div className="text-sm text-gray-600">Заказов</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600">45,600₽</div>
                          <div className="text-sm text-gray-600">Потрачено</div>
                        </div>
                      </div>

                      {nextLevel && (
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>До уровня {nextLevel.name}</span>
                            <span>{Math.round(progressToNextLevel)}%</span>
                          </div>
                          <Progress value={progressToNextLevel} className="mb-2" />
                          <p className="text-sm text-gray-600">
                            Сделайте еще {nextLevel.minOrders - 23} заказов для повышения уровня
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Ваши привилегии</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentLevelData?.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Быстрые действия</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Потратить баллы
                      </Button>
                      <Button variant="outline" className="w-full">
                        История баллов
                      </Button>
                      <Button variant="outline" className="w-full">
                        Пригласить друга
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Special Offers */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Специальные предложения</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {specialOffers.map((offer, index) => (
                          <div key={index} className="border-l-4 border-red-600 pl-4">
                            <div className="flex items-center space-x-2 mb-1">
                              {offer.icon}
                              <h4 className="font-semibold text-sm">{offer.title}</h4>
                            </div>
                            <p className="text-xs text-gray-600 mb-1">{offer.description}</p>
                            <p className="text-xs text-gray-500">До {offer.validUntil}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Points History */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">История баллов</h2>
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {pointsHistory.map((transaction, index) => (
                        <div key={index} className="p-4 flex items-center justify-between">
                          <div>
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-gray-600">{transaction.date}</p>
                          </div>
                          <div className={`font-bold ${
                            transaction.points > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {transaction.points > 0 ? '+' : ''}{transaction.points} баллов
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Loyalty Levels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Уровни программы лояльности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loyaltyLevels.map((level, index) => (
              <Card key={level.key} className={`text-center hover:shadow-lg transition-shadow ${
                userLevel === level.key ? 'ring-2 ring-red-600' : ''
              }`}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {level.icon}
                  </div>
                  <CardTitle className="text-xl">{level.name}</CardTitle>
                  <Badge className={level.color}>
                    {level.discount}% скидка
                  </Badge>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      {level.minOrders === 1 ? 'С первого' : `${level.minOrders}-${level.maxOrders === Infinity ? '∞' : level.maxOrders}`} заказов
                    </p>
                  </div>

                  <div className="space-y-2 text-left">
                    {level.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                    {level.benefits.length > 3 && (
                      <p className="text-xs text-gray-500">+{level.benefits.length - 3} привилегий</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Регистрируйтесь</h3>
                <p className="text-gray-600">
                  Присоединитесь к программе и получите 100 приветственных баллов
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Заказывайте</h3>
                <p className="text-gray-600">
                  Получайте баллы за каждый заказ и повышайте свой уровень
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Экономьте</h3>
                <p className="text-gray-600">
                  Тратьте баллы на скидки и наслаждайтесь привилегиями
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loyalty;