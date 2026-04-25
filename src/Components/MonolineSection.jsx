// components/about/MonolineSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award } from "lucide-react";
import { monolineCoverage, headerContainerVariants, headerItemVariants, monolineItemVariants } from './data';

const MonolineSection = () => {
  const monolineRef = useRef(null);
  const isMonolineInView = useInView(monolineRef, { once: true, amount: 0.2 });

  return (
    <>
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
          className="text-3xl md:text-4xl font-bold text-[#171818] mb-4"
        >
          Monoline Basis
        </motion.h2>
        <motion.p
          variants={headerItemVariants}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          Coverage offered on a monoline basis for maximum flexibility:
        </motion.p>
      </motion.div>

      <div className="space-y-3">
        {monolineCoverage.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={monolineItemVariants}
            initial="hidden"
            animate={isMonolineInView ? "visible" : "hidden"}
            whileHover={{ x: -5 }}
            className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 bg-[#171818]/10 rounded-lg flex items-center justify-center group-hover:bg-[#171818] transition-all">
              <div className="text-[#171818] group-hover:text-white">{item.icon}</div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-[#171818]">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default React.memo(MonolineSection);