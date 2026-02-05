import React from 'react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToGallery = () => {
    const element = document.getElementById(SectionId.GALLERY);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1632345031635-41523dd1f519?q=80&w=2070&auto=format&fit=crop" 
            alt="Elegant Nail Art" 
            className="w-full h-full object-cover"
         />
         {/* Overlay with pink tint */}
         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl animate-fade-in-up">
          <p className="font-cursive text-3xl md:text-4xl text-accent mb-4 transform -rotate-2 origin-bottom-left">
            Nail Salon Mimi
          </p>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-text leading-tight mb-6 drop-shadow-sm">
            指先を見るたび、<br/>
            私を好きになる。
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-white/80 backdrop-blur text-text px-4 py-1.5 rounded-full text-sm shadow-sm border border-secondary">
                パラジェル認定サロン
            </span>
            <span className="bg-white/80 backdrop-blur text-text px-4 py-1.5 rounded-full text-sm shadow-sm border border-secondary">
                定額コースあり
            </span>
          </div>
          
          <p className="text-text/90 text-lg mb-10 leading-relaxed font-medium">
            自爪を傷めない「パラジェル」導入店。<br/>
            大人可愛いトレンドデザインならMimiへ。
          </p>

          <button 
            onClick={scrollToGallery}
            className="bg-accent hover:bg-pink-600 text-white text-lg font-medium py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            今月の限定デザインを見る
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;