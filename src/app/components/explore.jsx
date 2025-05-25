"use client"

import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, ChevronRight, ChevronLeft } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel"
import TestimonialsCarousel from "./testimonials"

// Constants moved outside component to prevent recreation on each render
const destinations = [
  {
    id: "Dubai",
    name: "Dubai",
    tagline: "Desert Lux",
    image: "/dub.jpg",
  },
  {
    id: "Andaman & Nicobar",
    name: "Andaman & Nicobar",
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
  },
  {
    id: "Bhutan",
    name: "Bhutan",
    tagline: "Himalayan Serenity",
    image: "/bhutan.jpg",
    
  },
  {
    id: "Seychelles",
    name: "Seychelles",
    tagline: "Serene Shores",
    image: "/sey.jpg",
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
  {
    id: "India",
    name: "India",
    tagline: "Colors of Unity",
    image: "/india.jpg",
    
  }
]

// Image preloader utility
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.onload = () => resolve(src)
    img.onerror = reject
    img.src = src
  })
}

// Loading skeleton component for destinations
const DestinationSkeleton = ({ isFeatured = false, isMobile = false }) => {
  const cardHeight = isFeatured
    ? isMobile ? "h-[450px]" : "h-[400px]"
    : isMobile ? "h-[320px]" : "h-[280px]"

  return (
    <div className={`relative overflow-hidden rounded-${isFeatured ? '3xl' : '2xl'} shadow-lg ${cardHeight} w-full`}>
      <div className="relative h-full w-full">
        {/* Animated skeleton background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" 
               style={{
                 animation: 'shimmer 2s infinite linear',
                 backgroundSize: '200% 100%'
               }} />
        </div>

        {/* Skeleton content */}
        <div className={`absolute bottom-0 left-0 right-0 ${isMobile ? 'p-5' : 'p-6'}`}>
          <div className="flex items-center mb-2">
            <div className={`${isMobile ? 'h-4 w-4' : 'h-3 w-3'} bg-white/30 rounded mr-2`} />
            <div className={`${isMobile ? 'h-4 w-20' : 'h-3 w-16'} bg-white/30 rounded`} />
          </div>
          <div className={`mb-2 bg-white/40 rounded ${
            isFeatured 
              ? (isMobile ? 'h-8 w-3/4' : 'h-10 w-2/3') 
              : (isMobile ? 'h-6 w-2/3' : 'h-5 w-1/2')
          }`} />
          {isFeatured && (
            <>
              <div className={`${isMobile ? 'w-16 h-1' : 'w-12 h-1'} bg-white/30 mb-4`} />
              <div className={`${isMobile ? 'h-4 w-32' : 'h-3 w-24'} bg-white/30 rounded`} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// Optimized DestinationCard component with smart loading (non-clickable)
const DestinationCard = ({ 
  destination, 
  isFeatured = false, 
  isMobile = false, 
  shouldPreload = false,
  isVisible = true 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Fixed height classes with better mobile sizing
  const cardHeight = isFeatured
    ? isMobile ? "h-[450px]" : "h-[400px]"
    : isMobile ? "h-[320px]" : "h-[280px]"

  // Determine loading strategy
  const loadingStrategy = shouldPreload ? "eager" : "lazy"
  const priority = shouldPreload || isFeatured

  return (
    <div
      className={`group relative overflow-hidden rounded-${isFeatured ? '3xl' : '2xl'} shadow-lg ${cardHeight} w-full
        ${!isMobile ? "transform transition duration-500 hover:shadow-xl hover:-translate-y-2" : ""}`}
    >
      <div className="relative h-full w-full">
        {/* Loading skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-400/20 to-transparent" />
          </div>
        )}

        {/* Main image with optimized loading - FIXED: Consistent object-fit behavior */}
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          sizes={isFeatured
            ? "(max-width: 768px) 100vw, 50vw"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
          className={`object-cover object-center transition-all duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${!isMobile ? 'group-hover:scale-105' : ''}`}
          priority={priority}
          // loading={loadingStrategy}
          quality={isMobile ? 85 : (isFeatured ? 80 : 70)}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true)
            setImageLoaded(true)
          }}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rev//2Q=="
        />

        {/* Enhanced gradient overlay */}
        <div className={`absolute inset-0 ${
          isMobile 
            ? 'bg-gradient-to-t from-[#001737] via-[#001737]/20 to-transparent' 
            : 'bg-gradient-to-t from-[#001737]/20 to-transparent'
        }`} />

        {/* Arrow icon */}
        <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-${isFeatured ? '2' : '1.5'} rounded-full shadow-md z-10
          ${!isMobile && !isFeatured ? 'opacity-0 group-hover:opacity-100 transition-opacity duration-300' : ''}`}>
          <ArrowUpRight className={`h-${isFeatured ? '5' : '4'} w-${isFeatured ? '5' : '4'} text-[#001737]`} />
        </div>

        {/* Content */}
        <div className={`absolute bottom-0 left-0 right-0 ${isMobile ? 'p-5' : 'p-6'}`}>
          <div className="flex items-center mb-2">
            <MapPin className={`${isMobile ? 'h-4 w-4' : 'h-3 w-3'} text-white/90 mr-2`} />
            <span className={`text-white/90 ${isMobile ? 'text-sm font-medium' : 'text-xs'}`}>
              {destination.tagline}
            </span>
          </div>
          <h2 className={`mb-2 font-bold text-white ${
            isFeatured 
              ? (isMobile ? 'text-3xl leading-tight' : 'text-3xl md:text-4xl') 
              : (isMobile ? 'text-xl leading-tight' : 'text-lg md:text-xl')
          }`}>
            {destination.name}
          </h2>
          {isFeatured && (
            <>
              <div className={`${isMobile ? 'w-16 h-1' : 'w-12 h-1'} bg-white/80 mb-4`} />
              <div className={`inline-flex items-center ${
                isMobile ? 'text-base' : 'text-sm'
              } font-medium text-white group-hover:text-white/90 transition-colors`}>
                Discover more{" "}
                <ChevronRight className={`${isMobile ? 'h-5 w-5' : 'h-4 w-4'} ml-1 transition-transform group-hover:translate-x-1`} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// shadcn/ui Carousel with all original functionalities
const DestinationCarousel = ({ items, title, isFeatured = false, isLoading = false }) => {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [preloadedImages, setPreloadedImages] = useState(new Set())
  const autoScrollRef = useRef(null)

  // Initialize carousel API and set up event listeners
  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Preload current and adjacent images
  useEffect(() => {
    if (isLoading || !items.length || !api) return

    const currentIndex = current - 1 // Convert to 0-based index
    const preloadImages = async () => {
      const imagesToPreload = []
      
      // Current image
      if (items[currentIndex]) {
        imagesToPreload.push(items[currentIndex].image)
      }
      
      // Next image
      const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
      if (items[nextIndex]) {
        imagesToPreload.push(items[nextIndex].image)
      }
      
      // Previous image
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
      if (items[prevIndex]) {
        imagesToPreload.push(items[prevIndex].image)
      }

      // Preload images that aren't already loaded
      const newImages = imagesToPreload.filter(img => !preloadedImages.has(img))
      
      if (newImages.length > 0) {
        try {
          await Promise.allSettled(newImages.map(preloadImage))
          setPreloadedImages(prev => {
            const updated = new Set(prev)
            newImages.forEach(img => updated.add(img))
            return updated
          })
        } catch (error) {
          console.warn('Failed to preload some images:', error)
        }
      }
    }

    preloadImages()
  }, [current, items, preloadedImages, isLoading, api])

  // Auto-scroll for featured destinations only
  useEffect(() => {
    if (!isFeatured || isLoading || !api) return

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        api.scrollNext()
      }, 5000) // Auto-scroll every 5 seconds
    }

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
        autoScrollRef.current = null
      }
    }

    startAutoScroll()

    // Pause auto-scroll on user interaction
    const handleUserInteraction = () => {
      stopAutoScroll()
      // Restart after 10 seconds of inactivity
      setTimeout(startAutoScroll, 10000)
    }

    api.on("pointerDown", handleUserInteraction)

    return () => {
      stopAutoScroll()
      api.off("pointerDown", handleUserInteraction)
    }
  }, [isFeatured, isLoading, api])

  // Determine which images should be preloaded
  const shouldPreloadImage = useCallback((index) => {
    const currentIndex = current - 1
    return Math.abs(index - currentIndex) <= 1 || 
           (currentIndex === 0 && index === items.length - 1) ||
           (currentIndex === items.length - 1 && index === 0)
  }, [current, items.length])

  if (isLoading) {
    return (
      <div className="relative mb-12">
        {title && <h2 className="text-2xl font-bold text-[#001737] mb-6">{title}</h2>}
        <div className="relative overflow-hidden rounded-2xl">
          <DestinationSkeleton isFeatured={isFeatured} isMobile={true} />
        </div>
        {/* Skeleton navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="h-2.5 w-2.5 rounded-full bg-gray-300 animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative mb-12">
      {title && <h2 className="text-2xl font-bold text-[#001737] mb-6">{title}</h2>}

      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {items.map((dest, index) => (
            <CarouselItem key={dest.id} className="pl-1">
              <div className="relative overflow-hidden rounded-2xl">
                <DestinationCard
                  destination={dest}
                  isFeatured={isFeatured}
                  isMobile={true}
                  shouldPreload={shouldPreloadImage(index)}
                  isVisible={Math.abs(index - (current - 1)) <= 1}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom styled navigation buttons */}
        <CarouselPrevious 
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white border-0 shadow-lg w-12 h-12 z-20"
          disabled={isLoading}
        >
          <ChevronLeft className="h-6 w-6 text-[#001737]" />
        </CarouselPrevious>

        <CarouselNext 
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white border-0 shadow-lg w-12 h-12 z-20"
          disabled={isLoading}
        >
          <ChevronRight className="h-6 w-6 text-[#001737]" />
        </CarouselNext>
      </Carousel>

      {/* Custom pagination dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {items.map((dest, idx) => (
          <button
            key={dest.id}
            onClick={() => !isLoading && api?.scrollTo(idx)}
            disabled={isLoading}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-200 disabled:cursor-not-allowed ${
              current === idx + 1
                ? 'bg-[#001737] scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to ${dest.name}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function DestinationsPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [isComponentLoading, setIsComponentLoading] = useState(true)
  const [destinationsLoading, setDestinationsLoading] = useState(true)

  // Check for mobile view with improved detection
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsComponentLoading(false)
    }

    checkIsMobile()

    let timeoutId = null
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkIsMobile, 200)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  // Preload critical images on component mount (non-blocking)
  useEffect(() => {
    const preloadCriticalImages = async () => {
      if (isComponentLoading) return

      const criticalImages = destinations.slice(0, 4).map(dest => dest.image)
      
      try {
        await Promise.allSettled(criticalImages.map(preloadImage))
      } catch (error) {
        console.warn('Failed to preload critical images:', error)
      } finally {
        // Small delay to show loading state briefly
        setTimeout(() => {
          setDestinationsLoading(false)
        }, 500)
      }
    }

    preloadCriticalImages()
  }, [isComponentLoading])

  // Memoize filtered destinations and split for mobile carousels
  const { allDestinations, firstThirdDestinations, secondThirdDestinations, thirdThirdDestinations } = useMemo(() => {
    // All destinations combined (no separation of featured/regular)
    const all = destinations
    
    // Split all destinations into three parts for mobile carousels
    const thirdSize = Math.ceil(all.length / 3)
    const firstThird = all.slice(0, thirdSize)
    const secondThird = all.slice(thirdSize, thirdSize * 2)
    const thirdThird = all.slice(thirdSize * 2)
    
    return {
      allDestinations: all,
      firstThirdDestinations: firstThird,
      secondThirdDestinations: secondThird,
      thirdThirdDestinations: thirdThird
    }
  }, [])

  // Show minimal loading only for initial component setup
  if (isComponentLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f8f9fc]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#001737]/20 border-t-[#001737] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#001737]/60 text-sm">Initializing...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-[#f8f9fc] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-[#f0f4ff] opacity-50 blur-3xl -z-10" />
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-[#f0f7ff] opacity-60 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-8 md:py-20">
        {/* Header Section - Always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

        {/* All Destinations Grid - Desktop View (includes featured destinations) */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-2xl font-bold text-[#001737] mb-8">Explore All Destinations</h2> */}
            {destinationsLoading ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[...Array(12)].map((_, index) => (
                  <DestinationSkeleton key={index} isFeatured={false} isMobile={false} />
                ))}
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {allDestinations.map((dest, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                    viewport={{ once: true }}
                    key={dest.id}
                  >
                    <DestinationCard
                      destination={dest}
                      isFeatured={dest.featured}
                      isMobile={false}
                      shouldPreload={index < 4} // Preload first 4 images
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* All Destinations Carousels - Mobile View (Split into three with single heading) */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            {/* Single heading for all three carousels */}
            <h2 className="text-2xl font-bold text-[#001737] mb-6">Explore All Destinations</h2>
            
            {/* First Third Carousel */}
            <DestinationCarousel
              items={firstThirdDestinations}
              title={null} // No title for individual carousels
              isFeatured={false}
              isLoading={destinationsLoading}
            />
            
            {/* Second Third Carousel */}
            <DestinationCarousel
              items={secondThirdDestinations}
              title={null} // No title for individual carousels
              isFeatured={false}
              isLoading={destinationsLoading}
            />
            
            {/* Third Third Carousel */}
            <DestinationCarousel
              items={thirdThirdDestinations}
              title={null} // No title for individual carousels
              isFeatured={false}
              isLoading={destinationsLoading}
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
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-1/2 w-32 md:w-40 h-32 md:h-40 bg-[#f0f4ff] rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />

          <h2 className="text-2xl sm:text-3xl font-bold text-[#001737] mb-3 sm:mb-4">Ready to Begin Your Journey?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link
                href="https://wa.me/917982841532"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-[#001737] px-6 sm:px-8 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#001737]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 w-full sm:w-auto"
              >
                <span>Plan Trip</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}