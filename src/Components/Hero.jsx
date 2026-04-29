import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  BadgeCheck,
  Award,
  Headphones,
} from "lucide-react";

// Slide data moved OUTSIDE component to prevent re-renders
const slides = [
  {
    id: 1,
    title: "Protecting What Matters Most",
    subtitle: "Comprehensive insurance coverage tailored just for you",
    buttonText: "Get a Quote",
    buttonPath: "/quotes",
    bgImage:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1920&h=1080&fit=crop",
    features: ["Claims Support", "Instant Coverage", "Best Rates"],
  },
  {
    id: 2,
    title: "Protect Your Business",
    subtitle: "Protecting your business with reliable and tailored coverage",
    buttonText: "Learn More",
    buttonPath: "/about",
    bgImage:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&h=1080&fit=crop",
    features: [
      "Business Protection",
      "Liability Coverage",
      "Property Insurance",
    ],
  },
  {
    id: 3,
    title: "Drive With Confidence",
    subtitle: "Auto insurance that keeps you safe on the road",
    buttonText: "Get Coverage",
    buttonPath: "/quotes",
    bgImage:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&h=1080&fit=crop",
    features: [
      "Accident Forgiveness",
      "Roadside Assistance",
      "Rental Coverage",
    ],
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fixed useEffect - empty dependency array, no pause functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []); // Empty dependency array - runs once on mount

  const handleButtonClick = () => {
    navigate(slides[currentSlide].buttonPath);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-16">
      {/* Background Image with Fade Animation Only */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slides[currentSlide].bgImage})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 min-h-screen flex items-center">
        {/* Fixed container for better large screen layout */}
        <div className="w-full px-6 lg:px-12 xl:px-20 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Content WITHOUT key - prevents remount flicker */}
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20"
                >
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide">
                    Trusted Insurance Partner
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {slides[currentSlide].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20"
                    >
                      <BadgeCheck className="w-3 h-3 text-green-400" />
                      <span className="text-xs md:text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.button
                  onClick={handleButtonClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl cursor-pointer"
                >
                  {slides[currentSlide].buttonText} →
                </motion.button>
              </motion.div>
            </div>

            {/* Right Side Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-1 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">
                        5K+
                      </div>
                      <div className="text-sm text-gray-200">
                        Trusted by 5,000+ Clients
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <BadgeCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">
                        #1
                      </div>
                      <div className="text-sm text-gray-200">
                        Top Rated Service
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">
                        Fast
                      </div>
                      <div className="text-sm text-gray-200">
                        Claim Processing
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="flex justify-center items-center">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="group"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/50 group-hover:bg-white/70"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;