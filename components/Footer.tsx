'use client'

import { footer, siteConfig } from '@/constants/content'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">
              {siteConfig.businessName}
            </h3>
            <p className="text-gray-400">
              {siteConfig.location.city}, {siteConfig.location.state}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => {
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>{footer.disclaimer}</p>
          <p className="mt-4">
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

