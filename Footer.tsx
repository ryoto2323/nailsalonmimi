import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-secondary/30 pt-16 pb-32 md:pb-8">
      <div className="container mx-auto px-6">
        
        {/* LINE Official Account Banner */}
        <div className="bg-[#E6F6F0] border border-[#06C755]/30 rounded-2xl p-8 mb-16 text-center max-w-2xl mx-auto shadow-sm">
            <h3 className="font-serif text-xl md:text-2xl text-text font-bold mb-4">
                LINE公式アカウント
            </h3>
            <p className="text-text/80 mb-6 text-sm md:text-base leading-relaxed">
                お友達登録で<span className="font-bold text-accent text-lg mx-1">500円OFFクーポン</span>プレゼント中！<br/>
                最新のトレンドデザインや、キャンセル待ち情報も配信しています。
            </p>
            <a 
                href="https://line.me/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
                <i className="fa-brands fa-line text-2xl"></i>
                <span>LINEで友達追加する</span>
            </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 pb-12 mb-8 border-b border-secondary/20">
            <div className="text-center md:text-left">
                <h2 className="font-cursive text-4xl text-accent mb-2">Mimi</h2>
                <p className="text-text/60 text-xs tracking-widest">Premium Nail Salon</p>
            </div>
            
            <div className="flex gap-8 text-sm text-text/70">
                <a href="#" className="hover:text-accent transition-colors">採用情報</a>
                <a href="#" className="hover:text-accent transition-colors">プライバシーポリシー</a>
            </div>
        </div>
        
        <div className="text-center">
            <p className="text-text/40 text-xs font-serif">&copy; {new Date().getFullYear()} Nail Salon Mimi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;