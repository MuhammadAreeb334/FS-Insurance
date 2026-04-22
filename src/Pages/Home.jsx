import React from "react";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/ServicesSection";
import CommercialCoverage from "../Components/CommercialCoverage";
import NewMarkets from "../Components/NewMarkets";
import GetPolicy from "../Components/GetPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CommercialCoverage />
      <NewMarkets />
      <GetPolicy />
    </div>
  );
};

export default React.memo(Home);
