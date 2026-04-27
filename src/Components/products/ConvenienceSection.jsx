// components/products/ConvenienceSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import {
  convenienceFeatures,
  leftToRightVariants,
  rightToLeftVariants,
  featureItemVariants,
} from "./data";

const ConvenienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="pt-8 pb-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={leftToRightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="inline-flex items-center gap-2 bg-[#171818]/10 px-4 py-2 rounded-full mb-4">
              <Building2 size={14} className="text-[#171818]" />
              <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">
                Classification
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171818] mb-6">
              Convenience Store with Gas Sales
            </h2>
            <div className="space-y-3">
              {convenienceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={featureItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-7 h-7 bg-[#171818]/10 rounded-full flex items-center justify-center group-hover:bg-[#171818] transition-all">
                    <CheckCircle2
                      size={14}
                      className="text-[#171818] group-hover:text-white"
                    />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={rightToLeftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-first lg:order-last"
          >
            <img
              src="https://images.unsplash.com/photo-1567777176186-dfa735f1fe20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FzJTIwc3RhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Convenience Store with Gas"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ConvenienceSection);
