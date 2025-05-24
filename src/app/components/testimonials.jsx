import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    trip: "European Adventure",
    quote: "We traveled as a family to Andaman with Andiamo Lux, and it was seamless. They arranged our flights, comfortable stays, and fun island tours. Kids loved the beach activities, and we loved the stress-free planning.",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=PS"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bengaluru, India",
    trip: "Luxury Maldives Getaway",
    quote: "My solo trip to Georgia was made special by Andiamo Lux. They took care of my visa, airport transfers, and arranged local guides for sightseeing. It felt safe and personal throughout.",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=RK"
  },
  {
    id: 3,
    name: "Ananya Singh",
    location: "New Delhi, India",
    trip: "Cultural Tour of Japan",
    quote: "For our honeymoon in Maldives, Andiamo Lux organized a private villa, sunset cruises, and spa treatments. Their attention to detail made our trip truly romantic and unforgettable.",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=AS"
  }
];

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative bg-white p-8 rounded shadow-lg border border-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-6">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <p className="text-lg italic text-center text-gray-700 mb-6">
          "{testimonial.quote}"
        </p>
        
        <div className="text-center">
          <h4 className="font-semibold text-navy-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
          <p className="text-sm font-medium text-blue-900 mt-1">{testimonial.trip}</p>
        </div>
      </div>
    </div>
  );
};

// Testimonials Carousel Component
const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto-play functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="pt-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-2">Client Experiences</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Carousel Content */}
          <div className="overflow-hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} key={testimonials[currentIndex].id} />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-navy-900 p-3 rounded-full shadow-md transition-colors duration-150 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-navy-900 p-3 rounded-full shadow-md transition-colors duration-150 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-150 ${
                currentIndex === index ? 'bg-blue-900' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;