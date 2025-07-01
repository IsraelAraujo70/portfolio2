'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Filter, X } from 'lucide-react'
import { ProjectFilter, ProjectCategory } from '@/types/project'

interface ProjectFiltersProps {
  technologies: string[]
  selectedTechnology: string | null
  selectedCategory: ProjectCategory | null
  onTechnologyChange: (tech: string | null) => void
  onCategoryChange: (category: ProjectCategory | null) => void
}

const categories: { value: ProjectCategory; label: string }[] = [
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'ai', label: 'IA/ML' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'desktop', label: 'Desktop' },
  { value: 'gamedev', label: 'Games' }
]

export default function ProjectFilters({
  technologies,
  selectedTechnology,
  selectedCategory,
  onTechnologyChange,
  onCategoryChange
}: ProjectFiltersProps) {
  const hasActiveFilters = selectedTechnology || selectedCategory

  const clearAllFilters = () => {
    onTechnologyChange(null)
    onCategoryChange(null)
  }

  return (
    <motion.div
      className="mb-8 p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter size={20} className="text-cyan-400" />
          <h3 className="text-lg font-semibold text-white">Filtros</h3>
        </div>
        
        {hasActiveFilters && (
          <motion.button
            onClick={clearAllFilters}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-400 
                     hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <X size={16} />
            <span>Limpar filtros</span>
          </motion.button>
        )}
      </div>

      <div className="space-y-4">
        {/* Category Filters */}
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-3">Categorias</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => 
                  onCategoryChange(
                    selectedCategory === category.value ? null : category.value
                  )
                }
                className={`
                  px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200
                  ${selectedCategory === category.value
                    ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40'
                    : 'bg-gray-700/50 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Technology Filters */}
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-3">Tecnologias</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 12).map((tech) => (
              <motion.button
                key={tech}
                onClick={() => 
                  onTechnologyChange(
                    selectedTechnology === tech ? null : tech
                  )
                }
                className={`
                  px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200
                  ${selectedTechnology === tech
                    ? 'bg-pink-500/20 text-pink-400 border-pink-500/40'
                    : 'bg-gray-700/50 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
            {technologies.length > 12 && (
              <span className="px-3 py-1.5 text-sm text-gray-500 rounded-lg bg-gray-700/30">
                +{technologies.length - 12} mais
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <motion.div
          className="mt-4 pt-4 border-t border-gray-700"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Filtros ativos:</span>
            {selectedCategory && (
              <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded">
                {categories.find(c => c.value === selectedCategory)?.label}
              </span>
            )}
            {selectedTechnology && (
              <span className="px-2 py-1 bg-pink-500/10 text-pink-400 rounded">
                {selectedTechnology}
              </span>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}