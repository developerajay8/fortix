"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Mobileimage from "../../../public/image 2 (4).png"

const testimonials = [
  {
    text: "Excellent legal consultation. Got my property dispute resolved quickly.",
    author: "Rahul Sharma",
    rating: 5,
  },
  {
    text: "Professional advice that helped me understand my legal rights better.",
    author: "Priya Patel",
    rating: 5,
  },
  {
    text: "Quick response and thorough explanation of my business contract.",
    author: "Amit Kumar",
    rating: 5,
  },
];

export default function Page() {    
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* left Section - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Empowering Legal Excellence
              </h1>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 h-5 w-5" />
                  <p className="text-lg text-gray-700">
                  Trusted by Clients, Chosen by Advocates
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 h-5 w-5" />
                  <p className="text-lg text-gray-700">
                  Showcase Your Expertise & Connect with Potential Clients
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 h-5 w-5" />
                  <p className="text-lg text-gray-700">
                  Next-Gen Case Management for Modern Law Firms
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 h-5 w-5" />
                  <p className="text-lg text-gray-700">
                  Data-Driven Insights for Smarter Legal Strategies
                  </p>
                </div>
              </div>

              <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Today
              </button>
            </div>

            {/* Testimonials Section */}
            <div className=" rounded-xl p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#169440] font-bold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className=" flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full absolute top-[50%] -left-[20px] hover:bg-gray-100"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full absolute top-[50%] -right-[0px] hover:bg-gray-100"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{testimonials[currentTestimonial].text}</p>
              <div className="flex items-center gap-5 ">
                  <Image src={Mobileimage} alt="" className="w-[40px] h-[40px] rounded-[50px]"/>
              <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</p>
              </div>
            </div>
          </div>

          {/* right Section - Mobile Image */}
          <div className="relative">
            <div className=" p-2 shadow-2xl ">
              <Image src={Mobileimage} alt=""/>
              
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}