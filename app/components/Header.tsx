"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-emerald-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/mental-health-icon.png" alt="Mental Health Support Icon" className="w-10 h-10 mr-2" />
          <span className="text-xl font-semibold">Mental Health Support</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-yellow-300 transition-colors">
            Services
          </Link>
          <Link href="/predict" className="hover:text-yellow-300 transition-colors">
            Predict
          </Link>
          <Link href="/chatbot" className="hover:text-yellow-300 transition-colors">
            Chatbot
          </Link>
          <Link href="/faq" className="hover:text-yellow-300 transition-colors">
            FAQ
          </Link>
          <Button variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-emerald-700 px-4 py-2">
          <Link href="/" className="block py-2 hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link href="/services" className="block py-2 hover:text-yellow-300 transition-colors">
            Services
          </Link>
          <Link href="/predict" className="block py-2 hover:text-yellow-300 transition-colors">
            Predict
          </Link>
          <Link href="/chatbot" className="block py-2 hover:text-yellow-300 transition-colors">
            Chatbot
          </Link>
          <Link href="/faq" className="block py-2 hover:text-yellow-300 transition-colors">
            FAQ
          </Link>
          <Button variant="secondary" asChild className="mt-2 w-full">
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      )}
    </header>
  )
}

