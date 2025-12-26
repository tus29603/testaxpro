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
    <section id="services" className="section-padding bg-gradient-to-b from-white via-accent-50/20 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Comprehensive tax preparation services tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || DocumentTextIcon
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:soft-shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 via-accent-100 to-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
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

