import React, { useState } from 'react';
import { SectionId } from '../types';
import { MENU_CATEGORIES } from '../constants';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0].id);

  const activeCategory = MENU_CATEGORIES.find(c => c.id === activeTab);

  return (
    <section id={SectionId.MENU} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-10">
            <h2 className="font-cursive text-5xl text-white drop-shadow-md mb-2">Menu</h2>
            <div className="w-12 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {MENU_CATEGORIES.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-6 py-2.5 rounded-full font-serif transition-all duration-300 ${
                        activeTab === cat.id 
                            ? 'bg-accent text-white shadow-lg scale-105' 
                            : 'bg-white/60 text-text/80 hover:bg-white hover:text-accent'
                    }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md relative overflow-hidden transition-all duration-300">
             {/* Decor */}
             <div className="absolute top-0 left-0 w-20 h-20 bg-accent/5 rounded-br-full"></div>
             <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent/5 rounded-tl-full"></div>

            <div className="relative z-10 min-h-[300px]">
                <ul className="space-y-6 animate-fade-in-up">
                    {activeCategory?.items.map((item, idx) => (
                        <li key={`${activeTab}-${idx}`} className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-secondary/30 pb-3 last:border-0">
                            <div>
                                <span className="text-text font-medium block">{item.name}</span>
                                {item.description && (
                                    <span className="text-xs text-text/50 mt-1 block">{item.description}</span>
                                )}
                            </div>
                            <span className="text-accent font-serif font-bold text-lg mt-1 md:mt-0">{item.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;