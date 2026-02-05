import React from 'react';
import { SectionId } from '../types';

const BeginnerGuide: React.FC = () => {
  return (
    <section id={SectionId.BEGINNER} className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
                <span className="font-cursive text-3xl text-accent/50 block mb-2">First Time</span>
                <h2 className="text-2xl md:text-3xl font-serif text-text">初めての方へ</h2>
                <div className="w-12 h-0.5 bg-accent/30 mx-auto mt-4"></div>
                <p className="mt-6 text-text/80 leading-loose">
                    「ジェルネイルをしたいけど、爪が傷むのが怖い...」<br className="hidden md:block" />
                    そんな不安をお持ちの方こそ、ぜひMimiのパラジェルを体験してください。
                </p>
            </div>

            {/* Paragel vs Conventional */}
            <div className="bg-primary/30 rounded-3xl p-6 md:p-12 mb-16">
                <h3 className="text-center text-xl font-serif font-bold text-accent mb-8">
                    従来のジェルとパラジェルの違い
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Conventional */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                        <div className="text-center mb-4">
                            <span className="inline-block bg-gray-400 text-white text-xs px-3 py-1 rounded-full mb-2">従来のジェルネイル</span>
                            <h4 className="text-lg font-bold text-gray-600">サンディング（爪削り）が必要</h4>
                        </div>
                        <div className="flex-1 flex items-center justify-center py-6">
                            <div className="relative w-full max-w-[200px] h-32 border-b-4 border-gray-300">
                                {/* Nail Illustration */}
                                <div className="absolute bottom-0 w-full h-4 bg-gray-300 rounded-sm"></div>
                                {/* Scratch marks */}
                                <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-red-400 transform -rotate-45"></div>
                                <div className="absolute bottom-4 left-12 w-4 h-4 border-l-2 border-b-2 border-red-400 transform -rotate-45"></div>
                                <div className="absolute bottom-4 right-8 w-4 h-4 border-l-2 border-b-2 border-red-400 transform -rotate-45"></div>
                                <p className="text-center text-xs text-red-500 mt-12">爪の表面を削って傷をつける...</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-4 leading-relaxed bg-gray-50 p-4 rounded-lg">
                            ジェルを密着させるために、健康な爪の表面を削る必要があります。繰り返すと爪が薄くなり、痛みの原因になることも。
                        </p>
                    </div>

                    {/* Paragel */}
                    <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-secondary flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            Mimiのおすすめ
                        </div>
                        <div className="text-center mb-4">
                            <span className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full mb-2">パラジェル</span>
                            <h4 className="text-lg font-bold text-accent">サンディング一切不要！</h4>
                        </div>
                        <div className="flex-1 flex items-center justify-center py-6">
                             <div className="relative w-full max-w-[200px] h-32 border-b-4 border-pink-200">
                                {/* Nail Illustration */}
                                <div className="absolute bottom-0 w-full h-4 bg-pink-200 rounded-sm"></div>
                                {/* Smooth surface */}
                                <div className="absolute bottom-1 w-full text-center">
                                    <span className="text-accent text-2xl">✨</span>
                                </div>
                                <p className="text-center text-xs text-accent mt-12 font-bold">健康な爪のまま密着！</p>
                            </div>
                        </div>
                        <p className="text-sm text-text mt-4 leading-relaxed bg-secondary/10 p-4 rounded-lg">
                            真空パックのように爪に密着させるため、<span className="font-bold text-accent">爪の表面を一切削りません。</span><br/>
                            3ヶ月ほど続けることで、本来の健康で強い爪を取り戻せます。
                        </p>
                    </div>
                </div>
            </div>

            {/* Reassurance Points */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-accent text-2xl mb-4">
                        <i className="fa-regular fa-comment-dots"></i>
                    </div>
                    <h3 className="font-bold text-text mb-2">丁寧なカウンセリング</h3>
                    <p className="text-sm text-text/70 leading-relaxed">
                        爪の状態やお悩みをしっかり拝見し、最適な施術方法をご提案します。
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-accent text-2xl mb-4">
                        <i className="fa-solid fa-droplet"></i>
                    </div>
                    <h3 className="font-bold text-text mb-2">徹底したケア</h3>
                    <p className="text-sm text-text/70 leading-relaxed">
                        美しい仕上がりはケアから。甘皮周りも丁寧に処理し、モチを良くします。
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-accent text-2xl mb-4">
                        <i className="fa-solid fa-check-to-slot"></i>
                    </div>
                    <h3 className="font-bold text-text mb-2">保証期間あり</h3>
                    <p className="text-sm text-text/70 leading-relaxed">
                        万が一浮いてしまった場合も、1週間以内のお直しは無料で承ります。
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BeginnerGuide;