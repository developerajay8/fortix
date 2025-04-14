
"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
              <Link href="/" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/findlawyer" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">
                Find a Lawyer
              </Link>
              <Link href="/bookappointment" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">
                Book an Appointment
              </Link>
              
              {/* CA Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-blue-900 hover:text-blue-600 font-medium">
                  CA
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/ca" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">
                    First
                  </Link>
                  <Link href="/ca/custom-contracts" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">
                    Custom Contracts
                  </Link>
                </div>
              </div>

              <Link href="/contracts" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">
                Legal Contracts
              </Link>

              {/* More Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-blue-900 hover:text-blue-600 font-medium">
                  More
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/aboutus" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">
                    About Us
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">
                    Contact Us
                  </Link>
                  <Link href="/becomealawyer" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">
                    Become a Lawyer
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">
                    Blog
                  </Link>
                </div>
              </div>
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
        <div className="lg:hidden bg-white overflow-y-auto border-t mt-2">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
            <Link href="/" className="text-blue-900 py-2 hover:bg-blue-50 px-2 rounded">
                  Home
                </Link>
                <Link href="/findlawyer" className="text-blue-900 py-2 hover:bg-blue-50 px-2 rounded">
                  Find a Lawyer
                </Link>
                <Link href="/bookappointment" className="text-blue-900 py-2 hover:bg-blue-50 px-2 rounded">
                  Book an Appointment
                </Link>

                {/* Mobile CA Dropdown */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-blue-900 py-2 hover:bg-blue-50 px-2 rounded"
                    onClick={() => setActiveDropdown(activeDropdown === 'ca' ? null : 'ca')}
                  >
                    CA
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'ca' ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === 'ca' && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-100 pl-4">
                      <Link href="/ca" className="block py-2 text-blue-900 hover:text-blue-600">
                        First
                      </Link>
                      <Link href="/ca/custom-contracts" className="block py-2 text-blue-900 hover:text-blue-600">
                        Custom Contracts
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/contracts" className="text-blue-900 py-2 hover:bg-blue-50 px-2 rounded">
                  Legal Contracts
                </Link>

                {/* Mobile More Dropdown */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-blue-900 py-2 hover:bg-blue-50 px-2 rounded"
                    onClick={() => setActiveDropdown(activeDropdown === 'more' ? null : 'more')}
                  >
                    More
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'more' ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === 'more' && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-100 pl-4">
                      <Link href="/aboutus" className="block py-2 text-blue-900 hover:text-blue-600">
                        About Us
                      </Link>
                      <Link href="/contact" className="block py-2 text-blue-900 hover:text-blue-600">
                        Contact Us
                      </Link>
                      <Link href="/becomealawyer" className="block py-2 text-blue-900 hover:text-blue-600">
                        Become a Lawyer
                      </Link>
                      <Link href="/blog" className="block py-2 text-blue-900 hover:text-blue-600">
                        Blog
                      </Link>
                    </div>
                  )}
                </div>
            </nav>

            <div className="mt-6 flex items-center space-x-4 border-t pt-4">
            <Link href="/signup" onClick={() => setIsOpen(false)} className="relative px-6 py-3 rounded-[6px] text-[#ffffff] overflow-hidden group bg-[#1e3a8a]">
        <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 left-0 top-0"></span>
        <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 right-0 top-0"></span>
       
        <div className="relative text-[16px]">Login/Sign Up</div>
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

