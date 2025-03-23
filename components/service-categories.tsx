// import { FileText, Gavel, FileSignature, Building, Users, Scale } from "lucide-react"

// const services = [
//   {
//     id: 1,
//     title: "E-Stamp Services",
//     description: "Generate and validate e-stamps for legal documents",
//     icon: FileText,
//     color: "bg-blue-50 text-blue-600",
//   },
//   {
//     id: 2,
//     title: "Legal Consultation",
//     description: "One-on-one consultation with experienced lawyers",
//     icon: Gavel,
//     color: "bg-purple-50 text-purple-600",
//   },
//   {
//     id: 3,
//     title: "Contract Signing",
//     description: "Secure digital contract signing with legal validity",
//     icon: FileSignature,
//     color: "bg-green-50 text-green-600",
//   },
//   {
//     id: 4,
//     title: "Corporate Law",
//     description: "Legal services for businesses and corporations",
//     icon: Building,
//     color: "bg-orange-50 text-orange-600",
//   },
//   {
//     id: 5,
//     title: "Family Law",
//     description: "Legal assistance for family matters and disputes",
//     icon: Users,
//     color: "bg-pink-50 text-pink-600",
//   },
//   {
//     id: 6,
//     title: "Property Law",
//     description: "Legal services for real estate and property matters",
//     icon: Scale,
//     color: "bg-teal-50 text-teal-600",
//   },
// ]

// export default function ServiceCategories() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {services.map((service) => (
//         <div
//           key={service.id}
//           className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow group cursor-pointer"
//         >
//           <div
//             className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
//           >
//             <service.icon className="h-6 w-6" />
//           </div>

//           <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
//           <p className="text-gray-600 mb-4">{service.description}</p>

//           <button className="text-blue-600 font-medium text-sm flex items-center group-hover:text-blue-800">
//             Learn more
//             <svg
//               className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       ))}
//     </div>
//   )
// }




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
        <div key={service.id} className="flip-card h-[250px] w-full perspective-1000 cursor-pointer">
          {/* Front of card (normal state) */}
          <div className="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-3d">
            <div className="flip-card-front absolute w-full h-full backface-hidden bg-white rounded-xl border border-gray-100 p-6">
              <div
                className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform`}
              >
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <button className="text-blue-600 font-medium text-sm flex items-center">
                Learn more
                <svg
                  className="ml-1 h-4 w-4 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Back of card (hover state) */}
            <div
              className="flip-card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden rotate-y-180"
              style={{
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-200 mb-6">{service.description}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors w-fit">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

