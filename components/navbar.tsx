
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { FcAbout } from "react-icons/fc";
// import { FaArrowAltCircleLeft } from "react-icons/fa";

// import FindALawyer from "./findalawyer/find"
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Find a Lawyer", href: "/findlawyer" },
  { name: "Book an Appointment", href: "/bookappointment" },
  {
    name: "CA",
    href: "#",
    dropdown: [
      { name: "first", href: "/ca" , ajay: "<FcAbout />"},
      { name: "Custom Contracts", href: "/contracts/custom" , ajay: "<FcAbout />"},
    ],
  },
  {
    name: "Legal Contracts",
    href: "#",
    dropdown: [
      { name: "Browse Templates", href: "/contracts/templates"  },
      { name: "Custom Contracts", href: "/contracts/custom" },
      { name: "E-Signature", href: "/contracts/signature" },
    ],
  },
  {
    name: "More",
    href: "#",
    dropdown: [
      { name: "About us", href: "/aboutus" },
      { name: "Contact us", href: "/contact" },
      { name: "E-Signature", href: "/contracts/signature" },
    ],
  },
  // { name: "My Documents", href: "/documents" },
  // { name: "Knowledge Hub", href: "/aboutus" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? " shadow-md py-2 bg-white" : " py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/xegalitylogo.png" alt="FortiX Logo" className=" h-[50px] md:block hidden" />
            <img src="/xegalitylogo.png" alt="FortiX Logo" className=" h-[40px] md:hidden block" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center menu-end ml-auto space-x-5 pr-[40px]">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button
                    className="flex items-center text-[#1e3a8a] hover:text-blue-600 font-medium"
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link href={link.href} className="text-[#1e3a8a] hover:text-blue-600 font-medium">
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <div className="absolute flex flex-wrap gap-4 w-[250px] left-0 mt-2 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.dropdown.map((item) => (
                      <div key={item.name} className="flex items-center ">
                        {/* <div className="">{item.icon}</div> */}
                        
                        {/* <div className={item.ajay}></div> */}
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-[#1e3a8a] hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            
          <Link href="/signup" onClick={() => setIsOpen(false)} className="relative  px-6 py-3 rounded-[6px] text-[#ffffff] overflow-hidden group bg-[#1e3a8a]">
        <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 left-0 top-0"></span>
        <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 right-0 top-0"></span>
       
        <div className="relative text-[16px]">Login/Sign Up</div>
      </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white  border-t mt-2">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
                        />
                      </button>

                      {activeDropdown === link.name && (
                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-100 pl-4">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block py-2 text-[#1e3a8a] hover:text-blue-600"
                              onClick={() => setIsOpen(false)}  
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-gray-700 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-6 flex items-center space-x-4 border-t pt-4">
            <Link href="/signup" onClick={() => setIsOpen(false)} className="relative px-6 py-3 rounded-[6px] text-[#ffffff] overflow-hidden group bg-[#1e3a8a]">
        <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 left-0 top-0"></span>
        <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 right-0 top-0"></span>
       
        <div className="relative text-[16px]">Book an Appointment</div>
      </Link>
              {/* <Link
                href="/signup"
                className="w-full text-center bg-[#1e3a8a] text-white px-4 py-2 rounded-lg hover:bg-[#2d3b64]"
                onClick={() => setIsOpen(false)}
              >
                Login/Sign Up
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

