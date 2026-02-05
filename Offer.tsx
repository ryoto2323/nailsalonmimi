import React from 'react';
import { SectionId } from '../types';
import { OFFER_COUPON } from '../constants';

const Offer: React.FC = () => {
  return (
    <section id={SectionId.OFFER} className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-10">
            <h2 className="font-cursive text-5xl text-accent mb-2">New Guest Coupon</h2>
            <p className="text-text font-serif">ご新規様限定キャンペーン</p>
        </div>

        <div className="bg-gradient-to-r from-secondary to-primary p-1 rounded-3xl shadow-lg">
            <div className="bg-white rounded-[20px] p-8 md:p-12 border-2 border-dashed border-accent/20 text-center relative overflow-hidden">
                {/* Ribbon */}
                <div className="absolute top-0 left-0 bg-accent text-white text-xs font-bold px-4 py-2 rounded-br-xl">
                    Special Offer
                </div>

                <h3 className="text-2xl font-serif text-text font-bold mb-6 mt-4">
                    {OFFER_COUPON.conditions.join(' / ')}
                </h3>
                
                <div className="flex flex-col md:flex-row items-baseline justify-center gap-4 mb-8">
                    <div className="text-gray-400 line-through text-lg">
                        通常 {OFFER_COUPON.originalPrice}
                    </div>
                    <div className="text-accent font-bold text-5xl font-serif">
                        {OFFER_COUPON.price}<span className="text-base text-text ml-1">(税込)</span>
                    </div>
                </div>

                <a 
                    href="#booking" 
                    className="inline-block bg-accent hover:bg-pink-600 text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
                >
                    クーポンを使って予約する
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;