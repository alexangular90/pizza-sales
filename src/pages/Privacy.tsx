import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Eye, Lock, UserCheck, Mail, Phone } from 'lucide-react';

const Privacy: React.FC = () => {
  const sections = [
    {
      id: 'collection',
      title: 'Сбор информации',
      icon: <UserCheck className="w-6 h-6 text-red-600" />,
      content: `Мы собираем информацию, которую вы предоставляете нам напрямую, например:
      • Имя, адрес электронной почты и номер телефона при регистрации
      • Адрес доставки и платежную информацию при оформлении заказа
      • Отзывы и комментарии, которые вы оставляете
      • Информацию, которую вы предоставляете при обращении в службу поддержки
      
      Мы также автоматически собираем некоторую информацию при использовании нашего сайта:
      • IP-адрес и информацию о браузере
      • Страницы, которые вы посещаете, и время, проведенное на сайте
      • Информацию о том, как вы взаимодействуете с нашим контентом`
    },
    {
      id: 'usage',
      title: 'Использование информации',
      icon: <Eye className="w-6 h-6 text-red-600" />,
      content: `Мы используем собранную информацию для:
      • Обработки и выполнения ваших заказов
      • Предоставления клиентской поддержки
      • Отправки важных уведомлений о заказах
      • Улучшения наших услуг и пользовательского опыта
      • Персонализации контента и предложений
      • Соблюдения правовых обязательств
      • Предотвращения мошенничества и обеспечения безопасности`
    },
    {
      id: 'sharing',
      title: 'Передача информации',
      icon: <Lock className="w-6 h-6 text-red-600" />,
      content: `Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам без вашего согласия, за исключением следующих случаев:
      • Поставщикам услуг, которые помогают нам в работе (службы доставки, платежные системы)
      • При необходимости соблюдения закона или защиты наших прав
      • В случае продажи или передачи нашего бизнеса
      
      Все третьи стороны обязуются защищать вашу информацию и использовать ее только для предоставления услуг нам.`
    },
    {
      id: 'security',
      title: 'Безопасность данных',
      icon: <Shield className="w-6 h-6 text-red-600" />,
      content: `Мы принимаем серьезные меры для защиты вашей личной информации:
      • Использование SSL-шифрования для передачи данных
      • Ограниченный доступ к личной информации только уполномоченным сотрудникам
      • Регулярное обновление систем безопасности
      • Мониторинг подозрительной активности
      • Безопасное хранение данных на защищенных серверах
      
      Однако помните, что ни один метод передачи данных через интернет не является абсолютно безопасным.`
    },
    {
      id: 'cookies',
      title: 'Файлы cookie',
      icon: <Eye className="w-6 h-6 text-red-600" />,
      content: `Мы используем файлы cookie и аналогичные технологии для:
      • Запоминания ваших предпочтений и настроек
      • Анализа использования сайта и улучшения его работы
      • Персонализации контента и рекламы
      • Обеспечения безопасности
      
      Вы можете управлять настройками cookie в своем браузере, но отключение некоторых cookie может повлиять на функциональность сайта.`
    },
    {
      id: 'rights',
      title: 'Ваши права',
      icon: <UserCheck className="w-6 h-6 text-red-600" />,
      content: `В соответствии с применимым законодательством, вы имеете право:
      • Получить доступ к своим личным данным
      • Исправить неточную или неполную информацию
      • Удалить свои личные данные
      • Ограничить обработку ваших данных
      • Возражать против обработки данных
      • Получить копию ваших данных в структурированном формате
      
      Для реализации этих прав свяжитесь с нами по контактам, указанным ниже.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Политика конфиденциальности</h1>
            <p className="text-xl opacity-90">
              Мы серьезно относимся к защите ваших персональных данных
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-gray-600">
                  <strong>Дата последнего обновления:</strong> 15 января 2024 года
                </p>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Настоящая Политика конфиденциальности описывает, как ООО "Мама Мия" собирает, 
                  использует и защищает вашу личную информацию при использовании наших услуг.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section) => (
              <Card key={section.id}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    {section.icon}
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    {section.content.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 last:mb-0 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Дополнительная информация</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Хранение данных</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Мы храним вашу личную информацию только в течение времени, необходимого 
                    для достижения целей, для которых она была собрана, или в соответствии 
                    с требованиями законодательства.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Данные заказов: 3 года</li>
                    <li>Данные аккаунта: до удаления аккаунта</li>
                    <li>Маркетинговые данные: до отзыва согласия</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Международные передачи</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ваши данные обрабатываются на территории Российской Федерации. 
                    В случае необходимости передачи данных в другие страны, мы обеспечиваем 
                    соответствующий уровень защиты.
                  </p>
                  <p className="text-gray-600">
                    Все передачи осуществляются в соответствии с требованиями 
                    российского законодательства о персональных данных.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Конфиденциальность детей</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Наши услуги не предназначены для детей младше 14 лет. Мы сознательно не собираем 
                  личную информацию от детей младше 14 лет. Если вы являетесь родителем или опекуном 
                  и знаете, что ваш ребенок предоставил нам личную информацию, свяжитесь с нами.
                </p>
                <p className="text-gray-600">
                  Если мы узнаем, что собрали личную информацию от ребенка младше 14 лет без 
                  согласия родителей, мы примем меры для удаления этой информации с наших серверов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Изменения в политике конфиденциальности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Мы можем время от времени обновлять нашу Политику конфиденциальности. 
                  Мы уведомим вас о любых изменениях, разместив новую Политику конфиденциальности 
                  на этой странице и обновив дату "последнего обновления".
                </p>
                <p className="text-gray-600 mb-4">
                  Существенные изменения будут дополнительно доведены до вашего сведения 
                  по электронной почте или через уведомления на нашем сайте.
                </p>
                <p className="text-gray-600">
                  Рекомендуем периодически просматривать эту Политику конфиденциальности 
                  для получения информации о том, как мы защищаем вашу информацию.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
            <p className="text-xl opacity-90 mb-8">
              Если у вас есть вопросы о данной Политике конфиденциальности или обработке ваших данных
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p>privacy@mamamia.ru</p>
              </div>

              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p>+7 (495) 123-45-67</p>
              </div>

              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Почтовый адрес</h3>
                <p>ул. Тверская, 15<br />Москва, 125009</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-700 rounded-lg">
              <p className="text-sm">
                <strong>Ответственный за обработку персональных данных:</strong><br />
                ООО "Мама Мия", ОГРН 1234567890123<br />
                Адрес: 125009, г. Москва, ул. Тверская, д. 15
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;