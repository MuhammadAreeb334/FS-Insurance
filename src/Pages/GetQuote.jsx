// pages/GetQuote.jsx
import React from "react";
import HeroSection from "../components/quote/HeroSection";
import QuoteForm from "../components/quote/QuoteForm";
// import ContactSection from "../components/quote/ContactSection";

const GetQuote = () => {
  const handleStartQuote = () => {
    document
      .getElementById("quote-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white overflow-hidden">
      <HeroSection onStartQuote={handleStartQuote} />
      <QuoteForm />
      {/* <ContactSection /> */}
    </div>
  );
};

export default React.memo(GetQuote);
