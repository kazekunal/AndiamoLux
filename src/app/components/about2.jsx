"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Award, Users, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutUsSection() {
  return (
    <section id='about'  className="relative overflow-hidden bg-[#f8f8f8]">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#f0f4ff] opacity-50 blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#f0f7ff] opacity-60 blur-3xl -z-10" />

      <div className="container px-4 md:px-6 py-16 md:py-24 mx-auto">
        {/* Subtle heading above main content */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-sm font-medium tracking-wider text-[#001737]/70 uppercase border-b-2 border-[#001737]/20 pb-1">
              About Andiamo Lux
            </span>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column with image and stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 z-10" />
              <Image
                src="/about1.jpg"
                alt="Luxury tropical destination with boats"
                width={800}
                height={1600}
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Stats cards */}
            {/* <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-xl shadow-lg"
              >
                <Award className="h-8 w-8 text-[#001737]/80 mb-2" />
                <h3 className="text-3xl font-bold text-[#001737]">10+</h3>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-xl shadow-lg"
              >
                <Users className="h-8 w-8 text-[#001737]/80 mb-2" />
                <h3 className="text-3xl font-bold text-[#001737]">2000+</h3>
                <p className="text-sm text-gray-600">Happy Travelers</p>
              </motion.div>
            </div> */}
          </motion.div>

          {/* Right column with content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          > 
              <div className="flex flex-col gap-2">

              <h2 className="font-playfair text-2xl text-[#001737] font-bold tracking-tighter sm:text-4xl lg:text-5xl">
                We design each trip based on your travel style, not off-the-shelf packages.
              </h2>

              <div className="w-20 h-1 bg-[
              #001737]" />

              <div className="space-y-2 text-gray-600 text-lg">
                  <p className="font-playfair leading-relaxed">
                    At Andiamo Lux, we design travel experiences for those who seek more than just a holiday.
                  </p>
                  <p className="font-sans leading-relaxed">
                    Your pace, your tastes, your idea of indulgence. No templates. No off-the-shelf plans.
                  </p>
                  <p className="font-sans leading-relaxed">
                    We take care of the little things that make a big difference - your food preferences, curated activities, private transfers, even personal shopping arrangements, so you don't have to think twice.
                  </p>
                  <p className="font-sans leading-relaxed">
                    Think of us as your personal travel concierge, bringing the expertise of a boutique travel house to every journey you take.
                  </p>
                </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="https://wa.me/917982841532"
                  className="inline-flex h-14 items-center justify-center rounded-md bg-[#001737] px-8 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#001737]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 group"
                >
                  <span>Book your Journey</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="#explore"
                  className="inline-flex h-14 items-center justify-center rounded-md border border-[#001737]/20 bg-white px-8 text-sm font-medium text-[#001737] shadow-lg transition-colors hover:bg-[#f0f4ff] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 group"
                >
                  <span>Explore Destinations</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#f0f4ff] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />

          <div className="text-center max-w-3xl mx-auto">
            <div className="text-5xl text-[#001737]/20 font-serif">"</div>
            <p className="text-xl text-gray-700 italic mt-2">
              Our trip with Andiamo Lux exceeded all expectations. Every detail was meticulously planned, and we
              experienced destinations in ways we never could have on our own.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#f0f4ff] flex items-center justify-center">
                <span className="text-[#001737] font-medium">JD</span>
              </div>
              <div className="ml-3 text-left">
                <p className="font-medium text-[#001737]">James & Diana Thompson</p>
                <p className="text-sm text-gray-600">Maldives & Dubai, 2023</p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
