import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2 } from "lucide-react";
import { industries, headerContainerVariants, headerItemVariants, industryItemVariants } from './data';

const IndustriesSection = () => {
  const industriesRef = useRef(null);
  const isIndustriesInView = useInView(industriesRef, { once: true, amount: 0.2 });

  return (
    // Full width background section
    <section className="w-full bg-white py-8 overflow-hidden">
      {/* Wider centered content container with max-w-screen-3xl */}
      <div className="max-w-screen-3xl mx-auto px-6 lg:px-12 xl:px-16">
        <motion.div
          ref={industriesRef}
          variants={headerContainerVariants}
          initial="hidden"
          animate={isIndustriesInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div
            variants={headerItemVariants}
            className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4"
          >
            <Building2 size={14} className="text-[#171818]" />
            <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">Industries We Serve</span>
          </motion.div>
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#171818] mb-4"
          >
            Small to Medium Size Businesses
          </motion.h2>
          <motion.p
            variants={headerItemVariants}
            className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
          >
            We specialize in providing comprehensive coverage for a wide range of industries
          </motion.p>
        </motion.div>

        {/* Industry grid with better spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={industryItemVariants}
              initial="hidden"
              animate={isIndustriesInView ? "visible" : "hidden"}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 p-3 lg:p-4 rounded-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#171818]/10 rounded-lg flex items-center justify-center group-hover:bg-[#171818] group-hover:text-white transition-all">
                <div className="text-[#171818] group-hover:text-white text-sm lg:text-base">
                  {industry.icon}
                </div>
              </div>
              <span className="text-sm lg:text-base font-medium text-gray-700 group-hover:text-[#171818]">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(IndustriesSection);