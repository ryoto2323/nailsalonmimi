import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, X, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { generateConsultationResponse } from '../services/geminiService';

const SUGGESTIONS = [
  "春の人気デザインは？🌸",
  "オフィスでもOKな色は？🏢",
  "爪が薄いのですが...💅",
  "次のデート用ネイル💓"
];

const AiConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'こんにちは🌸 Nail Salon MimiのAIデザインコンサルタントです。\n「今の気分」や「お洋服の系統」を教えていただければ、あなたにぴったりのネイルデザインをご提案します💅✨', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await generateConsultationResponse(userMessage.text);
      const aiMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
          role: 'model',
          text: '申し訳ございません。エラーが発生しました。',
          timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        handleSend();
    }
  }

  return (
    <>
      {/* Desktop Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`hidden md:flex fixed bottom-8 right-8 z-40 bg-white text-accent border border-secondary p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-accent hover:text-white transition-all duration-300 items-center gap-2 group ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} animate-bounce`}
        style={{ animationDuration: '3s' }}
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-medium">AIデザイン相談</span>
      </button>

      {/* Mobile Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`md:hidden fixed bottom-24 right-4 z-40 bg-white text-accent border border-secondary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Sparkles className="w-6 h-6" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text/20 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md h-[600px] max-h-[80vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-secondary">
            {/* Header */}
            <div className="bg-primary p-4 flex justify-between items-center border-b border-secondary/30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-text text-sm">Mimi Design Consultant</h3>
                    <p className="text-xs text-text/60">Powered by Gemini</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-text/50 hover:text-text transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white scroll-smooth">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-accent text-white rounded-br-none'
                        : 'bg-primary text-text border border-secondary/50 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-primary px-4 py-3 rounded-2xl rounded-bl-none border border-secondary/50 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-accent" />
                    <span className="text-xs text-text/60">AIが考えています...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area & Suggestions */}
            <div className="bg-white border-t border-secondary/20">
                {/* Suggestions */}
                <div className="px-4 pt-3 pb-1 overflow-x-auto whitespace-nowrap no-scrollbar flex gap-2">
                    {SUGGESTIONS.map((suggestion, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleSend(suggestion)}
                            disabled={isLoading}
                            className="inline-block px-3 py-1 bg-secondary/20 hover:bg-secondary/40 text-accent text-xs rounded-full transition-colors border border-secondary/30"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>

                <div className="p-4">
                    <div className="flex items-center gap-2 bg-primary rounded-full px-4 py-2 border border-secondary focus-within:border-accent/50 focus-within:ring-1 focus-within:ring-accent/50 transition-all">
                        <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="メッセージを入力..."
                        className="flex-1 bg-transparent border-none outline-none text-sm text-text placeholder:text-text/40"
                        disabled={isLoading}
                        />
                        <button
                        onClick={() => handleSend()}
                        disabled={isLoading || !input.trim()}
                        className="p-2 rounded-full bg-accent text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 transition-colors"
                        >
                        <Send size={16} />
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiConsultant;