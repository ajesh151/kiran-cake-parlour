import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('birthday');
  const {
    addToCart
  } = useCart();
  const menuCategories = [{
    id: 'birthday',
    name: 'Birthday Cakes',
    items: [{
      id: 1,
      name: 'Chocolate Birthday Delight',
      price: '₹500',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      description: 'Rich chocolate cake with vanilla frosting and colorful decorations'
    }, {
      id: 2,
      name: 'Rainbow Birthday Cake',
      price: '₹600',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      description: 'Multi-layered rainbow cake with buttercream frosting'
    }, {
      id: 3,
      name: 'Strawberry Birthday Special',
      price: '₹700',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4,
      description: 'Fresh strawberry cake with cream cheese frosting'
    }]
  }, {
    id: 'wedding',
    name: 'Wedding Cakes',
    items: [{
      id: 4,
      name: 'Elegant White Wedding Cake',
      price: '₹1000',
      image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      description: 'Three-tier white wedding cake with elegant floral decorations'
    }, {
      id: 5,
      name: 'Rose Garden Wedding Cake',
      price: '₹800',
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      description: 'Beautiful rose-decorated wedding cake with gold accents'
    }, {
      id: 6,
      name: 'Classic Tiered Wedding Cake',
      price: '₹1200',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      description: 'Four-tier classic wedding cake with intricate piping'
    }]
  }, {
    id: 'custom',
    name: 'Custom Cakes',
    items: [{
      id: 7,
      name: 'Custom Theme Cake',
      price: '₹600',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      description: 'Personalized cake designed to your specifications'
    }, {
      id: 8,
      name: 'Corporate Event Cake',
      price: '₹700',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4,
      description: 'Professional cakes for corporate events and celebrations'
    }, {
      id: 9,
      name: 'Character Design Cake',
      price: '₹550',
      image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      description: 'Fun character-themed cakes for special occasions'
    }]
  }, {
    id: 'bento',
    name: 'Bento Cakes',
    items: [{
      id: 10,
      name: 'Mini Chocolate Bento',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      rating: 5,
      description: 'Small personal-sized chocolate cake perfect for individual celebrations'
    }, {
      id: 11,
      name: 'Vanilla Berry Bento',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      rating: 5,
      description: 'Personal vanilla cake topped with fresh berries and cream'
    }, {
      id: 12,
      name: 'Red Velvet Bento',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      rating: 4,
      description: 'Individual red velvet cake with cream cheese frosting'
    }, {
      id: 13,
      name: 'Strawberry Bento Delight',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      rating: 5,
      description: 'Cute strawberry-flavored mini cake with pink frosting'
    }, {
      id: 14,
      name: 'Coffee Caramel Bento',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      rating: 4,
      description: 'Rich coffee-flavored bento cake with caramel drizzle'
    }, {
      id: 15,
      name: 'Lemon Zest Bento',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      rating: 5,
      description: 'Fresh lemon-flavored mini cake with citrus frosting'
    }]
  }];
  const currentCategory = menuCategories.find(cat => cat.id === activeCategory);
  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    });
  };
  return <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-400 text-lg font-medium mb-4">Our Menu</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            EXPLORE OUR CAKES
          </h2>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {menuCategories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-8 py-3 rounded-lg font-semibold transition-colors ${activeCategory === category.id ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-orange-100'}`}>
              {category.name}
            </button>)}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory?.items.map(item => <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
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
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} />)}
                  </div>
                  
                  <button onClick={() => handleAddToCart(item)} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2">
                    <ShoppingCart size={16} />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default MenuSection;