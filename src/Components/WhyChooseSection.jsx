// components/about/WhyChooseSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from "lucide-react";
import { whyChooseData, headerContainerVariants, headerItemVariants, whyChooseVariants } from './data';

const WhyChooseSection = () => {
  const whyChooseRef = useRef(null);
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.2 });

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={whyChooseRef}
          variants={headerContainerVariants}
          initial="hidden"
          animate={isWhyChooseInView ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <motion.div
            variants={headerItemVariants}
            className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4"
          >
            <Star size={14} className="text-[#171818]" />
            <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">Why Choose Us</span>
          </motion.div>
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl md:text-4xl font-bold text-[#171818] mb-4"
          >
            Why Choose Global Underwriters?
          </motion.h2>
          <motion.p
            variants={headerItemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            With decades of experience, we've built a reputation for excellence and reliability
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={whyChooseVariants}
              initial="hidden"
              animate={isWhyChooseInView ? "visible" : "hidden"}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#171818]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#171818] transition-all">
                <div className="text-[#171818] group-hover:text-white">{item.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-[#171818] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(WhyChooseSection);