'use client'

import Image from 'next/image'
import { footer, siteConfig } from '@/constants/content'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Image
              src="/logo.jpeg"
              alt={siteConfig.businessName}
              width={140}
              height={45}
              className="h-12 w-auto object-contain mb-5 brightness-0 invert opacity-90"
            />
            <p className="text-gray-400 text-[15px]">
              {siteConfig.location.city}, {siteConfig.location.state}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">Quick Links</h4>
            <div className="space-y-3">
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-[15px] text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-[15px] text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => {
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-[15px] text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-[15px] text-left"
              >
                Contact
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">Contact</h4>
            <div className="space-y-3 text-gray-400 text-[15px]">
              <p className="hover:text-white transition-colors duration-200">{siteConfig.contact.phone}</p>
              <p className="hover:text-white transition-colors duration-200">{siteConfig.contact.email}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p className="mb-3">{footer.disclaimer}</p>
          <p>
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

