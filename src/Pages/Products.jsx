import React from "react";
import HeroSection from "../Components/products/HeroSection";
import ConvenienceSection from "../Components/products/ConvenienceSection";
import PropertySection from "../Components/products/PropertySection";
import LiabilitySection from "../Components/products/LiabilitySection";
import OptionalSection from "../Components/products/OptionalSection";
import AutoSection from "../Components/products/AutoSection";
import UmbrellaSection from "../Components/products/UmbrellaSection";
import WorkersSection from "../Components/products/WorkersSection";
import CtaSection from "../Components/products/CtaSection";

const Products = () => {
  return (
    <div className="bg-white overflow-hidden">
      <HeroSection />
      <ConvenienceSection />
      <PropertySection />
      <LiabilitySection />
      <OptionalSection />
      <AutoSection />
      <UmbrellaSection />
      <WorkersSection />
      <CtaSection />
    </div>
  );
};

export default React.memo(Products);