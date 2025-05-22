"use client"

import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, ChevronRight, ChevronLeft } from "lucide-react"
import TestimonialsCarousel from "./testimonials"

// Constants moved outside component to prevent recreation on each render
const destinations = [
  {
    id: "Seychelles",
    name: "Seychelles",
    tagline: "Serene Shores",
    image: "/sey.jpg",
    featured: true,
  },
  {
    id: "Dubai",
    name: "Dubai",
    tagline: "Desert Lux",
    image: "/dub.jpg",
    featured: true,
  },
  {
    id: "Andaman & Nicobar Islands",
    name: "Andaman & Nicobar Islands",
    tagline: "Island Reverie",
    image: "/island.jpg",
  },
  {
    id: "Vietnam",
    name: "Vietnam",
    tagline: "Island Escape",
    image: "/vietnam.jpg",
  },
  {
    id: "Georgia",
    name: "Georgia",
    tagline: "Caucasian Retreat",
    image: "/georgia.jpg",
  },
  {
    id: "Bali",
    name: "Bali",
    tagline: "Eternal Bali",
    image: "/hero4.jpg",
    featured: true,
  },
  {
    id: "Thailand",
    name: "Thailand",
    tagline: "Siam Serenity",
    image: "/thailand.jpg",
  },
  {
    id: "Maldives",
    name: "Maldives",
    tagline: "Ocean's Embrace",
    image: "/maldives.jpg",
    featured: true,
  },
  {
    id: "Bhutan",
    name: "Bhutan",
    tagline: "Himalayan Serenity",
    image: "/bhutan.jpg",
  },
  {
    id: "Nepal",
    name: "Nepal",
    tagline: "Roof of the World",
    image: "/nepal.jpg",
  },
  {
    id: "Sri Lanka",
    name: "Sri Lanka",
    tagline: "Pearl of the Indian Ocean",
    image: "/srilanka.jpg",
  },
  {
    id: "Singapore",
    name: "Singapore",
    tagline: "Urban Oasis",
    image: "/singapore.jpg",
  },
]

