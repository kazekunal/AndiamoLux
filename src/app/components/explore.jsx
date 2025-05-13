import Link from "next/link"
import Image from "next/image"

const destinations = [
  {
    id: "Seychelles",
    name: "Seychelles",
    tagline: "Serene Shores",
    image: "/sey.jpg",
    size: "large",
  },
  {
    id: "Dubai",
    name: "Dubai",
    tagline: "Desert Lux",
    image: "/dub.jpg",
    size: "medium",
  },
  {
    id: "Andaman & Nicobar Islands",
    name: "Andaman & Nicobar Islands",
    tagline: "Island Reverie",
    image: "/island.jpg",
    size: "medium",
  },
]

export default function DestinationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      {/* Header Section */}
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white">TRAVELER'S FAVOURITE</p>
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {/* Explore All Popular
          <br />
          Locations */}
          Your Journey, Your Way
        </h1>
        <p className="max-w-2xl text-lg text-white">
          Plan, book, and embark on your dream adventure with our expert guidance and tailored experiences.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Link
          href="#"
          className="group relative row-span-2 overflow-hidden rounded-3xl md:col-span-1"
        >
          <div className="relative h-[500px] w-full md:h-[700px]">
            <Image
              src={destinations[0].image || "/placeholder.svg"}
              alt={destinations[0].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-102"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <h2 className="mb-2 text-5xl font-bold text-white md:text-6xl">{destinations[0].name}</h2>
              <p className="text-lg text-white/90">{destinations[0].tagline}</p>
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-6">
          <Link href="#" className="group relative overflow-hidden rounded-3xl">
            <div className="relative h-[240px] w-full md:h-[340px]">
              <Image
                src={destinations[1].image || "/placeholder.svg"}
                alt={destinations[1].name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h2 className="mb-2 text-4xl font-bold text-white md:text-5xl">{destinations[1].name}</h2>
                <p className="text-lg text-white/90">{destinations[1].tagline}</p>
              </div>
            </div>
          </Link>

          <Link href="#" className="group relative overflow-hidden rounded-3xl">
            <div className="relative h-[240px] w-full md:h-[340px]">
              <Image
                src={destinations[2].image || "/placeholder.svg"}
                alt={destinations[2].name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h2 className="mb-2 text-4xl font-bold text-white md:text-5xl">{destinations[2].name}</h2>
                <p className="text-lg text-white/90">{destinations[2].tagline}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
