'use client'

import { useEffect, useRef, useState } from 'react'

interface CalendlyWidgetProps {
  isOpen: boolean
  onClose: () => void
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
      destroyBadgeWidget: () => void
      showPopupWidget: (url: string) => void
      hidePopupWidget: () => void
    }
  }
}

const CalendlyWidget = ({ isOpen, onClose }: CalendlyWidgetProps) => {
  const widgetRef = useRef<HTMLDivElement>(null)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const widgetInitialized = useRef(false)

  useEffect(() => {
    // Load Calendly script
    const loadCalendlyScript = (): Promise<void> => {
      return new Promise((resolve) => {
        // Check if script already exists
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
        
        if (existingScript && window.Calendly) {
          setIsScriptLoaded(true)
          resolve()
          return
        }

        if (!existingScript) {
          const script = document.createElement('script')
          script.type = 'text/javascript'
          script.src = 'https://assets.calendly.com/assets/external/widget.js'
          script.async = true
          script.onload = () => {
            setIsScriptLoaded(true)
            resolve()
          }
          script.onerror = () => {
            console.error('Failed to load Calendly script')
            resolve()
          }
          document.body.appendChild(script)
        }
      })
    }

    loadCalendlyScript()
  }, [])

  useEffect(() => {
    if (!isOpen || !isScriptLoaded || !widgetRef.current || !window.Calendly) {
      return
    }

    // Small delay to ensure DOM is ready
    const initTimer = setTimeout(() => {
      if (widgetRef.current && window.Calendly) {
        try {
          // Destroy any existing widget first
          const existingWidget = widgetRef.current.querySelector('.calendly-inline-widget > iframe')
          if (existingWidget) {
            existingWidget.remove()
          }

          // Reinitialize the widget
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/tesfie055/30min',
            parentElement: widgetRef.current,
          })
          widgetInitialized.current = true
        } catch (error) {
          console.error('Error initializing Calendly widget:', error)
        }
      }
    }, 100)

    return () => {
      clearTimeout(initTimer)
      // Clean up when closing
      if (!isOpen) {
        widgetInitialized.current = false
        if (widgetRef.current) {
          const iframe = widgetRef.current.querySelector('iframe')
          if (iframe) {
            iframe.remove()
          }
        }
      }
    }
  }, [isOpen, isScriptLoaded])

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

        {/* Loading state */}
        {!isScriptLoaded && (
          <div className="flex items-center justify-center h-[700px]">
            <div className="text-gray-500">Loading calendar...</div>
          </div>
        )}

        {/* Calendly inline widget container */}
        <div
          ref={widgetRef}
          className="calendly-inline-widget"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  )
}

export default CalendlyWidget

