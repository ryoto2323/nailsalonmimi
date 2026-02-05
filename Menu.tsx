import React from 'react';
import { SectionId } from '../types';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  return (
    <section id={SectionId.MENU} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
            <h2 className="font-cursive text-5xl text-white drop-shadow-md mb-2">Menu</h2>
            <div className="w-12 h-0.5 bg-white mx-auto"></div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 left-0 w-20 h-20 bg-accent/5 rounded-br-full"></div>
             <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent/5 rounded-tl-full"></div>

            <ul className="space-y-6 relative z-10">
                {MENU_ITEMS.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-secondary/30 pb-3 last:border-0">
                        <span className="text-text font-medium">{item.name}</span>
                        <span className="text-accent font-serif font-bold text-lg">{item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;