import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const marketClasses = [
  { 
    title: "Hotel & Motel", 
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=800&fit=crop",
    description: "Comprehensive coverage for hospitality businesses including property, liability, and business interruption.",
    features: ["Property Protection", "Liability Coverage", "Business Income"]
  },
  { 
    title: "Restaurant", 
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=800&fit=crop",
    description: "Specialized insurance for restaurants covering equipment, liquor liability, and food spoilage.",
    features: ["Equipment Breakdown", "Liquor Liability", "Food Spoilage"]
  },
  { 
    title: "Gas Station", 
    img: "https://images.unsplash.com/photo-1567777176186-dfa735f1fe20?w=600&h=800&fit=crop",
    description: "Full-service coverage for gas stations including environmental and pollution liability.",
    features: ["Environmental Liability", "UST Coverage", "General Liability"]
  },
];

const NewMarkets = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, triggerOnce: true });

  // Staggered header animation - longer delays
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const headerItemVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80,
        damping: 15
      },
    },
  };

  // Card entrance with 3D pop effect - longer duration
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7,
      rotateY: -40,
      rotateX: 20,
      y: 80
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      y: 0,
      transition: { 
        duration: 1.1,
        delay: i * 0.25,
        ease: [0.21, 0.47, 0.32, 0.98],
        type: "spring",
        stiffness: 100,
        damping: 16
      },
    }),
  };

  return (
    <section className="bg-gray-50 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER SECTION - Longer entrance */}
        <motion.div
          ref={ref}
          variants={headerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={headerItemVariants}
            className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full mb-6 shadow-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-[#171818]" />
            </motion.div>
            <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">
              Expanded Availability
            </span>
          </motion.div>

          <motion.h2
            variants={headerItemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171818] mb-4 leading-tight"
          >
            New Markets For The{" "}
            <span className="relative inline-block">
              Following Classes
              <motion.span
                initial={{ width: 0, left: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-2 left-0 h-3 bg-[#171818]/10 -z-10"
              />
            </span>
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            We are proud to announce new coverage markets specifically 
            tailored for these high-demand industry classes.
          </motion.p>
        </motion.div>

        {/* CARDS GRID SECTION - Longer card entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketClasses.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.4 }
              }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 h-full cursor-pointer">
                
                {/* Image Section */}
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  
                  {/* Animated Gradient Overlay - Longer fade */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#171818]/90 via-[#171818]/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.25, duration: 1.0 }}
                  />

                  {/* Title Overlay - Longer slide up */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ y: 80, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.25, duration: 0.8, type: "spring", stiffness: 80 }}
                  >
                    <h3 className="text-white text-2xl font-bold">
                      {item.title}
                    </h3>
                    <motion.div 
                      className="w-12 h-0.5 bg-white/50 mt-2"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: 48 } : {}}
                      transition={{ delay: 0.95 + index * 0.25, duration: 0.8 }}
                    />
                  </motion.div>
                </div>

                {/* Content Section - Longer stagger */}
                <div className="p-6">
                  {/* Description */}
                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.25, duration: 0.7 }}
                    className="text-gray-600 text-sm leading-relaxed mb-5"
                  >
                    {item.description}
                  </motion.p>

                  {/* Features List - Longer staggered children */}
                  <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.12, delayChildren: 1.0 + index * 0.25 }
                      }
                    }}
                    className="space-y-2 mb-6"
                  >
                    {item.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        variants={{
                          hidden: { x: -30, opacity: 0 },
                          visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
                        }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#171818]" />
                        <span className="text-xs text-gray-500">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Learn More Button */}
                  <motion.button
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 1.3 + index * 0.25, duration: 0.6 }}
                    className="flex items-center justify-between w-full pt-4 border-t border-gray-100 group/btn"
                  >
                    <span className="text-xs font-bold text-[#171818] uppercase tracking-wider">
                      Learn More
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover/btn:bg-[#171818] transition-all duration-300">
                      <ArrowUpRight size={14} className="text-[#171818] group-hover/btn:text-white transition-colors duration-300" />
                    </div>
                  </motion.button>
                </div>

                {/* Top Animated Border - Longer draw */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#171818] via-[#171818]/50 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.25, duration: 1.2, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Longer entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.9, type: "spring", stiffness: 100 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-[#171818] hover:bg-gray-800 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Explore All Markets
            <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(NewMarkets);