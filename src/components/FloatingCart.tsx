
import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { ScrollArea } from './ui/scroll-area';
import PaymentSection from './PaymentSection';

const FloatingCart = () => {
  const { items, totalItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const [showPayment, setShowPayment] = useState(false);

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = parseInt(item.price.replace('Rs.', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg transition-colors flex items-center space-x-2">
              <ShoppingCart size={24} />
              <span className="bg-white text-orange-500 rounded-full px-2 py-1 text-sm font-bold">
                {totalItems}
              </span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle className="flex items-center justify-between">
                <span>Shopping Cart</span>
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Clear All
                  </button>
                )}
              </SheetTitle>
            </SheetHeader>
            
            <ScrollArea className="h-[calc(100vh-200px)] mt-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-orange-500 font-bold">{item.price}</p>
                        {item.weight && (
                          <p className="text-sm text-gray-600">Weight: {item.weight} pound{item.weight > 1 ? 's' : ''}</p>
                        )}
                        <div className="flex items-center space-x-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    {/* Show custom message if available */}
                    {item.customMessage && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <h5 className="text-sm font-medium text-gray-700 mb-1">Custom Message:</h5>
                        <p className="text-sm text-gray-600 italic">"{item.customMessage}"</p>
                      </div>
                    )}
                    
                    {/* Show ingredients if available */}
                    {item.ingredients && item.ingredients.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Ingredients:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {item.ingredients.map((ingredient, index) => (
                            <li key={index} className="flex justify-between">
                              <span>• {ingredient.name}</span>
                              <span className="font-medium">{ingredient.amount}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            {items.length > 0 && (
              <div className="mt-6 border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-xl font-bold text-orange-500">Rs.{getTotalPrice()}</span>
                </div>
                <button 
                  onClick={() => setShowPayment(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>

      {/* Payment Overlay */}
      {showPayment && (
        <div className="fixed inset-0 bg-white z-[100] overflow-hidden">
          <PaymentSection onBack={() => setShowPayment(false)} />
        </div>
      )}
    </>
  );
};

export default FloatingCart;
