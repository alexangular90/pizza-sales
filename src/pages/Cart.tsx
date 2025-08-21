import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '../components/ui/use-toast';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    comment: ''
  });
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');

  const getSizeName = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'small': return 'Маленькая';
      case 'medium': return 'Средняя';
      case 'large': return 'Большая';
    }
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity: newQuantity } });
    }
  };

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    toast({
      title: 'Товар удален',
      description: 'Товар удален из корзины',
    });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (state.items.length === 0) {
      toast({
        title: 'Корзина пуста',
        description: 'Добавьте товары в корзину перед оформлением заказа',
        variant: 'destructive'
      });
      return;
    }

    if (!customerInfo.name || !customerInfo.phone || (deliveryType === 'delivery' && !customerInfo.address)) {
      toast({
        title: 'Заполните обязательные поля',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    // Здесь бы был запрос к API для создания заказа
    toast({
      title: 'Заказ оформлен!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения заказа',
    });

    // Очищаем корзину
    dispatch({ type: 'CLEAR_CART' });
    
    // Очищаем форму
    setCustomerInfo({
      name: '',
      phone: '',
      email: '',
      address: '',
      comment: ''
    });
  };

  const deliveryFee = deliveryType === 'delivery' && state.total < 1000 ? 200 : 0;
  const totalWithDelivery = state.total + deliveryFee;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">Корзина пуста</h1>
            <p className="text-gray-600 mb-8">
              Добавьте пиццы в корзину, чтобы оформить заказ
            </p>
            <Link to="/menu">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Перейти к меню
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {state.items.map((item) => {
                    const itemId = `${item.pizza.id}-${item.size}`;
                    const itemPrice = item.pizza.sizes[item.size].price;
                    const itemTotal = itemPrice * item.quantity;

                    return (
                      <div key={itemId} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img
                          src={item.pizza.image}
                          alt={item.pizza.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.pizza.name}</h3>
                          <p className="text-sm text-gray-600">
                            {getSizeName(item.size)} ({item.pizza.sizes[item.size].diameter} см)
                          </p>
                          <p className="text-sm font-semibold">{itemPrice} ₽</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(itemId, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(itemId, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold">{itemTotal} ₽</p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeItem(itemId)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Оформление заказа</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  {/* Delivery Type */}
                  <div>
                    <Label className="text-base font-semibold">Способ получения</Label>
                    <div className="flex space-x-4 mt-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="delivery"
                          checked={deliveryType === 'delivery'}
                          onChange={(e) => setDeliveryType(e.target.value as 'delivery')}
                        />
                        <span>Доставка</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="pickup"
                          checked={deliveryType === 'pickup'}
                          onChange={(e) => setDeliveryType(e.target.value as 'pickup')}
                        />
                        <span>Самовывоз</span>
                      </label>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    />
                  </div>

                  {deliveryType === 'delivery' && (
                    <div>
                      <Label htmlFor="address">Адрес доставки *</Label>
                      <Textarea
                        id="address"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                        required
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="comment">Комментарий к заказу</Label>
                    <Textarea
                      id="comment"
                      value={customerInfo.comment}
                      onChange={(e) => setCustomerInfo({...customerInfo, comment: e.target.value})}
                    />
                  </div>

                  {/* Order Summary */}
                  <div className="border-t pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Сумма заказа:</span>
                        <span>{state.total} ₽</span>
                      </div>
                      {deliveryFee > 0 && (
                        <div className="flex justify-between">
                          <span>Доставка:</span>
                          <span>{deliveryFee} ₽</span>
                        </div>
                      )}
                      {deliveryType === 'delivery' && state.total >= 1000 && (
                        <div className="flex justify-between text-green-600">
                          <span>Доставка:</span>
                          <span>Бесплатно</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Итого:</span>
                        <span>{totalWithDelivery} ₽</span>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    Оформить заказ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;