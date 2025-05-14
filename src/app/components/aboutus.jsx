import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <div id='about' className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 md:pb-4 md:h-screen content-center
    ">
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white">
          EXCLUSIVELY YOURS
        </p>
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          What We Offer
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-white">
        Experience curated journeys with exclusive access, expert guidance, and bespoke itineraries — designed to make every trip seamless and unforgettable.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Elite Access',
            description: 'Private transfers, handpicked stays, and upgrades.',
            image: 'hero9.jpg',
          },
          {
            title: 'White-Glove Service',
            description: '1:1 planning and on-trip concierge support.',
            image: 'hero4.jpg',
          },
          {
            title: 'Destination Expertise',
            description: 'From Seychelles to Santorini, Dubai to Ubud, we know luxury where it lives.',
            image: 'lux.jpg',
          },
          {
            title: 'Tailor-Made Itineraries',
            description: 'No templates. Only custom-crafted escapes.',
            image: 'dest.jpg',
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 rounded-full bg-white p-1">
                <ArrowUpRight className="h-4 w-4 text-gray-700" />
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-black mb-2">{card.title}</h3>
              <p className="text-gray-700 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div id='explore'></div>
    </div>
  );
}
