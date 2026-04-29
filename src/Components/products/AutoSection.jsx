import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Car, CheckCircle2 } from "lucide-react";
import {
  autoFeatures,
  autoEndorsements,
  leftToRightVariants,
  rightToLeftVariants,
  featureItemVariants,
} from "./data";

const AutoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    // Full width background
    <section className="w-full py-4 bg-gray-50">
      {/* Only changed the container width - kept original padding */}
      <div className="max-w-screen-3xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={leftToRightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="inline-flex items-center gap-2 bg-[#171818]/10 px-4 py-2 rounded-full mb-4">
              <Car size={14} className="text-[#171818]" />
              <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">
                Vehicle Coverage
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171818] mb-6">
              Automobile Policy
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#171818] mb-3">
                Coverage Includes:
              </h3>
              <div className="space-y-2">
                {autoFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={featureItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={14} className="text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#171818] mb-3">
                Available Auto Endorsements:
              </h3>
              <div className="space-y-2">
                {autoEndorsements.map((endorsement, index) => (
                  <motion.div
                    key={index}
                    custom={index + autoFeatures.length}
                    variants={featureItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={14} className="text-green-600" />
                    <span className="text-gray-700">{endorsement}</span>
                  </motion.div>
                ))}
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
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=450&fit=crop"
              alt="Auto Insurance"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AutoSection);