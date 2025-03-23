import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Business Owner",
    content:
      "FortiX helped me find the perfect lawyer for my business contracts. The entire process was smooth and efficient. Highly recommended!",
    rating: 5,
    image: "/confident-businessman-street 1.png",
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Homeowner",
    content:
      "I needed help with property documentation and FortiX connected me with an expert lawyer who guided me through the entire process.",
    rating: 4,
    image: "/confident-businessman-street 1.png",
  },
  {
    id: 3,
    name: "Amit Sharma",
    role: "Startup Founder",
    content:
      "The e-signature feature saved me so much time. I was able to get all my legal documents signed without any hassle.",
    rating: 5,
    image: "/confident-businessman-street 1.png",
  },
]

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between pb-[20px]">
          <div className="flex items-center">
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-[90px] h-[90px] rounded-full mr-3"
            />
            <div>
              <h4 className="font-semibold text-gray-900 text-[22px]">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          </div>

          <p className="text-gray-700 mb-4">{testimonial.content}</p>

          
        </div>
      ))}
    </div>
  )
}

