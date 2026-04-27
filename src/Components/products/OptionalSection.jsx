// components/products/OptionalSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  optionalCoverages,
  leftToRightVariants,
  rightToLeftVariants,
  featureItemVariants,
} from "./data";

const OptionalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={leftToRightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=450&fit=crop"
              alt="Optional Coverages"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            variants={rightToLeftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="inline-flex items-center gap-2 bg-[#171818]/10 px-4 py-2 rounded-full mb-4">
              <Sparkles size={14} className="text-[#171818]" />
              <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">
                Add-Ons
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171818] mb-4">
              Optional Coverages
            </h2>
            <p className="text-gray-500 mb-6">
              Customize your policy with these additional coverages
            </p>
            <div className="grid grid-cols-1 gap-3">
              {optionalCoverages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={featureItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 p-3 rounded-xl transition-all group cursor-pointer"
                  >
                    <div className="w-9 h-9 bg-[#171818]/10 rounded-lg flex items-center justify-center group-hover:bg-[#171818] transition-all">
                      <Icon
                        size={16}
                        className="text-[#171818] group-hover:text-white"
                      />
                    </div>
                    <span className="text-sm text-gray-700">{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(OptionalSection);