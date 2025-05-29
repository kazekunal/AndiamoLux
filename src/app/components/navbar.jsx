'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Instagram, Twitter, Linkedin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";

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
      <div className={`relative flex w-full md:w-11/12 max-w-6xl items-center justify-between rounded-full px-4 md:px-8 py-4 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'bg-black/50' : 'bg-black/20'
      }`}>
        {/* Left navigation links */}
        <div className="hidden md:flex items-center space-x-12">
          <Link href="#" className="text-lg font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-lg font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            About Us
          </Link>
          <Link href="#explore" className="text-lg font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            Explore
          </Link>
        </div>

        {/* Logo in center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
          <Link href="#">
            <Image
              src="/logo_3.png"
              alt="Andiamo Lux Logo"
              width={160}
              height={60}
              className="h-auto"
            />
          </Link>
        </div>

        {/* Social Media Icons - right side */}
        <div className="hidden md:flex items-center space-x-8">
        <Link href="https://wa.me/917982841532" className="text-lg font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            Plan Trip
          </Link>
          <Link href="https://www.instagram.com/andiamolux/" className="text-white hover:text-white/80 transition-colors p-2">
            <Instagram size={20} />
          </Link>
          <Link href="https://www.linkedin.com/company/andiamolux/about/?viewAsMember=true" className="text-white hover:text-white/80 transition-colors p-2">
            <Linkedin size={20} />
          </Link>
        </div>

        {/* Mobile view - logo and menu */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Mobile social icon */}
          
          
          {/* Mobile centered logo */}
          <div className="flex items-center justify-center md:hidden">
            <Link href="#">
              <Image
                src="/logo_3.png"
                alt="Andiamo Lux Logo"
                width={100}
                height={32}
                className="h-auto"
              />
            </Link>
          </div>
                    
          {/* Mobile menu toggle */}
          <button 
            onClick={toggleMenu} 
            className="text-white p-1 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
            className="absolute top-20 left-4 right-4 mx-auto mt-2 w-[90%] max-w-sm rounded-2xl bg-black/20 backdrop-blur-md shadow-lg z-40"
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
                href="#about" 
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
                Plan Trip
              </Link>
              <Link 
                href="#explore" 
                className="text-lg font-medium tracking-wide text-white hover:text-white/80 transition-colors"
                onClick={toggleMenu}
              >
                Explore
              </Link>
              
              {/* Social icons in mobile menu */}
              <div className="flex items-center space-x-6 pt-2">
                <Link href="https://www.linkedin.com/company/andiamolux/about/?viewAsMember=true" className="text-white hover:text-white/80 transition-colors">
                  <Linkedin size={20} />
                </Link>
                <Link href="https://www.instagram.com/andiamolux/" className="text-white hover:text-white/80 transition-colors p-2">
                  <Instagram size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}