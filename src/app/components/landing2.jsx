'use client';
import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Pause } from 'lucide-react';

// Single array of videos - no separate mobile videos needed
const videos = [
  '/video1.mp4',
  '/video2.mp4',
  '/video3.mp4',
  '/video4.mp4',
];

// Video transition timing constants
const VIDEO_DURATION = 8000; // 8 seconds
const MIN_SWIPE_DISTANCE = 50;

// Text content for each video
const videoTexts = [
  {
    title: "Andiamo Lux - Let's Go Luxury"
  },
  {
    title: "Luxury Travel, Curated by Passionate Experts"
  },
  {
    title: "Redefining Modern Travel - One Experience at a Time"
  },
  {
    title: "Seamless, Stylish, Andiamo Lux"
  }
];

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [audioError, setAudioError] = useState(false);
  
  const videoRefs = useRef([]);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);
  const observerRef = useRef(null);

  // Audio setup and management
  useEffect(() => {
    // Initialize audio
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
      audioRef.current.loop = true;
      // Audio starts paused - user must click play
    }
  }, []);

  // Handle audio visibility changes
  useEffect(() => {
    if (audioRef.current) {
      if (!isVisible && isPlaying) {
        // Pause when not visible
        audioRef.current.pause();
      } else if (isVisible && isPlaying) {
        // Resume when visible again
        audioRef.current.play().catch(e => console.log('Audio play prevented:', e));
      }
    }
  }, [isVisible, isPlaying]);

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
    videoRefs.current = videoRefs.current.slice(0, videos.length);
    
    // Reset loaded state when videos change
    setVideosLoaded({});
    
    // Preload only the first video immediately and next video
    if (videoRefs.current[0]) {
      videoRefs.current[0].load();
    }
    
    // Preload the next video for smoother transition
    const nextIndex = (currentVideo + 1) % videos.length;
    if (videoRefs.current[nextIndex]) {
      videoRefs.current[nextIndex].load();
    }
  }, [currentVideo]);

  // Video rotation interval
  useEffect(() => {
    if (!isVisible) return;
    
    // Auto-change video every 8 seconds
    intervalRef.current = setInterval(() => {
      setCurrentVideo(prev => (prev + 1) % videos.length);
    }, VIDEO_DURATION);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [videos.length, isVisible]);

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

  // Handle audio load
  const handleAudioLoad = useCallback(() => {
    console.log('Audio loaded successfully');
    setIsAudioLoaded(true);
    setAudioError(false);
  }, []);

  // Handle audio error
  const handleAudioError = useCallback((e) => {
    console.error('Audio loading error:', e);
    setAudioError(true);
    setIsAudioLoaded(false);
  }, []);

  // Handle play/pause toggle
  const togglePlayPause = useCallback(async () => {
    if (!audioRef.current) {
      console.error('Audio ref not available');
      return;
    }
    
    if (!isAudioLoaded) {
      console.error('Audio not loaded yet');
      return;
    }
    
    if (isPlaying) {
      // Pause
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Play
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Audio play prevented:', error);
      }
    }
  }, [isPlaying, isAudioLoaded]);

  // Handle video change with memoized callback
  const handleVideoChange = useCallback((index) => {
    if (index === currentVideo) return;
    
    setCurrentVideo(index);
    
    // Reset interval when manually changing video
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentVideo(prev => (prev + 1) % videos.length);
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
    const nextIndex = (index + 1) % videos.length;
    if (videoRefs.current[nextIndex] && !videosLoaded[nextIndex]) {
      videoRefs.current[nextIndex].load();
    }
  }, [currentVideo, videos.length, videosLoaded]);

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
      handleVideoChange((currentVideo + 1) % videos.length);
    }
    if (isRightSwipe) {
      // Swipe right - previous video
      handleVideoChange((currentVideo - 1 + videos.length) % videos.length);
    }
  }, [touchStart, touchEnd, currentVideo, videos.length, handleVideoChange]);

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
      {/* Background Audio */}
      <audio
        ref={audioRef}
        preload="metadata"
        onLoadedData={handleAudioLoad}
        onCanPlayThrough={handleAudioLoad}
        onError={handleAudioError}
        onLoadStart={() => console.log('Audio loading started')}
        onLoadedMetadata={() => console.log('Audio metadata loaded')}
      >
        <source src="/bg.mp3" type="audio/mpeg" />
        <source src="/bg.ogg" type="audio/ogg" />
        <source src="/bg.wav" type="audio/wav"/>
        {/* <source src="/background-music.wav" type="audio/wav" /> */}
        Your browser does not support the audio element.
      </audio>

      {/* Background videos with optimized rendering */}
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <div 
            key={video}
            className="absolute inset-0 h-full w-full transition-opacity duration-1000"
            style={{
              opacity: currentVideo === index ? 1 : 0,
              // Hide non-active videos for better performance
              visibility: currentVideo === index || 
                         index === (currentVideo + 1) % videos.length || 
                         index === (currentVideo - 1 + videos.length) % videos.length 
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
              className="h-full w-full object-cover md:object-cover"
              preload="none"
              onLoadedData={() => handleVideoLoad(index)}
              poster={`/poster${index + 1}.png`}
              disablePictureInPicture
            />
          </div>
        ))}
      </div>

      {/* Logo - centered above text for all devices */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" style={{ marginTop: '-120px' }}>
        <motion.img 
          src="/logo_3.png" 
          alt="Company Logo" 
          className="h-20 w-auto sm:h-20 md:h-20 filter drop-shadow-lg"
          key={`logo-${currentVideo}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Center text overlay - changes with each video */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.h1 
            className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight"
            key={`text-${currentVideo}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {videoTexts[currentVideo].title}
          </motion.h1>
          
          {/* Music Control Button */}
          <motion.div 
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={togglePlayPause}
              disabled={!isAudioLoaded}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
            >
              <motion.div
                key={isPlaying ? 'playing' : 'paused'}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {isPlaying ? (
                  <Pause size={16} className="text-white" />
                ) : (
                  <Play size={16} className="text-white ml-0.5" />
                )}
              </motion.div>
              <span className="text-white text-sm font-medium">
                {audioError 
                  ? 'Audio Error' 
                  : !isAudioLoaded 
                    ? 'Loading...' 
                    : isPlaying 
                      ? 'Mute' 
                      : 'Unmute'
                }
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Video navigation dots */}
      <div className="absolute bottom-20 sm:bottom-32 left-1/2 flex -translate-x-1/2 space-x-3 z-20">
        {videos.map((_, index) => (
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
              duration: VIDEO_DURATION / 1000,
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

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />
    </div>
  );
}