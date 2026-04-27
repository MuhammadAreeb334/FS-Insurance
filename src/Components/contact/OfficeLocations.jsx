// components/contact/OfficeLocations.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, MapPin, Phone, Mail } from "lucide-react";
import { officeLocations, cardVariants } from "./data";

const OfficeLocations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleCall = (phone) => {
    window.location.href = `tel:${phone.replace(/-/g, "")}`;
  };

  return (
    <section className="py-4 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
            <Building2 size={14} className="text-[#171818]" />
            <span className="text-xs font-bold tracking-wider text-[#171818] uppercase">
              Our Offices
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171818] mb-4">
            Visit Our Locations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We have multiple offices across the country to serve you better.
            Visit us or give us a call at any of our locations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeLocations.map((office, index) => (
            <motion.div
              key={index}
              custom={index + 1}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-[#171818] p-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Building2 size={20} />
                  {office.name}
                </h3>
              </div>

              <div className="p-6 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-[#171818] mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-600 text-sm">{office.address}</p>
                    <p className="text-gray-600 text-sm">{office.city}</p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="space-y-2">
                  {office.phones.map((phone, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCall(phone)}
                      className="flex items-center gap-3 text-gray-600 hover:text-[#171818] transition-colors group w-full text-left"
                    >
                      <Phone
                        size={16}
                        className="text-[#171818] group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm">{phone}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(OfficeLocations);
