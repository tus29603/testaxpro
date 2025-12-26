'use client'

import { pricing } from '@/constants/content'

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Pricing
          </h2>
          <div className="bg-gradient-to-br from-primary-50 via-accent-50/30 to-white rounded-3xl p-10 md:p-14 border border-primary-200/50 soft-shadow-lg max-w-2xl mx-auto">
            <div className="text-6xl md:text-7xl font-bold text-primary-600 mb-5 tracking-tight">
              {pricing.startingPrice}
            </div>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
              {pricing.description}
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-primary-200/50 max-w-md mx-auto soft-shadow">
              <p className="text-sm text-gray-600 italic leading-relaxed">
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

