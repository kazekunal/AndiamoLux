// import Link from "next/link"
// import Image from "next/image"

// const destinations = [
//   {
//     id: "Seychelles",
//     name: "Seychelles",
//     tagline: "Serene Shores",
//     image: "/sey.jpg",
//     size: "large",
//   },
//   {
//     id: "Dubai",
//     name: "Dubai",
//     tagline: "Desert Lux",
//     image: "/dub.jpg",
//     size: "medium",
//   },
//   {
//     id: "Andaman & Nicobar Islands",
//     name: "Andaman & Nicobar Islands",
//     tagline: "Island Reverie",
//     image: "/island.jpg",
//     size: "medium",
//   },
//   {
//     id: "Andaman & Nicobar Islands",
//     name: "Andaman & Nicobar Islands",
//     tagline: "Island Reverie",
//     image: "/island.jpg",
//     size: "medium",
//   },
// ]

// export default function DestinationsPage() {
//   return (
//     <div className="mx-auto max-w-7xl w-screen px-4 py-16 md:px-8 overflow-hidden">
//       {/* Header Section */}
//       <div className="mb-12">
//         <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white">TRAVELER'S FAVOURITE</p>
//         <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
//           {/* Explore All Popular
//           <br />
//           Locations */}
//           Your Journey, Your Way
//         </h1>
//         <p className="max-w-2xl text-lg text-white">
//           Plan, book, and embark on your dream adventure with our expert guidance and tailored experiences.
//         </p>
//       </div>

//       {/* Bento Grid */}
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//         <Link
//           href="#"
//           className="group relative row-span-2 overflow-hidden rounded-3xl md:col-span-1"
//         >
//           <div className="relative h-[500px] w-full md:h-[700px]">
//             <Image
//               src={destinations[0].image || "/placeholder.svg"}
//               alt={destinations[0].name}
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-102"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//             <div className="absolute bottom-0 left-0 p-6 md:p-8">
//               <h2 className="mb-2 text-5xl font-bold text-white md:text-6xl">{destinations[0].name}</h2>
//               <p className="text-lg text-white/90">{destinations[0].tagline}</p>
//             </div>
//           </div>
//         </Link>

//         <div className="flex flex-col gap-6">
//           <Link href="#" className="group relative overflow-hidden rounded-3xl">
//             <div className="relative h-[240px] w-full md:h-[340px]">
//               <Image
//                 src={destinations[1].image || "/placeholder.svg"}
//                 alt={destinations[1].name}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//               <div className="absolute bottom-0 left-0 p-6 md:p-8">
//                 <h2 className="mb-2 text-4xl font-bold text-white md:text-5xl">{destinations[1].name}</h2>
//                 <p className="text-lg text-white/90">{destinations[1].tagline}</p>
//               </div>
//             </div>
//           </Link>

//           <Link href="#" className="group relative overflow-hidden rounded-3xl">
//             <div className="relative h-[240px] w-full md:h-[340px]">
//               <Image
//                 src={destinations[2].image || "/placeholder.svg"}
//                 alt={destinations[2].name}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//               <div className="absolute bottom-0 left-0 p-6 md:p-8">
//                 <h2 className="mb-2 text-4xl font-bold text-white md:text-5xl">{destinations[2].name}</h2>
//                 <p className="text-lg text-white/90">{destinations[2].tagline}</p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

import Link from "next/link";
import Image from "next/image";

const destinations = [
  {
    id: "Seychelles",
    name: "Seychelles",
    tagline: "Serene Shores",
    image: "/sey.jpg",
  },
  {
    id: "Dubai",
    name: "Dubai",
    tagline: "Desert Lux",
    image: "/dub.jpg",
  },
  {
    id: "Andaman & Nicobar Islands",
    name: "Andaman & Nicobar Islands",
    tagline: "Island Reverie",
    image: "/island.jpg",
  },
  {
    id: "Vietnam",
    name: "Vietnam",
    tagline: "Island Escape",
    image: "/vietnam.jpg",
  },
  {
    id: "Georgia",
    name: "Georgia",
    tagline: "Caucasian Retreat",
    image: "/georgia.jpg",
  },
  {
    id: "Bali",
    name: "Bali",
    tagline: "Eternal Bali",
    image: "/hero4.jpg",
  },
  {
    id: "Thailand",
    name: "Thailand",
    tagline: "Siam Serenity",
    image: "/thailand.jpg",
  },
  {
    id: "Maldives",
    name: "Maldives",
    tagline: "Ocean’s Embrace",
    image: "/maldives.jpg",
  },
  {
    id: "Bhutan",
    name: "Bhutan",
    tagline: "Himalayan Serenity",
    image: "/bhutan.jpg",
  },
  {
    id: "Nepal",
    name: "Nepal",
    tagline: "Roof of the World",
    image: "/nepal.jpg",
  },
  {
    id: "Sri Lanka",
    name: "Sri Lanka",
    tagline: "Pearl of the Indian Ocean",
    image: "/srilanka.jpg",
  },
  {
    id: "Singapore",
    name: "Singapore",
    tagline: "Urban Oasis",
    image: "/singapore.jpg",
  },
];

export default function DestinationsPage() {
  return (
    <div className="mx-auto max-w-7xl w-screen px-4 py-16 md:px-8 overflow-hidden">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white">
          Curated Destinations
        </p>
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Your Journey, Your Way
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-white">
          Explore handpicked escapes designed to inspire, immerse, and indulge. From tropical retreats to cultural havens, each destination promises an experience beyond the ordinary.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest, index) => (
          <Link
            href="#"
            key={index}
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="relative h-[280px] w-full md:h-[360px]">
              <Image
                src={dest.image || "/placeholder.svg"}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" /> */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h2 className="mb-1 text-3xl font-bold text-white md:text-4xl">
                  {dest.name}
                </h2>
                <p className="text-white/90 text-sm md:text-base">{dest.tagline}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
