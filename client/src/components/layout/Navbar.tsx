import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home", icon: "fas fa-home" },
    { href: "#about", label: "About", icon: "fas fa-user" },
    { href: "#education", label: "Education", icon: "fas fa-graduation-cap" },
    { href: "#experience", label: "Experience", icon: "fas fa-briefcase" },
    { href: "#skills", label: "Skills", icon: "fas fa-code" },
    { href: "#interests", label: "Interests", icon: "fas fa-heart" },
    { href: "#contact", label: "Contact", icon: "fas fa-envelope" }
  ];

  return (
    <motion.header 
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-md' : 'bg-white/50'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="text-2xl font-bold font-['Inter'] text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sayed<span className="text-blue-400">.MH</span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <motion.a 
                key={link.href}
                href={link.href} 
                className={`font-['Inter'] font-medium px-4 py-2 rounded-lg transition-all ${
                  activeSection === link.href.substring(1) 
                    ? 'text-white bg-primary neon-glow' 
                    : 'text-gray-600 hover:text-primary hover:bg-blue-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <i className={`${link.icon} mr-2`}></i>
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <motion.button 
            onClick={toggleMobileMenu} 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-primary"
            whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "#ffffff" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </motion.button>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="px-4 py-4 bg-white/90 backdrop-blur-md md:hidden border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col space-y-2"
              variants={{
                hidden: { opacity: 0 },
                show: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.07 }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.href}
                  href={link.href} 
                  className={`font-['Inter'] font-medium p-3 rounded-lg ${
                    activeSection === link.href.substring(1) 
                      ? 'text-white bg-primary' 
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                  onClick={closeMobileMenu}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <i className={`${link.icon} mr-3 w-5 text-center`}></i>
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
