'use client';
import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Pause } from 'lucide-react';

// Single array of videos - no separate mobile videos needed
const videos = [
  '/video1.mp4',
  // '/video2.mp4',
  // '/video3.mp4',
  // '/video4.mp4',
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
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [audioLoadError, setAudioLoadError] = useState(false);
  
  const videoRefs = useRef([]);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);
  const observerRef = useRef(null);

  // Simplified audio setup
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set basic audio properties
    audio.volume = 0.3;
    audio.loop = true;
    audio.preload = 'auto'; // Changed from 'metadata' to 'auto'

    // Handle successful audio loading
    const handleAudioReady = () => {
      console.log('Audio is ready to play');
      setIsAudioReady(true);
      setAudioLoadError(false);
    };

    // Handle audio loading errors
    const handleAudioError = (e) => {
      console.error('Audio loading failed:', e);
      setAudioLoadError(true);
      setIsAudioReady(false);
    };

    // Add event listeners with multiple events for better compatibility
    audio.addEventListener('canplay', handleAudioReady);
    audio.addEventListener('canplaythrough', handleAudioReady);
    audio.addEventListener('loadeddata', handleAudioReady);
    audio.addEventListener('error', handleAudioError);

    // Try to load the audio immediately
    audio.load();

    // Cleanup
    return () => {
      audio.removeEventListener('canplay', handleAudioReady);
      audio.removeEventListener('canplaythrough', handleAudioReady);
      audio.removeEventListener('loadeddata', handleAudioReady);
      audio.removeEventListener('error', handleAudioError);
    };
  }, []);

  // Handle audio visibility changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isAudioReady) return;

    if (!isVisible && isPlaying) {
      audio.pause();
    } else if (isVisible && isPlaying) {
      audio.play().catch(e => console.log('Audio play prevented:', e));
    }
  }, [isVisible, isPlaying, isAudioReady]);

  // Intersection observer to pause videos when not visible
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
        
        if (!entry.isIntersecting) {
          videoRefs.current.forEach(videoRef => {
            if (videoRef) videoRef.pause();
          });
        } else {
          if (videoRefs.current[currentVideo]) {
            videoRefs.current[currentVideo].play().catch(e => {
              console.log('Autoplay prevented:', e);
            });
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
    videoRefs.current = videoRefs.current.slice(0, videos.length);
    setVideosLoaded({});
    
    if (videoRefs.current[0]) {
      videoRefs.current[0].load();
    }
    
    const nextIndex = (currentVideo + 1) % videos.length;
    if (videoRefs.current[nextIndex]) {
      videoRefs.current[nextIndex].load();
    }
  }, [currentVideo]);

  // Video rotation interval
  useEffect(() => {
    if (!isVisible) return;
    
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
    
    if (index === currentVideo && videoRefs.current[index]) {
      videoRefs.current[index].play().catch(e => {
        console.log('Autoplay prevented:', e);
      });
      videoRefs.current[index].playbackRate = 1.25;
    }
  }, [currentVideo]);

  // Simplified play/pause toggle
  const togglePlayPause = useCallback(async () => {
    const audio = audioRef.current;
    
    if (!audio) {
      console.error('Audio element not found');
      return;
    }

    // If audio isn't ready yet, try to load it first
    if (!isAudioReady && !audioLoadError) {
      console.log('Audio not ready, attempting to load...');
      audio.load();
      return;
    }

    if (audioLoadError) {
      console.error('Cannot play audio due to loading error');
      return;
    }

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        console.log('Audio paused');
      } else {
        await audio.play();
        setIsPlaying(true);
        console.log('Audio playing');
      }
    } catch (error) {
      console.error('Audio playback error:', error);
      // If play fails, reset audio ready state
      setIsAudioReady(false);
      audio.load(); // Try to reload
    }
  }, [isPlaying, isAudioReady, audioLoadError]);

  // Handle video change with memoized callback
  const handleVideoChange = useCallback((index) => {
    if (index === currentVideo) return;
    
    setCurrentVideo(index);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentVideo(prev => (prev + 1) % videos.length);
      }, VIDEO_DURATION);
    }
    
    if (videoRefs.current[index]) {
      videoRefs.current[index].load();
      videoRefs.current[index].play().catch(e => {
        console.log('Play prevented:', e);
      });
      videoRefs.current[index].playbackRate = 1.25;
    }
    
    const nextIndex = (index + 1) % videos.length;
    if (videoRefs.current[nextIndex] && !videosLoaded[nextIndex]) {
      videoRefs.current[nextIndex].load();
    }
  }, [currentVideo, videos.length, videosLoaded]);

  // Touch handlers for mobile swipe
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
      handleVideoChange((currentVideo + 1) % videos.length);
    }
    if (isRightSwipe) {
      handleVideoChange((currentVideo - 1 + videos.length) % videos.length);
    }
  }, [touchStart, touchEnd, currentVideo, videos.length, handleVideoChange]);

  const scrollToNext = useCallback(() => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Determine button state and text
  const getButtonState = () => {
    if (audioLoadError) {
      return { text: 'Audio Unavailable', disabled: true };
    }
    if (!isAudioReady) {
      return { text: 'Loading Audio...', disabled: true };
    }
    return { 
      text: isPlaying ? 'Mute Music' : 'Play Music', 
      disabled: false 
    };
  };

  const buttonState = getButtonState();

  return (
    <div 
      id="hero-section"
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Simplified Background Audio - only one source */}
      <audio
        ref={audioRef}
        preload="auto"
        crossOrigin="anonymous"
      >
        <source src="/bg.mp3" type="audio/mpeg" />
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

      {/* Lowered text overlay and music button - positioned in bottom section */}
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 w-full">
        <div className="text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-tight mb-6"
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
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={togglePlayPause}
              disabled={buttonState.disabled}
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
                {buttonState.text}
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll down button - now positioned at the very bottom */}
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