
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import CakeBakeSection from '../components/CakeBakeSection';
import KiranWalletSection from '../components/KiranWalletSection';
import ContactSection from '../components/ContactSection';
import CartProvider from '../components/CartProvider';
import FloatingCart from '../components/FloatingCart';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <CakeBakeSection />
        <KiranWalletSection />
        <ContactSection />
        <FloatingCart />
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4">KIRAN CAKE PARLOUR</h3>
                <div className="text-gray-300">
                  <h4 className="font-semibold mb-2">Our Outlets:</h4>
                  <ul className="space-y-1">
                    <li>• Traffic Chowk, Biratnagar (Main Branch)</li>
                    <li>• Mahendra Chowk, Biratnagar</li>
                    <li>• Rangeli Road, Biratnagar</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#home" className="hover:text-orange-400 transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-orange-400 transition-colors">About</a></li>
                  <li><a href="#menu" className="hover:text-orange-400 transition-colors">Menu</a></li>
                  <li><a href="#cake-bake" className="hover:text-orange-400 transition-colors">Cake Bake</a></li>
                  <li><a href="#wallet" className="hover:text-orange-400 transition-colors">Kiran Wallet</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Traffic Chowk, Biratnagar</li>
                  <li>021-535768</li>
                  <li>info@kirancakeparlour.com</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Sun - Sat: 8:00 AM - 9:00 PM</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Kiran Cake Parlour. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
