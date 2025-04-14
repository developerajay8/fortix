import CardTestimonial from '@/components/cardstestimonial'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Briefcase, Check, ChevronRight, Clock, Network, Star, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <div className="bg-slate-900 py-[40px] mt-[80px]  md:py-[80px]">
            <div className="mx-auto pt-[48px] max-w-[900px] xl:px-0 px-[16px]">
              <div className="text-[#ffffffb3] text-center text-[20px]">For Mentors & Creators </div>
              <h2 className="text-[#ffffff] text-center font-bold text-[32px] md:text-[60px]">Want to Become a Mentor?</h2>
              <p className="text-[#ffffffb3] text-center text-[16px]">Ready to make a lasting impact in the world of startups? Join our platform as a mentor and empower the next generation of entrepreneurs.</p>
              <div className="flex justify-center pt-[30px]">
              <Button className="bg-[#0B1F51] hover:bg-[#162b5e] text-center mx-auto text-white px-6 py-2 rounded-full">
                Yes, I Join as a Mentor
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              </div>
            </div>
      </div>

      <main className=" bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          Why should you become mentor on Expertbells?
        </h2>
        <p className="text-lg text-gray-600 ">scb 
          If you have the expertise and the passion to guide and mentor budding entrepreneurs, then becoming a mentor on Expertbells is the perfect opportunity for you. Join our community of successful industry leaders and help 
        </p>

        <section className=" px-4  mt-[40px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-3">Build your personal brand</h3>
            <p className="text-gray-600">
              Expertbells helps you build your personal brand by connecting you with industry leaders and offering their expert guidance.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-3">Set your own hours and rates</h3>
            <p className="text-gray-600">
              Take control of your time and earnings by setting flexible schedules and rates with Expertbells.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-3">Get project referrals</h3>
            <p className="text-gray-600">
              Discover new projects and take your skills to the next level with Expertbells. Our platform offers project referrals for top-notch mentors and aspiring professionals.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Network className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-3">Networking</h3>
            <p className="text-gray-600">
              Grow your professional network with Expertbells and connect with top industry leaders for valuable insights and guidance. Join us now
            </p>
          </Card>
        </div>
      </section>
      </section>
     

      {/* Requirements Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">What you need to have before becoming mentor</h2>
            <p className="text-gray-600 mb-6">
              Our mentors are the best of the best, sharing common traits that set them apart:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 rounded-full bg-blue-100 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700">You should have a strong track record of practical industry experience.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 rounded-full bg-blue-100 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700">You should have excellent interpersonal skills and a welcoming demeanor.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 rounded-full bg-blue-100 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700">You should an abundance mindset and are proactive in your approach.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 rounded-full bg-blue-100 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700">You should be driven by a genuine desire to help your peers.</p>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-gray-600 mb-6">
                At Expertbells, we are proud to have a community of exceptional mentors who are passionate about giving back and sharing their expertise.
              </p>
              <p className="text-gray-600 mb-8">
                With over 70% of our mentors volunteering their time, we prioritize quality over quantity and only work with the best to ensure our users receive the highest level of guidance and support.
              </p>
              <Button className="bg-[#0B1F51] hover:bg-[#162b5e] text-white px-6 py-2 rounded-full">
                Yes, I Join as a Mentor
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/2.jpg"
              alt="Professional mentor"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>
    </main>

      <div className="bg-[#f0f9fe]">  
        <div className="max-w-[1400px] mx-auto py-[40px] md:py-[80px]">
          <div className=" rounded-xl  p-8 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-8">
            Joining and User Calling <span className="text-primary">process</span> 
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-2xl mb-2">Application</h3>
                <p className="text-muted-foreground text-[14px]">
                  All lawyers on our platform are verified and have their credentials checked.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-2xl mb-2"> Reviews</h3>
                <p className="text-muted-foreground text-[14px]">Read genuine reviews from clients who have worked with our lawyers.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ChevronRight className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-2xl mb-2">Onboarding</h3>
                <p className="text-muted-foreground text-[14px]">
                  Book appointments online and get legal advice quickly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <main className=" bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What our Mentors say
          </h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white hover:bg-gray-100 duration-700 rounded-2xl p-8 shadow-cards">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 relative">
                  <Image
                    src="/1.jpg"
                    alt="Dr Pradhyumn Singh"
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-orange-500 rounded-full p-2">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900">
                Dr Pradhyumn Singh
              </h3>
              
              <div className="relative">
                <span className="absolute -top-6 left-0 text-gray-200 text-[120px] font-serif">
                  "
                </span>
                <p className="text-gray-600 relative z-10 italic">
                  Clearcut points and concise communication during the 1-on-1 session helped me gain a lot of insights for my business. Really appreciate the mentorship services.
                </p>
                <span className="absolute -top-6 right-0 text-gray-200 text-[120px] font-serif">
                  "
                </span>
              </div>
              
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main> */}

    <div className="w-full">
              <CardTestimonial />
            </div>

      

     


    

    <Footer/>
    </div>
  )
}
