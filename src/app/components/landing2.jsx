'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const desktopVideos = [
  '/video1.mp4',
  '/video2.mp4',
  '/video3.mp4',
  '/video4.mp4',
];

const mobileVideos = [
  '/mobile1.mp4',
  '/mobile2.mp4',
  '/mobile3.mp4',
  '/mobile4.mp4',
];

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Common breakpoint for mobile
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Get the current video sources based on device type
  const backgroundVideos = isMobile ? mobileVideos : desktopVideos;

  // Preload videos for smoother transitions
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, backgroundVideos.length);
  }, [backgroundVideos]);

  useEffect(() => {
    // Auto-change video every 8 seconds
    intervalRef.current = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % backgroundVideos.length);
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [backgroundVideos.length]);

  // Handle video change
  const handleVideoChange = (index) => {
    setCurrentVideo(index);
    // Reset interval when manually changing video
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % backgroundVideos.length);
      }, 8000);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - next video
      setCurrentVideo((prev) => (prev + 1) % backgroundVideos.length);
    }
    if (isRightSwipe) {
      // Swipe right - previous video
      setCurrentVideo((prev) => (prev - 1 + backgroundVideos.length) % backgroundVideos.length);
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background videos */}
      <div className="absolute inset-0">
        {backgroundVideos.map((video, index) => (
          <video
            key={video}
            ref={(el) => (videoRefs.current[index] = el)}
            src={video}
            autoPlay
            muted
            loop
            playsInline // Important for iOS Safari
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
            style={{
              opacity: currentVideo === index ? 1 : 0,
            }}
            preload="metadata" // Only load metadata initially for performance
          />
        ))}
      </div>

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Mobile swipe indicator */}

      {/* Video navigation dots */}
      <div className="absolute bottom-20 sm:bottom-32 left-1/2 flex -translate-x-1/2 space-x-3 z-20">
        {backgroundVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => handleVideoChange(index)}
            className={`h-2 w-8 sm:h-3 sm:w-3 sm:rounded-full rounded-full transition-all duration-300 ${
              currentVideo === index 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress bar for current video */}
      <div className="absolute bottom-16 sm:bottom-28 left-1/2 -translate-x-1/2 w-48 sm:w-64 z-20">
        <div className="h-0.5 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            key={currentVideo}
            transition={{
              duration: 8,
              ease: 'linear',
            }}
          />
        </div>
      </div>

      {/* Scroll down button */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white group cursor-pointer"
        >
          <span className="mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-center">
            Plan Your Journey Below
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown 
              size={20} 
              className="sm:w-6 sm:h-6 group-hover:opacity-75 transition-opacity" 
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile-specific overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 md:hidden" />
    </div>
  );
}