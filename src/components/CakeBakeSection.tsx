
import React, { useState } from 'react';
import { Star, ShoppingCart, Clock, Utensils } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const CakeBakeSection = () => {
  const [activeCategory, setActiveCategory] = useState('treats');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const { addToCart } = useCart();

  const bakeCategories = [
    {
      id: 'treats',
      name: 'Sweet Treats',
      items: [
        {
          id: 101,
          name: 'Classic Vanilla Cupcakes',
          price: 'Rs.250',
          image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          rating: 5,
          description: 'Fluffy vanilla cupcakes with buttercream frosting',
          ingredients: ['Vanilla extract', 'Butter', 'Eggs', 'Sugar', 'Flour', 'Milk', 'Baking powder'],
          bakeTime: '20 minutes'
        },
        {
          id: 102,
          name: 'Chocolate Chip Cookies',
          price: 'Rs.200',
          image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          rating: 5,
          description: 'Crispy cookies loaded with chocolate chips',
          ingredients: ['Chocolate chips', 'Butter', 'Brown sugar', 'Eggs', 'Flour', 'Vanilla extract'],
          bakeTime: '12 minutes'
        },
        {
          id: 103,
          name: 'Simple Sponge Cake',
          price: 'Rs.400',
          image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          rating: 4,
          description: 'Light and airy sponge cake perfect for any occasion',
          ingredients: ['Eggs', 'Sugar', 'Flour', 'Butter', 'Vanilla extract', 'Baking powder'],
          bakeTime: '25 minutes'
        }
      ]
    }
  ];

  const currentCategory = bakeCategories.find(cat => cat.id === activeCategory);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    });
  };

  return (
    <section id="cake-bake" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-400 font-medium mb-4 text-4xl">Cake Bake</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            FRESH BAKED DAILY
          </h2>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {bakeCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-100 border-2 border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory?.items.map(item => (
            <div key={item.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 cursor-pointer" onClick={() => handleItemClick(item)}>
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold">
                  {item.price}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
                  >
                    <ShoppingCart size={16} />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Item Details Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedItem.name}</h3>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Utensils className="text-orange-500" size={20} />
                      <h4 className="text-lg font-semibold">Ingredients</h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedItem.ingredients.map((ingredient: string, index: number) => (
                        <li key={index} className="text-gray-600">• {ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="text-orange-500" size={20} />
                      <h4 className="text-lg font-semibold">Baking Time</h4>
                    </div>
                    <p className="text-gray-600 text-xl font-medium">{selectedItem.bakeTime}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">{selectedItem.price}</span>
                  <button
                    onClick={() => {
                      handleAddToCart(selectedItem);
                      setSelectedItem(null);
                    }}
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CakeBakeSection;
