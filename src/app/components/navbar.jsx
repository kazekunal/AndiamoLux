'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 md:px-6 transition-all duration-300 ${scrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'}`}>
      {/* Navbar container */}
      <div className={`relative flex w-full md:w-11/12 max-w-6xl items-center justify-between rounded-full px-4 md:px-8 py-3 md:py-4 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'bg-black/50' : 'bg-black/20'
      }`}>
        {/* Logo (mobile left) */}
        <div className="md:hidden">
          <h1 className="text-lg font-bold tracking-widest text-white">ANDIAMO LUX</h1>
        </div>

        {/* Logo (desktop center) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <h1 className="text-xl font-bold tracking-widest text-white">ANDIAMO LUX</h1>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white p-1 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop left navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#" className="text-sm font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            About Us
          </Link>
        </div>

        {/* Desktop right navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#" className="text-sm font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            Plan
          </Link>
          <Link href="#" className="text-sm font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            Explore
          </Link>
        </div>
      </div>

      {/* Mobile menu - dropdown with framer-motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-20 left-4 right-4 mx-auto mt-2 w-[90%] max-w-sm rounded-2xl bg-black/20 backdrop-blur-md shadow-lg z-40 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center space-y-4 p-6 text-center">
              <Link 
                href="#" 
                className="text-lg font-medium tracking-wide text-white hover:text-white/80 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="#" 
                className="text-lg font-medium tracking-wide text-white hover:text-white/80 transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                href="#" 
                className="text-lg font-medium tracking-wide text-white hover:text-white/80 transition-colors"
                onClick={toggleMenu}
              >
                Plan
              </Link>
              <Link 
                href="#" 
                className="text-lg font-medium tracking-wide text-white hover:text-white/80 transition-colors"
                onClick={toggleMenu}
              >
                Explore
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
