'use client'

import { services } from '@/constants/content'
import {
  DocumentTextIcon,
  BriefcaseIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  PencilSquareIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline'

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  DocumentText: DocumentTextIcon,
  Briefcase: BriefcaseIcon,
  DocumentDuplicate: DocumentDuplicateIcon,
  UserGroup: UserGroupIcon,
  PencilSquare: PencilSquareIcon,
  Identification: IdentificationIcon,
}

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tax preparation services tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || DocumentTextIcon
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

