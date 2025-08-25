import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Search, Leaf, AlertTriangle, Heart, Zap } from 'lucide-react';
import { pizzas } from '../data/pizzas';

const Nutrition: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPizza, setSelectedPizza] = useState(pizzas[0]);

  // Расширенная информация о пищевой ценности для каждой пиццы
  const nutritionData = {
    '1': { // Маргарита
      calories: { small: 220, medium: 280, large: 340 },
      protein: { small: 12, medium: 15, large: 18 },
      carbs: { small: 28, medium: 35, large: 42 },
      fat: { small: 8, medium: 10, large: 12 },
      fiber: { small: 2, medium: 3, large: 4 },
      sodium: { small: 580, medium: 720, large: 860 },
      sugar: { small: 4, medium: 5, large: 6 },
      allergens: ['глютен', 'молочные продукты'],
      vegetarian: true,
      vegan: false,
      glutenFree: false
    },
    '2': { // Пепперони
      calories: { small: 290, medium: 360, large: 430 },
      protein: { small: 15, medium: 19, large: 23 },
      carbs: { small: 28, medium: 35, large: 42 },
      fat: { small: 14, medium: 18, large: 22 },
      fiber: { small: 2, medium: 3, large: 4 },
      sodium: { small: 780, medium: 980, large: 1180 },
      sugar: { small: 4, medium: 5, large: 6 },
      allergens: ['глютен', 'молочные продукты'],
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    '3': { // Четыре сыра
      calories: { small: 320, medium: 400, large: 480 },
      protein: { small: 18, medium: 23, large: 28 },
      carbs: { small: 26, medium: 33, large: 40 },
      fat: { small: 18, medium: 23, large: 28 },
      fiber: { small: 2, medium: 3, large: 4 },
      sodium: { small: 820, medium: 1020, large: 1220 },
      sugar: { small: 3, medium: 4, large: 5 },
      allergens: ['глютен', 'молочные продукты'],
      vegetarian: true,
      vegan: false,
      glutenFree: false
    },
    '4': { // Мясная
      calories: { small: 380, medium: 480, large: 580 },
      protein: { small: 22, medium: 28, large: 34 },
      carbs: { small: 30, medium: 38, large: 46 },
      fat: { small: 20, medium: 25, large: 30 },
      fiber: { small: 2, medium: 3, large: 4 },
      sodium: { small: 920, medium: 1150, large: 1380 },
      sugar: { small: 5, medium: 6, large: 7 },
      allergens: ['глютен', 'молочные продукты'],
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    '5': { // Вегетарианская
      calories: { small: 200, medium: 250, large: 300 },
      protein: { small: 10, medium: 13, large: 16 },
      carbs: { small: 32, medium: 40, large: 48 },
      fat: { small: 6, medium: 8, large: 10 },
      fiber: { small: 4, medium: 5, large: 6 },
      sodium: { small: 520, medium: 650, large: 780 },
      sugar: { small: 6, medium: 8, large: 10 },
      allergens: ['глютен', 'молочные продукты'],
      vegetarian: true,
      vegan: false,
      glutenFree: false
    },
    '6': { // Дьявольская
      calories: { small: 310, medium: 390, large: 470 },
      protein: { small: 16, medium: 20, large: 24 },
      carbs: { small: 29, medium: 36, large: 43 },
      fat: { small: 15, medium: 19, large: 23 },
      fiber: { small: 3, medium: 4, large: 5 },
      sodium: { small: 850, medium: 1060, large: 1270 },
      sugar: { small: 4, medium: 5, large: 6 },
      allergens: ['глютен', 'молочные продукты'],
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    '7': { // Гавайская
      calories: { small: 270, medium: 340, large: 410 },
      protein: { small: 14, medium: 18, large: 22 },
      carbs: { small: 32, medium: 40, large: 48 },
      fat: { small: 10, medium: 13, large: 16 },
      fiber: { small: 2, medium: 3, large: 4 },
      sodium: { small: 680, medium: 850, large: 1020 },
      sugar: { small: 8, medium: 10, large: 12 },
      allergens: ['глютен', 'молочные продукты'],
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    '8': { // Нутелла
      calories: { small: 350, medium: 440, large: 530 },
      protein: { small: 8, medium: 10, large: 12 },
      carbs: { small: 45, medium: 56, large: 67 },
      fat: { small: 16, medium: 20, large: 24 },
      fiber: { small: 3, medium: 4, large: 5 },
      sodium: { small: 280, medium: 350, large: 420 },
      sugar: { small: 25, medium: 31, large: 37 },
      allergens: ['глютен', 'молочные продукты', 'орехи'],
      vegetarian: true,
      vegan: false,
      glutenFree: false
    }
  };

  const filteredPizzas = pizzas.filter(pizza =>
    pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentNutrition = nutritionData[selectedPizza.id as keyof typeof nutritionData];

  const allergensList = [
    { name: 'Глютен', icon: '🌾', description: 'Содержится в пшенице, ржи, ячмене' },
    { name: 'Молочные продукты', icon: '🥛', description: 'Лактоза и молочные белки' },
    { name: 'Орехи', icon: '🥜', description: 'Древесные орехи и арахис' },
    { name: 'Яйца', icon: '🥚', description: 'Куриные яйца и продукты их переработки' },
    { name: 'Соя', icon: '🫘', description: 'Соевые бобы и продукты из сои' },
    { name: 'Рыба', icon: '🐟', description: 'Рыба и морепродукты' }
  ];

  const dietaryOptions = [
    {
      name: 'Вегетарианские',
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      description: 'Без мяса и рыбы',
      count: pizzas.filter(p => nutritionData[p.id as keyof typeof nutritionData]?.vegetarian).length
    },
    {
      name: 'Низкокалорийные',
      icon: <Heart className="w-6 h-6 text-red-600" />,
      description: 'Менее 250 ккал на порцию',
      count: pizzas.filter(p => {
        const nutrition = nutritionData[p.id as keyof typeof nutritionData];
        return nutrition && nutrition.calories.small < 250;
      }).length
    },
    {
      name: 'Высокобелковые',
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      description: 'Более 15г белка на порцию',
      count: pizzas.filter(p => {
        const nutrition = nutritionData[p.id as keyof typeof nutritionData];
        return nutrition && nutrition.protein.small > 15;
      }).length
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Пищевая ценность</h1>
            <p className="text-xl opacity-90">
              Полная информация о калорийности, составе и аллергенах наших пицц
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Найти пиццу..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Dietary Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Диетические опции</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dietaryOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <Badge variant="outline" className="text-red-600 border-red-600">
                    {option.count} пицц
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pizza Nutrition Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Калькулятор пищевой ценности</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pizza Selection */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Выберите пиццу</h3>
                <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
                  {filteredPizzas.map((pizza) => (
                    <Card 
                      key={pizza.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedPizza.id === pizza.id ? 'ring-2 ring-red-600' : ''
                      }`}
                      onClick={() => setSelectedPizza(pizza)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={pizza.image}
                            alt={pizza.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{pizza.name}</h4>
                            <p className="text-sm text-gray-600">{pizza.description}</p>
                            <div className="flex space-x-2 mt-2">
                              {nutritionData[pizza.id as keyof typeof nutritionData]?.vegetarian && (
                                <Badge variant="outline" className="text-green-600 border-green-600">
                                  <Leaf className="w-3 h-3 mr-1" />
                                  Вегетарианская
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Nutrition Info */}
              <div>
                <h3 className="text-xl font-semibold mb-6">{selectedPizza.name}</h3>
                
                <Tabs defaultValue="nutrition" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="nutrition">Пищевая ценность</TabsTrigger>
                    <TabsTrigger value="allergens">Аллергены</TabsTrigger>
                    <TabsTrigger value="ingredients">Состав</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="nutrition" className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      {(['small', 'medium', 'large'] as const).map((size) => (
                        <Card key={size}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-center">
                              {size === 'small' ? 'Маленькая' : size === 'medium' ? 'Средняя' : 'Большая'}
                            </CardTitle>
                            <p className="text-xs text-center text-gray-600">
                              {selectedPizza.sizes[size].diameter} см
                            </p>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>Калории:</span>
                                <span className="font-semibold">{currentNutrition?.calories[size]} ккал</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Белки:</span>
                                <span>{currentNutrition?.protein[size]} г</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Углеводы:</span>
                                <span>{currentNutrition?.carbs[size]} г</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Жиры:</span>
                                <span>{currentNutrition?.fat[size]} г</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Клетчатка:</span>
                                <span>{currentNutrition?.fiber[size]} г</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Натрий:</span>
                                <span>{currentNutrition?.sodium[size]} мг</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="allergens" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                          Содержит аллергены:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {currentNutrition?.allergens.map((allergen, index) => (
                            <Badge key={index} variant="outline" className="text-orange-600 border-orange-600">
                              {allergen}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Диетические ограничения:</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${currentNutrition?.vegetarian ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                            <span className="text-sm">Вегетарианская</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${currentNutrition?.vegan ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                            <span className="text-sm">Веганская</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${currentNutrition?.glutenFree ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                            <span className="text-sm">Без глютена</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ingredients" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Ингредиенты:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedPizza.ingredients.map((ingredient, index) => (
                          <Badge key={index} variant="outline">
                            {ingredient}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Allergens Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Справочник аллергенов</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allergensList.map((allergen, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className="text-2xl">{allergen.icon}</span>
                      <span>{allergen.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{allergen.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Важная информация</h3>
                  <p className="text-sm text-yellow-700">
                    Если у вас есть пищевые аллергии или непереносимость, обязательно сообщите об этом 
                    при заказе. Наши блюда готовятся на общей кухне, поэтому возможно перекрестное 
                    загрязнение аллергенами. При серьезных аллергических реакциях рекомендуем 
                    проконсультироваться с врачом перед заказом.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;