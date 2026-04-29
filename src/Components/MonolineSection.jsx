import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award } from "lucide-react";
import { monolineCoverage, headerContainerVariants, headerItemVariants, monolineItemVariants } from './data';

const MonolineSection = () => {
  const monolineRef = useRef(null);
  const isMonolineInView = useInView(monolineRef, { once: true, amount: 0.2 });

  return (
    <div className="w-full">
      <motion.div
        ref={monolineRef}
        variants={headerContainerVariants}
        initial="hidden"
        animate={isMonolineInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={headerItemVariants}
          className="inline-flex items-center gap-2 bg-[#171818]/10 px-4 py-2 rounded-full mb-4"
        >
          <Award size={14} className="text-[#171818]" />
          <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">Additional Coverage</span>
        </motion.div>
        <motion.h2
          variants={headerItemVariants}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#171818] mb-4"
        >
          Monoline Basis
        </motion.h2>
        <motion.p
          variants={headerItemVariants}
          className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-3xl"
        >
          Coverage offered on a monoline basis for maximum flexibility:
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
        {monolineCoverage.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={monolineItemVariants}
            initial="hidden"
            animate={isMonolineInView ? "visible" : "hidden"}
            whileHover={{ x: -5 }}
            className="flex items-center gap-3 bg-white p-3 lg:p-4 rounded-xl shadow-sm hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#171818]/10 rounded-lg flex items-center justify-center group-hover:bg-[#171818] transition-all">
              <div className="text-[#171818] group-hover:text-white text-sm lg:text-base">
                {item.icon}
              </div>
            </div>
            <span className="text-sm lg:text-base font-medium text-gray-700 group-hover:text-[#171818]">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MonolineSection);