import React from 'react';
import { SectionId } from '../types';
import { STRONG_POINTS } from '../constants';

const StrongPoints: React.FC = () => {
  return (
    <section id={SectionId.STRONG_POINTS} className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="font-cursive text-3xl text-accent/50 block mb-2">My Philosophy</span>
            <h2 className="text-2xl md:text-3xl font-serif text-text">Mimiのこだわり 3つのPoint</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {STRONG_POINTS.map((point, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center border border-secondary/20">
                    <div className="w-16 h-16 mx-auto bg-secondary/30 text-accent rounded-full flex items-center justify-center mb-6 text-2xl">
                        <i className={`fa-solid ${point.icon}`}></i>
                    </div>
                    
                    <h3 className="text-lg font-bold text-text mb-4 font-serif">
                        {point.title}
                    </h3>
                    <p className="text-text/70 text-sm leading-relaxed">
                        {point.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default StrongPoints;