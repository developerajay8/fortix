"use client";

import Navbar from "@/components/navbar";
import { Star, FileText, PenLine, Phone, Package2, Check, CheckCheck } from "lucide-react";
import data from "@/app/componentspages/csfirstpagejsondata/partnership.json"
import Footer from "@/components/footer";
import Image from "next/image";
import TestimonialSlider from "@/components/testimonial-slider";
export default function page() {
  return (
    <div className="">
      <Navbar />
      <main className=" bg-white">
        {/* Hero Section */}

        




        <div className="max-w-[1400px] pt-[160px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left Section */}
            <div className="w-full md:w-[60%]">


              <div className="flex items-center gap-4 mb-4">
                <div className="text-6xl font-bold text-gray-700">4.6</div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 text-yellow-400 fill-[50%]" />
                  </div>
                  <div className="text-gray-600">(876 reviews)</div>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-green-500 mb-6">
                BUSINESS PARTNERSHIP AGREEMENT
              </h1>

              <div className="flex items-center gap-2 mb-12 bg-green-50 p-4 rounded-lg w-fit">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  👥
                </div>
                <span className="font-bold text-xl">1678</span>
                <span className="text-gray-600">People purchased</span>
              </div>

              <div className=" md:hidden block w-full md:w-[40%] bg-gray-50 p-6 rounded-lg ">
              <h2 className="text-2xl font-bold mb-4">Startup Documents</h2>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span>Business Partnership Agreement</span>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-sm">₹19999</div>
                    <div className="font-bold text-xl">₹6499</div>
                    <div className="text-red-500 text-sm">(70% Off)</div>
                  </div>
                </div>
                <div className="text-right text-green-600 text-sm">SAVE ₹15500</div>
              </div>

              <div className="border-t border-b py-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Gross Total</span>
                  <span className="font-bold">₹6499</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Deliverables *</h3>
                <ol className="list-decimal list-inside text-gray-600">
                  <li>Partnership Agreement drafting</li>
                  <li>Consultation call with the expert lawyer</li>
                </ol>
              </div>

              <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                ORDER NOW
              </button>

              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <img src="/slide1.webp" alt="Visa" className="h-6" />
                <img src="/slide1.webp" alt="Mastercard" className="h-6" />
                <img src="/slide1.webp" alt="Maestro" className="h-6" />
              </div>
            </div>


              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      icon: <FileText className="w-8 h-8 text-blue-500" />,
                      title: "Choose your required Document & pay",
                      desc: "Choose any document you require and proceed to checkout",
                      bgColor: "bg-blue-50",
                    },
                    {
                      icon: <PenLine className="w-8 h-8 text-pink-500" />,
                      title: "Fill required details",
                      desc: "Fill your personal details on success page",
                      bgColor: "bg-pink-50",
                    },
                    {
                      icon: <Phone className="w-8 h-8 text-teal-500" />,
                      title: "Schedule Call with Lawyer",
                      desc: "Select time slot to speak to the Lawyer to discuss your requirements",
                      bgColor: "bg-teal-50",
                    },
                    {
                      icon: <Package2 className="w-8 h-8 text-purple-500" />,
                      title: "Delivery of your Document",
                      desc: "Get the document delivered on your registered email ID within the promised time",
                      bgColor: "bg-purple-50",
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-lg shadow-sm bg-white border">
                      <div className={`w-16 h-16 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                        {item.icon}
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className=" p-6 mb-16 bg-white shadow-lg rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  BUSINESS PARTNERSHIP AGREEMENT
                </h2>
                <p className="text-gray-600 mb-4">
                  Business Partnership Agreement is a written agreement between the
                  partners who would like to do a business together and that outlines the
                  terms and conditions of partnership among the partners <em>inter se</em>
                  and prescribes the profit & loss sharing ratio amongst them. This
                  agreement will also define the mutual responsibilities for the
                  partners.
                </p>
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/image 3 (2).png" // Ensure this image is in the public folder or update the path accordingly
                    alt="Business handshake"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              <section className="mb-16">
                <div className="bg-white rounded-lg p-6 shadow-xl ">
                  <h2 className="text-2xl font-bold ">Contents of Partnership Agreement</h2>
                  <h3 className="text-lg font-semibold my-4">A well drafted Partnership Agreement contains the following:</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {data.contents.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <div className="bg-white rounded-lg p-6 shadow-xl ">
                  <h2 className="text-2xl font-bold ">Laws governing the Partnership Agreement in India</h2>
                  <h3 className="text-lg font-semibold my-4">The different laws which govern various aspects of Partnership Agreement in India are as follows:</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {data.contents2.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <div className="bg-white rounded-lg p-6 shadow-xl ">
                  <h2 className="text-2xl font-bold mb-4">Why LegalKart</h2>

                  <div className="grid grid-cols-1 gap-4">
                    {data.contents3.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <div className="bg-white rounded-lg p-6 shadow-xl ">
                  <h2 className="text-2xl font-bold ">Deliverables</h2>
                  <h3 className="text-lg font-semibold my-4">Our standard deliverables for every document drafting includes:</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {data.contents4.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="pb-16  rounded-lg">
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 rounded-lg flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl font-bold mb-2">
            Chat <span className="text-green-400">with us</span>
          </h2>
          <p className="text-gray-300 mb-4">
            Chat with us <strong>for all your documentation need.</strong>
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600">
            Chat Now
          </button>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 relative w-full h-40 md:h-52 rounded-lg overflow-hidden">
          <Image
            src="/image.png" // Ensure this image is in the public folder or update the path accordingly
            alt="Chat with us"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
              </div>

    {/* <div className="
     bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        What our users have to say
      </h2>
      <div className="relative bg-gray-100 p-6 rounded-lg">
        <p className="text-gray-600 italic text-lg mb-4">
          <span className="text-4xl text-gray-400">&ldquo;</span>
          I was planning to buy a plot in Nagpur. Before buying the land, I
          wanted to get all the documents verified and ensure it is free of
          fraud and forgery. LegalKart undertook every step carefully and their
          team was very responsive. I am impressed by their professionalism and
          would highly recommend their service.
          <span className="text-4xl text-gray-400">&rdquo;</span>
        </p>
        <div className="flex items-center justify-center mt-4">
          <div className="w-10 h-10 bg-orange-400 text-white flex items-center justify-center rounded-full font-bold">
            K
          </div>
          <p className="ml-3 font-semibold text-gray-800">
            Kishore Kamble, Pune
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <button className="text-gray-600 hover:text-black">&#8592;</button>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <button className="text-gray-600 hover:text-black">&#8594;</button>
        </div>
      </div>
    </div> */}

    <div className="mb-16 ">
      <div className="shadow-xl bg-[#f1ffff] py-12">
      <TestimonialSlider/>
      </div>
    </div>




            </div>

            {/* Right Section - Price Card */}
            <div className=" md:block hidden w-full md:w-[40%] bg-gray-50 p-6 rounded-lg sticky top-[90px]">
              <h2 className="text-2xl font-bold mb-4">Startup Documents</h2>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span>Business Partnership Agreement</span>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-sm">₹19999</div>
                    <div className="font-bold text-xl">₹6499</div>
                    <div className="text-red-500 text-sm">(70% Off)</div>
                  </div>
                </div>
                <div className="text-right text-green-600 text-sm">SAVE ₹15500</div>
              </div>

              <div className="border-t border-b py-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Gross Total</span>
                  <span className="font-bold">₹6499</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Deliverables *</h3>
                <ol className="list-decimal list-inside text-gray-600">
                  <li>Partnership Agreement drafting</li>
                  <li>Consultation call with the expert lawyer</li>
                </ol>
              </div>

              <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                ORDER NOW
              </button>

              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <img src="/slide1.webp" alt="Visa" className="h-6" />
                <img src="/slide1.webp" alt="Mastercard" className="h-6" />
                <img src="/slide1.webp" alt="Maestro" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}