
import React from 'react';
import { CheckCircle, Clock, Package, Truck } from 'lucide-react';

interface OrderTrackingProps {
  orderNumber: string;
  onClose: () => void;
}

const OrderTracking = ({ orderNumber, onClose }: OrderTrackingProps) => {
  const trackingSteps = [
    { 
      id: 1, 
      title: 'Order Confirmed', 
      description: 'Your order has been received and confirmed',
      icon: CheckCircle,
      completed: true,
      time: '2 minutes ago'
    },
    { 
      id: 2, 
      title: 'Preparing', 
      description: 'Our bakers are preparing your delicious cake',
      icon: Clock,
      completed: true,
      time: '5 minutes ago'
    },
    { 
      id: 3, 
      title: 'Ready for Pickup', 
      description: 'Your order is ready for pickup or delivery',
      icon: Package,
      completed: false,
      time: 'Estimated: 30 minutes'
    },
    { 
      id: 4, 
      title: 'Out for Delivery', 
      description: 'Your order is on its way to you',
      icon: Truck,
      completed: false,
      time: 'Estimated: 45 minutes'
    }
  ];

  return (
    <div className="bg-white p-8 rounded-lg max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Order Tracking</h2>
          <p className="text-gray-600">Order #{orderNumber}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
      </div>

      <div className="space-y-6">
        {trackingSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                <Icon size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className={`font-semibold ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.title}
                  </h3>
                  <span className="text-sm text-gray-500">{step.time}</span>
                </div>
                <p className="text-gray-600 mt-1">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-orange-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2">Estimated Delivery</h4>
        <p className="text-orange-600 font-medium">45 minutes from now</p>
        <p className="text-gray-600 text-sm mt-1">
          We'll send you updates via SMS when your order status changes.
        </p>
      </div>
    </div>
  );
};

export default OrderTracking;
