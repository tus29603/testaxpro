'use client'

import { pricing } from '@/constants/content'

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing
          </h2>
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 border-2 border-primary-200">
            <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-4">
              {pricing.startingPrice}
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
              {pricing.description}
            </p>
            <div className="bg-white rounded-lg p-4 border border-primary-200 max-w-md mx-auto">
              <p className="text-sm text-gray-600 italic">
                {pricing.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

