'use client';
import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Moved outside component to prevent recreation on each render
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

// Video transition timing constants
const VIDEO_DURATION = 8000; // 8 seconds
const MIN_SWIPE_DISTANCE = 50;

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);
  const observerRef = useRef(null);

  // Use memo to prevent recreating the array on each render
  const backgroundVideos = useMemo(() => 
    isMobile ? mobileVideos : desktopVideos
  , [isMobile]);

  // Resize observer for mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Use resize event listener as fallback for browsers without ResizeObserver
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', checkIsMobile);
      return () => window.removeEventListener('resize', checkIsMobile);
    }
    
    // Use ResizeObserver for better performance when available
    try {
      const resizeObserver = new ResizeObserver(() => {
        checkIsMobile();
      });
      
      resizeObserver.observe(document.documentElement);
      return () => resizeObserver.disconnect();
    } catch (error) {
      // Fallback if ResizeObserver throws an error
      console.error('ResizeObserver error:', error);
      window.addEventListener('resize', checkIsMobile);
      return () => window.removeEventListener('resize', checkIsMobile);
    }
  }, []);

  // Intersection observer to pause videos when not visible
  useEffect(() => {
    // Only create observer if IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') return;
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
        
        // Pause all videos when section is not visible
        if (!entry.isIntersecting) {
          videoRefs.current.forEach(videoRef => {
            if (videoRef) videoRef.pause();
          });
        } else {
          // Play only the current video when visible
          if (videoRefs.current[currentVideo]) {
            videoRefs.current[currentVideo].play().catch(e => {
              console.log('Autoplay prevented:', e);
            });
            // Set playback rate
            videoRefs.current[currentVideo].playbackRate = 1.25;
          }
        }
      });
    }, options);

    const heroSection = document.getElementById('hero-section');
    if (heroSection && observerRef.current) {
      observerRef.current.observe(heroSection);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentVideo]);

  // Handle video preloading and references
  useEffect(() => {
    // Reset video refs array to match current videos
    videoRefs.current = videoRefs.current.slice(0, backgroundVideos.length);
    
    // Reset loaded state when videos change
    setVideosLoaded({});
    
    // Preload only the first video immediately and next video
    if (videoRefs.current[0]) {
      videoRefs.current[0].load();
    }
    
    // Preload the next video for smoother transition
    const nextIndex = (currentVideo + 1) % backgroundVideos.length;
    if (videoRefs.current[nextIndex]) {
      videoRefs.current[nextIndex].load();
    }
  }, [backgroundVideos, currentVideo]);

  // Video rotation interval
  useEffect(() => {
    if (!isVisible) return;
    
    // Auto-change video every 8 seconds
    intervalRef.current = setInterval(() => {
      setCurrentVideo(prev => (prev + 1) % backgroundVideos.length);
    }, VIDEO_DURATION);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [backgroundVideos.length, isVisible]);

  // Handle video load handler
  const handleVideoLoad = useCallback((index) => {
    setVideosLoaded(prev => ({
      ...prev,
      [index]: true
    }));
    
    // Start playback for current video once loaded
    if (index === currentVideo && videoRefs.current[index]) {
      videoRefs.current[index].play().catch(e => {
        console.log('Autoplay prevented:', e);
      });
      
      // Set playback rate after play is called
      videoRefs.current[index].playbackRate = 1.25;
    }
  }, [currentVideo]);

  // Handle video change with memoized callback
  const handleVideoChange = useCallback((index) => {
    if (index === currentVideo) return;
    
    setCurrentVideo(index);
    
    // Reset interval when manually changing video
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentVideo(prev => (prev + 1) % backgroundVideos.length);
      }, VIDEO_DURATION);
    }
    
    // Ensure the new video is loaded and play it
    if (videoRefs.current[index]) {
      videoRefs.current[index].load();
      videoRefs.current[index].play().catch(e => {
        console.log('Play prevented:', e);
      });
      // Set playback rate
      videoRefs.current[index].playbackRate = 1.25;
    }
    
    // Preload the next video for smoother transition
    const nextIndex = (index + 1) % backgroundVideos.length;
    if (videoRefs.current[nextIndex] && !videosLoaded[nextIndex]) {
      videoRefs.current[nextIndex].load();
    }
  }, [currentVideo, backgroundVideos.length, videosLoaded]);

  // Touch handlers for mobile swipe with useCallback for performance
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;

    if (isLeftSwipe) {
      // Swipe left - next video
      handleVideoChange((currentVideo + 1) % backgroundVideos.length);
    }
    if (isRightSwipe) {
      // Swipe right - previous video
      handleVideoChange((currentVideo - 1 + backgroundVideos.length) % backgroundVideos.length);
    }
  }, [touchStart, touchEnd, currentVideo, backgroundVideos.length, handleVideoChange]);

  const scrollToNext = useCallback(() => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div 
      id="hero-section"
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background videos with optimized rendering */}
      <div className="absolute inset-0">
        {backgroundVideos.map((video, index) => (
          <div 
            key={video}
            className="absolute inset-0 h-full w-full transition-opacity duration-1000"
            style={{
              opacity: currentVideo === index ? 1 : 0,
              // Hide non-active videos for better performance
              visibility: currentVideo === index || 
                         index === (currentVideo + 1) % backgroundVideos.length || 
                         index === (currentVideo - 1 + backgroundVideos.length) % backgroundVideos.length 
                         ? 'visible' : 'hidden'
            }}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              autoPlay={index === currentVideo}
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              preload="none" // Let us control loading manually
              onLoadedData={() => handleVideoLoad(index)}
              // Better mobile performance with these attributes
              poster={`/poster${index + 1}.png`} // Add poster images for your videos
              disablePictureInPicture
              // Video speed 1.25x for slightly faster playback
            />
          </div>
        ))}
      </div>

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
            aria-label={`Switch to video ${index + 1}`}
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
              duration: VIDEO_DURATION / 1000, // Convert to seconds
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
          aria-label="Scroll to next section"
        >
          <span className="mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-center">
            Plan Your Journey Below
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              // Reduce animation work with reduced motion preference
              reducedMotion: "user"
            }}
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