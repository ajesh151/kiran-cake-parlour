
import React, { useState } from 'react';
import { Star, ShoppingCart, Clock, Utensils } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { ScrollArea } from './ui/scroll-area';

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
          image: '/lovable-uploads/31bfe9da-93c8-4217-89ad-2e9b4e8a2cf6.png',
          rating: 5,
          description: 'Fluffy vanilla cupcakes with buttercream frosting',
          ingredients: [
            { name: 'Vanilla extract', amount: '2 tsp' },
            { name: 'Butter', amount: '1/2 cup' },
            { name: 'Eggs', amount: '2 large' },
            { name: 'Sugar', amount: '3/4 cup' },
            { name: 'All-purpose flour', amount: '1 1/2 cups' },
            { name: 'Milk', amount: '1/2 cup' },
            { name: 'Baking powder', amount: '1 1/2 tsp' }
          ],
          bakeTime: '20 minutes'
        },
        {
          id: 102,
          name: 'Chocolate Chip Cookies',
          price: 'Rs.200',
          image: '/lovable-uploads/36edfcd3-af00-4887-8347-e224a02ca975.png',
          rating: 5,
          description: 'Crispy cookies loaded with chocolate chips',
          ingredients: [
            { name: 'Chocolate chips', amount: '1 cup' },
            { name: 'Butter', amount: '1/2 cup' },
            { name: 'Brown sugar', amount: '3/4 cup' },
            { name: 'White sugar', amount: '1/4 cup' },
            { name: 'Eggs', amount: '1 large' },
            { name: 'All-purpose flour', amount: '2 1/4 cups' },
            { name: 'Vanilla extract', amount: '1 tsp' },
            { name: 'Baking soda', amount: '1 tsp' },
            { name: 'Salt', amount: '1/2 tsp' }
          ],
          bakeTime: '12 minutes'
        },
        {
          id: 103,
          name: 'Simple Sponge Cake',
          price: 'Rs.400',
          image: '/lovable-uploads/c584ae10-dbed-470e-971e-15c0d94eb387.png',
          rating: 4,
          description: 'Light and airy sponge cake perfect for any occasion',
          ingredients: [
            { name: 'Eggs', amount: '6 large' },
            { name: 'Caster sugar', amount: '150g' },
            { name: 'Self-raising flour', amount: '150g' },
            { name: 'Butter', amount: '3 tbsp' },
            { name: 'Vanilla extract', amount: '1 tsp' },
            { name: 'Cocoa powder', amount: '2 tbsp' },
            { name: 'Heavy cream', amount: '200ml' }
          ],
          bakeTime: '25 minutes'
        }
      ]
    }
  ];

  const currentCategory = bakeCategories.find(cat => cat.id === activeCategory);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    // Re-enable background scrolling
    document.body.style.overflow = 'unset';
  };

  const handleAddToCart = (item: any) => {
    // Add the main item with ingredients to cart
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      ingredients: item.ingredients
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
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedItem.name}</h3>
                  <button
                    onClick={closeModal}
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
                
                <ScrollArea className="h-64">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Utensils className="text-orange-500" size={20} />
                        <h4 className="text-lg font-semibold">Ingredients</h4>
                      </div>
                      <ul className="space-y-2">
                        {selectedItem.ingredients.map((ingredient: any, index: number) => (
                          <li key={index} className="text-gray-600 flex justify-between">
                            <span>• {ingredient.name}</span>
                            <span className="font-medium">{ingredient.amount}</span>
                          </li>
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
                </ScrollArea>
                
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">{selectedItem.price}</span>
                  <button
                    onClick={() => {
                      handleAddToCart(selectedItem);
                      closeModal();
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
