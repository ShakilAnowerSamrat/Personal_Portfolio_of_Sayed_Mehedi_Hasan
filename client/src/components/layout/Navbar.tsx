import { useState } from "react";
import { Link } from "wouter";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#interests", label: "Interests" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-['Inter'] text-primary">
          Sayed<span className="text-blue-400">.MH</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="font-['Inter'] font-medium hover:text-blue-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`px-4 py-2 bg-white md:hidden border-t ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-3 pb-3">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="font-['Inter'] font-medium hover:text-blue-400 transition"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
