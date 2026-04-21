import React from "react";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/ServicesSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  );
};

export default React.memo(Home);
