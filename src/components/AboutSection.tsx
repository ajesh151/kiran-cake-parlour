import React, { useState, useEffect, useRef } from 'react';
import { Award, Heart, Star, Users, Check, Coffee } from 'lucide-react';
const AboutSection = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statisticsRef = useRef<HTMLDivElement>(null);
  const statistics = [{
    icon: <Star className="w-8 h-8 text-white" />,
    title: "Our Experience",
    count: "8,750"
  }, {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Cake Specialist",
    count: "3,420"
  }, {
    icon: <Check className="w-8 h-8 text-white" />,
    title: "Complete Project",
    count: "15,680"
  }, {
    icon: <Coffee className="w-8 h-8 text-white" />,
    title: "Happy Clients",
    count: "9,230"
  }];
  const targetValues = [8750, 3420, 15680, 9230];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCounters();
      }
    }, {
      threshold: 0.5
    });
    if (statisticsRef.current) {
      observer.observe(statisticsRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);
  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // Number of animation steps
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const currentValues = targetValues.map(target => Math.min(Math.floor(target * progress), target));
      setCounters(currentValues);
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };
  const chefs = [{
    name: "Kiran Singh",
    title: "Master Baker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    experience: "15+ Years"
  }, {
    name: "Priya Sharma",
    title: "Cake Designer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    experience: "12+ Years"
  }, {
    name: "Raj Patel",
    title: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    experience: "10+ Years"
  }];
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-400 font-medium mb-4 text-4xl">About Us</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            WELCOME TO KIRAN CAKE PARLOUR
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Delicious cake" className="rounded-lg shadow-lg w-full" />
          </div>
          
          <div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">Kiran Cake Parlour began with a simple love for baking and a dream to bring joy through sweet, memorable treats. What started in a small kitchen has grown into a place where every cake is made with heart, using fresh ingredients and a personal touch.</p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">We’re here for your birthdays, weddings, and quiet moments in between. Every order is special to us, and we’re grateful to be part of your story—one slice at a time.</p>
            
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
        <div ref={statisticsRef} className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 rounded-lg mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => <div key={index} className="flex items-center justify-center">
                <div className="bg-orange-500 rounded-lg p-4 mr-4">
                  {stat.icon}
                </div>
                <div>
                  <h6 className="text-orange-400 text-sm font-medium uppercase mb-1">{stat.title}</h6>
                  <h1 className="text-4xl font-bold text-white">{counters[index].toLocaleString()}</h1>
                </div>
              </div>)}
          </div>
        </div>
        
        {/* Our Team Section */}
        
      </div>
    </section>;
};
export default AboutSection;