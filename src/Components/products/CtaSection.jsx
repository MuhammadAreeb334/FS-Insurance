import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { headerContainerVariants, headerItemVariants } from "./data";

const CtaSection = () => {
  const navigate = useNavigate();
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.1 });

  const handleGetQuote = () => {
    navigate("/quotes");
  };

  return (
    // Full width background
    <section className="w-full bg-gradient-to-br from-[#171818] to-gray-800 py-16 overflow-hidden">
      {/* Wider centered content container */}
      <div className="max-w-screen-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          ref={ctaRef}
          variants={headerContainerVariants}
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4"
          >
            Ready to Get Covered?
          </motion.h2>
          <motion.p
            variants={headerItemVariants}
            className="text-white/80 text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Get a personalized quote today and protect your business with
            comprehensive coverage.
          </motion.p>
          <motion.div
            variants={headerItemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={handleGetQuote}
              className="inline-flex items-center gap-2 bg-white text-[#171818] hover:bg-gray-100 font-bold px-8 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl text-base md:text-lg"
            >
              Get a Quote
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(CtaSection);