// import Link from "next/link"
// import Image from "next/image"

// const destinations = [
//   {
//     id: "Seychelles",
//     name: "Seychelles",
//     tagline: "Serene Shores",
//     image: "/sey.jpg",
//     size: "large",
//   },
//   {
//     id: "Dubai",
//     name: "Dubai",
//     tagline: "Desert Lux",
//     image: "/dub.jpg",
//     size: "medium",
//   },
//   {
//     id: "Andaman & Nicobar Islands",
//     name: "Andaman & Nicobar Islands",
//     tagline: "Island Reverie",
//     image: "/island.jpg",
//     size: "medium",
//   },
//   {
//     id: "Andaman & Nicobar Islands",
//     name: "Andaman & Nicobar Islands",
//     tagline: "Island Reverie",
//     image: "/island.jpg",
//     size: "medium",
//   },
// ]

// export default function DestinationsPage() {
//   return (
//     <div className="mx-auto max-w-7xl w-screen px-4 py-16 md:px-8 overflow-hidden">
//       {/* Header Section */}
//       <div className="mb-12">
//         <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white">TRAVELER'S FAVOURITE</p>
//         <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
//           {/* Explore All Popular
//           <br />
//           Locations */}
//           Your Journey, Your Way
//         </h1>
//         <p className="max-w-2xl text-lg text-white">
//           Plan, book, and embark on your dream adventure with our expert guidance and tailored experiences.
//         </p>
//       </div>

//       {/* Bento Grid */}
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//         <Link
//           href="#"
//           className="group relative row-span-2 overflow-hidden rounded-3xl md:col-span-1"
//         >
//           <div className="relative h-[500px] w-full md:h-[700px]">
//             <Image
//               src={destinations[0].image || "/placeholder.svg"}
//               alt={destinations[0].name}
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-102"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//             <div className="absolute bottom-0 left-0 p-6 md:p-8">
//               <h2 className="mb-2 text-5xl font-bold text-white md:text-6xl">{destinations[0].name}</h2>
//               <p className="text-lg text-white/90">{destinations[0].tagline}</p>
//             </div>
//           </div>
//         </Link>

//         <div className="flex flex-col gap-6">
//           <Link href="#" className="group relative overflow-hidden rounded-3xl">
//             <div className="relative h-[240px] w-full md:h-[340px]">
//               <Image
//                 src={destinations[1].image || "/placeholder.svg"}
//                 alt={destinations[1].name}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//               <div className="absolute bottom-0 left-0 p-6 md:p-8">
//                 <h2 className="mb-2 text-4xl font-bold text-white md:text-5xl">{destinations[1].name}</h2>
//                 <p className="text-lg text-white/90">{destinations[1].tagline}</p>
//               </div>
//             </div>
//           </Link>

//           <Link href="#" className="group relative overflow-hidden rounded-3xl">
//             <div className="relative h-[240px] w-full md:h-[340px]">
//               <Image
//                 src={destinations[2].image || "/placeholder.svg"}
//                 alt={destinations[2].name}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//               <div className="absolute bottom-0 left-0 p-6 md:p-8">
//                 <h2 className="mb-2 text-4xl font-bold text-white md:text-5xl">{destinations[2].name}</h2>
//                 <p className="text-lg text-white/90">{destinations[2].tagline}</p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, ChevronRight, ChevronLeft } from "lucide-react"

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

