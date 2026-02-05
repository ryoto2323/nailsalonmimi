import React from 'react';
import { SectionId } from '../types';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id={SectionId.GALLERY} className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
            <h2 className="font-cursive text-5xl text-secondary mb-2">Trend Collection</h2>
            <p className="text-text font-serif">今月の人気デザイン</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {GALLERY_ITEMS.map((item) => (
                <div key={item.id} className="group">
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-md mb-3">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-text/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <span className="text-white text-xs font-bold tracking-widest uppercase">{item.category}</span>
                        </div>
                    </div>
                    <p className="text-center text-text font-serif text-sm">{item.title}</p>
                </div>
            ))}
        </div>

        <div className="text-center">
            <button className="text-accent border-b border-accent hover:opacity-70 transition-opacity text-sm pb-1">
                デザイン一覧をもっと見る
            </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;