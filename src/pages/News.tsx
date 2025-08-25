import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Calendar, User, Tag, Search, Clock } from 'lucide-react';

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('все');

  const newsArticles = [
    {
      id: 1,
      title: 'Открытие нового ресторана на Арбате',
      excerpt: 'Мы рады сообщить об открытии нашего третьего ресторана в самом сердце Москвы. Новое заведение на Арбате готово принять первых гостей.',
      content: 'После успешной работы двух ресторанов, мы решили расширить нашу сеть и открыть новое заведение на знаменитом Арбате. Новый ресторан площадью 200 квадратных метров может одновременно принять до 80 гостей. Здесь вы найдете все любимые блюда из нашего меню, а также несколько эксклюзивных новинок, которые будут доступны только в этом заведении.',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
      date: '2024-01-25',
      author: 'Администрация',
      category: 'новости',
      readTime: '3 мин'
    },
    {
      id: 2,
      title: 'Новое зимнее меню 2024',
      excerpt: 'Представляем обновленное зимнее меню с согревающими блюдами и сезонными ингредиентами.',
      content: 'С наступлением зимы мы подготовили специальное сезонное меню, которое согреет вас в холодные дни. В новом меню представлены пиццы с трюфелями, горячие супы, глинтвейн и другие согревающие напитки. Все блюда приготовлены из свежих сезонных ингредиентов.',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
      date: '2024-01-20',
      author: 'Шеф-повар Джузеппе',
      category: 'меню',
      readTime: '2 мин'
    },
    {
      id: 3,
      title: 'Мастер-класс по приготовлению пиццы',
      excerpt: 'Приглашаем всех желающих на мастер-класс по приготовлению настоящей итальянской пиццы.',
      content: 'Каждую субботу в 15:00 наш шеф-повар проводит мастер-классы по приготовлению пиццы. Вы узнаете секреты приготовления идеального теста, научитесь правильно раскатывать основу и выберете лучшие сочетания ингредиентов. Стоимость участия - 2500 рублей, включая все ингредиенты и дегустацию.',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
      date: '2024-01-18',
      author: 'Мария Бьянки',
      category: 'мероприятия',
      readTime: '4 мин'
    },
    {
      id: 4,
      title: 'Программа лояльности: новые привилегии',
      excerpt: 'Мы расширили нашу программу лояльности и добавили новые привилегии для постоянных клиентов.',
      content: 'Теперь участники программы лояльности могут получать еще больше бонусов. Мы добавили новый уровень "Платина" с эксклюзивными привилегиями, увеличили количество баллов за заказы и ввели специальные предложения для именинников. Присоединяйтесь к программе и экономьте на каждом заказе!',
      image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
      date: '2024-01-15',
      author: 'Отдел маркетинга',
      category: 'акции',
      readTime: '3 мин'
    },
    {
      id: 5,
      title: 'Экологические инициативы',
      excerpt: 'Мы запускаем программу по защите окружающей среды и переходим на экологичную упаковку.',
      content: 'Забота об окружающей среде - одна из наших приоритетных задач. Мы полностью переходим на биоразлагаемую упаковку для доставки, устанавливаем контейнеры для раздельного сбора мусора во всех ресторанах и запускаем программу по сокращению пищевых отходов. Вместе мы можем сделать мир чище!',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      date: '2024-01-12',
      author: 'Администрация',
      category: 'экология',
      readTime: '5 мин'
    },
    {
      id: 6,
      title: 'Победа в конкурсе "Лучшая пицца Москвы"',
      excerpt: 'Наша пицца "Маргарита" заняла первое место в престижном городском конкурсе.',
      content: 'Мы гордимся тем, что наша классическая "Маргарита" была признана лучшей пиццей Москвы по версии жюри конкурса "Вкус столицы 2024". Это признание нашего мастерства и качества ингредиентов, которые мы используем. Спасибо всем, кто поддерживает нас!',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
      date: '2024-01-10',
      author: 'Пресс-служба',
      category: 'достижения',
      readTime: '2 мин'
    },
    {
      id: 7,
      title: 'Новый формат доставки: за 20 минут',
      excerpt: 'Запускаем экспресс-доставку для центральных районов Москвы.',
      content: 'Теперь жители центральных районов Москвы могут получить свой заказ всего за 20 минут! Мы оптимизировали процессы приготовления и логистику, чтобы доставлять пиццу еще быстрее. Экспресс-доставка доступна с 12:00 до 22:00 в будние дни.',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
      date: '2024-01-08',
      author: 'Служба доставки',
      category: 'сервис',
      readTime: '3 мин'
    },
    {
      id: 8,
      title: 'Благотворительная акция для детских домов',
      excerpt: 'В рамках новогодних праздников мы организовали благотворительную акцию для детей из детских домов.',
      content: 'В преддверии Нового года мы посетили три детских дома Москвы и организовали праздничные обеды для детей. Более 200 детей получили горячую пиццу, подарки и участвовали в развлекательной программе. Это стало доброй традицией, которую мы планируем продолжать.',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
      date: '2024-01-05',
      author: 'Волонтерская группа',
      category: 'благотворительность',
      readTime: '4 мин'
    }
  ];

  const categories = ['все', 'новости', 'меню', 'мероприятия', 'акции', 'экология', 'достижения', 'сервис', 'благотворительность'];

  const filteredArticles = newsArticles
    .filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'все' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'новости': 'bg-blue-100 text-blue-800',
      'меню': 'bg-green-100 text-green-800',
      'мероприятия': 'bg-purple-100 text-purple-800',
      'акции': 'bg-red-100 text-red-800',
      'экология': 'bg-emerald-100 text-emerald-800',
      'достижения': 'bg-yellow-100 text-yellow-800',
      'сервис': 'bg-indigo-100 text-indigo-800',
      'благотворительность': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calendar className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Новости и события</h1>
            <p className="text-xl opacity-90">
              Следите за последними новостями, акциями и событиями в мире Мама Мия
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Поиск новостей..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Главная новость</h2>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src={filteredArticles[0].image}
                      alt={filteredArticles[0].title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <Badge className={`absolute top-4 left-4 ${getCategoryColor(filteredArticles[0].category)}`}>
                      {filteredArticles[0].category}
                    </Badge>
                  </div>
                  
                  <div className="p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-4">{filteredArticles[0].title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(filteredArticles[0].date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{filteredArticles[0].author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{filteredArticles[0].readTime}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-6">{filteredArticles[0].excerpt}</p>
                      <Button className="bg-red-600 hover:bg-red-700">
                        Читать полностью
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Все новости</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className={`absolute top-4 right-4 ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{article.author}</span>
                      <Button size="sm" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                        Читать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  По вашему запросу новостей не найдено
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Подпишитесь на новости</h2>
            <p className="text-xl opacity-90 mb-8">
              Получайте последние новости, акции и анонсы мероприятий на вашу почту
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
            <p className="text-sm opacity-75 mt-4">
              Мы не передаем ваши данные третьим лицам и не рассылаем спам
            </p>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Архив новостей</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-semibold">Январь 2024</h3>
                  <p className="text-sm text-gray-600">8 новостей</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-semibold">Декабрь 2023</h3>
                  <p className="text-sm text-gray-600">12 новостей</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-semibold">Ноябрь 2023</h3>
                  <p className="text-sm text-gray-600">6 новостей</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-semibold">Октябрь 2023</h3>
                  <p className="text-sm text-gray-600">9 новостей</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;