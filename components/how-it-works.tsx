import { Search, Calendar, Video, FileCheck } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Find a Lawyer",
    description: "Search and filter lawyers based on expertise, location, and ratings",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Book Appointment",
    description: "Select a convenient time slot for consultation",
    icon: Calendar,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Consultation",
    description: "Connect via video, audio, or text chat for legal advice",
    icon: Video,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Document Signing",
    description: "Securely sign and store legal documents online",
    icon: FileCheck,
    color: "bg-orange-100 text-orange-600",
  },
]

export default function HowItWorks() {
  return (
    <div className="relative">
      {/* Connecting Line */}
      <div className="absolute top-16 left-0 right-0 h-0.5 bg-[#1e3a8a1c] my-[10px] hidden md:block"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="relative flex flex-col items-center text-center">
            <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10 relative`}>
              <step.icon className="h-8 w-8" />
            </div>

            <div className="absolute top-8 -left-3 bg-white text-blue-600 font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm border border-blue-100 z-20">
              {step.id}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

