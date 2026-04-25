// components/about/StatsSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats, statsCardVariants } from './data';

const StatsSection = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 });

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" ref={statsRef}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={statsCardVariants}
              initial="hidden"
              animate={isStatsInView ? "visible" : "hidden"}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-[#171818]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="text-[#171818]">{stat.icon}</div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#171818]">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(StatsSection);