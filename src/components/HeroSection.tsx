import React, { useState } from 'react';
import { Play, ShoppingBag, X } from 'lucide-react';
const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: 'url(/lovable-uploads/11b7b908-8f6a-4f96-afc3-a75489a02c89.png)'
    }}></div>
      
      <div className="relative container mx-auto px-4 pt-20 pb-16 flex items-center min-h-screen">
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            KIRAN CAKE<br />
            <span className="text-[#ee6030] mx-0 my-0 font-bold py-0">PARLOUR</span>
          </h1>
          <p className="mb-8 text-red-500 text-2xl">Life is short. Make it sweet</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollToSection('menu')} className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
              <ShoppingBag size={20} />
              <span>Order Now</span>
            </button>
            <button onClick={() => setShowVideo(true)} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center space-x-2">
              <Play size={20} />
              <span>Play Video</span>
            </button>
          </div>
          
          <div className="mt-12 text-orange-400 text-right">
            <p className="text-left px-[2px] py-0 my-0 mx-0 font-bold text-[s#] text-[#ee6030]">THE BEST CAKES IN BIRATNAGAR</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button onClick={() => setShowVideo(false)} className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors">
              <X size={32} />
            </button>
            <div className="relative w-full" style={{
          paddingBottom: '56.25%'
        }}>
              <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/k7fefdiTE7A" title="Kiran Cake Parlour Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>}
    </section>;
};
export default HeroSection;