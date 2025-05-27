
import React from 'react';
import { Play, ShoppingBag } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80)'
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 pt-20 pb-16 flex items-center min-h-screen">
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <span className="text-orange-400 text-lg font-medium">Super Crispy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            KIRAN CAKE<br />
            <span className="text-orange-400">PARLOUR</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            THE BEST CAKE IN LONDON
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
              <ShoppingBag size={20} />
              <span>Order Now</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center space-x-2">
              <Play size={20} />
              <span>Play Video</span>
            </button>
          </div>
          
          <div className="mt-12 text-orange-400 text-right">
            <p className="text-3xl font-bold">25% DISCOUNT FOR THIS SUMMER</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
