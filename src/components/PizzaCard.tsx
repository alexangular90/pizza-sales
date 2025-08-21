import React from 'react';
import { Pizza } from '../types';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useCart } from '../contexts/CartContext';
import { toast } from './ui/use-toast';

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (size: 'small' | 'medium' | 'large') => {
    dispatch({ type: 'ADD_ITEM', payload: { pizza, size } });
    toast({
      title: 'Добавлено в корзину',
      description: `${pizza.name} (${getSizeName(size)}) добавлена в корзину`,
    });
  };

  const getSizeName = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'small': return 'Маленькая';
      case 'medium': return 'Средняя';
      case 'large': return 'Большая';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'классические': return 'bg-blue-100 text-blue-800';
      case 'мясные': return 'bg-red-100 text-red-800';
      case 'вегетарианские': return 'bg-green-100 text-green-800';
      case 'острые': return 'bg-orange-100 text-orange-800';
      case 'сладкие': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-48 object-cover"
        />
        <Badge className={`absolute top-2 right-2 ${getCategoryColor(pizza.category)}`}>
          {pizza.category}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl">{pizza.name}</CardTitle>
        <CardDescription>{pizza.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Ингредиенты:</p>
          <p className="text-sm">{pizza.ingredients.join(', ')}</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Маленькая ({pizza.sizes.small.diameter} см)</span>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">{pizza.sizes.small.price} ₽</span>
              <Button
                size="sm"
                onClick={() => handleAddToCart('small')}
                className="bg-red-600 hover:bg-red-700"
              >
                +
              </Button>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm">Средняя ({pizza.sizes.medium.diameter} см)</span>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">{pizza.sizes.medium.price} ₽</span>
              <Button
                size="sm"
                onClick={() => handleAddToCart('medium')}
                className="bg-red-600 hover:bg-red-700"
              >
                +
              </Button>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm">Большая ({pizza.sizes.large.diameter} см)</span>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">{pizza.sizes.large.price} ₽</span>
              <Button
                size="sm"
                onClick={() => handleAddToCart('large')}
                className="bg-red-600 hover:bg-red-700"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PizzaCard;