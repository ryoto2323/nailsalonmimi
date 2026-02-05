import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-secondary/30 pt-16 pb-32 md:pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 pb-12 mb-8">
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