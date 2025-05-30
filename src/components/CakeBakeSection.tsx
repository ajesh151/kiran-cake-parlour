
import React, { useState } from 'react';
import { Star, ShoppingCart, Clock, Utensils } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { ScrollArea } from './ui/scroll-area';

const CakeBakeSection = () => {
  const [activeCategory, setActiveCategory] = useState('treats');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedAmounts, setSelectedAmounts] = useState<{[key: number]: number}>({});
  const [selectedWeights, setSelectedWeights] = useState<{[key: number]: number}>({});
  const { addToCart } = useCart();

  const bakeCategories = [{
    id: 'treats',
    name: 'Sweet Treats',
    items: [{
      id: 101,
      name: 'Classic Vanilla Cupcakes',
      price: 'Rs.250',
      image: '/lovable-uploads/31bfe9da-93c8-4217-89ad-2e9b4e8a2cf6.png',
      rating: 5,
      description: 'Fluffy vanilla cupcakes with buttercream frosting',
      hasAmount: true,
      defaultAmount: 5,
      ingredients: [{
        name: 'Vanilla extract',
        amount: '2 tsp'
      }, {
        name: 'Butter',
        amount: '1/2 cup'
      }, {
        name: 'Sugar',
        amount: '3/4 cup'
      }, {
        name: 'All-purpose flour',
        amount: '1 1/2 cups'
      }, {
        name: 'Milk',
        amount: '1/2 cup'
      }, {
        name: 'Baking powder',
        amount: '1 1/2 tsp'
      }],
      bakeTime: '20 minutes'
    }, {
      id: 102,
      name: 'Chocolate Chip Cookies',
      price: 'Rs.200',
      image: '/lovable-uploads/36edfcd3-af00-4887-8347-e224a02ca975.png',
      rating: 5,
      description: 'Crispy cookies loaded with chocolate chips',
      hasAmount: true,
      defaultAmount: 10,
      ingredients: [{
        name: 'Chocolate chips',
        amount: '1 cup'
      }, {
        name: 'Butter',
        amount: '1/2 cup'
      }, {
        name: 'Brown sugar',
        amount: '3/4 cup'
      }, {
        name: 'White sugar',
        amount: '1/4 cup'
      }, {
        name: 'All-purpose flour',
        amount: '2 1/4 cups'
      }, {
        name: 'Vanilla extract',
        amount: '1 tsp'
      }, {
        name: 'Baking soda',
        amount: '1 tsp'
      }, {
        name: 'Salt',
        amount: '1/2 tsp'
      }],
      bakeTime: '12 minutes'
    }, {
      id: 103,
      name: 'Simple Sponge Cake',
      price: 'Rs.400',
      image: '/lovable-uploads/c584ae10-dbed-470e-971e-15c0d94eb387.png',
      rating: 4,
      description: 'Light and airy sponge cake perfect for any occasion',
      hasAmount: false,
      ingredients: [{
        name: 'Caster sugar',
        amount: '150g'
      }, {
        name: 'Self-raising flour',
        amount: '150g'
      }, {
        name: 'Butter',
        amount: '3 tbsp'
      }, {
        name: 'Vanilla extract',
        amount: '1 tsp'
      }, {
        name: 'Cocoa powder',
        amount: '2 tbsp'
      }, {
        name: 'Heavy cream',
        amount: '200ml'
      }],
      bakeTime: '25 minutes'
    }]
  }];

  const currentCategory = bakeCategories.find(cat => cat.id === activeCategory);

  const getWeight = (itemId: number) => selectedWeights[itemId] || 1;
  const getAmount = (itemId: number, defaultAmount: number) => selectedAmounts[itemId] || defaultAmount;

  const setWeight = (itemId: number, weight: number) => {
    setSelectedWeights(prev => ({ ...prev, [itemId]: weight }));
  };

  const setAmount = (itemId: number, amount: number) => {
    setSelectedAmounts(prev => ({ ...prev, [itemId]: amount }));
  };

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  const handleAddToCart = (item: any) => {
    if (item.hasAmount) {
      const amount = getAmount(item.id, item.defaultAmount);
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: amount,
        ingredients: item.ingredients
      });
      setAmount(item.id, item.defaultAmount);
    } else {
      const weight = getWeight(item.id);
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
        weight,
        ingredients: item.ingredients
      });
      setWeight(item.id, 1);
    }
  };

  return (
    <section id="cake-bake" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-400 font-medium mb-4 text-4xl">Cake Bake</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">BAKE YOUR OWN CAKE</h2>
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
                  : 'bg-white text-gray-700 hover:bg-orange-100'
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
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold">
                  {item.price}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>

                {/* Amount/Weight Selection */}
                <div className="mb-4">
                  {item.hasAmount ? (
                    <>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amount (pieces)
                      </label>
                      <select
                        value={getAmount(item.id, item.defaultAmount)}
                        onChange={(e) => setAmount(item.id, Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        {item.id === 101 && [
                          <option key={5} value={5}>5 pieces</option>,
                          <option key={10} value={10}>10 pieces</option>,
                          <option key={15} value={15}>15 pieces</option>,
                          <option key={20} value={20}>20 pieces</option>
                        ]}
                        {item.id === 102 && [
                          <option key={10} value={10}>10 pieces</option>,
                          <option key={20} value={20}>20 pieces</option>,
                          <option key={30} value={30}>30 pieces</option>,
                          <option key={50} value={50}>50 pieces</option>
                        ]}
                      </select>
                    </>
                  ) : (
                    <>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Weight (pounds)
                      </label>
                      <select
                        value={getWeight(item.id)}
                        onChange={(e) => setWeight(item.id, Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value={1}>1 pound</option>
                        <option value={2}>2 pounds</option>
                        <option value={3}>3 pounds</option>
                        <option value={4}>4 pounds</option>
                        <option value={5}>5 pounds</option>
                      </select>
                    </>
                  )}
                </div>
                
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart size={16} />
                  <span>Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Item Details Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
              <ScrollArea className="h-[90vh]">
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
                    loading="lazy"
                  />
                  
                  <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

                  {/* Amount/Weight Selection in Modal */}
                  <div className="mb-6">
                    {selectedItem.hasAmount ? (
                      <>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Amount (pieces)
                        </label>
                        <select
                          value={getAmount(selectedItem.id, selectedItem.defaultAmount)}
                          onChange={(e) => setAmount(selectedItem.id, Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          {selectedItem.id === 101 && [
                            <option key={5} value={5}>5 pieces</option>,
                            <option key={10} value={10}>10 pieces</option>,
                            <option key={15} value={15}>15 pieces</option>,
                            <option key={20} value={20}>20 pieces</option>
                          ]}
                          {selectedItem.id === 102 && [
                            <option key={10} value={10}>10 pieces</option>,
                            <option key={20} value={20}>20 pieces</option>,
                            <option key={30} value={30}>30 pieces</option>,
                            <option key={50} value={50}>50 pieces</option>
                          ]}
                        </select>
                      </>
                    ) : (
                      <>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Weight (pounds)
                        </label>
                        <select
                          value={getWeight(selectedItem.id)}
                          onChange={(e) => setWeight(selectedItem.id, Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value={1}>1 pound</option>
                          <option value={2}>2 pounds</option>
                          <option value={3}>3 pounds</option>
                          <option value={4}>4 pounds</option>
                          <option value={5}>5 pounds</option>
                        </select>
                      </>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
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
              </ScrollArea>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CakeBakeSection;
