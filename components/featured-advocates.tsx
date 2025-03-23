import { Star } from "lucide-react"

const advocates = [
  {
    id: 1,
    name: "Adv. Rajesh Sharma",
    specialization: "Corporate Law",
    experience: "15+ years",
    rating: 4.9,
    reviews: 127,
    image: "/1.jpg",
    location: "Jaipur",
    fee: "₹2,000",
    available: true,
  },
  {
    id: 2,
    name: "Adv. Priya Malhotra",
    specialization: "Family Law",
    experience: "12+ years",
    rating: 4.8,
    reviews: 98,
    image: "/2.jpg",
    location: "Delhi",
    fee: "₹1,800",
    available: true,
  },
  {
    id: 3,
    name: "Adv. Vikram Singh",
    specialization: "Criminal Law",
    experience: "20+ years",
    rating: 4.7,
    reviews: 156,
    image: "/3.jpg",
    location: "Mumbai",
    fee: "₹2,500",
    available: false,
  },
  {
    id: 4,
    name: "Adv. Ananya Desai",
    specialization: "Property Law",
    experience: "8+ years",
    rating: 4.6,
    reviews: 72,
    image: "/4.jpg",
    location: "Bangalore",
    fee: "₹1,500",
    available: true,
  },
]

export default function FeaturedAdvocates() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {advocates.map((advocate) => (
        <div
          key={advocate.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
        >
          <div className="relative">
            <img
              src={advocate.image || "/placeholder.svg"}
              alt={advocate.name}
              className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium">
              {advocate.available ? (
                <span className="text-green-600">Available Today</span>
              ) : (
                <span className="text-orange-600">Busy</span>
              )}
            </div>
          </div>

          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-gray-900">{advocate.name}</h3>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium ml-1">{advocate.rating}</span>
              </div>
            </div>

            <p className="text-[#1e3a8a] font-medium text-sm mb-2">{advocate.specialization}</p>

            <div className="flex items-center text-gray-500 text-sm mb-3">
              <span className="mr-3">{advocate.experience}</span>
              <span>{advocate.reviews} reviews</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-bold">
                {advocate.fee} <span className="text-gray-500 font-normal text-sm">consultation</span>
              </span>
              <button className="text-[#1e3a8a] hover:text-blue-600 font-medium text-sm">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

