
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

        

        
      </div>
      <Footer />
    </div>
  );
}
