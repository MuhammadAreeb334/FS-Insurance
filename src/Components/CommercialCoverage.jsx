import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Building2, 
  Briefcase, 
  Wrench, 
  Scale, 
  Wine, 
  CarFront,
  Sparkles
} from 'lucide-react';

const commercialServices = [
  { title: "Commercial Property", icon: <Building2 className="w-8 h-8" /> },
  { title: "General Liability", icon: <Briefcase className="w-8 h-8" /> },
  { title: "Equipment Breakdown", icon: <Wrench className="w-8 h-8" /> },
  { title: "Crime & Fidelity", icon: <Scale className="w-8 h-8" /> },
  { title: "Liquor Liability", icon: <Wine className="w-8 h-8" /> },
  { title: "Hired & Non-Owned Auto", icon: <CarFront className="w-8 h-8" /> },
];

const CommercialCoverage = () => {
  // Separate refs for header and cards sections
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.1 });

  // Stagger container for header
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Individual header item animations
  const headerItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.21, 0.47, 0.32, 0.98],
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  // Card entrance with 3D flip effect
  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateY: -30,
      rotateX: 15
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      transition: { 
        duration: 0.6,
        delay: i * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
        type: "spring",
        stiffness: 120,
        damping: 12
      },
    }),
  };

  // Floating animation for cards
  const floatingAnimation = {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: (i) => i * 0.2,
      },
    },
  };

  return (
    <section className="bg-white py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER SECTION - Animates when this part comes into view */}
        <motion.div
          ref={headerRef}
          variants={headerContainerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            variants={headerItemVariants}
            className="inline-flex items-center gap-2 bg-gray-100 px-5 py-2.5 rounded-full mb-6 shadow-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-[#171818]" />
            </motion.div>
            <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">
              Commercial Coverage
            </span>
          </motion.div>

          {/* Title with letter by letter animation */}
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171818] mb-4 leading-tight"
          >
            Commercial{" "}
            <span className="relative inline-block">
              Coverage
              <motion.span
                initial={{ width: 0, left: 0 }}
                animate={isHeaderInView ? { width: "100%" } : {}}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-2 left-0 h-3 bg-[#171818]/10 -z-10"
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={headerItemVariants}
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Our core product is the commercial package. Coverage differs depending upon the specific package, 
            but typically consists of the following.
          </motion.p>
        </motion.div>

        {/* CARDS GRID SECTION - Animates separately when scrolled into view */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {commercialServices.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isCardsInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className="group relative"
            >
              {/* Animated floating effect */}
              <motion.div
                variants={floatingAnimation}
                animate={isCardsInView ? "animate" : {}}
                custom={index}
                className="h-full"
              >
                <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full cursor-pointer overflow-hidden">
                  
                  {/* Animated Background Gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#171818] to-[#171818] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                  />
                  
                  {/* Top Accent Bar with glow */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#171818] to-[#171818]/40 rounded-t-2xl"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={isCardsInView ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.08, duration: 1, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#171818] to-transparent rounded-t-2xl"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ originX: 0 }}
                  />
                  
                  {/* Content */}
                  <div className="flex flex-col items-center text-center space-y-5 relative z-10">
                    
                    {/* Icon with Pulse Effect on Mount */}
                    <motion.div 
                      className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-[#171818] group-hover:bg-[#171818] group-hover:text-white transition-all duration-400 shadow-md"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isCardsInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        delay: 0.2 + index * 0.08, 
                        duration: 0.5, 
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -8, 8, -4, 4, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    {/* Title with slide up */}
                    <motion.h3 
                      className="text-xl font-bold text-[#171818] leading-snug"
                      initial={{ y: 20, opacity: 0 }}
                      animate={isCardsInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Animated Decorative Line */}
                    <motion.div 
                      className="w-12 h-0.5 rounded-full bg-[#171818]/20"
                      initial={{ width: 0 }}
                      animate={isCardsInView ? { width: 48 } : {}}
                      transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
                      whileHover={{ 
                        width: 80,
                        backgroundColor: "#171818",
                        transition: { duration: 0.3 }
                      }}
                    />

                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(CommercialCoverage);