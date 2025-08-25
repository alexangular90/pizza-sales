import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Users, MapPin, Clock, DollarSign, Star, Heart, Award, TrendingUp } from 'lucide-react';
import { toast } from '../components/ui/use-toast';

const Careers: React.FC = () => {
  const [selectedVacancy, setSelectedVacancy] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null as File | null
  });

  const vacancies = [
    {
      id: 1,
      title: 'Пиццайоло',
      department: 'Кухня',
      location: 'Москва, ул. Тверская',
      schedule: 'Полный день',
      salary: '60,000 - 80,000 ₽',
      experience: '1-3 года',
      type: 'Полная занятость',
      description: 'Ищем опытного пиццайоло для работы в нашем ресторане. Вы будете готовить пиццу по традиционным итальянским рецептам.',
      requirements: [
        'Опыт работы пиццайоло от 1 года',
        'Знание технологии приготовления пиццы',
        'Умение работать в команде',
        'Ответственность и пунктуальность'
      ],
      benefits: [
        'Официальное трудоустройство',
        'Обучение и развитие',
        'Питание за счет компании',
        'Дружный коллектив'
      ],
      urgent: true
    },
    {
      id: 2,
      title: 'Официант',
      department: 'Обслуживание',
      location: 'Москва, ул. Арбат',
      schedule: 'Сменный график',
      salary: '45,000 - 60,000 ₽',
      experience: 'Без опыта',
      type: 'Полная занятость',
      description: 'Приглашаем на работу официанта в уютный ресторан итальянской кухни. Готовы обучить с нуля.',
      requirements: [
        'Коммуникабельность',
        'Желание работать с людьми',
        'Презентабельный внешний вид',
        'Готовность к обучению'
      ],
      benefits: [
        'Обучение за счет компании',
        'Гибкий график',
        'Чаевые',
        'Карьерный рост'
      ],
      urgent: false
    },
    {
      id: 3,
      title: 'Менеджер зала',
      department: 'Управление',
      location: 'Москва, центр',
      schedule: 'Полный день',
      salary: '70,000 - 90,000 ₽',
      experience: '2-5 лет',
      type: 'Полная занятость',
      description: 'Ищем опытного менеджера для управления залом ресторана и координации работы официантов.',
      requirements: [
        'Опыт работы в ресторанном бизнесе от 2 лет',
        'Навыки управления персоналом',
        'Знание стандартов обслуживания',
        'Стрессоустойчивость'
      ],
      benefits: [
        'Высокая зарплата',
        'Премии за результат',
        'Медицинская страховка',
        'Возможность развития'
      ],
      urgent: false
    },
    {
      id: 4,
      title: 'Курьер',
      department: 'Доставка',
      location: 'Москва, все районы',
      schedule: 'Гибкий график',
      salary: '40,000 - 70,000 ₽',
      experience: 'Без опыта',
      type: 'Частичная занятость',
      description: 'Требуются курьеры для доставки пиццы. Возможна работа на своем или корпоративном транспорте.',
      requirements: [
        'Наличие транспорта (желательно)',
        'Знание города',
        'Ответственность',
        'Пунктуальность'
      ],
      benefits: [
        'Свободный график',
        'Ежедневные выплаты',
        'Топливо за счет компании',
        'Простое оформление'
      ],
      urgent: true
    },
    {
      id: 5,
      title: 'Повар-универсал',
      department: 'Кухня',
      location: 'Москва, ул. Тверская',
      schedule: 'Сменный график',
      salary: '55,000 - 75,000 ₽',
      experience: '1-3 года',
      type: 'Полная занятость',
      description: 'Ищем повара-универсала для работы на кухне. Приготовление салатов, закусок, десертов.',
      requirements: [
        'Опыт работы поваром от 1 года',
        'Знание основ кулинарии',
        'Соблюдение санитарных норм',
        'Умение работать в команде'
      ],
      benefits: [
        'Стабильная зарплата',
        'Обучение новым блюдам',
        'Питание на работе',
        'Дружный коллектив'
      ],
      urgent: false
    },
    {
      id: 6,
      title: 'Администратор',
      department: 'Администрация',
      location: 'Москва, ул. Арбат',
      schedule: 'Полный день',
      salary: '50,000 - 65,000 ₽',
      experience: '1-2 года',
      type: 'Полная занятость',
      description: 'Требуется администратор для работы с клиентами, ведения документооборота и координации работы.',
      requirements: [
        'Опыт работы администратором',
        'Знание ПК',
        'Коммуникабельность',
        'Внимательность к деталям'
      ],
      benefits: [
        'Комфортные условия работы',
        'Обучение и развитие',
        'Социальный пакет',
        'Стабильность'
      ],
      urgent: false
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-red-600" />,
      title: 'Достойная зарплата',
      description: 'Конкурентные зарплаты и премии за результат'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: 'Карьерный рост',
      description: 'Возможности для профессионального развития'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Дружный коллектив',
      description: 'Работа в команде единомышленников'
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: 'Обучение',
      description: 'Постоянное обучение и повышение квалификации'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      toast({
        title: 'Заполните обязательные поля',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Резюме отправлено!',
      description: 'Мы рассмотрим вашу заявку и свяжемся с вами в ближайшее время',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      resume: null
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({...formData, resume: file});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Работа в Мама Мия</h1>
            <p className="text-xl opacity-90">
              Присоединяйтесь к нашей дружной команде и станьте частью успешной истории
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему стоит работать у нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Открытые вакансии</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vacancies.map((vacancy) => (
              <Card key={vacancy.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{vacancy.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline">{vacancy.department}</Badge>
                        {vacancy.urgent && (
                          <Badge className="bg-red-600">Срочно</Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600">{vacancy.salary}</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{vacancy.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{vacancy.schedule}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Star className="w-4 h-4 text-gray-400" />
                      <span>Опыт: {vacancy.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{vacancy.description}</p>

                  {selectedVacancy === vacancy.id && (
                    <div className="space-y-4 mb-4">
                      <div>
                        <h4 className="font-semibold mb-2">Требования:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {vacancy.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Мы предлагаем:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {vacancy.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setSelectedVacancy(
                        selectedVacancy === vacancy.id ? null : vacancy.id
                      )}
                      className="flex-1"
                    >
                      {selectedVacancy === vacancy.id ? 'Скрыть детали' : 'Подробнее'}
                    </Button>
                    <Button 
                      className="flex-1 bg-red-600 hover:bg-red-700"
                      onClick={() => setFormData({...formData, position: vacancy.title})}
                    >
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Отправить резюме</CardTitle>
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
                      <Label htmlFor="position">Желаемая должность *</Label>
                      <Input
                        id="position"
                        value={formData.position}
                        onChange={(e) => setFormData({...formData, position: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Опыт работы</Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      placeholder="Кратко опишите ваш опыт"
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume">Резюме (PDF, DOC, DOCX)</Label>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Сопроводительное письмо</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о себе и почему хотите работать у нас..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    Отправить резюме
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наша корпоративная культура</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Мы ценим:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Профессионализм и качество работы</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Командную работу и взаимопомощь</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Инициативность и творческий подход</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Честность и открытость</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Стремление к развитию</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Статистика</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Средний стаж сотрудников:</span>
                    <span className="font-semibold">2.5 года</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Внутренние повышения:</span>
                    <span className="font-semibold">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Удовлетворенность работой:</span>
                    <span className="font-semibold">4.6/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Количество сотрудников:</span>
                    <span className="font-semibold">150+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Есть вопросы?</h2>
          <p className="text-xl opacity-90 mb-8">
            Свяжитесь с нашим HR-отделом для получения дополнительной информации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              hr@mamamia.ru
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              +7 (495) 123-45-68
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;