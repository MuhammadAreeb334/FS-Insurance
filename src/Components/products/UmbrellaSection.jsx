import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Umbrella, CheckCircle2 } from "lucide-react";
import {
  umbrellaFeatures,
  leftToRightVariants,
  rightToLeftVariants,
  featureItemVariants,
} from "./data";

const UmbrellaSection = () => {
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
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=450&fit=crop"
              alt="Umbrella Insurance"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            variants={rightToLeftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="inline-flex items-center gap-2 bg-[#171818]/10 px-4 py-2 rounded-full mb-4">
              <Umbrella size={14} className="text-[#171818]" />
              <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">
                Extra Protection
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171818] mb-6">
              Umbrella Policy
            </h2>

            <div className="bg-gray-50 rounded-2xl p-6 mb-4">
              <p className="text-xl font-bold text-[#171818] mb-2">
                {umbrellaFeatures[0]}
              </p>
              <p className="text-gray-600 mt-4 font-semibold">
                Excess Liability coverage over and above:
              </p>
              <div className="mt-3 space-y-2">
                {umbrellaFeatures.slice(2).map((feature, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={featureItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#171818] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(UmbrellaSection);