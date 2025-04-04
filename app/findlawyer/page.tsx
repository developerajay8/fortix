"use client"

import { useState, useEffect } from "react"
import { Search, MapPin, Star, Filter, Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Officevisit from "@/app/componentspages/officevisit/page"
import Officevisitsecond from  "@/app/componentspages/officevisitsecond/page"

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
]

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
]

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
]

export default function FindALawyer() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [minRating, setMinRating] = useState(4)
  const [filteredLawyers, setFilteredLawyers] = useState(lawyers)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Filter lawyers based on search and filters
  useEffect(() => {
    const filtered = lawyers.filter((lawyer) => {
      // Search term filter
      const matchesSearch =
        searchTerm === "" ||
        lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lawyer.expertise.some((exp) => exp.toLowerCase().includes(searchTerm.toLowerCase())) ||
        lawyer.location.toLowerCase().includes(searchTerm.toLowerCase())

      // Expertise filter
      const matchesExpertise =
        selectedExpertise.length === 0 || lawyer.expertise.some((exp) => selectedExpertise.includes(exp))

      // Location filter
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(lawyer.location)

      // Rating filter
      const matchesRating = lawyer.rating >= minRating

      return matchesSearch && matchesExpertise && matchesLocation && matchesRating
    })

    setFilteredLawyers(filtered)
  }, [searchTerm, selectedExpertise, selectedLocations, minRating])

  // Toggle expertise selection
  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise) ? prev.filter((item) => item !== expertise) : [...prev, expertise],
    )
  }

  // Toggle location selection
  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((item) => item !== location) : [...prev, location],
    )
  }

  return (
    <div className=""><Navbar/>
    <div className="relative">
      {/* Hero Section */}
      <img src="/Untitled-1.jpg" className="pt-[82px] " alt="" />
      <div className="mb-10 absolute bottom-[260px] left-[25%] text-center animate-fade-in  bgbanner ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fff]">
          Find the <span className="text-primary">Right Lawyer</span> for Your Case
        </h1>
        <p className="text-lg  text-[#ffffff] max-w-3xl mx-auto">
          Search and filter by expertise, location, rating, and availability to find the perfect legal professional for
          your needs.
        </p>
      </div>
      </div>

    <div className="container mx-auto px-4 py-8 max-w-[1400px]">
      {/* Search and Filter Section */}
      <div className="bg-card rounded-xl absolute bottom-[200px] w-full left-[32%] max-w-[600px] mx-auto shadow-md p-6 mb-10">
        <div className="flex flex-col  md:flex-row gap-4 mb-6">
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
                {(selectedExpertise.length > 0 || selectedLocations.length > 0 || minRating > 4) && (
                  <Badge className="ml-2 bg-primary">
                    {selectedExpertise.length + selectedLocations.length + (minRating > 4 ? 1 : 0)}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filter Lawyers</SheetTitle>
                <SheetDescription>Refine your search to find the perfect lawyer for your needs.</SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <Accordion type="single" collapsible defaultValue="expertise">
                  <AccordionItem value="expertise">
                    <AccordionTrigger>Expertise</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 gap-3 pt-2">
                        {expertiseAreas.map((expertise) => (
                          <div key={expertise} className="flex items-center space-x-2">
                            <Checkbox
                              id={`expertise-${expertise}`}
                              checked={selectedExpertise.includes(expertise)}
                              onCheckedChange={() => toggleExpertise(expertise)}
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
                          <div key={location} className="flex items-center space-x-2">
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
                          <span className="text-sm font-medium">Rating: {minRating}+</span>
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
                    setSelectedExpertise([])
                    setSelectedLocations([])
                    setMinRating(4)
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
            <Badge key={expertise} variant="secondary" className="flex items-center gap-1">
              {expertise}
              <button onClick={() => toggleExpertise(expertise)} className="ml-1 rounded-full hover:bg-muted p-1">
                <span className="sr-only">Remove</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <Badge key={location} variant="secondary" className="flex items-center gap-1">
              {location}
              <button onClick={() => toggleLocation(location)} className="ml-1 rounded-full hover:bg-muted p-1">
                <span className="sr-only">Remove</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <button onClick={() => setMinRating(4)} className="ml-1 rounded-full hover:bg-muted p-1">
                <span className="sr-only">Remove</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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


    <div className="bg-[#f9fafb] px-4 py-16">
<div className="max-w-[1400px] mx-auto">
      {/* Results Stats */}
      <div className="flex justify-between items-center mb-6  ">
        <h2 className="text-xl font-semibold">
          {filteredLawyers.length} Lawyers Found
          {selectedExpertise.length > 0 && ` for ${selectedExpertise.join(", ")}`}
        </h2>
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="rating-high">Highest Rating</SelectItem>
            <SelectItem value="fee-low">Lowest Fee</SelectItem>
            <SelectItem value="experience">Most Experienced</SelectItem>
          </SelectContent>
        </Select>
      </div>
      

      {/* Lawyers List */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-card rounded-xl shadow-md p-6 animate-pulse h-[400px]">
              <div className="flex items-center space-x-4 mb-4">
                <div className="rounded-full bg-muted h-16 w-16"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-4/5"></div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-4 bg-muted rounded w-2/3"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-10 bg-muted rounded mt-6"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLawyers.length > 0 ? (
            filteredLawyers.map((lawyer) => (
              <div
                key={lawyer.id}
                className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      <img
                        src={lawyer.image || "/placeholder.svg"}
                        alt={lawyer.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      {lawyer.verified && (
                        <div className="absolute -right-1 -bottom-1 bg-primary text-primary-foreground rounded-full p-1">
                          <Check size={12} />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{lawyer.name}</h3>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 text-sm font-medium">{lawyer.rating}</span>
                        <span className="ml-1 text-sm text-muted-foreground">({lawyer.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {lawyer.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-sm font-medium">Expertise:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {lawyer.expertise.map((exp) => (
                          <Badge key={exp} variant="outline" className="text-xs">
                            {exp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Experience:</span>
                      <span className="text-sm ml-2">{lawyer.experience}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Consultation Fee:</span>
                      <span className="text-sm ml-2">{lawyer.consultationFee}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm text-green-600">{lawyer.availability}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{lawyer.responseTime}</div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1">Book Consultation</Button>
                    <Button variant="outline" className="flex-1">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No lawyers found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try adjusting your search or filter criteria to find more lawyers that match your needs.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedExpertise([])
                  setSelectedLocations([])
                  setMinRating(4)
                }}
              >
                Reset All Filters
              </Button>
            </div>
          )}
        </div>
      )}

</div>
    </div>
    <div className="">
      <Officevisit/>
  {/* Why Choose Us Section */}
      <div className="max-w-[1400px] mx-auto my-16">
  <div className=" bg-card rounded-xl  p-8 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center mb-8">
          Why Choose <span className="text-primary">fortiX</span> for Your Legal Needs?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-2xl mb-2">Verified Professionals</h3>
            <p className="text-muted-foreground">
              All lawyers on our platform are verified and have their credentials checked.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-2xl mb-2">Transparent Reviews</h3>
            <p className="text-muted-foreground">Read genuine reviews from clients who have worked with our lawyers.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ChevronRight className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-2xl mb-2">Quick Consultations</h3>
            <p className="text-muted-foreground">
              Book appointments online and get legal advice quickly and efficiently.
            </p>
          </div>
        </div>
      </div>
      </div>
      <Officevisitsecond/>
    </div>
  
    <Footer/>
    </div>
      )
}

