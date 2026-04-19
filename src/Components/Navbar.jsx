import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "OUR PRODUCTS", path: "/products" },
    { name: "GET A QUOTE", path: "/quotes" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-transparent py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and Agency Name - Left */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={logo}
                  alt="Logo"
                  className="w-12 h-12 rounded-xl object-cover shadow-md"
                />
                <div className="hidden sm:block">
                  <div className="text-xs tracking-wider text-white">
                    F&S Agency
                  </div>
                  <div className="text-[10px] tracking-wide text-white/70">
                    UNDERWRITERS
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links - Center */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-xs font-bold tracking-wider transition-all duration-300 rounded-md ${
                      isActive(link.path)
                        ? "text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-0 left-4 right-4 h-0.5 bg-white"
                        transition={{ type: "spring", stiffness: 380 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Section - Phone and Button */}
            <div className="flex items-center gap-6">
              {/* Phone Number */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="hidden md:flex items-center gap-2"
              >
                <div className="flex flex-col items-end">
                  <span className="text-[10px] tracking-wider text-white/70">
                    MAKE A CALL
                  </span>
                  <a
                    href="tel:+19545720299"
                    className="text-sm font-bold text-white hover:text-white/80 transition-colors"
                  >
                    +1 (954) 572-0299
                  </a>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
              </motion.div>

              {/* Desktop Get Quote Button */}
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:block bg-white text-gray-900 px-6 py-2.5 rounded-md text-xs font-bold tracking-wider hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                GET A QUOTE
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 mt-3 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 px-4 text-sm font-bold tracking-wider rounded-lg transition-all duration-300 ${
                          isActive(link.path)
                            ? "bg-gray-900 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-4 border-t border-gray-100"
                >
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                    <div>
                      <span className="text-[10px] text-gray-500 tracking-wider">
                        MAKE A CALL
                      </span>
                      <a
                        href="tel:+19545720299"
                        className="block text-sm font-bold text-gray-900"
                      >
                        +1 (954) 572-0299
                      </a>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="w-full bg-gray-900 text-white py-3.5 rounded-xl text-sm font-bold tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-lg mt-2"
                >
                  GET A QUOTE
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;