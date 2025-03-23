"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor.",
    name: "Jhony Goaver",
    position: "CEO of American BDS",
    avatar: "/1.jpg",
  },
  {
    id: 2,
    quote:
      "Working with this team has been an exceptional experience. Their attention to detail and commitment to excellence is unmatched in the industry.",
    name: "Sarah Johnson",
    position: "CFO at Global Enterprises",
    avatar: "/1.jpg",
  },
  {
    id: 3,
    quote:
      "The legal advice I received was invaluable. They guided me through a complex situation with professionalism and expertise that truly made a difference.",
    name: "Michael Chen",
    position: "Director of Operations",
    avatar: "/1.jpg",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // const goToPrevious = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  // }

  // const goToNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  // }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full">
      <div className="space-y-6">
        <div className="pb-[10px]">
          <p className="text-gray-500 mb-2">What People Say</p>
          <h2 className="text-3xl font-medium border-b pb-2 border-gray-200">Client Testimonial</h2>
        </div>

        <div className=" relative">
          <div className="absolute text-5xl text-[#1e3a8a] top-0 left-0">"</div>
          <p className="pl-8 pr-4 text-gray-600 italic">{testimonials[currentIndex].quote}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-gray-200">
            <Image
              src={testimonials[currentIndex].avatar || "/placeholder.svg?height=64&width=64"}
              alt={testimonials[currentIndex].name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-[26px]">{testimonials[currentIndex].name}</h4>
            <p className="text-sm text-gray-500">{testimonials[currentIndex].position}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-[#1e3a8a] w-4" : "bg-gray-300"
              } transition-all duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 hidden md:block">
        <button
          onClick={goToPrevious}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block">
        <button
          onClick={goToNext}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div> */}
    </div>
  )
}

