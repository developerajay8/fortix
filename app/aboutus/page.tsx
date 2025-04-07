import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"
import Aboutbanner from "@/public/image 3 (2).png"
import vision from "@/public/image 4.png"
import Mission from "@/public/image 5.png"
import ceo from "@/public/image 6.png"
import Marquee from "react-fast-marquee"
import AppointmentForm from "@/components/appointment-form"

export default function AboutUs() {

    const mentors = [
        {
          id: 1,
          name: "Arjun Vaidya",
          title: "Founder",
          company: "DR. VAIDYA'S",
          image: "/image 6.png",
          companyLogo: "/image 5.png",
        },
        {
          id: 2,
          name: "Bharat Patel",
          title: "CEO & Founder",
          company: "yudiz",
          image: "/image 6.png",
          companyLogo: "/image 5.png",
        },
        {
          id: 3,
          name: "Palakh Khanna",
          title: "Social Entrepreneur",
          company: "Break the ice",
          image: "/image 6.png",
          companyLogo: "/image 5.png",
        },
        {
          id: 4,
          name: "Krishan Mishra",
          title: "Brand Head",
          company: "",
          image: "/image 6.png",
          companyLogo: "/image 5.png",
        },
        {
          id: 5,
          name: "Sayed Zafar",
          title: "Startup Advisor",
          company: "PhysicsWallah",
          image: "/image 6.png",
          companyLogo: "/image 5.png",
        },
        {
            id: 6,
            name: "Ajay sharma",
            title: "Startup Advisor",
            company: "Coader",
            image: "/image 6.png",
            companyLogo: "/image 5.png",
          },
          {
            id: 7,
            name: "Ajay sharma",
            title: "Startup Advisor",
            company: "Coader",
            image: "/image 6.png",
            companyLogo: "/image 5.png",
          },
      ]
  return (
    <div className="">
        <Navbar/>
    <main className="min-h-screen pt-[90px] w-full">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={Aboutbanner}
            alt="Legal background"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-blue-500">fortiX</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Connecting you with experienced legal professionals to navigate the complexities of law with confidence and
            clarity.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="ourmission py-16 md:py-24  px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-[#1e3a8a]">Mission</span>
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              At fortiX, our mission is to democratize access to legal services. We believe that quality legal guidance
              should be accessible to everyone, regardless of their background or resources.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              We're fueled by the idea that every legal challenge is an opportunity for growth and resolution. Our
              passion lies in connecting individuals and businesses with experienced advocates who can navigate the
              complexities of law with precision and care.
            </p>
            <p className="text-gray-700 text-lg">
              We're here to simplify the legal process, build trust in the legal system, and pave the way for a more
              just and equitable future for all.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={Mission}
              alt="Our team"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className=" py-16 md:py-24  px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={vision}
              alt="Our team"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-[#1e3a8a]">Vission</span>
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              At fortiX, our mission is to democratize access to legal services. We believe that quality legal guidance
              should be accessible to everyone, regardless of their background or resources.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              We're fueled by the idea that every legal challenge is an opportunity for growth and resolution. Our
              passion lies in connecting individuals and businesses with experienced advocates who can navigate the
              complexities of law with precision and care.
            </p>
            <p className="text-gray-700 text-lg">
              We're here to simplify the legal process, build trust in the legal system, and pave the way for a more
              just and equitable future for all.
            </p>
          </div>
          
        </div>
      </section>

      {/* Message from Our Founder */}
      <section className="py-16 md:py-24 ourmission">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
                <div>
              <h2 className="mb-[8px] px-[12px] pb-[24px] font-bold text-[50px] text-[#0c233b]">Message from Our <span className="text-[#1e3a8a]">CEO</span>
              </h2>
              <div className="">
                <div className="rounded-full flex items-center justify-center">
                    
                  <Image
                    src={ceo}
                    alt="Founder"
                   
                    className=" rounded-[50%] "
                  />
                </div>
              </div>
              </div>
              
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Message from Our <span className="text-[#1e3a8a]">Founder</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Out of every 10 legal issues, only 1 gets proper professional assistance, which is a mere 10%. But it's
                time for a change.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                At fortiX, we empower individuals and businesses. Our platform connects you with seasoned legal
                professionals who help turn your legal challenges into success stories.
              </p>
              <div className="relative pl-8 mb-6">
                <span className="absolute left-0 top-0 text-6xl text-gray-300">"</span>
                <p className="text-gray-700 italic text-lg">
                  Why wait for problems to escalate when you can connect directly with advocates who have been there,
                  done that? I believe in skipping the costly trial-and-error phase and getting straight to the good
                  stuff.
                </p>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                From navigating legal complexities to achieving favorable outcomes, that's the story we help you write.
              </p>
              <p className="text-lg font-semibold">
                #Grow<span className="text-rose-500">with</span>Guidance
              </p>
              <p className="text-xl font-bold mt-4">Ms. Ananya Sharma</p>
              <p className="text-gray-600">Founder, fortiX</p>
            </div>
          </div>
        </div>
      </section>

{/* Our Values */}
<section className="py-16 md:py-24 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our <span className="text-blue-500">Values</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Integrity</h3>
            <p className="text-gray-600 text-center">
              We uphold the highest ethical standards in all our interactions, ensuring transparency and honesty in
              every legal service we provide.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Accessibility</h3>
            <p className="text-gray-600 text-center">
              We believe legal services should be accessible to all. We work tirelessly to break down barriers and
              simplify complex legal processes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Excellence</h3>
            <p className="text-gray-600 text-center">
              We are committed to excellence in every aspect of our service, connecting you with top legal professionals
              who deliver exceptional results.
            </p>
          </div>
        </div>
      </section>


<div className="bg-[#] ourmission">
      <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center pb-16">
          Supported by <span className="text-[#1e3a8a]">Top Mentors</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
            <Marquee>
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-[#ffffff] mx-4 rounded-lg shadow-xl hover:scale-105 p-6 w-[250px] flex flex-col items-center">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-yellow-100 mb-4">
                <Image
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center">{mentor.name}</h3>
              <p className="text-gray-500 text-center mb-2">{mentor.title}</p>
              <div className="h-[40px] flex items-center justify-center mt-2">
                <Image
                  src={mentor.companyLogo || "/placeholder.svg"}
                  alt={mentor.company || "Company logo"}
                  width={100}
                  height={40}
                  className="max-h-[40px] w-auto"
                />
              </div>
            </div>
          ))}
          </Marquee>
        </div>
      </section>
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
    <Footer/>
    </div>
  )
}

