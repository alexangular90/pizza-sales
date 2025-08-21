import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Users, Award, Heart, Clock, ChefHat, Leaf } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Любовь к делу',
      description: 'Каждая пицца готовится с душой и вниманием к деталям'
    },
    {
      icon: <ChefHat className="w-8 h-8 text-red-600" />,
      title: 'Мастерство',
      description: 'Наши повара - настоящие мастера итальянской кухни'
    },
    {
      icon: <Leaf className="w-8 h-8 text-red-600" />,
      title: 'Качество',
      description: 'Используем только свежие и натуральные ингредиенты'
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: 'Семейность',
      description: 'Мы создаем атмосферу семейного уюта и тепла'
    }
  ];

  const team = [
    {
      name: 'Джузеппе Россини',
      position: 'Шеф-повар',
      experience: '15 лет опыта',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
      description: 'Родом из Неаполя, хранитель семейных рецептов'
    },
    {
      name: 'Мария Бьянки',
      position: 'Су-шеф',
      experience: '8 лет опыта',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
      description: 'Специалист по традиционным итальянским соусам'
    },
    {
      name: 'Антонио Верди',
      position: 'Пиццайоло',
      experience: '12 лет опыта',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
      description: 'Мастер тонкого теста и идеальной формы'
    }
  ];

  const achievements = [
    { year: '2014', event: 'Открытие первой пиццерии' },
    { year: '2016', event: 'Награда "Лучшая пицца города"' },
    { year: '2018', event: 'Открытие второго филиала' },
    { year: '2020', event: 'Запуск службы доставки' },
    { year: '2022', event: '50,000 довольных клиентов' },
    { year: '2024', event: '10 лет успешной работы' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О нас</h1>
            <p className="text-xl opacity-90">
              История семейной пиццерии, которая покорила сердца тысяч клиентов
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Пиццерия "Мама Мия" была основана в 2014 году семьей Россини, которая переехала 
                  в Москву из солнечного Неаполя. Джузеппе и Мария Россини привезли с собой не только 
                  традиционные рецепты, передававшиеся из поколения в поколение, но и настоящую 
                  итальянскую страсть к кулинарии.
                </p>
                <p>
                  Начав с небольшой пиццерии на 20 мест, мы постепенно завоевывали сердца москвичей 
                  своими аутентичными вкусами и домашней атмосферой. Секрет нашего успеха прост: 
                  мы готовим каждую пиццу так, как готовили бы для своей семьи.
                </p>
                <p>
                  Сегодня "Мама Мия" - это не просто пиццерия, это место, где встречаются друзья, 
                  празднуют семейные торжества и создают теплые воспоминания за вкусной едой.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg"
                alt="Наша история"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"
                alt="Традиции"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    {member.position}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши достижения</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      {achievement.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-lg">{achievement.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Мы в цифрах</h2>
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
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Видов пицц</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Наша миссия</h2>
            <Card className="p-8">
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Мы стремимся дарить людям радость и удовольствие от настоящей итальянской пиццы. 
                  Наша цель - создать место, где каждый гость чувствует себя как дома, где качество 
                  еды сочетается с теплым сервисом, а традиции передаются через поколения. 
                  Мы верим, что хорошая еда объединяет людей и создает незабываемые моменты.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;