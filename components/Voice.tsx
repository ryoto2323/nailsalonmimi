import React from 'react';
import { SectionId } from '../types';
import { REVIEWS } from '../constants';

const Voice: React.FC = () => {
  return (
    <section id={SectionId.VOICE} className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="font-cursive text-3xl text-accent/50 block mb-2">Voice</span>
            <h2 className="text-2xl md:text-3xl font-serif text-text mt-2">お客様の口コミ</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
                <div key={review.id} className="bg-primary p-8 rounded-2xl relative border border-secondary/30 shadow-sm hover:shadow-md transition-shadow">
                    <div className="absolute -top-4 left-6 text-6xl text-accent/10 font-serif">“</div>
                    <p className="text-text font-medium leading-relaxed mb-6 relative z-10 text-sm md:text-base">
                        {review.content}
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-secondary/30">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent shadow-sm">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div>
                            <div className="font-bold text-sm text-text">{review.user}</div>
                            <div className="text-xs text-text/60">{review.age}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Voice;