// Carousel component for mobile view
const DestinationCarousel = ({ items, title, isFeatured = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  
  const goToNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first item
    }
  };
  
  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - 1); // Loop to the last item
    }
  };
  
  // Handle touch events for swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsSwiping(true);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    setIsSwiping(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrev();
    }
    
    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };
  
  const cardHeight = isFeatured ? "h-[350px]" : "h-[280px]";
  
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
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${items.length * 100}%`
          }}
        >
          {items.map((dest, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <Link
                href="#"
                className={`group relative overflow-hidden rounded-2xl shadow-lg block ${cardHeight} w-full`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={dest.image || "/placeholder.svg"}
                    alt={dest.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001737]/60 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md z-10">
                    <ArrowUpRight className="h-4 w-4 text-[#001737]" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center mb-1">
                      <MapPin className="h-3 w-3 text-white/80 mr-1" />
                      <span className="text-white/90 text-xs">{dest.tagline}</span>
                    </div>
                    <h2 className={`mb-1 font-bold text-white ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
                      {dest.name}
                    </h2>
                    {isFeatured && (
                      <>
                        <div className="w-12 h-1 bg-white/80 mb-4" />
                        <button className="inline-flex items-center text-sm font-medium text-white">
                          Discover more <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrev}
        className="absolute top-1/2 left-1 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
        aria-label="Previous destination"
      >
        <ChevronLeft className="h-5 w-5 text-[#001737]" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute top-1/2 right-1 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
        aria-label="Next destination"
      >
        <ChevronRight className="h-5 w-5 text-[#001737]" />
      </button>
      
      {/* Pagination dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-[#001737]' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function DestinationsPage() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile view
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  // Featured destinations to highlight at the top
  const featuredDestinations = destinations.filter((dest) => dest.featured);
  // Regular destinations grid
  const regularDestinations = destinations.filter((dest) => !dest.featured);

  return (
    <div className="relative bg-[#f8f9fc] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-[#f0f4ff] opacity-50 blur-3xl -z-10" />
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-[#f0f7ff] opacity-60 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-medium uppercase tracking-wider text-[#001737]/70 border-b-2 border-[#001737]/20 pb-1">
              Curated Destinations
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-[#001737] md:text-5xl lg:text-6xl">Your Journey, Your Way</h1>
          <div className="w-20 h-1 bg-[#001737] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Explore handpicked escapes designed to inspire, immerse, and indulge. From tropical retreats to cultural
            havens, each destination promises an experience beyond the ordinary.
          </p>
        </motion.div>

        {/* Featured Destinations - Desktop View */}
        {!isMobile && featuredDestinations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-[#001737] mb-8">Featured Destinations</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredDestinations.slice(0, 2).map((dest, index) => (
                <Link
                  href="#"
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition duration-500"
                >
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={dest.image || "/placeholder.svg"}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001737]/60 via-transparent to-transparent" />

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md z-10 transform transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5 text-[#001737]" />
                    </div>

                    <div className="absolute bottom-0 left-0 p-8">
                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 text-white/80 mr-2" />
                        <span className="text-white/90 text-sm">{dest.tagline}</span>
                      </div>
                      <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">{dest.name}</h2>
                      <div className="w-12 h-1 bg-white/80 mb-4" />
                      <button className="inline-flex items-center text-sm font-medium text-white group-hover:text-white/90 transition-colors">
                        Discover more{" "}
                        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Featured Destinations Carousel - Mobile View */}
        {isMobile && featuredDestinations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regularDestinations.map((dest, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <Link
                    href="#"
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-500 block transform hover:-translate-y-2"
                  >
                    <div className="relative h-[280px] w-full">
                      <Image
                        src={dest.image || "/placeholder.svg"}
                        alt={dest.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001737]/50 to-transparent" />

                      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="h-4 w-4 text-[#001737]" />
                      </div>

                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="flex items-center mb-1">
                          <MapPin className="h-3 w-3 text-white/80 mr-1" />
                          <span className="text-white/90 text-xs">{dest.tagline}</span>
                        </div>
                        <h2 className="mb-1 text-xl font-bold text-white md:text-2xl">{dest.name}</h2>
                      </div>
                    </div>
                  </Link>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <DestinationCarousel 
              items={regularDestinations} 
              title="Explore All Destinations" 
            />
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-1/2 w-40 h-40 bg-[#f0f4ff] rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />

          <h2 className="text-3xl font-bold text-[#001737] mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let our travel experts craft the perfect itinerary for your next adventure. Whether you're seeking
            relaxation, adventure, or cultural immersion, we'll create an experience tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link
                href="#book"
                className="inline-flex h-14 items-center justify-center rounded-md bg-[#001737] px-8 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#001737]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 group"
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