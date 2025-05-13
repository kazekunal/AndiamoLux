'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-8 transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}>
      {/* Elliptical translucent navbar */}
      <div className={`relative flex w-11/12 max-w-6xl items-center justify-between rounded-full px-8 py-4 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'bg-black/50' : 'bg-black/20'
      }`}>
        {/* Left navigation */}
        <div className="flex items-center space-x-10">
          <Link href="#" className="text-sm font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            About Us
          </Link>
          {/* <Link href="#" className="text-sm font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            Contact Us
          </Link> */}
        </div>
        
        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-xl font-bold tracking-widest text-white">ANDIAMO LUX</h1>
        </div>
        
        {/* Right navigation */}
        <div className="flex items-center space-x-10">
          <Link href="#" className="text-sm font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            Plan
          </Link>
          <Link href="#" className="text-sm font-medium tracking-wide text-white hover:text-white/80 transition-colors">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}