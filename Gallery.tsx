import React, { useState } from 'react';
import { SectionId, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../constants';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id={SectionId.GALLERY} className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
            <h2 className="font-cursive text-5xl text-secondary mb-2">Trend Collection</h2>
            <p className="text-text font-serif">今月の人気デザイン</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {GALLERY_ITEMS.map((item) => (
                <div 
                    key={item.id} 
                    className="group cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                >
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-md mb-3">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-text/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-4">
                             <ZoomIn className="text-white w-6 h-6 mb-2 opacity-80" />
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

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-up"
            onClick={() => setSelectedItem(null)}
        >
             <button 
                onClick={() => setSelectedItem(null)} 
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white transition-colors"
            >
                <X size={32} />
            </button>

            <div 
                className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center pointer-events-none" 
            >
                {/* Prevent click propagation on content */}
                <div className="pointer-events-auto flex flex-col items-center" onClick={e => e.stopPropagation()}>
                    <img 
                        src={selectedItem.image} 
                        alt={selectedItem.title}
                        className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl" 
                    />
                    <div className="mt-6 text-center">
                        <h3 className="text-white text-2xl md:text-3xl font-serif mb-2">{selectedItem.title}</h3>
                        <span className="inline-block px-3 py-1 border border-white/30 rounded-full text-white/80 text-sm tracking-widest uppercase">
                            {selectedItem.category}
                        </span>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;