import React from 'react';
import { MessageCircle } from 'lucide-react';


import AboutUs from "./components/aboutus";
import DestinationsPage from "./components/explore";
import Footer from "./components/footer";
import LandingPage from "./components/heropage";
import Navbar from "./components/navbar";
import PremiumServices from "./components/services";
import HeroSection from './components/landing2';
import AboutSection from './components/about2';

export const metadata = {
  title: "Andiamo Lux - Personalized Luxury Travel Planning & Bespoke Experiences",
  description: "From overwater villas in the Maldives to private vineyard dinners in Georgia, our experiences go beyond the ordinary. Discover personalized luxury travel planning with Andiamo Lux.",
  keywords: "Andiamo Lux, luxury travel, personalized travel planning, travel advisors, bespoke travel experiences, luxury vacations, travel agency",
  openGraph: {
    title: "Andiamo Lux - Personalized Luxury Travel Planning",
    description: "From overwater villas in the Maldives to private vineyard dinners in Georgia, our experiences go beyond the ordinary.",
    url: "https://www.andiamolux.com",
    siteName: "Andiamo Lux",
    type: "website",
  },
  alternates: {
    canonical: "https://www.andiamolux.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const phoneNumber = "917982841532"; // Store phone number as a variable

  return (
    <div className="bg-[#f2ede5] overflow-hidden relative">
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      {/* <LandingPage /> */}
      {/* <PremiumServices/> */}
      <AboutUs />
      <DestinationsPage />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-50 transition-colors duration-300"
        aria-label="Chat on WhatsApp" // Add aria-label for accessibility
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
