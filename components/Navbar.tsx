'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/constants/content'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md soft-shadow'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <Image
              src="/logo.jpeg"
              alt={siteConfig.businessName}
              width={200}
              height={65}
              className="h-28 md:h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-all duration-200 font-medium text-[15px]"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-all duration-200 font-medium text-[15px]"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-all duration-200 font-medium text-[15px]"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2.5 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-200 font-medium text-[15px] soft-shadow hover:soft-shadow-lg ml-2"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="md:hidden bg-gradient-to-r from-primary-600 to-accent-600 text-white px-5 py-2.5 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-200 text-sm font-medium soft-shadow"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

