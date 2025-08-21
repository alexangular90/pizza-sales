import { Pizza } from '../types';

export const pizzas: Pizza[] = [
  {
    id: '1',
    name: 'Маргарита',
    description: 'Классическая пицца с томатным соусом, моцареллой и базиликом',
    price: 450,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    category: 'классические',
    ingredients: ['томатный соус', 'моцарелла', 'базилик', 'оливковое масло'],
    sizes: {
      small: { diameter: 25, price: 450 },
      medium: { diameter: 30, price: 650 },
      large: { diameter: 35, price: 850 }
    }
  },
  {
    id: '2',
    name: 'Пепперони',
    description: 'Острая пицца с пепперони и моцареллой',
    price: 550,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
    category: 'мясные',
    ingredients: ['томатный соус', 'моцарелла', 'пепперони'],
    sizes: {
      small: { diameter: 25, price: 550 },
      medium: { diameter: 30, price: 750 },
      large: { diameter: 35, price: 950 }
    }
  },
  {
    id: '3',
    name: 'Четыре сыра',
    description: 'Пицца с четырьмя видами сыра: моцарелла, пармезан, горгонзола, чеддер',
    price: 650,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
    category: 'классические',
    ingredients: ['белый соус', 'моцарелла', 'пармезан', 'горгонзола', 'чеддер'],
    sizes: {
      small: { diameter: 25, price: 650 },
      medium: { diameter: 30, price: 850 },
      large: { diameter: 35, price: 1050 }
    }
  },
  {
    id: '4',
    name: 'Мясная',
    description: 'Сытная пицца с говядиной, свининой, курицей и беконом',
    price: 750,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
    category: 'мясные',
    ingredients: ['томатный соус', 'моцарелла', 'говядина', 'свинина', 'курица', 'бекон'],
    sizes: {
      small: { diameter: 25, price: 750 },
      medium: { diameter: 30, price: 950 },
      large: { diameter: 35, price: 1150 }
    }
  },
  {
    id: '5',
    name: 'Вегетарианская',
    description: 'Пицца с овощами: томаты, перец, грибы, лук, оливки',
    price: 500,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    category: 'вегетарианские',
    ingredients: ['томатный соус', 'моцарелла', 'томаты', 'болгарский перец', 'грибы', 'лук', 'оливки'],
    sizes: {
      small: { diameter: 25, price: 500 },
      medium: { diameter: 30, price: 700 },
      large: { diameter: 35, price: 900 }
    }
  },
  {
    id: '6',
    name: 'Дьявольская',
    description: 'Очень острая пицца с халапеньо, чили и острой салями',
    price: 600,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
    category: 'острые',
    ingredients: ['острый томатный соус', 'моцарелла', 'острая салями', 'халапеньо', 'перец чили'],
    sizes: {
      small: { diameter: 25, price: 600 },
      medium: { diameter: 30, price: 800 },
      large: { diameter: 35, price: 1000 }
    }
  },
  {
    id: '7',
    name: 'Гавайская',
    description: 'Пицца с ветчиной и ананасами',
    price: 550,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    category: 'классические',
    ingredients: ['томатный соус', 'моцарелла', 'ветчина', 'ананасы'],
    sizes: {
      small: { diameter: 25, price: 550 },
      medium: { diameter: 30, price: 750 },
      large: { diameter: 35, price: 950 }
    }
  },
  {
    id: '8',
    name: 'Нутелла',
    description: 'Сладкая пицца с нутеллой, бананами и орехами',
    price: 450,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
    category: 'сладкие',
    ingredients: ['нутелла', 'бананы', 'грецкие орехи', 'сахарная пудра'],
    sizes: {
      small: { diameter: 25, price: 450 },
      medium: { diameter: 30, price: 650 },
      large: { diameter: 35, price: 850 }
    }
  }
];