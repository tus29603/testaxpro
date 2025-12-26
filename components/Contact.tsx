'use client'

import { useState } from 'react'
import { contact, siteConfig } from '@/constants/content'
import { PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('https://formspree.io/f/xregbzln', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        const data = await response.json()
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to send message. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            {contact.form.title}
          </h2>
          <p className="text-xl text-gray-600 font-light">
            {contact.form.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-primary-50/30 via-accent-50/20 to-white rounded-2xl p-8 border border-primary-200/50 soft-shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {contact.form.fields.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all duration-200 bg-white hover:border-gray-400"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {contact.form.fields.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all duration-200 bg-white hover:border-gray-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {contact.form.fields.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all duration-200 bg-white hover:border-gray-400"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {contact.form.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all duration-200 resize-none bg-white hover:border-gray-400"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3.5 rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-semibold soft-shadow hover:soft-shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? 'Sending...' : contact.form.submit}
              </button>
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl text-sm soft-shadow">
                  {contact.form.successMessage}
                </div>
              )}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl text-sm soft-shadow">
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-4 bg-white border border-primary-200 rounded-2xl p-6 hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 group soft-shadow hover:soft-shadow-lg"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 via-accent-100 to-primary-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <PhoneIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{contact.buttons.call}</div>
                <div className="text-sm text-gray-600">{siteConfig.contact.phone}</div>
              </div>
            </a>
            <a
              href={`sms:${siteConfig.contact.text}`}
              className="flex items-center gap-4 bg-white border border-primary-200 rounded-2xl p-6 hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 group soft-shadow hover:soft-shadow-lg"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 via-accent-100 to-primary-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{contact.buttons.text}</div>
                <div className="text-sm text-gray-600">{siteConfig.contact.text}</div>
              </div>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-4 bg-white border border-primary-200 rounded-2xl p-6 hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 group soft-shadow hover:soft-shadow-lg"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 via-accent-100 to-primary-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <EnvelopeIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{contact.buttons.email}</div>
                <div className="text-sm text-gray-600">{siteConfig.contact.email}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

