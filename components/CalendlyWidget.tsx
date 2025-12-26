'use client'

import { useEffect, useRef } from 'react'

interface CalendlyWidgetProps {
  isOpen: boolean
  onClose: () => void
}

const CalendlyWidget = ({ isOpen, onClose }: CalendlyWidgetProps) => {
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (!isOpen) return

    // Load Calendly script only once
    if (!scriptLoaded.current) {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      
      if (!existingScript) {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)
        scriptLoaded.current = true
      } else {
        scriptLoaded.current = true
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Calendly inline widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/tesfie055/30min"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  )
}

export default CalendlyWidget

