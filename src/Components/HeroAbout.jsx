// components/about/HeroSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { headerContainerVariants, headerItemVariants } from './data';

const HeroAbout = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });

  const handleCall = () => {
    window.location.href = "tel:+19545720299";
  };

  const handleGetQuote = () => {
    navigate("/quotes");
  };

  return (
    <section className="relative bg-gradient-to-br from-[#171818] to-gray-800 pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          ref={heroRef}
          variants={headerContainerVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={headerItemVariants}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={14} className="text-white" />
            </motion.div>
            <span className="text-xs font-bold tracking-wider text-white uppercase">About Us</span>
          </motion.div>

          <motion.h1
            variants={headerItemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Providing Commercial Insurance Services
            <span className="block text-white/90">Since 1996</span>
          </motion.h1>

          <motion.p
            variants={headerItemVariants}
            className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Global Underwriters provides specialty niche products and service solutions 
            through industry's leading insurance companies and program administrators.
          </motion.p>

          <motion.div
            variants={headerItemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <button
              onClick={handleGetQuote}
              className="inline-flex items-center gap-2 bg-white text-[#171818] hover:bg-gray-100 font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Get a Quote
              <ArrowRight size={18} />
            </button>
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-bold px-8 py-3 rounded-full transition-all duration-300"
            >
              <Phone size={18} />
              Call Us Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(HeroAbout);