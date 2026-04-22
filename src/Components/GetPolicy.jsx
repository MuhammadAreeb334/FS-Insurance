import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const GetPolicy = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    triggerOnce: true,
  });

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "Instant Quote" },
    { icon: <Clock className="w-5 h-5" />, text: "Fast Approval" },
    { icon: <BadgeCheck className="w-5 h-5" />, text: "Best Rates" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 14,
      },
    },
  };

  const featureVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.12,
        ease: "easeOut",
      },
    }),
  };

  const handleGetQuote = () => {
    navigate("/quotes");
  };

  return (
    <section className="bg-gradient-to-br from-[#171818] to-gray-800 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Background Decorative Elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 text-center">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 border border-white/20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={14} className="text-white" />
              </motion.div>
              <span className="text-[10px] font-bold tracking-wider text-white uppercase">
                Get Protected Today
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight"
            >
              Get a Policy
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/80 max-w-2xl mx-auto leading-relaxed text-base mb-6"
            >
              Get your personalized insurance quote in minutes. Fast, easy, and
              completely free. Protect what matters most today.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={featureVariants}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20"
                >
                  <div className="text-white">{feature.icon}</div>
                  <span className="text-white text-xs font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <motion.button
                onClick={handleGetQuote}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-[#171818] hover:bg-gray-100 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl text-base"
              >
                Get a Quote Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8 pt-6 border-t border-white/10"
            >
              <p className="text-white/40 text-xs">
                Join over 5,000+ satisfied customers • No obligation • Free
                consultation
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(GetPolicy);