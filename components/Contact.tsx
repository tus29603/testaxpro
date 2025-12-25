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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Tax Service Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setFormData({ name: '', phone: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
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
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {contact.form.title}
          </h2>
          <p className="text-lg text-gray-600">
            {contact.form.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                {contact.form.submit}
              </button>
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                  {contact.form.successMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-4 bg-white border-2 border-primary-600 rounded-xl p-6 hover:bg-primary-50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <PhoneIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{contact.buttons.call}</div>
                <div className="text-sm text-gray-600">{siteConfig.contact.phone}</div>
              </div>
            </a>
            <a
              href={`sms:${siteConfig.contact.text}`}
              className="flex items-center gap-4 bg-white border-2 border-primary-600 rounded-xl p-6 hover:bg-primary-50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{contact.buttons.text}</div>
                <div className="text-sm text-gray-600">{siteConfig.contact.text}</div>
              </div>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-4 bg-white border-2 border-primary-600 rounded-xl p-6 hover:bg-primary-50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <EnvelopeIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{contact.buttons.email}</div>
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

