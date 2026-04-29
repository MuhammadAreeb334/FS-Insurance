import React from "react";
import HeroSection from "../Components/quote/HeroSection";
import QuoteForm from "../Components/quote/QuoteForm";

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
    </div>
  );
};

export default React.memo(GetQuote);
