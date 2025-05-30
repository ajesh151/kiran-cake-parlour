
import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Textarea } from './ui/textarea';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('birthday');
  const [selectedWeights, setSelectedWeights] = useState<{[key: number]: number}>({});
  const [customMessages, setCustomMessages] = useState<{[key: number]: string}>({});
  const { addToCart } = useCart();

  const menuCategories = [
    {
      id: 'birthday',
      name: 'Birthday Cakes',
      items: [
        {
          id: 1,
          name: 'Chocolate Birthday Delight',
          basePrice: 500,
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          rating: 5,
          description: 'Rich chocolate cake with vanilla frosting and colorful decorations'
        },
        {
          id: 2,
          name: 'Rainbow Birthday Cake',
          basePrice: 600,
          image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          rating: 5,
          description: 'Multi-layered rainbow cake with buttercream frosting'
        },
        {
          id: 3,
          name: 'Strawberry Birthday Special',
          basePrice: 700,
          image: '/lovable-uploads/b042d9a8-659d-47e1-8fe9-625e706e16b4.png',
          rating: 4,
          description: 'Fresh strawberry cake with cream cheese frosting'
        }
      ]
    },
    {
      id: 'wedding',
      name: 'Wedding Cakes',
      items: [
        {
          id: 4,
          name: 'Elegant White Wedding Cake',
          basePrice: 1000,
          image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          rating: 5,
          description: 'Three-tier white wedding cake with elegant floral decorations'
        },
        {
          id: 5,
          name: 'Rose Garden Wedding Cake',
          basePrice: 800,
          image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          rating: 5,
          description: 'Beautiful rose-decorated wedding cake with gold accents'
        },
        {
          id: 6,
          name: 'Classic Tiered Wedding Cake',
          basePrice: 1200,
          image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          rating: 5,
          description: 'Four-tier classic wedding cake with intricate piping'
        }
      ]
    },
    {
      id: 'custom',
      name: 'Custom Cakes',
      items: [
        {
          id: 7,
          name: 'FC Barcelona Theme Cake',
          basePrice: 800,
          image: '/lovable-uploads/f30e1b4b-9972-4d72-a499-5fdb312acb8d.png',
          rating: 5,
          description: 'Custom FC Barcelona themed cake with team colors and logo'
        },
        {
          id: 8,
          name: 'One Piece Anime Cake',
          basePrice: 900,
          image: '/lovable-uploads/d068ea10-7952-46c0-8cb6-79e469d55c08.png',
          rating: 5,
          description: 'One Piece themed cake with character elements and ship design'
        },
        {
          id: 9,
          name: 'Superhero Theme Cake',
          basePrice: 850,
          image: '/lovable-uploads/f6756404-dee6-4c53-8b40-18528786a8d2.png',
          rating: 5,
          description: 'Marvel and DC superhero themed cake with multiple character designs'
        }
      ]
    },
    {
      id: 'bento',
      name: 'Bento Cakes',
      items: [
        {
          id: 10,
          name: 'Make A Wish Bento',
          basePrice: 300,
          image: '/lovable-uploads/2e683670-7b85-4e22-aeeb-ecf6d8eb0e57.png',
          rating: 5,
          description: 'Adorable blue bento cake with daisy decorations and "Make A Wish" message'
        },
        {
          id: 11,
          name: 'Happy Birthday Baby Bento',
          basePrice: 300,
          image: '/lovable-uploads/2c0fb691-71f4-4b76-8527-080f5c15e961.png',
          rating: 5,
          description: 'Sweet white bento cake with red heart decorations and birthday message'
        },
        {
          id: 13,
          name: 'Strawberry Bento Delight',
          basePrice: 300,
          image: '/lovable-uploads/57d998e4-410a-4599-ae77-945c0df9d164.png',
          rating: 5,
          description: 'Cute strawberry-flavored mini cake with pink frosting'
        }
      ]
    }
  ];

  const currentCategory = menuCategories.find(cat => cat.id === activeCategory);

  const getWeight = (itemId: number) => selectedWeights[itemId] || 1;
  const getMessage = (itemId: number) => customMessages[itemId] || '';

  const setWeight = (itemId: number, weight: number) => {
    setSelectedWeights(prev => ({ ...prev, [itemId]: weight }));
  };

  const setMessage = (itemId: number, message: string) => {
    setCustomMessages(prev => ({ ...prev, [itemId]: message }));
  };

  const calculatePrice = (basePrice: number, weight: number) => {
    return basePrice * weight;
  };

  const handleAddToCart = (item: any) => {
    const weight = getWeight(item.id);
    const message = getMessage(item.id);
    const finalPrice = calculatePrice(item.basePrice, weight);
    
    addToCart({
      id: item.id,
      name: item.name,
      price: `Rs.${finalPrice}`,
      image: item.image,
      quantity: 1,
      weight,
      customMessage: message || undefined
    });

    // Reset form
    setWeight(item.id, 1);
    setMessage(item.id, '');
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-400 font-medium mb-4 text-4xl">Our Menu</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            EXPLORE OUR CAKES
          </h2>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {menuCategories.map(category => (
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
          {currentCategory?.items.map(item => {
            const weight = getWeight(item.id);
            const finalPrice = calculatePrice(item.basePrice, weight);
            
            return (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold">
                    Rs.{finalPrice}
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

                  {/* Weight Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Weight (pounds)
                    </label>
                    <select
                      value={getWeight(item.id)}
                      onChange={(e) => setWeight(item.id, Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value={1}>1 pound }</option>
                      <option value={2}>2 pounds }</option>
                      <option value={3}>3 pounds}</option>
                      <option value={4}>4 pounds}</option>
                      <option value={5}>5 pounds}</option>
                    </select>
                  </div>

                  {/* Custom Message for Custom Cakes */}
                  {activeCategory === 'custom' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Custom Message (Optional)
                      </label>
                      <Textarea
                        value={getMessage(item.id)}
                        onChange={(e) => setMessage(item.id, e.target.value)}
                        placeholder="Enter your custom message here..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        rows={3}
                      />
                    </div>
                  )}
                  
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
