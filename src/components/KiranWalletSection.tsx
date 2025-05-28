
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
        
        <div className="text-center">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
            Create Your Kiran Wallet
          </button>
        </div>
      </div>
    </section>
  );
};

export default KiranWalletSection;
