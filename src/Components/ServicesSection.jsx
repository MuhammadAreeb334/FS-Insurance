import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Shield, Sparkles, Home, CarFront } from "lucide-react";

const services = [
  {
    title: "Business Insurance",
    desc: "Drive with confidence knowing your business is protected against liabilities and operational risks.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=800&fit=crop",
    tag: "Business Coverage",
    icon: Shield,
  },
  {
    title: "Home Insurance",
    desc: "Drive with confidence knowing your home is protected against damage, theft, and natural disasters.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=800&fit=crop",
    tag: "Property Protection",
    icon: Home,
  },
  {
    title: "Vehicle Insurance",
    desc: "Drive with confidence knowing your car or bike is protected against accidents.",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=800&fit=crop",
    tag: "Vehicle Insurance",
    icon: CarFront,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gray-50 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm"
          >
            <Sparkles size={16} className="text-[#171818]" />
            <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171818] mb-4 leading-tight"
          >
            Smart protection plans for{" "}
            <span className="relative inline-block">
              life
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-[#171818]/10 -z-10"
              />
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            With flexible coverage options, affordable premiums, and expert
            guidance, we help you safeguard your future while ensuring peace of
            mind at every stage of life.
          </motion.p>
        </motion.div>

        {/* CARDS - Compact Overlay Design */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Background Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                {/* Icon on Top Left */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm">
                    <Icon size={18} className="text-[#171818]" />
                  </div>
                </div>

                {/* Content Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                  <h3 className="text-white text-lg font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-xs leading-relaxed mb-3">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">
                      Learn More
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#171818] transition-all duration-300">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(ServicesSection);
