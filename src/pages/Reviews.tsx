import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Star, ThumbsUp, MessageCircle, Filter, Search } from 'lucide-react';
import { toast } from '../components/ui/use-toast';

const Reviews: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'date' | 'rating'>('date');
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    title: '',
    comment: '',
    orderNumber: ''
  });

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      title: 'Лучшая пицца в городе!',
      comment: 'Заказываем уже несколько лет, качество всегда на высоте. Доставка быстрая, пицца приезжает горячей. Особенно нравится Маргарита - тесто тонкое, ингредиенты свежие. Рекомендую всем!',
      date: '2024-01-20',
      helpful: 15,
      verified: true,
      response: 'Спасибо за теплые слова! Мы очень рады, что вы остаетесь нашими постоянными клиентами.'
    },
    {
      id: 2,
      name: 'Михаил Иванов',
      rating: 5,
      title: 'Отличное обслуживание',
      comment: 'Отмечали день рождения в ресторане. Персонал очень внимательный, атмосфера уютная. Пицца "Четыре сыра" просто восхитительна! Обязательно вернемся еще.',
      date: '2024-01-18',
      helpful: 12,
      verified: true,
      response: null
    },
    {
      id: 3,
      name: 'Елена Смирнова',
      rating: 4,
      title: 'Хорошо, но есть нюансы',
      comment: 'В целом пицца вкусная, доставка в срок. Единственное замечание - хотелось бы больше начинки на пицце "Пепперони". В остальном все отлично!',
      date: '2024-01-15',
      helpful: 8,
      verified: true,
      response: 'Спасибо за отзыв! Передали ваши пожелания шеф-повару, будем учитывать при приготовлении.'
    },
    {
      id: 4,
      name: 'Дмитрий Козлов',
      rating: 5,
      title: 'Семейное место',
      comment: 'Отличное место для семейного ужина. Дети в восторге от детского меню, а взрослые наслаждаются настоящей итальянской пиццей. Цены адекватные, порции большие.',
      date: '2024-01-12',
      helpful: 20,
      verified: true,
      response: 'Рады, что вся семья довольна! Ждем вас снова!'
    },
    {
      id: 5,
      name: 'Ольга Васильева',
      rating: 5,
      title: 'Быстрая доставка',
      comment: 'Заказывала на работу для коллег. Доставили точно в срок, все горячее и вкусное. Курьер вежливый, все аккуратно упаковано. Спасибо!',
      date: '2024-01-10',
      helpful: 6,
      verified: true,
      response: null
    },
    {
      id: 6,
      name: 'Александр Новиков',
      rating: 4,
      title: 'Вкусно и сытно',
      comment: 'Пицца действительно вкусная, особенно понравилась "Мясная". Тесто хрустящее, начинки много. Единственный минус - долго ждали заказ в ресторане, но это того стоило.',
      date: '2024-01-08',
      helpful: 9,
      verified: false,
      response: 'Извините за ожидание! Мы работаем над улучшением скорости обслуживания.'
    },
    {
      id: 7,
      name: 'Мария Федорова',
      rating: 5,
      title: 'Романтический ужин',
      comment: 'Отмечали годовщину свадьбы. Персонал создал прекрасную атмосферу, подали комплимент от шефа. Пицца была божественной! Обязательно придем еще.',
      date: '2024-01-05',
      helpful: 14,
      verified: true,
      response: 'Спасибо за доверие в такой важный день! Поздравляем с годовщиной!'
    },
    {
      id: 8,
      name: 'Игорь Морозов',
      rating: 3,
      title: 'Средне',
      comment: 'Пицца неплохая, но ожидал большего за такую цену. Тесто немного суховато, начинки маловато. Возможно, просто не повезло с конкретным заказом.',
      date: '2024-01-03',
      helpful: 4,
      verified: true,
      response: 'Сожалеем, что не оправдали ваши ожидания. Свяжитесь с нами, мы исправим ситуацию!'
    }
  ];

  const filteredReviews = reviews
    .filter(review => {
      const matchesSearch = review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           review.comment.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRating = selectedRating === null || review.rating === selectedRating;
      return matchesSearch && matchesRating;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return b.rating - a.rating;
    });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.name || !newReview.email || !newReview.title || !newReview.comment) {
      toast({
        title: 'Заполните обязательные поля',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Отзыв отправлен!',
      description: 'Спасибо за ваш отзыв! Он появится на сайте после модерации.',
    });

    setNewReview({
      name: '',
      email: '',
      rating: 5,
      title: '',
      comment: '',
      orderNumber: ''
    });
    setShowForm(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Отзывы клиентов</h1>
            <p className="text-xl opacity-90">
              Узнайте, что говорят о нас наши клиенты, и поделитесь своим мнением
            </p>
          </div>
        </div>
      </div>

      {/* Rating Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Overall Rating */}
              <Card>
                <CardHeader>
                  <CardTitle>Общая оценка</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-5xl font-bold text-red-600">
                      {averageRating.toFixed(1)}
                    </div>
                    <div>
                      {renderStars(Math.round(averageRating))}
                      <p className="text-gray-600 mt-1">
                        На основе {reviews.length} отзывов
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {ratingDistribution.map((item) => (
                      <div key={item.rating} className="flex items-center space-x-3">
                        <span className="w-3">{item.rating}</span>
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Write Review */}
              <Card>
                <CardHeader>
                  <CardTitle>Поделитесь мнением</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Ваш отзыв поможет нам стать лучше и поможет другим клиентам сделать выбор.
                  </p>
                  
                  <Button 
                    onClick={() => setShowForm(!showForm)}
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    {showForm ? 'Скрыть форму' : 'Написать отзыв'}
                  </Button>

                  {showForm && (
                    <form onSubmit={handleSubmitReview} className="mt-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="reviewName">Имя *</Label>
                          <Input
                            id="reviewName"
                            value={newReview.name}
                            onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="reviewEmail">Email *</Label>
                          <Input
                            id="reviewEmail"
                            type="email"
                            value={newReview.email}
                            onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Оценка *</Label>
                        <div className="mt-2">
                          {renderStars(newReview.rating, true, (rating) => 
                            setNewReview({...newReview, rating})
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="reviewTitle">Заголовок *</Label>
                        <Input
                          id="reviewTitle"
                          value={newReview.title}
                          onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                          placeholder="Кратко опишите ваше впечатление"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="reviewComment">Отзыв *</Label>
                        <Textarea
                          id="reviewComment"
                          rows={4}
                          value={newReview.comment}
                          onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                          placeholder="Расскажите подробнее о вашем опыте..."
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="orderNumber">Номер заказа (необязательно)</Label>
                        <Input
                          id="orderNumber"
                          value={newReview.orderNumber}
                          onChange={(e) => setNewReview({...newReview, orderNumber: e.target.value})}
                          placeholder="Для подтверждения покупки"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                        Отправить отзыв
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Поиск по отзывам..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Rating Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedRating || ''}
                  onChange={(e) => setSelectedRating(e.target.value ? parseInt(e.target.value) : null)}
                  className="border rounded-md px-3 py-2"
                >
                  <option value="">Все оценки</option>
                  <option value="5">5 звезд</option>
                  <option value="4">4 звезды</option>
                  <option value="3">3 звезды</option>
                  <option value="2">2 звезды</option>
                  <option value="1">1 звезда</option>
                </select>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'rating')}
                className="border rounded-md px-3 py-2"
              >
                <option value="date">По дате</option>
                <option value="rating">По оценке</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{review.name}</h3>
                          {review.verified && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              Проверенная покупка
                            </Badge>
                          )}
                        </div>
                        {renderStars(review.rating)}
                        <h4 className="font-semibold mt-2">{review.title}</h4>
                      </div>
                      <span className="text-sm text-gray-500">
                        {formatDate(review.date)}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-700 mb-4">{review.comment}</p>

                    {review.response && (
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">М</span>
                          </div>
                          <span className="font-semibold">Мама Мия</span>
                        </div>
                        <p className="text-gray-700 text-sm">{review.response}</p>
                      </div>
                    )}

                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">Полезно ({review.helpful})</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  По вашему запросу отзывов не найдено
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;