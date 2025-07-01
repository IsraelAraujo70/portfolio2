'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Section {
  id: string
  name: string
  index: number
}

interface SectionIndicatorsProps {
  sections: Section[]
  activeSection: number
  onSectionClick: (index: number) => void
}

export default function SectionIndicators({ 
  sections, 
  activeSection, 
  onSectionClick 
}: SectionIndicatorsProps) {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <nav className="flex flex-col space-y-4">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => onSectionClick(index)}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Dot indicator */}
            <div 
              className={`
                w-3 h-3 rounded-full border-2 transition-all duration-300
                ${activeSection === index 
                  ? 'bg-blue-600 border-blue-600 scale-125' 
                  : 'bg-transparent border-gray-400 dark:border-gray-500 hover:border-blue-500'
                }
              `}
            />
            
            {/* Section name tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                {section.name}
                {/* Arrow pointing to dot */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900 dark:border-l-gray-100" />
              </div>
            </div>
          </motion.button>
        ))}
      </nav>
    </div>
  )
}