// import AppointmentForm from "@/components/appointment-form"
// import Footer from "@/components/footer"
// import Navbar from "@/components/navbar"

// export default function Contact() {

//   return (
//     <div className="">
//         <Navbar/>
//     <section className="w-full bg-slate-900 text-white mt-[80px]">
//             <div className="container mx-auto px-4 py-16">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
//                 <div className="space-y-3">
//                   <div>
//                     <p className="text-[#ada282] mb-2 text-[16px]">For Our Honorable Clients</p>
//                     <h2 className="text-[36px] text-[#ffffff]  font-light mb-4">Free Consulting</h2>
//                   </div>
//                   <p className="text-[#c0b596] text-[18px]">Call us 24/7 at (888)123-4567 or fill out the form.</p>
//                   <p className="text-gray-300 mt-8 pt-[20px] text-[16px] w-[90%]">
//                     It is a long established fact that a reader will be distracted by the readable content of a page when
//                     looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less readable English.
//                   </p>
//                 </div>
//                 <AppointmentForm />
//               </div>
//             </div>
//           </section>
//     <Footer/>
//     </div>
//   )
// }

"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppointmentForm from "@/components/appointment-form";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-gradient-to-r from-primary/10 to-primary/5 md:pt-[60px]">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>

        <section className="w-full bg-slate-900 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Call Us</p>
                        <p className="font-medium">+1 (555) 000-0000</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Email Us
                        </p>
                        <p className="font-medium">contact@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Visit Us
                        </p>
                        <p className="font-medium">
                          123 Business Street, NY 10001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Section */}
                <div className="h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645645678901!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className=" rounded-lg  shadow-xl">
                <h2 className="text-2xl font-semibold mb-6">
                  Send us a Message
                </h2>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
