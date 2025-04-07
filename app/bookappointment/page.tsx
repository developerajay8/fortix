"use client";

import { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Star,
  Filter,
  Check,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import Bookappoinment from "@/app/componentspages/bookappoinmentdata/page"
// import Contractsinging from "@/app/componentspages/contract-signing/page"
// import Contractsinging2 from "@/app/componentspages/contract-signing2/page"
// Sample data for lawyers
const lawyers = [
  {
    id: 1,
    name: "Adv. Rajesh Sharma",
    image: "/2.jpg",
    expertise: ["Corporate Law", "Mergers & Acquisitions"],
    location: "Delhi",
    rating: 4.9,
    reviews: 127,
    experience: "15+ years",
    consultationFee: "₹1,999",
    availability: "Available today",
    verified: true,
    responseTime: "Responds in 30 minutes",
  },
  {
    id: 2,
    name: "Adv. Priya Malhotra",
    image: "/2.jpg",
    expertise: ["Family Law", "Divorce Law"],
    location: "Mumbai",
    rating: 4.8,
    reviews: 98,
    experience: "12+ years",
    consultationFee: "₹1,499",
    availability: "Available tomorrow",
    verified: true,
    responseTime: "Responds in 1 hour",
  },
  {
    id: 3,
    name: "Adv. Vikram Singh",
    image: "/2.jpg",
    expertise: ["Criminal Law", "Civil Litigation"],
    location: "Bangalore",
    rating: 4.7,
    reviews: 156,
    experience: "18+ years",
    consultationFee: "₹2,499",
    availability: "Available today",
    verified: true,
    responseTime: "Responds in 45 minutes",
  },
  {
    id: 4,
    name: "Adv. Ananya Desai",
    image: "/2.jpg",
    expertise: ["Intellectual Property", "Patent Law"],
    location: "Hyderabad",
    rating: 4.9,
    reviews: 87,
    experience: "10+ years",
    consultationFee: "₹1,799",
    availability: "Available in 2 days",
    verified: true,
    responseTime: "Responds in 2 hours",
  },
  {
    id: 5,
    name: "Adv. Arjun Kapoor",
    image: "/2.jpg",
    expertise: ["Real Estate Law", "Property Disputes"],
    location: "Chennai",
    rating: 4.6,
    reviews: 112,
    experience: "14+ years",
    consultationFee: "₹1,899",
    availability: "Available today",
    verified: true,
    responseTime: "Responds in 1 hour",
  },
  {
    id: 6,
    name: "Adv. Meera Reddy",
    image: "/2.jpg",
    expertise: ["Immigration Law", "International Law"],
    location: "Pune",
    rating: 4.8,
    reviews: 76,
    experience: "9+ years",
    consultationFee: "₹1,599",
    availability: "Available tomorrow",
    verified: true,
    responseTime: "Responds in 50 minutes",
  },
];

// Sample data for expertise areas
const expertiseAreas = [
  "Corporate Law",
  "Family Law",
  "Criminal Law",
  "Civil Litigation",
  "Intellectual Property",
  "Real Estate Law",
  "Immigration Law",
  "Tax Law",
  "Employment Law",
  "Constitutional Law",
];

// Sample data for locations
const locations = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(4);
  const [filteredLawyers, setFilteredLawyers] = useState(lawyers);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter lawyers based on search and filters
  useEffect(() => {
    const filtered = lawyers.filter((lawyer) => {
      // Search term filter
      const matchesSearch =
        searchTerm === "" ||
        lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lawyer.expertise.some((exp) =>
          exp.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        lawyer.location.toLowerCase().includes(searchTerm.toLowerCase());

      // Expertise filter
      const matchesExpertise =
        selectedExpertise.length === 0 ||
        lawyer.expertise.some((exp) => selectedExpertise.includes(exp));

      // Location filter
      const matchesLocation =
        selectedLocations.length === 0 ||
        selectedLocations.includes(lawyer.location);

      // Rating filter
      const matchesRating = lawyer.rating >= minRating;

      return (
        matchesSearch && matchesExpertise && matchesLocation && matchesRating
      );
    });

    setFilteredLawyers(filtered);
  }, [searchTerm, selectedExpertise, selectedLocations, minRating]);

  // Toggle expertise selection
  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((item) => item !== expertise)
        : [...prev, expertise]
    );
  };

  // Toggle location selection
  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location]
    );
  };

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-[1400px]">
        {/* Hero Section */}
        <div className="mb-10 text-center animate-fade-in pt-[150px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find the <span className="text-primary">Right Lawyer</span> for Your
            Case
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Search and filter by expertise, location, rating, and availability
            to find the perfect legal professional for your needs.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-card rounded-xl max-w-[800px] mx-auto shadow-md p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, expertise, or location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={18} />
                  <span>Filters</span>
                  {(selectedExpertise.length > 0 ||
                    selectedLocations.length > 0 ||
                    minRating > 4) && (
                    <Badge className="ml-2 bg-primary">
                      {selectedExpertise.length +
                        selectedLocations.length +
                        (minRating > 4 ? 1 : 0)}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filter Lawyers</SheetTitle>
                  <SheetDescription>
                    Refine your search to find the perfect lawyer for your
                    needs.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  <Accordion type="single" collapsible defaultValue="expertise">
                    <AccordionItem value="expertise">
                      <AccordionTrigger>Expertise</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 gap-3 pt-2">
                          {expertiseAreas.map((expertise) => (
                            <div
                              key={expertise}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`expertise-${expertise}`}
                                checked={selectedExpertise.includes(expertise)}
                                onCheckedChange={() =>
                                  toggleExpertise(expertise)
                                }
                              />
                              <Label
                                htmlFor={`expertise-${expertise}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {expertise}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="location">
                      <AccordionTrigger>Location</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 gap-3 pt-2">
                          {locations.map((location) => (
                            <div
                              key={location}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`location-${location}`}
                                checked={selectedLocations.includes(location)}
                                onCheckedChange={() => toggleLocation(location)}
                              />
                              <Label
                                htmlFor={`location-${location}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {location}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="rating">
                      <AccordionTrigger>Minimum Rating</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              Rating: {minRating}+
                            </span>
                          </div>
                          <Slider
                            defaultValue={[minRating]}
                            max={5}
                            min={1}
                            step={0.1}
                            onValueChange={(value) => setMinRating(value[0])}
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="availability">
                      <AccordionTrigger>Availability</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 gap-3 pt-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="available-today" />
                            <Label
                              htmlFor="available-today"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Available Today
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="available-tomorrow" />
                            <Label
                              htmlFor="available-tomorrow"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Available Tomorrow
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="available-week" />
                            <Label
                              htmlFor="available-week"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Available This Week
                            </Label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedExpertise([]);
                      setSelectedLocations([]);
                      setMinRating(4);
                    }}
                  >
                    Reset All
                  </Button>
                  <Button>Apply Filters</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedExpertise.map((expertise) => (
              <Badge
                key={expertise}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {expertise}
                <button
                  onClick={() => toggleExpertise(expertise)}
                  className="ml-1 rounded-full hover:bg-muted p-1"
                >
                  <span className="sr-only">Remove</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3L3 9M3 3L9 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Badge>
            ))}
            {selectedLocations.map((location) => (
              <Badge
                key={location}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {location}
                <button
                  onClick={() => toggleLocation(location)}
                  className="ml-1 rounded-full hover:bg-muted p-1"
                >
                  <span className="sr-only">Remove</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3L3 9M3 3L9 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Badge>
            ))}
            {minRating > 4 && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {minRating}+ Stars
                <button
                  onClick={() => setMinRating(4)}
                  className="ml-1 rounded-full hover:bg-muted p-1"
                >
                  <span className="sr-only">Remove</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3L3 9M3 3L9 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Badge>
            )}
          </div>
        </div>
      </div>

      

<div className="">
  <Bookappoinment/>
</div>

{/* <Contractsinging/> */}
{/* <Contractsinging2/> */}
     

      <Footer />
    </div>
  );
}
