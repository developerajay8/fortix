
"use client";

import { Building2, Scale, Home, Users, Gavel, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Corporate Law",
    subtitle: "Mergers & Acquisitions",
    icon: <Building2 className="h-12 w-12 text-primary" />,
    description: "Expert guidance in corporate restructuring, mergers, acquisitions, and business transactions. We ensure smooth corporate transitions and protect your business interests.",
    points: [
      "Due Diligence & Risk Assessment",
      "Corporate Restructuring",
      "Joint Ventures & Partnerships",
      "Shareholder Agreements",
      "Business Valuation Support"
    ]
  },
  {
    title: "Family Law",
    subtitle: "Divorce Law",
    icon: <Users className="h-12 w-12 text-primary" />,
    description: "Compassionate legal support for family matters including divorce, child custody, and spousal support. We help you navigate challenging family situations with dignity.",
    points: [
      "Child Custody & Support",
      "Property Division",
      "Alimony Arrangements",
      "Prenuptial Agreements",
      "Domestic Violence Protection"
    ]
  },
  {
    title: "Real Estate Law",
    subtitle: "Property Disputes",
    icon: <Home className="h-12 w-12 text-primary" />,
    description: "Comprehensive legal services for property matters, including dispute resolution, property documentation, and real estate transactions.",
    points: [
      "Property Title Verification",
      "Lease Agreement Review",
      "Boundary Disputes",
      "Construction Contracts",
      "Zoning Compliance"
    ]
  },
  {
    title: "Divorce Law",
    subtitle: "Commercial Disputes",
    icon: <Gavel className="h-12 w-12 text-primary" />,
    description: "Strategic representation in business disputes, contract conflicts, and commercial litigation. We protect your business interests with proven expertise.",
    points: [
      "Contract Disputes",
      "Intellectual Property Rights",
      "Employment Issues",
      "Partnership Conflicts",
      "Debt Recovery"
    ]
  },
  {
    title: "Property Disputes",
    subtitle: "Regulatory Affairs",
    icon: <FileCheck className="h-12 w-12 text-primary" />,
    description: "Ensuring your business meets all legal and regulatory requirements. We help you stay compliant and avoid legal complications.",
    points: [
      "Corporate Governance",
      "Regulatory Compliance",
      "Risk Assessment",
      "Policy Development",
      "Audit Support"
    ]
  },
  {
    title: "Legal Consultation",
    subtitle: "Expert Advisory",
    icon: <Scale className="h-12 w-12 text-primary" />,
    description: "Professional legal consultation services for individuals and businesses. Get expert advice on various legal matters from our experienced team.",
    points: [
      "Initial Case Assessment",
      "Legal Strategy Planning",
      "Document Review",
      "Risk Analysis",
      "Ongoing Legal Support"
    ]
  },
];

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="">
      <Navbar />

      <div className="min-h-screen pt-[150px] bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#1e3a8a] mb-4">Our Legal Services</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive legal solutions tailored to your needs. Our experienced team provides expert guidance across various practice areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-[#1e3a8a] justify-center h-20 w-20 rounded-full bg-secondary mx-auto group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-[#1e3a8a]">{service.title}</h3>
                    <p className="text-sm text-muted-foreground text-[#1e3a8a] mt-1">{service.subtitle}</p>
                  </div>
                  <p className="text-center text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] mr-2"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link href={"/servicestwopoint"}>
                  <button className="w-full mt-4 py-2 px-4 bg-[#1e3a8a] text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
                    Learn More
                  </button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}






