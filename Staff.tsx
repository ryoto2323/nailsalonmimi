import React from 'react';
import { SectionId } from '../types';
import { STAFF_MEMBERS } from '../constants';

const Staff: React.FC = () => {
  return (
    <section id={SectionId.STAFF} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="font-cursive text-3xl text-accent/50 block mb-2">Staff</span>
            <h2 className="text-2xl md:text-3xl font-serif text-text">スタッフ紹介</h2>
            <div className="w-12 h-0.5 bg-accent/30 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {STAFF_MEMBERS.map((staff) => (
                <div key={staff.id} className="group bg-primary/20 rounded-2xl p-6 md:p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-secondary/50 text-center">
                    {/* Image */}
                    <div className="relative w-40 h-40 mx-auto mb-6">
                        <div className="absolute inset-0 bg-secondary rounded-full opacity-20 group-hover:scale-110 transition-transform duration-300"></div>
                        <img 
                            src={staff.image} 
                            alt={staff.name} 
                            className="w-full h-full object-cover rounded-full border-4 border-white shadow-sm relative z-10"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <p className="text-accent font-serif text-sm tracking-widest mb-1">{staff.role}</p>
                        <h3 className="text-xl font-bold text-text mb-4 font-serif">{staff.name}</h3>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {staff.tags.map((tag, idx) => (
                                <span key={idx} className="bg-white text-accent text-xs px-2 py-1 rounded-full border border-secondary/50">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-text/80 text-sm leading-relaxed text-justify md:text-center">
                            {staff.message}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;