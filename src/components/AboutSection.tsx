
import React from 'react';
import { Award, Heart, Star, Users, Check, MugHot } from 'lucide-react';

const AboutSection = () => {
  const statistics = [
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Our Experience",
      count: "12345"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Cake Specialist",
      count: "12345"
    },
    {
      icon: <Check className="w-8 h-8 text-white" />,
      title: "Complete Project",
      count: "12345"
    },
    {
      icon: <MugHot className="w-8 h-8 text-white" />,
      title: "Happy Clients",
      count: "12345"
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-400 text-lg font-medium mb-4">About Us</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            WELCOME TO KIRAN CAKE PARLOUR
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Delicious cake"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Labore elitr lorem in duo clita. Diam dolor ipsum amet diam justo clita erat lorem magna magna clita. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-500 text-white p-6 rounded-lg text-center">
                <Heart className="mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold mb-2">100% HEALTHY</h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet elit. Phasellus laoreet nunc quis sagittis leo et.
                </p>
              </div>
              
              <div className="bg-orange-500 text-white p-6 rounded-lg text-center">
                <Award className="mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold mb-2">AWARD WINNING</h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet elit. Phasellus laoreet nunc quis sagittis leo et.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 rounded-lg mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-orange-500 rounded-lg p-4 mr-4">
                  {stat.icon}
                </div>
                <div>
                  <h6 className="text-orange-400 text-sm font-medium uppercase mb-1">{stat.title}</h6>
                  <h1 className="text-4xl font-bold text-white">{stat.count}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Our Team Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-orange-400 text-lg font-medium mb-4">Our Team</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">OUR MASTER CHEFS</h2>
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
                <h4 className="text-xl font-bold mb-2 text-gray-900">{chef.name}</h4>
                <p className="text-orange-400 font-medium">{chef.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
