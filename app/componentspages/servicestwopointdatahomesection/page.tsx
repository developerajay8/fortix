"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Star, Verified, X } from "lucide-react";
import { useState } from "react";

export default function Page(props: any) {
  const { profile } = props;

  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const profiles = [
    {
      id: 1,
      name: "Ashim Jolly",
      title: "Early-stage Venture Capital | Growth Strategy | Managing Partner, Aperio.Partners",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=300&h=300&auto=format&fit=crop",
      expertise: ["Fundraising", "Go To Market Strategy", "International Business", "Growth Strategy", "Sales"],
      description:
        "Ashim is a business leader with 15+ years across tech startups, consulting, and early-stage investing...",
      packages: [
        { name: "Unlock details", duration: "60min", price: 12000 },
        { name: "Regular", duration: "30min", price: 6000 },
      ],
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Product Strategy | UX Design | Senior Product Manager, TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
      expertise: ["Product Management", "UX Design", "Agile", "User Research", "Product Strategy"],
      description:
        "Sarah is a product leader with 10+ years of experience in building digital products. She has led product teams...",
      packages: [
        { name: "All Access", duration: "60min", price: 10000 },
        { name: "Regular", duration: "30min", price: 5000 },
      ],
    },
  ];

  return (
    <>
      <div className="mt-[100px]">
        <main className="bg-gray-50 p-4 md:py-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {profiles.map((profile) => (
              <Card key={profile.id} className="p-6 md:p-8 hover:scale-95 duration-700 shadow-card">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Profile Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="rounded-full md:block hidden w-24 h-24 md:w-32 md:h-32 object-cover"
                      />
                      <div className="flex-1">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="rounded-full md:hidden block md:mb-0 mb-2 w-24 h-24 md:w-32 md:h-32 object-cover"
                      />
                        <div className="flex items-center gap-2 mb-1">
                          <h1 className="text-2xl font-bold">{profile.name}</h1>
                          <Verified className="text-blue-500 w-5 h-5" />
                        </div>
                        <p className="text-gray-600 mb-2 line-clamp-2">{profile.title}</p>

                        <div>
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
                          <div className="text-[16px] text-[#000000]">
                            <b>Experience:</b> 15+ years
                          </div>
                          <div className="flex items-center gap-[6px] text-sm text-muted-foreground">
                            <MapPin className="h-[20px] text-blue-600" />
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
                          <button className="text-blue-600 hover:text-blue-700 ml-1">Read More...</button>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Packages */}
                  <div className="w-full md:w-72 space-y-4">
                    <div className="text-xl font-semibold mb-1">Packages</div>
                    {profile.packages.map((pkg, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedPackage({ ...pkg, profile })}
                        className="p-4 bg-white border hover:shadow-xl transition rounded-lg cursor-pointer"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{pkg.name}</h3>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="w-4 h-4 mr-1" />
                              1 Session X <span>{pkg.duration}</span>
                            </div>
                          </div>
                          <div className="text-lg font-semibold text-black">₹{pkg.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-xl relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setSelectedPackage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{selectedPackage.name}</h2>
              <img
                src={selectedPackage.profile.image}
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="mt-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                1 Session X <span>{selectedPackage.duration}</span>
              </div>
              <p className="text-green-600 text-lg font-bold mt-2">₹ {selectedPackage.price}</p>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-900">
              Buy Package
            </button>
          </div>
        </div>
      )}
    </>
  );
}