// Isolated DestinationCard component for better code organization and memo potential
const DestinationCard = ({ destination, isFeatured = false, isMobile = false }) => {
  const cardHeight = isFeatured
    ? isMobile ? "h-[350px]" : "h-[400px]"
    : isMobile ? "h-[250px]" : "h-[280px]";

  return (
    <Link
      href="#"
      className={`group relative overflow-hidden rounded-${isFeatured ? '3xl' : '2xl'} shadow-lg block ${cardHeight} w-full
        ${!isMobile ? "transform transition duration-500 hover:shadow-xl hover:-translate-y-2" : ""}`}
    >
      <div className="relative h-full w-full">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          sizes={isFeatured
            ? "(max-width: 768px) 100vw, 50vw"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={isFeatured} // Load featured images with priority
          loading={isFeatured ? "eager" : "lazy"} // Lazy load non-featured images
          quality={isFeatured ? 85 : 75} // Lower quality for non-featured images
          onError={(e) => {
            // Fallback for image loading errors
            e.target.onerror = null;
            e.target.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001737]/60 to-transparent" />

        <div className={`absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-${isFeatured ? '2' : '1.5'} rounded-full shadow-md z-10
          ${!isMobile && !isFeatured ? 'opacity-0 group-hover:opacity-100 transition-opacity duration-300' : ''}`}>
          <ArrowUpRight className={`h-${isFeatured ? '5' : '4'} w-${isFeatured ? '5' : '4'} text-[#001737]`} />
        </div>

        <div className="absolute bottom-0 left-0 p-6">
          <div className="flex items-center mb-1">
            <MapPin className="h-3 w-3 text-white/80 mr-1" />
            <span className="text-white/90 text-xs">{destination.tagline}</span>
          </div>
          <h2 className={`mb-1 font-bold text-white ${
            isFeatured ? (isMobile ? 'text-2xl' : 'text-3xl md:text-4xl') : 'text-lg md:text-xl'
          }`}>
            {destination.name}
          </h2>
          {isFeatured && (
            <>
              <div className="w-12 h-1 bg-white/80 mb-4" />
              <button className="inline-flex items-center text-sm font-medium text-white group-hover:text-white/90 transition-colors">
                Discover more{" "}
                <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

// Optimized carousel component with proper memoization
const DestinationCarousel = ({ items, title, isFeatured = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const carouselRef = useRef(null);

  // Memoized navigation handlers to prevent recreating functions on each render
  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  }, [items.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  }, [items.length]);

  // Improved touch handlers for mobile
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.touches[0].clientX);
    setIsSwiping(true);
    // Prevent page scrolling while swiping carousel
    document.body.style.overflow = 'hidden';
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isSwiping) return;
    setTouchEnd(e.touches[0].clientX);

    // Calculate how far we've swiped
    if (touchStart && carouselRef.current) {
      const diff = touchStart - e.touches[0].clientX;
      const containerWidth = carouselRef.current.offsetWidth;
      const scrollOffset = currentIndex * containerWidth;

      // Apply a drag effect during swipe
      if (Math.abs(diff) > 10) {
        e.preventDefault(); // Prevent default only when actually swiping

        // Calculate progressive transform based on swipe distance
        const progressiveOffset = diff / 2; // Reduce the movement to make it feel more controlled
        carouselRef.current.querySelector('.carousel-inner').style.transform =
          `translateX(-${scrollOffset + progressiveOffset}px)`;
      }
    }
  }, [touchStart, isSwiping, currentIndex]);

  const handleTouchEnd = useCallback(() => {
    setIsSwiping(false);
    // Re-enable page scrolling
    document.body.style.overflow = '';

    if (!touchStart || !touchEnd) return;

    // Reset manual transformation
    if (carouselRef.current) {
      carouselRef.current.querySelector('.carousel-inner').style.transition = 'transform 300ms ease-out';
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrev();

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);

    // Reset transform after state update
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.querySelector('.carousel-inner').style.transition = '';
      }
    }, 300);
  }, [touchStart, touchEnd, goToNext, goToPrev]);

  // Render all items but apply visibility optimizations
  // This gives better mobile performance while ensuring proper layout
  return (
    <div className="relative mb-12">
      <h2 className="text-2xl font-bold text-[#001737] mb-4">{title}</h2>

      <div
        className="relative overflow-hidden"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex carousel-inner transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${items.length * 100}%`
          }}
        >
          {items.map((dest, index) => (
            <div
              key={dest.id}
              className="w-full flex-shrink-0 px-2"
            >
              {/* Apply conditional rendering for performance but handle edge cases */}
              {(Math.abs(currentIndex - index) <= 1 ||
                (currentIndex === 0 && index === items.length - 1) ||
                (currentIndex === items.length - 1 && index === 0)) && (
                <DestinationCard
                  destination={dest}
                  isFeatured={isFeatured}
                  isMobile={true}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Larger, more touch-friendly navigation arrows for mobile */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-md z-10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#001737]"
        aria-label="Previous destination"
      >
        <ChevronLeft className="h-6 w-6 text-[#001737]" />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-md z-10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#001737]"
        aria-label="Next destination"
      >
        <ChevronRight className="h-6 w-6 text-[#001737]" />
      </button>

      {/* Larger, more touch-friendly pagination dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {items.map((dest, idx) => (
          <button
            key={dest.id}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentIndex === idx ? 'bg-[#001737]' : 'bg-gray-300'
            }`}
            aria-label={`Go to ${dest.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function DestinationsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for mobile view with improved detection
  useEffect(() => {
    // Initial check before mounting
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // After initial detection, remove loading state
      setIsLoading(false);
    };

    // Set initial value
    checkIsMobile();

    // Debounced resize handler
    let timeoutId = null;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 200);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Memoize filtered destinations to prevent recalculation on every render
  const { featuredDestinations, regularDestinations } = useMemo(() => {
    return {
      featuredDestinations: destinations.filter((dest) => dest.featured),
      regularDestinations: destinations.filter((dest) => !dest.featured)
    };
  }, []);

  // Show a minimal loading state while detecting device
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f8f9fc]">
        <div className="w-16 h-16 border-4 border-[#001737]/20 border-t-[#001737] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#f8f9fc] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-[#f0f4ff] opacity-50 blur-3xl -z-10" />
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-[#f0f7ff] opacity-60 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-8 md:py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} // Faster animation for mobile
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 text-center"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-medium uppercase tracking-wider text-[#001737]/70 border-b-2 border-[#001737]/20 pb-1">
              Curated Destinations
            </span>
          </div>
          <h1 className="mb-6 text-3xl sm:text-4xl font-bold text-[#001737] md:text-5xl lg:text-6xl">Your Journey, Your Way</h1>
          <div className="w-16 sm:w-20 h-1 bg-[#001737] mx-auto mb-4 sm:mb-6" />
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed px-4 sm:px-0">
            Explore handpicked escapes designed to inspire, immerse, and indulge. From tropical retreats to cultural
            havens, each destination promises an experience beyond the ordinary.
          </p>
        </motion.div>

        {/* Featured Destinations - Desktop View */}
        {!isMobile && featuredDestinations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-[#001737] mb-8">Featured Destinations</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredDestinations.slice(0, 2).map((dest) => (
                <DestinationCard
                  key={dest.id}
                  destination={dest}
                  isFeatured={true}
                  isMobile={false}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Featured Destinations Carousel - Mobile View */}
        {isMobile && featuredDestinations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <DestinationCarousel
              items={featuredDestinations}
              title="Featured Destinations"
              isFeatured={true}
            />
          </motion.div>
        )}

        {/* All Destinations Grid - Desktop View */}
        {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#001737] mb-8">Explore All Destinations</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {regularDestinations.map((dest, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
                viewport={{ once: true }}
                key={dest.id}
              >
                <DestinationCard
                  destination={dest}
                  isFeatured={false}
                  isMobile={false}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

        {/* All Destinations Carousel - Mobile View */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <DestinationCarousel
              items={regularDestinations}
              title="Explore All Destinations"
            />
          </motion.div>
        )}

        {/* Testimonials Section */}
        <div className={isMobile ? "mt-8" : "mt-16"}>
          <TestimonialsCarousel/>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-1/2 w-32 md:w-40 h-32 md:h-40 bg-[#f0f4ff] rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />

          <h2 className="text-2xl sm:text-3xl font-bold text-[#001737] mb-3 sm:mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            Let our travel experts craft the perfect itinerary for your next adventure. Whether you're seeking
            relaxation, adventure, or cultural immersion, we'll create an experience tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link
                href="https://wa.me/917982841532"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-[#001737] px-6 sm:px-8 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#001737]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 w-full sm:w-auto"
              >
                <span>Plan Your Trip</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}