import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "OUR PRODUCTS", path: "/products" },
    { name: "GET A QUOTE", path: "/quotes" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleGetQuote = () => {
    navigate("/quotes");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/60 backdrop-blur-md py-3 shadow-lg"
            : "bg-[#171818] py-5"
        }`}
      >
        {/* Only changed the container width - kept original padding */}
        <div className="max-w-screen-3xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section - No changes */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 group">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-12 h-12 rounded-xl object-cover shadow-md transition-transform group-hover:scale-105"
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

            {/* Desktop Navigation - No changes to font/text */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-xs font-bold tracking-wider transition-all duration-300 rounded-md ${
                      isActive(link.path)
                        ? "text-white "
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-0 left-4 right-4 h-0.5 bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Section - No changes to font/text */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2 text-white">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] tracking-wider text-white/70">
                    MAKE A CALL
                  </span>
                  <a href="tel:+19545720299" className="text-sm font-bold">
                    +1 (954) 572-0299
                  </a>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
              </div>

              <button
                onClick={handleGetQuote}
                className="hidden lg:block bg-white text-gray-900 px-6 py-2.5 rounded-md text-xs font-bold tracking-wider hover:bg-gray-100 transition-all shadow-lg"
              >
                GET A QUOTE
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white z-50 relative"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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

        {/* Mobile Menu Overlay - No changes */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 lg:hidden"
                onClick={closeMobileMenu}
                style={{ top: "70px" }}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden bg-white shadow-xl relative z-50"
              >
                <div className="mt-1 px-6 py-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMobileMenu}
                        className={`block py-3 px-4 text-sm font-bold tracking-wider rounded-lg transition-all duration-300 ${
                          isActive(link.path)
                            ? "bg-[#171818] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile Call Button */}
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="pt-4 mt-4 border-t border-gray-200"
                  >
                    <a
                      href="tel:+19545720299"
                      onClick={closeMobileMenu}
                      className="flex items-center justify-center gap-2 w-full bg-[#171818] text-white py-3 px-4 rounded-lg font-bold"
                    >
                      <Phone className="w-4 h-4" />
                      Call +1 (954) 572-0299
                    </a>
                  </motion.div>
                  
                  {/* Mobile Quote Button */}
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <button
                      onClick={() => {
                        closeMobileMenu();
                        handleGetQuote();
                      }}
                      className="w-full bg-gray-100 text-[#171818] hover:bg-gray-200 py-3 px-4 rounded-lg font-bold transition-all duration-300"
                    >
                      GET A QUOTE
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-[72px] lg:h-[76px]" />
    </>
  );
};

export default Navbar;