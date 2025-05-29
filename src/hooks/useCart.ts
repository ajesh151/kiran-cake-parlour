
import { useState, createContext, useContext } from 'react';

export interface CartIngredient {
  name: string;
  amount: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  ingredients?: CartIngredient[];
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartContext };
