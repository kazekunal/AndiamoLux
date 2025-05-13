import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: "Elite Access",
    description: "Private transfers, handpicked stays, and upgrades.",
    tags: ["luxurious seating", "privacy"]
  },
  {
    title: "White-Glove Service",
    description: "1:1 planning and on-trip concierge support.",
    tags: ["Dining", "Activities"]
  },
  {
    title: "Destination Expertise",
    description: "From Seychelles to Santorini, Dubai to Ubud, we know luxury where it lives.",
    tags: ["Wildlife safari", "Museum visit"]
  },
  {
    title: "Tailor-Made Itineraries",
    description: "No templates. Only custom-crafted escapes.",
    tags: ["Stunning views", "Top-tier amenities"]
  }
]

export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <h2 className="mb-12 text-4xl font-medium text-[#333333] md:text-5xl">What We Offer</h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col justify-between rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-medium text-[#333333] md:text-2xl">{service.title}</h3>
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e5e5e5] transition-all group-hover:border-[#cccccc]">
                  <ArrowRight className="h-5 w-5 text-[#333333]" />
                </button>
              </div>
              
              <p className="mb-8 text-base text-[#555555] md:text-lg">
                {service.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="rounded-full border border-[#e5e5e5] px-4 py-2 text-sm text-[#555555]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
