import React from 'react';
import { SectionId } from '../types';
import { FAQS } from '../constants';

const Faq: React.FC = () => {
  return (
    <section id={SectionId.FAQ} className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-text">よくある質問</h2>
            <div className="w-12 h-0.5 bg-accent/30 mx-auto mt-4"></div>
        </div>

        <div className="space-y-4">
            {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-primary/30 rounded-2xl p-6 md:p-8 border border-secondary/20 hover:border-accent/30 transition-colors">
                    <h3 className="flex items-start gap-4 font-bold text-lg text-text mb-3">
                        <span className="text-accent font-serif italic text-xl">Q.</span>
                        {faq.question}
                    </h3>
                    <p className="pl-9 text-text/80 leading-relaxed text-sm md:text-base border-l-2 border-accent/20 ml-1">
                        {faq.answer}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;