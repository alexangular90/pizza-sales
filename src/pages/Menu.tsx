import React, { useState } from 'react';
import { pizzas } from '../data/pizzas';
import PizzaCard from '../components/PizzaCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Search, Filter } from 'lucide-react';

const Menu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('все');
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');

  const categories = ['все', 'классические', 'мясные', 'вегетарианские', 'острые', 'сладкие'];

  const filteredPizzas = pizzas
    .filter(pizza => {
      const matchesSearch = pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pizza.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'все' || pizza.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.price - b.price;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Наше меню</h1>
          <p className="text-xl text-center opacity-90">
            Выберите свою любимую пиццу из нашего разнообразного меню
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Поиск пиццы..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
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

            {/* Sort */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price')}
                className="border rounded-md px-3 py-2"
              >
                <option value="name">По названию</option>
                <option value="price">По цене</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Найдено пицц: <span className="font-semibold">{filteredPizzas.length}</span>
          </p>
        </div>

        {/* Pizza Grid */}
        {filteredPizzas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              По вашему запросу ничего не найдено. Попробуйте изменить критерии поиска.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-red-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Не нашли то, что искали?</h2>
          <p className="text-lg opacity-90 mb-6">
            Свяжитесь с нами, и мы поможем вам выбрать идеальную пиццу!
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
          >
            Связаться с нами
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;