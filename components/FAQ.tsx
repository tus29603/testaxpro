'use client'

import { useState } from 'react'
import { faq } from '@/constants/content'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-accent-50/40 via-primary-50 to-accent-50/30">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Common questions about our tax preparation services
          </p>
        </div>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden soft-shadow hover:soft-shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-primary-50/50 transition-colors group"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4 group-hover:text-primary-600 transition-colors text-[15px]">
                  {item.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0 animate-in fade-in duration-300">
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

