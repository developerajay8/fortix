import { Search, MapPin, ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"
// import TestimonialSlider from "@/components/testimonial-slider"
import AppointmentForm from "@/components/appointment-form"

import Navbar from "@/components/navbar"
import FeaturedAdvocates from "@/components/featured-advocates"
import ServiceCategories from "@/components/service-categories"
import HowItWorks from "@/components/how-it-works"
import Footer from "@/components/footer"
import Local from "@/components/local"
import Faq from "@/components/faq"
import Cardtestimonial from "@/components/cardstestimonial"
import Marquee from "react-fast-marquee"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0"></div>
        <div className="absolute right-0 top-0 w-full h-full opacity-20 z-0">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
           

<div className="w-full lg:w-1/2 space-y-5">
          <div className="relative">
            <span className="px-[20px] py-[6px] bg-[#fff] border border-[#3b70ff] font-medium rounded-[50px] mb-[4px]">India's 1st Startup Mentorship Platform</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in mt-4">
              Find the <span className="text-[#1e3a8a]">Right Lawyer</span> for Your Legal Needs
              <div className="relative">
                <div className="absolute -bottom-3 left-0 w-3/5 h-3">
                  <svg viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                      d="M1 17C71 5 142 -1 299 9"
                      stroke="#1e3a8a"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 animate-fade-in-delay-1 mt-8">
              Connect with experienced advocates, book consultations, and sign legal documents online - all in one
              place.
            </p>

          
<div className="gap-5 md:flex">
            <button className="relative mt-8 px-6 py-3 rounded-[6px] text-[#ffffff] overflow-hidden group bg-[#1e3a8a]">
        <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 left-0 top-0"></span>
        <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 right-0 top-0"></span>
       
        <div className="relative text-[20px]">Book an Appointment</div>
      </button>

      <button className="relative md:mt-8 mt-4 px-6 py-3 rounded-[6px] hover:text-[#ffffff] text-[#1e3a8a] overflow-hidden group border border-blue-800">
        <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-[#000] left-0 top-0"></span>
        <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-[#000] right-0 top-0"></span>
        
        <div className="relative text-[20px] font-[500]">Contact us</div>
      </button>
      </div>

            <div className="bg-white p-4 rounded-xl shadow-lg animate-fade-in-delay-2 mt-6">
              <div className="flex items-center gap-2 mb-4 text-gray-500 border-b pb-3">
                <MapPin className="h-5 w-5 text-[#1e3a8a]" />
                <div className="relative group">
                  <button className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
                    <span className="font-medium">Jaipur</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg p-2 hidden group-hover:block z-20 min-w-[150px]">
                    <ul className="space-y-1">
                      {["Jaipur", "Udaipur", "Ajmer", "Jodhpur", "Kota"].map((city) => (
                        <li key={city} className="px-3 py-1.5 hover:bg-blue-50 rounded cursor-pointer text-sm">
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for lawyers, e-stamp services..."
                  className="w-full p-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <button className="bg-[#1e3a8a] text-white p-2 rounded-lg hover:bg-[#3767eb] transition-colors">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-blue-50 text-[#1e3a8a] rounded-full text-sm font-medium cursor-pointer hover:bg-blue-100 transition-colors">
                  E-Stamp
                </span>
                <span className="px-3 py-1.5 bg-blue-50 text-[#1e3a8a] rounded-full text-sm font-medium cursor-pointer hover:bg-blue-100 transition-colors">
                  Legal Advice
                </span>
                <span className="px-3 py-1.5 bg-blue-50 text-[#1e3a8a] rounded-full text-sm font-medium cursor-pointer hover:bg-blue-100 transition-colors">
                  Contract Review
                </span>
                <span className="px-3 py-1.5 bg-blue-50 text-[#1e3a8a] rounded-full text-sm font-medium cursor-pointer hover:bg-blue-100 transition-colors">
                  Property Law
                </span>
              </div>
            </div>
          </div>
        </div>

<div className="w-full lg:w-1/2">
            <div className=" relative animate-fade-in-delay-3">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* <img
                  src="/hero-right-section-image.png"
                  alt="Legal consultation"
                  className="w-full h-[354px] object-cover"
                /> */}
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/Get.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-medium">Book your consultation today</p>
                    <p className="text-sm opacity-80">100+ verified advocates available</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                        <img
                          src={`/hero-right-section-image.png`}
                          alt="User"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">300+ consultations</p>
                    <p className="text-gray-500">this week</p>
                  </div>
                </div>
              </div>

            </div>
              <div className=" mt-[30px]"><Local/></div>
              </div>
          </div>
        </div>
      </section>
      
      {/* client image-slider */}

<section className="py-12">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center max-w-[1400px] mx-auto pb-[40px]" >
  We have Advocates <span className="text-[#1e3a8a]"> from Top Companies </span>
  </h2>
  <Marquee direction="left" autoFill pauseOnHover className="">
  <img src="/slide1.webp" alt="FortiX Logo" className="mx-[40px] h-[50px] " />
  <img src="/slide2.webp" alt="FortiX Logo" className="mx-[40px] h-[50px] " />
  <img src="/slide3.webp" alt="FortiX Logo" className="mx-[40px] h-[50px] " />
  <img src="/slide4.webp" alt="FortiX Logo" className="mx-[40px] h-[50px] " />
  <img src="/slide2.webp" alt="FortiX Logo" className="mx-[40px] h-[50px] " />
  <img src="/slide5.webp" alt="FortiX Logo" className="mx-[40px] h-[50px] " />
  </Marquee>
</section>


      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Legal <span className="text-[#1e3a8a]"> Services </span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From consultation to contract signing, we provide comprehensive legal services to meet your needs.
            </p>
          </div>

          <ServiceCategories />
        </div>
      </section>

      {/* Featured Advocates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> <span className="text-[#1e3a8a]"> Top Rated </span> Advocates</h2>
              <p className="text-lg text-gray-600">Experienced professionals ready to help with your legal matters</p>
            </div>
            <Link
              href="/find-lawyer"
              className="hidden md:flex items-center text-[#1e3a8a] hover:text-blue-600 font-medium"
            >
              View all advocates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <FeaturedAdvocates />

          <div className="mt-10 text-center md:hidden">
            <Link
              href="/find-lawyer"
              className="inline-flex items-center text-[#1e3a8a] hover:text-blue-600 font-medium"
            >
              View all advocates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"><span className="text-[#1e3a8a]">How </span> FortiX Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple steps to get the legal help you need</p>
          </div>

          <HowItWorks />
        </div>
      </section>

      {/* Testimonials */}
      <section className="">
        


        <main className="flex flex-col min-h-screen">
      {/* <section className="w-full bg-white">
        <div className="container mx-auto px-4 pt-12 md:pb-0 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[500px] w-full">
              <Image
                src="/image 3 (1).png"
                alt="Professional consultant"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
            <TestimonialSlider />
          </div>
        </div>
      </section> */}

<div className="w-full">
      <Cardtestimonial/>
      </div>
      <section className="w-full bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
            <div className="space-y-3">
              <div>
                <p className="text-[#ada282] mb-2 text-[16px]">For Our Honorable Clients</p>
                <h2 className="text-[36px] text-[#ffffff]  font-light mb-4">Free Consulting</h2>
              </div>
              <p className="text-[#c0b596] text-[18px]">Call us 24/7 at (888)123-4567 or fill out the form.</p>
              <p className="text-gray-300 mt-8 pt-[20px] text-[16px] w-[90%]">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less readable English.
              </p>
            </div>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </main>


      </section>

      
      <Faq/>
      <Footer />


     
    </main>
  )
}

