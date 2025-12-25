'use client'

import { hero, siteConfig } from '@/constants/content'
import { PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleCallText = () => {
    window.location.href = `tel:${siteConfig.contact.phone}`
  }

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            {hero.subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              <CalendarIcon className="w-5 h-5" />
              {hero.buttons.bookAppointment}
            </button>
            <button
              onClick={handleCallText}
              className="w-full sm:w-auto bg-white text-primary-600 px-8 py-4 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              {hero.buttons.callText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

