import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Gift, Heart, Star, Users, CreditCard, Mail, Phone } from 'lucide-react';
import { toast } from '../components/ui/use-toast';

const GiftCards: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    senderEmail: '',
    message: '',
    deliveryMethod: 'email'
  });

  const giftCardTypes = [
    {
      id: 1,
      name: 'Классическая',
      description: 'Универсальная подарочная карта для любых покупок',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
      color: 'bg-red-600',
      icon: <Gift className="w-8 h-8" />
    },
    {
      id: 2,
      name: 'Романтическая',
      description: 'Идеальный подарок для влюбленных',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
      color: 'bg-pink-600',
      icon: <Heart className="w-8 h-8" />
    },
    {
      id: 3,
      name: 'Премиум',
      description: 'Эксклюзивная карта с особыми привилегиями',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
      color: 'bg-yellow-600',
      icon: <Star className="w-8 h-8" />
    },
    {
      id: 4,
      name: 'Семейная',
      description: 'Для больших компаний и семейных ужинов',
      image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
      color: 'bg-green-600',
      icon: <Users className="w-8 h-8" />
    }
  ];

  const predefinedAmounts = [1000, 2000, 3000, 5000, 10000];

  const benefits = [
    'Действует 12 месяцев с даты покупки',
    'Можно использовать частями',
    'Действует во всех ресторанах сети',
    'Можно дарить и передавать',
    'Пополнение баланса карты',
    'SMS уведомления о балансе'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCard) {
      toast({
        title: 'Выберите тип карты',
        description: 'Пожалуйста, выберите дизайн подарочной карты',
        variant: 'destructive'
      });
      return;
    }

    const amount = customAmount || '0';
    if (parseInt(amount) < 500) {
      toast({
        title: 'Минимальная сумма 500₽',
        description: 'Минимальная сумма подарочной карты составляет 500 рублей',
        variant: 'destructive'
      });
      return;
    }

    if (!formData.recipientName || !formData.recipientEmail || !formData.senderName) {
      toast({
        title: 'Заполните обязательные поля',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Подарочная карта оформлена!',
      description: 'Карта будет отправлена получателю в течение 15 минут',
    });

    // Reset form
    setSelectedCard(null);
    setCustomAmount('');
    setFormData({
      recipientName: '',
      recipientEmail: '',
      senderName: '',
      senderEmail: '',
      message: '',
      deliveryMethod: 'email'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Gift className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Подарочные карты</h1>
            <p className="text-xl opacity-90">
              Подарите близким вкус настоящей Италии с нашими подарочными картами
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества наших карт</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Gift className="w-4 h-4 text-red-600" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Выберите дизайн карты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {giftCardTypes.map((card) => (
              <Card 
                key={card.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCard === card.id ? 'ring-2 ring-red-600' : ''
                }`}
                onClick={() => setSelectedCard(card.id)}
              >
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <div className={`absolute inset-0 ${card.color} opacity-80 rounded-t-lg flex items-center justify-center`}>
                    <div className="text-white">
                      {card.icon}
                    </div>
                  </div>
                  {selectedCard === card.id && (
                    <Badge className="absolute top-2 right-2 bg-green-600">
                      Выбрано
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{card.name}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Amount Selection */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Сумма подарочной карты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  {predefinedAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={customAmount === amount.toString() ? "default" : "outline"}
                      className={customAmount === amount.toString() ? "bg-red-600 hover:bg-red-700" : ""}
                      onClick={() => setCustomAmount(amount.toString())}
                    >
                      {amount} ₽
                    </Button>
                  ))}
                </div>
                
                <div>
                  <Label htmlFor="customAmount">Или введите свою сумму (мин. 500₽)</Label>
                  <Input
                    id="customAmount"
                    type="number"
                    min="500"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Введите сумму"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Оформление подарочной карты</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Recipient Info */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Получатель</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="recipientName">Имя получателя *</Label>
                        <Input
                          id="recipientName"
                          value={formData.recipientName}
                          onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="recipientEmail">Email получателя *</Label>
                        <Input
                          id="recipientEmail"
                          type="email"
                          value={formData.recipientEmail}
                          onChange={(e) => setFormData({...formData, recipientEmail: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sender Info */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Отправитель</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="senderName">Ваше имя *</Label>
                        <Input
                          id="senderName"
                          value={formData.senderName}
                          onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="senderEmail">Ваш email</Label>
                        <Input
                          id="senderEmail"
                          type="email"
                          value={formData.senderEmail}
                          onChange={(e) => setFormData({...formData, senderEmail: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Персональное сообщение</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Напишите поздравление или пожелание..."
                    />
                  </div>

                  {/* Delivery Method */}
                  <div>
                    <Label className="text-base font-semibold">Способ доставки</Label>
                    <div className="flex space-x-4 mt-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="email"
                          checked={formData.deliveryMethod === 'email'}
                          onChange={(e) => setFormData({...formData, deliveryMethod: e.target.value})}
                        />
                        <Mail className="w-4 h-4" />
                        <span>Email (бесплатно)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="sms"
                          checked={formData.deliveryMethod === 'sms'}
                          onChange={(e) => setFormData({...formData, deliveryMethod: e.target.value})}
                        />
                        <Phone className="w-4 h-4" />
                        <span>SMS (+50₽)</span>
                      </label>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="border-t pt-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Номинал карты:</span>
                        <span>{customAmount || 0} ₽</span>
                      </div>
                      {formData.deliveryMethod === 'sms' && (
                        <div className="flex justify-between">
                          <span>Доставка SMS:</span>
                          <span>50 ₽</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>К оплате:</span>
                        <span>
                          {(parseInt(customAmount || '0') + (formData.deliveryMethod === 'sms' ? 50 : 0))} ₽
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Оплатить и отправить карту
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Как долго действует подарочная карта?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Подарочная карта действует 12 месяцев с момента покупки. За месяц до истечения 
                    срока мы отправим напоминание на email.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Можно ли использовать карту частями?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Да, вы можете использовать карту частями. Остаток средств сохраняется на карте 
                    до полного использования или истечения срока действия.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Что делать, если карта потерялась?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Обратитесь к нам по телефону +7 (495) 123-45-67 с номером карты или email, 
                    на который она была отправлена. Мы поможем восстановить доступ к карте.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftCards;