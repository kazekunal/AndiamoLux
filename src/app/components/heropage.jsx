import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Rounded container with borders */}
      <div className="relative mx-auto h-screen w-screen overflow-hidden ">
        {/* Hero Image */}
        <Image
          src="/hero.jpg"
          alt="Travel experience"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        {/* Navbar */}
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          {/* New badge - moved to the left side */}
          {/* <div className="absolute left-8 top-32 flex items-center">
            <div className="bg-white text-black rounded-full px-4 py-1 mr-4 text-sm font-medium">
              New
            </div>
            <div className="flex items-center text-white">
              <span className="mr-2">Choose your destination</span>
              <ArrowRight size={16} />
            </div>
          </div> */}
          
          {/* Bottom section with headline, subheading and CTAs */}
          <div className="mb-16 max-w-3xl">
            <h1 className="mb-6 text-6xl font-bold leading-tight text-white md:text-6xl">
              We design each trip based on your travel style,<br/> not off-the-shelf packages
              {/* Every Journey, Personally Designed for Your Travel Style */}
              {/* Your Style. Your Trip.<br/> Custom-Crafted, Every Time. */}
            </h1>
            <p className="mb-12 text-base text-white/90 md:text-lg">
              At Andiamo Lux, we believe true luxury lies in the details. We bring insider access, curated partnerships, and personal attention to every itinerary. From overwater villas in the Maldives to private vineyard dinners in Georgia, our experiences go beyond the ordinary, they're designed for those who expect more.
            </p>
            
            {/* Call to action buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#" 
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
              >
                Plan Your Journey
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link 
                href="#" 
                className="group flex items-center gap-2 rounded-full border border-white bg-transparent px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Explore Destinations
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// this is a different view with a lot of images scrolling through the main page - 

// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// const backgroundImages = [
//   '/hero1.jpg',
//   '/hero2.jpg',
//   '/hero3.jpg',
//   '/hero4.jpg',
//   '/hero5.jpg',
// ];

// export default function LandingPage() {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full">
//       <div className="relative mx-auto h-screen w-screen overflow-hidden">
//         {/* Background slideshow */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={backgroundImages[currentImage]}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2 }}
//             className="absolute inset-0 z-0"
//           >
//             <Image
//               src={backgroundImages[currentImage]}
//               alt="Travel experience"
//               fill
//               className="object-cover"
//               priority
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />

//         {/* Content overlay */}
//         <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16">
//           <div className="mb-16 max-w-3xl">
//             <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
//               Your Style. Your Trip.<br />Custom-Crafted, Every Time.
//             </h1>
//             <p className="mb-12 text-base text-white/90 md:text-lg">
//               At Andiamo Lux, we believe true luxury lies in the details. We bring insider access, curated partnerships, and personal attention to every itinerary. From overwater villas in the Maldives to private vineyard dinners in Georgia, our experiences go beyond the ordinary — they're designed for those who expect more.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link
//                 href="#"
//                 className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
//               >
//                 Plan Your Journey
//                 <ArrowRight size={18} className="transition group-hover:translate-x-1" />
//               </Link>
//               <Link
//                 href="#"
//                 className="group flex items-center gap-2 rounded-full border border-white bg-transparent px-6 py-3 font-medium text-white transition hover:bg-white/10"
//               >
//                 Explore Destinations
//                 <ArrowRight size={18} className="transition group-hover:translate-x-1" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
