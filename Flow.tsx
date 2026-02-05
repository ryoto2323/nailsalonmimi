import React from 'react';
import { SectionId } from '../types';
import { FLOW_STEPS } from '../constants';

const Flow: React.FC = () => {
  return (
    <section id={SectionId.FLOW} className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-text">施術の流れ</h2>
            <div className="w-12 h-0.5 bg-accent/30 mx-auto mt-4"></div>
        </div>

        <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
                {FLOW_STEPS.map((step, idx) => (
                    <div key={idx} className="relative group">
                        <div className="bg-white p-6 rounded-2xl h-full shadow-sm group-hover:shadow-md transition-shadow relative z-10 border border-white">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold font-serif shadow-sm">
                                {idx + 1}
                            </div>
                            <h3 className="font-bold text-text text-lg mb-3 mt-4 text-center">{step.title}</h3>
                            <p className="text-text/70 text-sm text-center leading-relaxed">{step.desc}</p>
                        </div>
                        {idx < FLOW_STEPS.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0 text-secondary">
                                <i className="fa-solid fa-angle-right text-2xl"></i>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Flow;