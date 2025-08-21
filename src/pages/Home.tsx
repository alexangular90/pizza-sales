import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Clock, Truck, Star, Users, Award, Leaf, Phone, MapPin, ChefHat, Heart } from 'lucide-react';
import { pizzas } from '../data/pizzas';
import PizzaCard from '../components/PizzaCard';

const Home: React.FC = () => {
  const featuredPizzas = pizzas.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Добро пожаловать в <span className="text-yellow-300">Мама Мия</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Настоящая итальянская пицца с доставкой на дом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
                  Посмотреть меню
                </Button>
              </Link>
              <Link to="/order">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3">
                  Заказать сейчас
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Доставляем горячую пиццу за 30 минут или бесплатно</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <ChefHat className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Свежие ингредиенты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Используем только свежие и качественные продукты</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Высокие оценки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Средняя оценка 4.8/5 от наших довольных клиентов</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Готовим с любовью</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Каждая пицца приготовлена с душой и вниманием к деталям</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Pizzas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Популярные пиццы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Попробуйте наши самые любимые клиентами пиццы, приготовленные по традиционным итальянским рецептам
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/menu">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Посмотреть все пиццы
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-600 mb-6">
                Пиццерия "Мама Мия" была основана в 2014 году семьей итальянских эмигрантов. 
                Мы привезли с собой традиционные рецепты и секреты приготовления настоящей 
                итальянской пиццы.
              </p>
              <p className="text-gray-600 mb-6">
                За 10 лет работы мы завоевали сердца тысяч клиентов, став одной из самых 
                популярных пиццерий в городе. Наш секрет прост: качественные ингредиенты, 
                традиционные рецепты и любовь к своему делу.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Узнать больше
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg"
                alt="Наша кухня"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"
                alt="Свежая пицца"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <CardTitle>Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Быстрая доставка по всему городу. Минимальная сумма заказа 500₽.
                </p>
                <Link to="/delivery">
                  <Button variant="outline" size="sm">Подробнее</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <CardTitle>Кейтеринг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Организуем питание для ваших мероприятий и праздников.
                </p>
                <Link to="/catering">
                  <Button variant="outline" size="sm">Подробнее</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <CardTitle>Программа лояльности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Накапливайте баллы и получайте скидки на будущие заказы.
                </p>
                <Link to="/loyalty">
                  <Button variant="outline" size="sm">Подробнее</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-lg opacity-90">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100,000+</div>
              <div className="text-lg opacity-90">Пицц приготовлено</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-lg opacity-90">Средняя оценка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle>Анна Петрова</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Лучшая пицца в городе! Заказываем уже несколько лет, качество всегда на высоте. 
                  Доставка быстрая, пицца приезжает горячей."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle>Михаил Иванов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Отличное тесто, свежие ингредиенты, большие порции. Особенно нравится пицца 
                  'Четыре сыра'. Рекомендую всем!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle>Елена Смирнова</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Заказывали пиццу для детского праздника. Все остались довольны! 
                  Вкусно, сытно и по разумной цене."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                Все отзывы
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-semibold">Телефон для заказов</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-gray-600">ул. Тверская, 15, Москва</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-semibold">Время работы</p>
                    <p className="text-gray-600">10:00 - 23:00 ежедневно</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Быстрый заказ</h3>
              <p className="text-gray-600 mb-6">
                Позвоните нам или оформите заказ онлайн. Доставка в течение 30 минут!
              </p>
              <div className="space-y-4">
                <Link to="/order">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Заказать онлайн
                  </Button>
                </Link>
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Позвонить: +7 (495) 123-45-67
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на новости</h2>
          <p className="text-lg opacity-90 mb-8">
            Получайте информацию о новых пиццах, акциях и специальных предложениях
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 rounded-lg text-black"
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

export default Home;