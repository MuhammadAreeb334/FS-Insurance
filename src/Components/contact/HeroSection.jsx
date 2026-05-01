import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { headerContainerVariants, headerItemVariants } from "./data";

const HeroSection = () => {
  return (
    <section className="relative w-full pt-32 pb-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdXJhbmNlfGVufDB8fDB8fHww')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-screen-3xl mx-auto px-6 lg:px-12 xl:px-16 text-center">
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={headerItemVariants}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={14} className="text-white" />
            </motion.div>
            <span className="text-xs font-bold tracking-wider text-white uppercase">
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            variants={headerItemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Get In Touch
            <span className="block text-white/90">
              We'd Love to Hear From You
            </span>
          </motion.h1>

          <motion.p
            variants={headerItemVariants}
            className="text-white/80 text-base md:text-lg xl:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            Have questions about our insurance services? Need a quote? Our team
            is here to help. Reach out to us through any of the channels below.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
