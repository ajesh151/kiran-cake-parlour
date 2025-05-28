
import React from 'react';
import { Wallet, Gift, CreditCard, Percent, Star } from 'lucide-react';

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

        {/* Wallet Status */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 mb-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Wallet className="w-6 h-6" />
                <h3 className="text-xl font-bold">Wallet Balance</h3>
              </div>
              <p className="text-3xl font-bold">Rs.150</p>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="w-6 h-6" />
                <h3 className="text-xl font-bold">Reward Points</h3>
              </div>
              <p className="text-3xl font-bold">2,450 Points</p>
              <p className="text-sm opacity-90">= Rs.245 in rewards</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default KiranWalletSection;
