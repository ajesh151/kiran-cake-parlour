
import React from 'react';
import { Award, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-400 text-lg font-medium mb-4">About Us</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            WELCOME TO KIRAN CAKE PARLOUR
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
      </div>
    </section>
  );
};

export default AboutSection;
