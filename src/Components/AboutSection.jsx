import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Target, Eye, Shield } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const footerVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  return (
    <section className="bg-white pt-8 pb-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16"
        >
          {/* LEFT */}
          <motion.div variants={itemVariants}>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-full mb-4 md:mb-6"
            >
              <Shield size={14} className="text-gray-700" />
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-700 uppercase">
                About Our Company
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            >
              Expert insurance guidance you{" "}
              <span className="text-[#171818] relative inline-block">
                can always trust
                <motion.span
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-1 sm:bottom-2 left-0 h-2 sm:h-3 bg-[#171818]/10 -z-10"
                />
              </span>
            </motion.h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-base md:text-lg"
            >
              We are committed to providing clear advice, dependable support,
              and customized coverage solutions you can trust at every step.
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 md:gap-3 w-fit bg-[#171818] hover:bg-gray-800 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              More About Us
              <motion.span
                className="bg-white/20 rounded-full p-1 md:p-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <ArrowUpRight size={14} className="md:w-4 md:h-4" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* BOTTOM SECTION - Responsive layout */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8"
        >
          {/* LEFT CARDS - Full width on mobile, side by side on tablet */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6"
          >
            {/* Mission Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-gray-50 p-5 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 md:w-14 md:h-14 bg-[#171818] rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-5 shadow-md"
              >
                <Target size={18} className="md:w-6 md:h-6 text-white" />
              </motion.div>
              <h3 className="font-bold text-lg md:text-2xl mb-2 md:mb-3 text-[#171818]">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Reliable, affordable, and comprehensive insurance solutions.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-gray-50 p-5 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 md:w-14 md:h-14 bg-[#171818] rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-5 shadow-md"
              >
                <Eye size={18} className="md:w-6 md:h-6 text-white" />
              </motion.div>
              <h3 className="font-bold text-lg md:text-2xl mb-2 md:mb-3 text-[#171818]">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Become the most trusted insurance partner.
              </p>
            </motion.div>
          </motion.div>

          {/* IMAGES SECTION - Responsive grid */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* IMAGE 1 */}
              <motion.div
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/3] sm:aspect-square"
              >
                <img
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=800&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Insurance consultation"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#171818]/60 rounded-2xl flex items-center justify-center p-4"
                >
                  <span className="text-white font-bold text-sm md:text-lg text-center">
                    Protecting Your Future
                  </span>
                </motion.div>
              </motion.div>

              {/* IMAGE 2 */}
              <motion.div
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/3] sm:aspect-square"
              >
                <img
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=800&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Happy clients"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#171818]/60 rounded-2xl flex items-center justify-center p-4"
                >
                  <span className="text-white font-bold text-sm md:text-lg text-center">
                    We've Got You Covered
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* FOOTER - Responsive text */}
        <motion.div
          variants={footerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-8 md:mt-10 text-xs md:text-sm px-4"
        >
          <span className="text-gray-600 block sm:inline">
            Smart, Scalable, and High-Performance Insurance Company –
          </span>
          <motion.span
            whileHover={{ x: 5 }}
            className="text-[#171818] font-semibold cursor-pointer inline-block mt-1 sm:mt-0 sm:ml-1"
          >
            Let's Build Together! →
          </motion.span>
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(AboutSection);