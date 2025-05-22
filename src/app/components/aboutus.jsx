"use client"

import React from 'react'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'

export default function ServicesPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const services = [
    {
      title: 'Elite Access',
      description: 'Private transfers, handpicked stays, and upgrades.',
      image: 'hero9.jpg',
      icon: '✦',
    },
    {
      title: 'White-Glove Service',
      description: '1:1 planning and on-trip concierge support.',
      image: 'hero4.jpg',
      icon: '✧',
    },
    {
      title: 'Destination Expertise',
      description: 'From Seychelles to Santorini, Dubai to Ubud, we know luxury where it lives.',
      image: 'lux.jpg',
      icon: '✦',
    },
    {
      title: 'Tailor-Made Itineraries',
      description: 'No templates. Only custom-crafted escapes.',
      image: 'dest.jpg',
      icon: '✧',
    },
  ]

  const ServiceCard = ({ card, idx }) => (
    <motion.div
      key={idx}
      variants={item}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2"
    >
      <div className="relative">
        <div className="absolute z-10" />
        <img
          src={card.image || "/placeholder.svg"}
          alt={card.title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm p-2 shadow-md z-20 transform transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="h-5 w-5 text-[#001737]" />
        </div>
        <div className="absolute top-4 left-4 z-20">
          <span className="text-xl text-white/90">{card.icon}</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-[#001737] mb-3">{card.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
        <div className="mt-auto pt-4">
          {/* <button className="text-sm font-medium text-[#001737] flex items-center group-hover:text-[#001737]/70 transition-colors">
            Learn more <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </button> */}
        </div>
      </div>
    </motion.div>
  )

  return (
    <div 
      id='about' 
      className="relative overflow-hidden bg-[#f8f8f8] px-4 py-20 sm:px-6 lg:px-8 min-h-screen"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-[#f0f4ff] opacity-50 blur-3xl -z-10" />
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-[#f0f7ff] opacity-60 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-medium uppercase tracking-wider text-[#001737]/70 border-b-2 border-[#001737]/20 pb-1">
              EXCLUSIVELY YOURS
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-[#001737] md:text-5xl lg:text-6xl">
            What We Offer
          </h1>
          <div className="w-20 h-1 bg-[#001737] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Experience curated journeys with exclusive access, expert guidance, and bespoke itineraries, designed to make every trip seamless and unforgettable.
          </p>
        </motion.div>

        {/* Mobile Carousel View */}
        <div className="sm:hidden">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((card, idx) => (
                <CarouselItem key={idx} className="pl-2 md:pl-4 basis-4/5">
                  <ServiceCard card={card} idx={idx} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Desktop Grid View */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((card, idx) => (
            <ServiceCard key={idx} card={card} idx={idx} />
          ))}
        </motion.div>

        {/* Additional Feature Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#f0f4ff] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#001737] mb-4">Personalized Travel Planning</h2>
              <p className="text-gray-600 mb-6">
                Our expert travel consultants work closely with you to understand your preferences, interests, and travel style. We then craft a bespoke itinerary that perfectly aligns with your vision.
              </p>
              <ul className="space-y-3">
                {['Dedicated travel consultant', 'Pre-trip planning sessions', '24/7 on-trip support', 'Post-trip follow-up'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-[#f0f4ff] flex items-center justify-center mr-3">
                    <span className="text-xs text-[#001737]">✓</span>
                  </span>
                  {item}
                </li>
                ))}
              </ul>
              <Link href="https://wa.me/917982841532">
              <button className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[#001737] px-6 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#001737]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 group cursor-pointer">
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>
              </Link>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/hero2.jpg" 
                alt="Luxury travel planning" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001737]/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
      <div id='explore'></div>
    </div>
  )
}