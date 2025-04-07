"use client";

import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Clock, MapPin, Star, Verified } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

export default function Page(props: any) {
  // const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const { profile } = props;
  const [isopen, setisOpen] = useState(false);

  const profiles = [
    {
      id: 1,
      name: "Ashim Jolly",
      title: "Early-stage Venture Capital | Growth Strategy | Managing Partner, Aperio.Partners",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=300&h=300&auto=format&fit=crop",
      expertise: ["Fundraising", "Go To Market Strategy", "International Business", "Growth Strategy", "Sales"],
      description: "Ashim is a business leader with 15+ years across tech startups, consulting, and early-stage investing. Ashim has held CXO positions at organisations with global business reach and impact, from Jio-Haptik to WeWork. Ashim started his career in 2009 as a management consultant in Boston. After 2 years, he...",
      packages: [
        { name: "Unlock details", duration: "60min", price: 12000 },
        { name: "Regular", duration: "30min", price: 6000 }
      ]
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Product Strategy | UX Design | Senior Product Manager, TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
      expertise: ["Product Management", "UX Design", "Agile", "User Research", "Product Strategy"],
      description: "Sarah is a product leader with 10+ years of experience in building digital products. She has led product teams at major tech companies and has a proven track record of launching successful products that drive user engagement and business growth...",
      packages: [
        { name: "All Access", duration: "60min", price: 10000 },
        { name: "Regular", duration: "30min", price: 5000 }
      ]
    },
    {
      id: 3,
      name: "Marcus Thompson",
      title: "Digital Marketing | SEO Expert | Marketing Director, GrowthLabs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop",
      expertise: ["Digital Marketing", "SEO", "Content Strategy", "Analytics", "Growth Marketing"],
      description: "Marcus is a marketing expert with 12+ years of experience in digital marketing and SEO. He has helped numerous companies achieve significant growth through data-driven marketing strategies and innovative campaign management...",
      packages: [
        { name: "All Access", duration: "60min", price: 11000 },
        { name: "Regular", duration: "30min", price: 5500 }
      ]
    },
    {
      id: 4,
      name: "Priya Patel",
      title: "Software Architecture | Cloud Solutions | Tech Lead, CloudScale",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&h=300&auto=format&fit=crop",
      expertise: ["Cloud Architecture", "DevOps", "Microservices", "AWS", "System Design"],
      description: "Priya is a technology leader with 14+ years of experience in software architecture and cloud solutions. She has architected scalable systems for Fortune 500 companies and led large engineering teams in delivering complex technical solutions...",
      packages: [
        { name: "All Access", duration: "60min", price: 13000 },
        { name: "Regular", duration: "30min", price: 6500 }
      ]
    },
    {
      id: 5,
      name: "David Kim",
      title: "Financial Planning | Investment Strategy | Senior Advisor, WealthWise",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop",
      expertise: ["Financial Planning", "Investment Strategy", "Retirement Planning", "Tax Planning", "Estate Planning"],
      description: "David is a financial advisor with 16+ years of experience in wealth management and investment strategy. He has helped clients build and preserve wealth through comprehensive financial planning and strategic investment management...",
      packages: [
        { name: "All Access", duration: "60min", price: 14000 },
        { name: "Regular", duration: "30min", price: 7000 }
      ]
    }
  ]
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8 ">
        {profiles.map((profile) => (
          <Card key={profile.id} className="p-6 md:p-8 hover:scale-95 duration-700 shadow-card">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Section */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className=" ">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="rounded-full flex items-center flex-col justify-center w-24 h-24 md:w-32 md:h-32 object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h1 className="text-2xl font-bold">{profile.name}</h1>
                      <Verified className="text-blue-500 w-5 h-5" />
                    </div>
                    <p className="text-gray-600 mb-2">{profile.title}</p>

                    <div className="">
                      <div className="font-semibold text-[16px] text-[black]">Expertise:</div>
                      <div className="flex flex-wrap gap-2 my-4">
                        {profile.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-5 items-center">

                      <div className="text-[16px] text-[#000000] "> <b> Experience: </b> 15+ years  </div>
                      <div className="flex items-center gap-[6px] text-sm text-muted-foreground">
                        <MapPin className=" h-[20px] text-blue-600 " />
                        <div className="text-black">Jaipur</div>
                      </div>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 text-sm font-medium">9.9</span>
                        <span className="ml-1 text-sm text-muted-foreground">( reviews)</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mt-6">
                      {profile.description}
                      <button className="text-blue-600 hover:text-blue-700 ml-1">
                        Read More...
                      </button>
                    </p>
                  </div>
                </div>


              </div>

              {/* Packages Section */}
              <div className="w-full md:w-72 space-y-6">
                <div className="text-xl font-semibold mb-1">Packages</div>


                <div className="space-y-2">
                  <div onClick={() =>setisOpen(true)} className="p-4 bg-gray-50 hover:shadow-xl duration-700 rounded-lg cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Unlock details</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          1 Session X <span>60 minutes</span>
                        </div>
                      </div>
                      <div className="text-lg font-semibold">₹220000</div>
                    </div>
                  </div>

                  {isopen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setisOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">All Access</h2>
              <img
                src="/1-1616600959716.png" // Replace this with your actual image path
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="mt-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                1 Session X <span>60 minutes</span>
              </div>
              <p className="text-green-600 text-lg font-bold mt-2">
                ₹ 1200000
              </p>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
              Buy Package
            </button>
          </div>
        </div>
      )}
                </div>

                <div className="space-y-2">
                  <div onClick={() =>setisOpen(true)} className="p-4 bg-gray-50 hover:shadow-xl duration-700 rounded-lg cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Call & Video call</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          1 Session X <span>60 minutes</span>
                        </div>
                      </div>
                      <div className="text-lg font-semibold">₹220000</div>
                    </div>
                  </div>

                  {isopen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setisOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">All Access</h2>
              <img
                src="/1-1616600959716.png" // Replace this with your actual image path
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="mt-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                1 Session X <span>60 minutes</span>
              </div>
              <p className="text-green-600 text-lg font-bold mt-2">
                ₹ 1200000
              </p>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
              Buy Package
            </button>
          </div>
        </div>
      )}
                </div>

                <div className="space-y-2">
                  <div onClick={() =>setisOpen(true)} className="p-4 bg-gray-50 hover:shadow-xl duration-700 rounded-lg cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Chat details</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          1 Session X <span>60 minutes</span>
                        </div>
                      </div>
                      <div className="text-lg font-semibold">₹220000</div>
                    </div>
                  </div>

                  {isopen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setisOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">All Access</h2>
              <img
                src="/1-1616600959716.png" // Replace this with your actual image path
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="mt-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                1 Session X <span>60 minutes</span>
              </div>
              <p className="text-green-600 text-lg font-bold mt-2">
                ₹ 1200000
              </p>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
              Buy Package
            </button>
          </div>
        </div>
      )}
                </div>

                {/* <Button className="w-full" size="lg">
                  View Plans
                </Button> */}

              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}