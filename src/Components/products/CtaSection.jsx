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
    <section className="w-full py-12 bg-gradient-to-br from-[#171818] to-gray-800">
      {/* Only changed the container width - kept original padding */}
      <div className="max-w-screen-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          ref={ctaRef}
          variants={headerContainerVariants}
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Get Covered?
          </motion.h2>
          <motion.p
            variants={headerItemVariants}
            className="text-white/80 text-lg max-w-2xl mx-auto mb-8"
          >
            Get a personalized quote today and protect your business with
            comprehensive coverage.
          </motion.p>
          <motion.div variants={headerItemVariants}>
            <button
              onClick={handleGetQuote}
              className="inline-flex items-center gap-2 bg-white text-[#171818] hover:bg-gray-100 font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Get a Quote
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(CtaSection);