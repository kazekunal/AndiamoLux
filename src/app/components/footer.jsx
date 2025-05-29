'use client'
import React from 'react';
import { Instagram, Twitter, Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 pt-12 pb-4">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Company Info - Mobile Header */}
        <div className="text-center mb-8 md:hidden">
          <h3 className="text-white font-bold text-lg mb-4">Andiamo Lux</h3>
          <p className="text-sm mb-4">
            Reimagining travel experiences with quality, comfort, and style in mind.
          </p>
          <div className="flex justify-center">
            <Image
              src="/logo_new.png" 
              alt="Andiamo Lux Logo"
              width={120}
              height={40}
              className="h-auto"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden mb-12">
          {/* First Row - 2 columns */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/917982841532" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Plan Trip
                  </Link>
                </li>
                <li>
                  <Link href="#explore" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Explore
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="text-center">
              <h3 className="text-white font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms_new" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy_new" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Second Row - 1 column centered */}
          <div className="flex justify-center">
            <div className="text-center max-w-sm">
              <h3 className="text-white font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex justify-center gap-4 mb-4">
                <a
                  href="https://instagram.com/andiamolux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/andiamolux/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <a
                  href="mailto:experience@andiamolux.com"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>experience@andiamolux.com</span>
                </a>
                <a
                  href="https://wa.me/917982841532"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 7982841532</span>
                </a>
                <div className="flex items-start gap-2 text-sm mt-4">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-xs leading-relaxed">
                    Office No.1A, 2nd Floor, Indure House, Savitri Cinema Complex Greater Kailash 2, New Delhi - 110048
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info - Desktop Only */}
          <div className="text-left">
            <h3 className="text-white font-bold text-lg mb-4">Andiamo Lux</h3>
            <p className="text-sm mb-4">
              Reimagining travel experiences with quality, comfort, and style in mind.
            </p>
            <div className="flex justify-start">
              <Image
                src="/logo_new.png" 
                alt="Andiamo Lux Logo"
                width={120}
                height={40}
                className="h-auto"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/917982841532" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Plan Trip
                </Link>
              </li>
              <li>
                <Link href="#explore" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Explore
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-left">
            <h3 className="text-white font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms_new" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy_new" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="text-left">
            <h3 className="text-white font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex justify-start gap-4 mb-4">
              <a
                href="https://instagram.com/andiamolux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/andiamolux/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <a
                href="mailto:experience@andiamolux.com"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>experience@andiamolux.com</span>
              </a>
              <a
                href="https://wa.me/917982841532"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+91 7982841532</span>
              </a>
              <div className="flex items-start gap-2 text-sm mt-4">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-xs leading-relaxed">
                  Office No.1A, 2nd Floor, Indure House, Savitri Cinema Complex Greater Kailash 2, New Delhi - 110048
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Andiamo Lux. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 md:mt-0">
            Design and Developed by
            <a href="#" className="hover:text-white ml-1 transition-colors">Kunal Passan</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;