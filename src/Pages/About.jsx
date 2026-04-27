// pages/About.jsx
import React from 'react';
import HeroAbout from '../Components/HeroAbout';
import StatsSection from '../Components/StatsSection';
import IndustriesSection from '../Components/IndustriesSection';
import ProductsSection from '../Components/ProductsSection';
import MonolineSection from '../Components/MonolineSection';
import WhyChooseSection from '../Components/WhyChooseSection';
import CtaSection from '../Components/CtaSection';

const About = () => {
  return (
    <div className="bg-white overflow-hidden">
      <HeroAbout />
      <StatsSection />
      <IndustriesSection />
      
      {/* Products & Services - Two Column Layout */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <ProductsSection />
            </div>
            
            {/* Right Column */}
            <div>
              <MonolineSection />
            </div>
          </div>
        </div>
      </section>
      
      <WhyChooseSection />
      <CtaSection />
    </div>
  );
};

export default React.memo(About);