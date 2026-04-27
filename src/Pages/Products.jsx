// pages/Products.jsx
import React from "react";
import HeroSection from "../components/products/HeroSection";
import ConvenienceSection from "../components/products/ConvenienceSection";
import PropertySection from "../components/products/PropertySection";
import LiabilitySection from "../components/products/LiabilitySection";
import OptionalSection from "../components/products/OptionalSection";
import AutoSection from "../components/products/AutoSection";
import UmbrellaSection from "../components/products/UmbrellaSection";
import WorkersSection from "../components/products/WorkersSection";
import CtaSection from "../components/products/CtaSection";

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