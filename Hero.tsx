import React from 'react';
import { SectionId } from '../types';
import { ChevronRight } from 'lucide-react';

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
            src="https://github.com/ryoto2323/nailsalonmimi/blob/main/public/hhh.png?raw=true" 
            alt="" 
            className="w-full h-full object-cover object-[75%_center] md:object-center"
         />
         {/* Overlay with pink tint */}
         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-32">
        <div className="max-w-xl animate-fade-in-up">
          <p className="font-cursive text-3xl md:text-4xl text-accent mb-4 transform -rotate-2 origin-bottom-left">
            Nail Salon Mimi
          </p>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-text leading-tight mb-6 drop-shadow-sm">
            指先を見るたびに<br/>
            私を好きになる
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="bg-white/80 backdrop-blur text-text px-4 py-1.5 rounded-full text-sm shadow-sm border border-secondary">
                パラジェル認定サロン
            </span>
            <span className="bg-white/80 backdrop-blur text-text px-4 py-1.5 rounded-full text-sm shadow-sm border border-secondary">
                定額コースあり
            </span>
          </div>
          
          {/* Redesigned Description Text - Removed punctuation */}
          <div className="mb-12 pl-4 md:pl-6 border-l-2 border-accent/60 bg-white/40 backdrop-blur-sm py-2 pr-4 rounded-r-lg max-w-fit">
            <p className="text-text font-medium text-base md:text-xl leading-8 md:leading-loose font-serif tracking-wider whitespace-nowrap">
              自爪を傷めない「パラジェル」導入店<br/>
              大人可愛いトレンドデザインならMimiへ
            </p>
          </div>

          {/* Redesigned CTA Button - Glassmorphism style */}
          <button 
            onClick={scrollToGallery}
            className="group relative px-8 py-4 bg-white/40 backdrop-blur-md border border-white/60 text-text hover:bg-white/70 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
             {/* Text Content */}
            <span className="relative z-10 font-serif text-lg tracking-[0.15em] flex items-center gap-3">
              今月の限定デザインを見る
              <ChevronRight className="w-5 h-5 text-accent/80 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;