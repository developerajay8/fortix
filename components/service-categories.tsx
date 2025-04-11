"use client"

import { FileText, Gavel, FileSignature, Building, Users, Scale } from "lucide-react"

const services = [
  {
    id: 1,
    title: "E-Stamp Services",
    description: "Generate and validate e-stamps for legal documents",
    icon: FileText,
    color: "bg-blue-50 text-blue-600",
    bgImage: "/2.jpg",
  },
  {
    id: 2,
    title: "Legal Consultation",
    description: "One-on-one consultation with experienced lawyers",
    icon: Gavel,
    color: "bg-purple-50 text-purple-600",
    bgImage: "/2.jpg",
  },
  {
    id: 3,
    title: "Contract Signing",
    description: "Secure digital contract signing with legal validity",
    icon: FileSignature,
    color: "bg-green-50 text-green-600",
    bgImage: "/2.jpg",
  },
  {
    id: 4,
    title: "Corporate Law",
    description: "Legal services for businesses and corporations",
    icon: Building,
    color: "bg-orange-50 text-orange-600",
    bgImage: "/2.jpg",
  },
  {
    id: 5,
    title: "Family Law",
    description: "Legal assistance for family matters and disputes",
    icon: Users,
    color: "bg-pink-50 text-pink-600",
    bgImage: "/2.jpg",
  },
  {
    id: 6,
    title: "Property Law",
    description: "Legal services for real estate and property matters",
    icon: Scale,
    color: "bg-teal-50 text-teal-600",
    bgImage: "/2.jpg",
  },
]

export default function ServiceCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className="flip-card h-[250px] w-full perspective-1000 cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="relative w-full h-full duration-500">
            <div className="absolute w-full h-full shadow-sm duration-500 bg-white hover:bg-[#1e3a8a] rounded-xl border-2 border-gray-100 p-6 group">
              <div
                className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-[#1e3a8a] transition-colors`}
              >
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">
                {service.description}
              </p>

              <button className="text-blue-600 font-medium text-sm flex items-center group-hover:text-white transition-colors">
                Learn more
                <svg
                  className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform group-hover:stroke-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
