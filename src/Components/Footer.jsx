import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Shield, ChevronRight } from "lucide-react";

const Footer = () => {
  // Separate refs for each major section
  const topSectionRef = useRef(null);
  const siteLinksRef = useRef(null);
  const getInTouchRef = useRef(null);
  const georgiaRef = useRef(null);
  const floridaRef = useRef(null);
  const texasRef = useRef(null);
  const copyrightRef = useRef(null);

  const isTopSectionInView = useInView(topSectionRef, { once: true, amount: 0.2 });
  const isSiteLinksInView = useInView(siteLinksRef, { once: true, amount: 0.2 });
  const isGetInTouchInView = useInView(getInTouchRef, { once: true, amount: 0.2 });
  const isGeorgiaInView = useInView(georgiaRef, { once: true, amount: 0.2 });
  const isFloridaInView = useInView(floridaRef, { once: true, amount: 0.2 });
  const isTexasInView = useInView(texasRef, { once: true, amount: 0.2 });
  const isCopyrightInView = useInView(copyrightRef, { once: true, amount: 0.2 });

  const siteLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Get a Quote", path: "/quotes" },
    { name: "Contact Us", path: "/contact" },
  ];

  const getInTouch = [
    { icon: Phone, text: "+1-954-572-0299", href: "tel:+19545720299" },
  ];

  const georgiaOffice = {
    address: "1825 Locke way Drive, Suite # 205,",
    city: "Alabama, GA 30004",
    phones: ["770-242-9431"],
  };

  const floridaOffice = {
    address: "5373 N Nob Hill Road,",
    city: "Sunrise, FL 33351",
    phones: ["954-572-0299", "770-242-9429"],
  };

  const texasOffice = {
    address: "8610 N. Lamar Suite # 103,",
    city: "Austin, TX 78753",
    phones: ["954-735-8889", "770-242-9431"],
  };

  // Extended animation durations
  const topSectionVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 15 }
    },
  };

  const leftColumnVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 15 }
    },
  };

  const centerLeftVariants = {
    hidden: { x: -50, y: -40, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 15 }
    },
  };

  const centerRightVariants = {
    hidden: { x: 50, y: -40, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 15 }
    },
  };

  const rightColumnVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 15 }
    },
  };

  const staggerItemsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    },
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const phoneVariants = {
    hidden: { scale: 0.7, opacity: 0, rotate: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 1.0, delay: 0.3, ease: "easeOut", type: "spring", stiffness: 100, damping: 12 }
    },
  };

  const copyrightVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
    },
  };

  return (
    <footer className="relative w-full bg-white text-gray-900 overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-0">
        
        {/* TOP SECTION - Animates first */}
        <motion.div
          ref={topSectionRef}
          variants={topSectionVariants}
          initial="hidden"
          animate={isTopSectionInView ? "visible" : "hidden"}
          className="text-center mb-12 pb-8 border-b border-gray-200"
        >
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            animate={isTopSectionInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3"
          >
            Have any Question? Ask us anything, we'd love to answer!
          </motion.h2>
          <motion.a
            variants={phoneVariants}
            initial="hidden"
            animate={isTopSectionInView ? "visible" : "hidden"}
            href="tel:+19545720299"
            className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
          >
            <Phone size={28} />
            +1-954-572-0299
          </motion.a>
        </motion.div>

        {/* Main Footer Grid - 5 Columns with progressive animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          
          {/* Column 1: Site Links - Animates second */}
          <motion.div
            ref={siteLinksRef}
            variants={leftColumnVariants}
            initial="hidden"
            animate={isSiteLinksInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <motion.h3
              initial={{ x: -30, opacity: 0 }}
              animate={isSiteLinksInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg font-semibold mb-4 text-gray-900"
            >
              SITE LINKS
            </motion.h3>
            <motion.ul
              variants={staggerItemsVariants}
              initial="hidden"
              animate={isSiteLinksInView ? "visible" : "hidden"}
              className="space-y-2"
            >
              {siteLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  variants={listItemVariants}
                  className="group"
                >
                  <a
                    href={link.path}
                    className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors duration-300 text-sm"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Column 2: Get In Touch - Animates third */}
          <motion.div
            ref={getInTouchRef}
            variants={centerLeftVariants}
            initial="hidden"
            animate={isGetInTouchInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <motion.h3
              initial={{ x: -20, y: -20, opacity: 0 }}
              animate={isGetInTouchInView ? { x: 0, y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg font-semibold mb-4 text-gray-900"
            >
              GET IN TOUCH
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isGetInTouchInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-500 text-sm mb-3"
            >
              We're here to listen:
            </motion.p>
            <motion.ul
              variants={staggerItemsVariants}
              initial="hidden"
              animate={isGetInTouchInView ? "visible" : "hidden"}
              className="space-y-2"
            >
              {getInTouch.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={listItemVariants}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors duration-300 text-sm"
                  >
                    <item.icon size={14} />
                    <span>{item.text}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Column 3: Georgia Office - Animates fourth */}
          <motion.div
            ref={georgiaRef}
            variants={centerLeftVariants}
            initial="hidden"
            animate={isGeorgiaInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <motion.h3
              initial={{ y: -30, opacity: 0 }}
              animate={isGeorgiaInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg font-semibold mb-4 text-gray-900"
            >
              GEORGIA OFFICE
            </motion.h3>
            <motion.div
              variants={staggerItemsVariants}
              initial="hidden"
              animate={isGeorgiaInView ? "visible" : "hidden"}
              className="space-y-2"
            >
              <motion.p variants={listItemVariants} className="text-gray-500 text-sm leading-relaxed">
                {georgiaOffice.address}
                <br />
                {georgiaOffice.city}
              </motion.p>
              {georgiaOffice.phones.map((phone, idx) => (
                <motion.a
                  key={idx}
                  variants={listItemVariants}
                  href={`tel:${phone.replace(/-/g, "")}`}
                  className="block text-gray-500 hover:text-gray-900 transition-colors text-sm"
                >
                  {phone}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Column 4: Florida Office - Animates fifth */}
          <motion.div
            ref={floridaRef}
            variants={centerRightVariants}
            initial="hidden"
            animate={isFloridaInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <motion.h3
              initial={{ x: 20, y: -20, opacity: 0 }}
              animate={isFloridaInView ? { x: 0, y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg font-semibold mb-4 text-gray-900"
            >
              FLORIDA OFFICE
            </motion.h3>
            <motion.div
              variants={staggerItemsVariants}
              initial="hidden"
              animate={isFloridaInView ? "visible" : "hidden"}
              className="space-y-2"
            >
              <motion.p variants={listItemVariants} className="text-gray-500 text-sm leading-relaxed">
                {floridaOffice.address}
                <br />
                {floridaOffice.city}
              </motion.p>
              {floridaOffice.phones.map((phone, idx) => (
                <motion.a
                  key={idx}
                  variants={listItemVariants}
                  href={`tel:${phone.replace(/-/g, "")}`}
                  className="block text-gray-500 hover:text-gray-900 transition-colors text-sm"
                >
                  {phone}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Column 5: Texas Office - Animates sixth */}
          <motion.div
            ref={texasRef}
            variants={rightColumnVariants}
            initial="hidden"
            animate={isTexasInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            <motion.h3
              initial={{ x: 30, opacity: 0 }}
              animate={isTexasInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-lg font-semibold mb-4 text-gray-900"
            >
              TEXAS OFFICE
            </motion.h3>
            <motion.div
              variants={staggerItemsVariants}
              initial="hidden"
              animate={isTexasInView ? "visible" : "hidden"}
              className="space-y-2"
            >
              <motion.p variants={listItemVariants} className="text-gray-500 text-sm leading-relaxed">
                {texasOffice.address}
                <br />
                {texasOffice.city}
              </motion.p>
              {texasOffice.phones.map((phone, idx) => (
                <motion.a
                  key={idx}
                  variants={listItemVariants}
                  href={`tel:${phone.replace(/-/g, "")}`}
                  className="block text-gray-500 hover:text-gray-900 transition-colors text-sm"
                >
                  {phone}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Copyright - Animates seventh (last) */}
      <div className="bg-[#0f0f0f] -mx-6 lg:-mx-8 mt-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={copyrightRef}
            variants={copyrightVariants}
            initial="hidden"
            animate={isCopyrightInView ? "visible" : "hidden"}
            className="text-center py-6"
          >
            <p className="text-gray-400 text-xs">
              © 2026 F&S Agency. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);