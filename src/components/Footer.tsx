import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🍕</span>
              </div>
              <h3 className="text-xl font-bold">Мама Мия</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Лучшая итальянская пицца в городе. Готовим с любовью уже более 10 лет.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-400 hover:text-white transition-colors">Меню</Link></li>
              <li><Link to="/promotions" className="text-gray-400 hover:text-white transition-colors">Акции</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white transition-colors">Доставка</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/franchise" className="text-gray-400 hover:text-white transition-colors">Франшиза</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Вакансии</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/catering" className="text-gray-400 hover:text-white transition-colors">Кейтеринг</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Мероприятия</Link></li>
              <li><Link to="/gift-cards" className="text-gray-400 hover:text-white transition-colors">Подарочные карты</Link></li>
              <li><Link to="/loyalty" className="text-gray-400 hover:text-white transition-colors">Программа лояльности</Link></li>
              <li><Link to="/nutrition" className="text-gray-400 hover:text-white transition-colors">Пищевая ценность</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">info@mamamia.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">ул. Тверская, 15, Москва</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">10:00 - 23:00 ежедневно</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Мама Мия. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;