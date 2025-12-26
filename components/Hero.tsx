'use client'

import { useState } from 'react'
import { hero, siteConfig } from '@/constants/content'
import { PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline'
import CalendlyWidget from './CalendlyWidget'

const Hero = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  const handleBookAppointment = () => {
    setIsCalendlyOpen(true)
  }

  const handleCallText = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`
  }

  return (
    <>
      <section id="hero" className="pt-36 pb-24 md:pt-44 md:pb-32 bg-gradient-to-br from-primary-50 via-accent-50/30 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              {hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              {hero.subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleBookAppointment}
                className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-accent-600 text-white px-10 py-4.5 rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2.5 soft-shadow-lg hover:soft-shadow-xl transform hover:-translate-y-1 active:translate-y-0"
              >
                <CalendarIcon className="w-5 h-5" />
                {hero.buttons.bookAppointment}
              </button>
              <button
                onClick={handleCallText}
                className="w-full sm:w-auto bg-white text-primary-600 px-10 py-4.5 rounded-xl border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2.5 soft-shadow hover:soft-shadow-lg"
              >
                <PhoneIcon className="w-5 h-5" />
                {hero.buttons.callText}
              </button>
            </div>
          </div>
        </div>
      </section>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  )
}

export default Hero

