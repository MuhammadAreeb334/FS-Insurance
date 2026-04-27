// pages/Contact.jsx
import React from "react";
import HeroSection from "../components/contact/HeroSection";
import ContactForm from "../components/contact/ContactForm";
import OfficeLocations from "../components/contact/OfficeLocations";

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
