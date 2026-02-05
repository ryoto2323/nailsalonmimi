import React from 'react';
import { SectionId } from '../types';
import { PROBLEM_LIST } from '../constants';

const Problem: React.FC = () => {
  return (
    <section id={SectionId.PROBLEM} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-text mb-4 leading-relaxed">
              こんなネイルのお悩み<br />
              ありませんか？
            </h2>
            <div className="w-12 h-0.5 bg-accent/30 mx-auto"></div>
        </div>

        <div className="bg-primary/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-secondary shadow-sm">
            <ul className="grid md:grid-cols-2 gap-6">
                {PROBLEM_LIST.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                            <i className="fa-solid fa-check text-accent text-sm"></i>
                        </div>
                        <span className="text-text font-medium">{item}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-12 text-center">
                <p className="text-lg md:text-xl font-serif text-accent font-bold">
                    Mimiなら、爪の健康を守りながら<br className="md:hidden"/>「持ち」と「可愛さ」を両立します。
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;