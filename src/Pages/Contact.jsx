// pages/Contact.jsx
import React from "react";
import HeroSection from "../Components/contact/HeroSection";
import ContactForm from "../Components/contact/ContactForm";
import OfficeLocations from "../Components/contact/OfficeLocations";

const Contact = () => {
  return (
    <div className="bg-white overflow-hidden">
      <HeroSection />
      <ContactForm />
      <OfficeLocations />
    </div>
  );
};

export default React.memo(Contact);
