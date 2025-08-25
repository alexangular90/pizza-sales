import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Calendar, MapPin, Clock, Users, Star, Heart, Gift } from 'lucide-react';

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('все');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Мастер-класс по приготовлению пиццы',
      description: 'Научитесь готовить настоящую итальянскую пиццу от наших шеф-поваров',
      date: '2024-02-15',
      time: '18:00',
      duration: '2 часа',
      location: 'Ресторан на Тверской',
      price: 2500,
      maxParticipants: 12,
      category: 'мастер-класс',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
      features: ['Все ингредиенты включены', 'Сертификат участника', 'Дегустация']
    },
    {
      id: 2,
      title: 'Романтический ужин для двоих',
      description: 'Особенная атмосфера для влюбленных с живой музыкой',
      date: '2024-02-14',
      time: '19:00',
      duration: '3 часа',
      location: 'VIP зал',
      price: 4500,
      maxParticipants: 20,
      category: 'романтика',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
      features: ['Живая музыка', 'Свечи и декор', 'Комплимент от шефа']
    },
    {
      id: 3,
      title: 'Детский кулинарный праздник',
      description: 'Веселое мероприятие для детей с играми и готовкой',
      date: '2024-02-17',
      time: '15:00',
      duration: '2.5 часа',
      location: 'Детская зона',
      price: 1800,
      maxParticipants: 15,
      category: 'детские',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
      features: ['Аниматор', 'Подарки', 'Фотосессия']
    },
    {
      id: 4,
      title: 'Винная дегустация с пиццей',
      description: 'Изысканное сочетание итальянских вин и авторских пицц',
      date: '2024-02-20',
      time: '20:00',
      duration: '2 часа',
      location: 'Винный погреб',
      price: 3500,
      maxParticipants: 16,
      category: 'дегустация',
      image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
      features: ['5 видов вин', 'Сомелье', 'Закуски']
    },
    {
      id: 5,
      title: 'Корпоративный тимбилдинг',
      description: 'Сплочение команды через совместное приготовление пиццы',
      date: '2024-02-22',
      time: '17:00',
      duration: '3 часа',
      location: 'Банкетный зал',
      price: 2200,
      maxParticipants: 30,
      category: 'корпоратив',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      features: ['Командные игры', 'Призы', 'Фуршет']
    },
    {
      id: 6,
      title: 'Итальянский вечер',
      description: 'Погружение в атмосферу Италии с традиционной музыкой и кухней',
      date: '2024-02-25',
      time: '19:30',
      duration: '4 часа',
      location: 'Основной зал',
      price: 3200,
      maxParticipants: 40,
      category: 'тематический',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
      features: ['Итальянская музыка', 'Национальные костюмы', 'Лотерея']
    }
  ];

  const categories = ['все', 'мастер-класс', 'романтика', 'детские', 'дегустация', 'корпоратив', 'тематический'];

  const filteredEvents = upcomingEvents.filter(event => 
    selectedCategory === 'все' || event.category === selectedCategory
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'мастер-класс': return 'bg-blue-100 text-blue-800';
      case 'романтика': return 'bg-pink-100 text-pink-800';
      case 'детские': return 'bg-green-100 text-green-800';
      case 'дегустация': return 'bg-purple-100 text-purple-800';
      case 'корпоратив': return 'bg-orange-100 text-orange-800';
      case 'тематический': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'мастер-класс': return <Star className="w-4 h-4" />;
      case 'романтика': return <Heart className="w-4 h-4" />;
      case 'детские': return <Gift className="w-4 h-4" />;
      case 'дегустация': return <Star className="w-4 h-4" />;
      case 'корпоратив': return <Users className="w-4 h-4" />;
      case 'тематический': return <Calendar className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Мероприятия в Мама Мия</h1>
            <p className="text-xl opacity-90">
              Присоединяйтесь к нашим увлекательным событиям и создавайте незабываемые воспоминания
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer ${
                  selectedCategory === category 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'hover:bg-red-100'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-4 right-4 ${getCategoryColor(event.category)}`}>
                    <span className="flex items-center space-x-1">
                      {getCategoryIcon(event.category)}
                      <span>{event.category}</span>
                    </span>
                  </Badge>
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-1">
                    <span className="font-bold text-red-600">{event.price} ₽</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{event.time} ({event.duration})</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>До {event.maxParticipants} участников</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Включено:</h4>
                    <div className="flex flex-wrap gap-1">
                      {event.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Частные мероприятия</h2>
            <p className="text-gray-600 mb-8">
              Организуем индивидуальные мероприятия для ваших особых случаев
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <CardTitle>Свадьбы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Незабываемый день с итальянским колоритом</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Gift className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <CardTitle>Дни рождения</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Праздник для детей и взрослых любого возраста</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <CardTitle>Корпоративы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Сплочение команды в уютной атмосфере</p>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Заказать частное мероприятие
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не пропустите новые события!</h2>
          <p className="text-xl opacity-90 mb-8">
            Подпишитесь на рассылку и узнавайте первыми о новых мероприятиях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg text-black"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Подписаться
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;