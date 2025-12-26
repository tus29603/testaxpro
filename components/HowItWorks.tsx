'use client'

import { howItWorks } from '@/constants/content'
import {
  PhoneIcon,
  ArrowUpTrayIcon,
  DocumentCheckIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline'

const stepIcons = [
  PhoneIcon,
  ArrowUpTrayIcon,
  DocumentCheckIcon,
  PaperAirplaneIcon,
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-primary-50 via-accent-50/40 to-primary-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Simple, straightforward process to get your taxes done
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {howItWorks.map((item, index) => {
            const IconComponent = stepIcons[index] || PhoneIcon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center soft-shadow hover:soft-shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 soft-shadow">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold text-primary-600 mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

