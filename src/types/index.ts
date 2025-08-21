export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'классические' | 'мясные' | 'вегетарианские' | 'острые' | 'сладкие';
  ingredients: string[];
  sizes: {
    small: { diameter: number; price: number };
    medium: { diameter: number; price: number };
    large: { diameter: number; price: number };
  };
}

export interface CartItem {
  pizza: Pizza;
  size: 'small' | 'medium' | 'large';
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerInfo: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  deliveryType: 'delivery' | 'pickup';
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
  total: number;
  createdAt: Date;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: Date;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image: string;
  date: Date;
  category: string;
}

export interface Vacancy {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  salary: string;
  schedule: string;
}