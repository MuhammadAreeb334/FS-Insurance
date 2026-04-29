import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, CheckCircle2 } from "lucide-react";
import {
  propertyFeatures,
  leftToRightVariants,
  rightToLeftVariants,
  featureItemVariants,
} from "./data";

const PropertySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    // Full width background
    <section className="w-full py-4">
      {/* Only changed the container width - kept original padding */}
      <div className="max-w-screen-3xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={leftToRightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=450&fit=crop"
              alt="Property Coverage"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            variants={rightToLeftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="inline-flex items-center gap-2 bg-[#171818]/10 px-4 py-2 rounded-full mb-4">
              <Shield size={14} className="text-[#171818]" />
              <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">
                Coverage
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171818] mb-4">
              Highlights of Property Coverages
            </h2>
            <p className="text-gray-500 mb-6">
              Automatically included in your policy
            </p>
            <div className="space-y-3">
              {propertyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={featureItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-all group"
                >
                  <div className="w-10 h-10 bg-[#171818]/10 rounded-lg flex items-center justify-center group-hover:bg-[#171818] transition-all">
                    <Shield
                      size={18}
                      className="text-[#171818] group-hover:text-white"
                    />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PropertySection);