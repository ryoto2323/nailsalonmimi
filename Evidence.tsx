import React from 'react';
import { SectionId } from '../types';

const Evidence: React.FC = () => {
  return (
    <section id={SectionId.EVIDENCE} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-text">驚きの変化をご覧ください</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Case 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex gap-4 mb-4 items-center">
                    <span className="bg-secondary text-white px-3 py-1 rounded text-sm font-bold">Case.01</span>
                    <p className="font-bold text-text">背中のニキビ跡も綺麗になりました（20代女性）</p>
                </div>
                <div className="flex gap-2">
                    <div className="w-1/2 relative">
                        <img src="https://placehold.co/600x400/e2e8f0/64748b?text=Before" alt="Before" className="w-full rounded-lg" />
                        <span className="absolute bottom-2 left-2 bg-gray-800/70 text-white text-xs px-2 py-1 rounded">Before</span>
                    </div>
                    <div className="w-1/2 relative">
                        <img src="https://placehold.co/600x400/e0f2f1/00897b?text=After" alt="After" className="w-full rounded-lg" />
                        <span className="absolute bottom-2 left-2 bg-cta text-white text-xs px-2 py-1 rounded">After</span>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                    6回施術後。自己処理による肌荒れが改善し、トーンアップも実現しました。
                </p>
            </div>

            {/* Case 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex gap-4 mb-4 items-center">
                    <span className="bg-secondary text-white px-3 py-1 rounded text-sm font-bold">Case.02</span>
                    <p className="font-bold text-text">自己処理の時間がゼロに！（30代女性）</p>
                </div>
                <div className="flex gap-2">
                     <div className="w-1/2 relative">
                        <img src="https://placehold.co/600x400/e2e8f0/64748b?text=Before" alt="Before" className="w-full rounded-lg" />
                        <span className="absolute bottom-2 left-2 bg-gray-800/70 text-white text-xs px-2 py-1 rounded">Before</span>
                    </div>
                    <div className="w-1/2 relative">
                        <img src="https://placehold.co/600x400/e0f2f1/00897b?text=After" alt="After" className="w-full rounded-lg" />
                        <span className="absolute bottom-2 left-2 bg-cta text-white text-xs px-2 py-1 rounded">After</span>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                    12回施術後。太い毛もほとんど目立たなくなり、毎日のお手入れから解放されました。
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Evidence;