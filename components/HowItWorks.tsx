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
    <section id="how-it-works" className="section-padding bg-primary-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, straightforward process to get your taxes done
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {howItWorks.map((item, index) => {
            const IconComponent = stepIcons[index] || PhoneIcon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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

