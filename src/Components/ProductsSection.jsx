// components/about/ProductsSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Phone } from "lucide-react";
import { products, headerContainerVariants, headerItemVariants, productItemVariants, statsCardVariants } from './data';

const ProductsSection = () => {
  const productsRef = useRef(null);
  const isProductsInView = useInView(productsRef, { once: true, amount: 0.2 });

  const handleCall = () => {
    window.location.href = "tel:+19545720299";
  };

  return (
    <>
      <motion.div
        ref={productsRef}
        variants={headerContainerVariants}
        initial="hidden"
        animate={isProductsInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={headerItemVariants}
          className="inline-flex items-center gap-2 bg-[#171818]/10 px-4 py-2 rounded-full mb-4"
        >
          <Shield size={14} className="text-[#171818]" />
          <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">Core Products</span>
        </motion.div>
        <motion.h2
          variants={headerItemVariants}
          className="text-3xl md:text-4xl font-bold text-[#171818] mb-4"
        >
          Products & Services
        </motion.h2>
        <motion.p
          variants={headerItemVariants}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          Our core product is the commercial package. Coverage differs depending upon 
          the specific package, but typically consists of:
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={productItemVariants}
            initial="hidden"
            animate={isProductsInView ? "visible" : "hidden"}
            whileHover={{ x: 5 }}
            className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 bg-[#171818]/10 rounded-lg flex items-center justify-center">
              <div className="text-[#171818]">{product.icon}</div>
            </div>
            <span className="text-sm font-medium text-gray-700">{product.name}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={statsCardVariants}
        initial="hidden"
        animate={isProductsInView ? "visible" : "hidden"}
        custom={6}
        className="bg-[#171818]/5 rounded-2xl p-6 border border-[#171818]/10"
      >
        <p className="text-gray-700 mb-3">
          <span className="font-bold">Not sure what you need?</span> Feel free to call us:
        </p>
        <button
          onClick={handleCall}
          className="inline-flex items-center gap-2 bg-[#171818] hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-full transition-all duration-300"
        >
          <Phone size={18} />
          +1 954-572-0299
        </button>
      </motion.div>
    </>
  );
};

export default React.memo(ProductsSection);