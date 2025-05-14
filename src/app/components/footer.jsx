import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-4 border-t border-white/10 pt-8 pb-4 text-center text-gray-400 text-sm">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4 font-semibold text-white">
          Andiamo Lux © {new Date().getFullYear()} | Bespoke Travel Experiences
        </p>

        {/* Updated flex styling */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 mb-4">
          <a
            href="https://instagram.com/andiamolux"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-4 h-4" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a
            href="https://wa.me/917982841532"
            className="hover:text-white transition-colors flex items-center gap-1"
            aria-label="Contact us on WhatsApp"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp: +91 7982841532</span>
          </a>
          <a
            href="mailto:experience@andiamolux.com"
            className="hover:text-white transition-colors flex items-center gap-1"
            aria-label="Send us an email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email: experience@andiamolux.com</span>
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Design and Developed by
          <a href="#" className="hover:text-white transition-colors"> Kunal Passan</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
