import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import StrongPoints from './components/StrongPoints';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Staff from './components/Staff';
import Offer from './components/Offer';
import Voice from './components/Voice';
import Flow from './components/Flow';
import Faq from './components/Faq';
import Access from './components/Access';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';
import AiConsultant from './components/AiConsultant';

const App: React.FC = () => {
  return (
    <div className="antialiased text-text bg-primary w-full min-h-screen relative font-sans">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <StrongPoints />
        <Gallery />
        <Menu />
        <Staff />
        <Voice />
        <Offer />
        <Flow />
        <Faq />
        <Access />
      </main>
      <Footer />
      <StickyCta />
      <AiConsultant />
    </div>
  );
};

export default App;