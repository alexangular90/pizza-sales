import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Pizza } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { pizza: Pizza; size: 'small' | 'medium' | 'large' } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { pizza, size } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.pizza.id === pizza.id && item.size === size
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems)
        };
      }

      const newItem: CartItem = {
        pizza,
        size,
        quantity: 1
      };

      const updatedItems = [...state.items, newItem];
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => 
        `${item.pizza.id}-${item.size}` !== action.payload
      );
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item => {
        if (`${item.pizza.id}-${item.size}` === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      }).filter(item => item.quantity > 0);

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }

    case 'CLEAR_CART':
      return {
        items: [],
        total: 0
      };

    default:
      return state;
  }
};

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    const price = item.pizza.sizes[item.size].price;
    return total + (price * item.quantity);
  }, 0);
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};