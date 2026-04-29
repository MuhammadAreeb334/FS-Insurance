import React from "react";
import { motion } from "framer-motion";
import { Phone, Sparkles, ArrowRight } from "lucide-react";
import { headerContainerVariants, headerItemVariants } from "./data";

const HeroSection = ({ onStartQuote }) => {
  const handleCall = () => {
    window.location.href = "tel:+19545720299";
  };

  return (
    // Full width background
    <section className="relative w-full bg-gradient-to-br from-[#171818] to-gray-800 pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Wider centered content container with max-w-screen-3xl */}
      <div className="relative z-10 max-w-screen-3xl mx-auto px-6 lg:px-12 xl:px-16 text-center">
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          animate="visible"
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
            <span className="text-xs font-bold tracking-wider text-white uppercase">
              Get a Quote
            </span>
          </motion.div>

          <motion.h1
            variants={headerItemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Get a Quote
            <span className="block text-white/90">
              Tell us what you are looking for
            </span>
          </motion.h1>

          <motion.p
            variants={headerItemVariants}
            className="text-white/80 text-base md:text-lg xl:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            Fill out the form below and our insurance experts will get back to
            you with a personalized quote within 24 hours.
          </motion.p>

          <motion.div
            variants={headerItemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <button
              onClick={onStartQuote}
              className="inline-flex items-center gap-2 bg-white text-[#171818] hover:bg-gray-100 font-bold px-6 md:px-8 xl:px-10 py-2 md:py-3 xl:py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl text-sm md:text-base xl:text-lg"
            >
              Start Your Quote
              <ArrowRight size={16} className="md:w-5 md:h-5 xl:w-6 xl:h-6" />
            </button>
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-bold px-6 md:px-8 xl:px-10 py-2 md:py-3 xl:py-4 rounded-full transition-all duration-300 text-sm md:text-base xl:text-lg"
            >
              <Phone size={16} className="md:w-5 md:h-5 xl:w-6 xl:h-6" />
              Call Us Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);