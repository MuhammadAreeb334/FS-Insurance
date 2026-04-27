// components/products/WorkersSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HardHat } from "lucide-react";
import {
  leftToRightVariants,
  rightToLeftVariants,
} from "./data";

const WorkersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={leftToRightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="inline-flex items-center gap-2 bg-[#171818]/10 px-4 py-2 rounded-full mb-4">
              <HardHat size={14} className="text-[#171818]" />
              <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">
                Employee Coverage
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171818] mb-4">
              Workers' Compensation Policy
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-[#171818]/10 rounded-xl flex items-center justify-center">
                  <HardHat size={22} className="text-[#171818]" />
                </div>
                <p className="text-gray-700 text-lg">
                  Statutory limits and options available, as permitted by State
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={rightToLeftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-first lg:order-last"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=450&fit=crop"
              alt="Workers Compensation"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(WorkersSection);