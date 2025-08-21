import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Меню', href: '/menu' },
    { name: 'Акции', href: '/promotions' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-red-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Доставка по Москве</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Время работы: 10:00 - 23:00</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold text-xl">🍕</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Мама Мия</h1>
              <p className="text-sm opacity-90">Итальянская пиццерия</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`hover:text-yellow-300 transition-colors ${
                  isActive(item.href) ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="outline" className="relative bg-white text-red-600 hover:bg-gray-100">
                <ShoppingCart className="w-5 h-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-red-500">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`hover:text-yellow-300 transition-colors ${
                    isActive(item.href) ? 'text-yellow-300 font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;