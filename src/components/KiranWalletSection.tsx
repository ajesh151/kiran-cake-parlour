
import React from 'react';
import { Wallet, Gift, CreditCard, Percent } from 'lucide-react';

const KiranWalletSection = () => {
  const walletFeatures = [
    {
      icon: <Wallet className="w-12 h-12 text-orange-500" />,
      title: "Digital Wallet",
      description: "Store money in your Kiran Wallet for quick and easy payments"
    },
    {
      icon: <Gift className="w-12 h-12 text-orange-500" />,
      title: "Reward Points",
      description: "Earn points with every purchase and redeem them for discounts"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-orange-500" />,
      title: "Easy Payments",
      description: "Pay instantly for your orders without entering card details"
    },
    {
      icon: <Percent className="w-12 h-12 text-orange-500" />,
      title: "Exclusive Offers",
      description: "Get wallet-exclusive discounts and early access to new cakes"
    }
  ];

  const chefs = [
    {
      name: "Kiran Singh",
      title: "Master Baker",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "15+ Years"
    },
    {
      name: "Priya Sharma",
      title: "Cake Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "12+ Years"
    },
    {
      name: "Raj Patel",
      title: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "10+ Years"
    }
  ];

  return (
    <section id="wallet" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Kiran Wallet Section */}
        <div className="text-center mb-16">
          <h3 className="text-orange-400 text-lg font-medium mb-4">Digital Experience</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            KIRAN WALLET
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience seamless payments and exclusive rewards with Kiran Wallet - your digital companion for all cake orders
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {walletFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-16">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
            Create Your Kiran Wallet
          </button>
        </div>
        
        {/* Master Chefs Section */}
        <div className="border-t border-gray-700 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-orange-400 text-lg font-medium mb-4">Our Team</h3>
            <h2 className="text-3xl md:text-4xl font-bold">OUR MASTER CHEFS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-orange-500"
                  />
                  <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {chef.experience}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">{chef.name}</h4>
                <p className="text-orange-400 font-medium">{chef.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KiranWalletSection;
