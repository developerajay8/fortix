import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <img src="/Xegality Black Logo.jpg" className="h-[50px]" alt="" />
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted platform for legal consultation and online contract signing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/find-lawyer" className="text-gray-400 hover:text-white transition-colors">
                  Find a Lawyer
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="text-gray-400 hover:text-white transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link href="/contracts" className="text-gray-400 hover:text-white transition-colors">
                  Legal Contracts
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub" className="text-gray-400 hover:text-white transition-colors">
                  Knowledge Hub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/e-stamp" className="text-gray-400 hover:text-white transition-colors">
                  E-Stamp Services
                </Link>
              </li>
              <li>
                <Link href="/services/consultation" className="text-gray-400 hover:text-white transition-colors">
                  Legal Consultation
                </Link>
              </li>
              <li>
                <Link href="/services/contracts" className="text-gray-400 hover:text-white transition-colors">
                  Contract Signing
                </Link>
              </li>
              <li>
                <Link href="/services/corporate" className="text-gray-400 hover:text-white transition-colors">
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link href="/services/property" className="text-gray-400 hover:text-white transition-colors">
                  Property Law
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">support@fortix.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FortiX. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

