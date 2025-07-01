'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Folder, ArrowRight } from 'lucide-react'
import { projects, getAllTechnologies } from '@/data/projects'
import { Project, ProjectCategory, BORDER_COLORS } from '@/types/project'
import { ProjectCard, ProjectModal, ProjectFilters } from '@/components/ui'

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null)
  
  const allTechnologies = getAllTechnologies()

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (selectedTechnology && !project.technologies.some(tech => 
        tech.toLowerCase().includes(selectedTechnology.toLowerCase())
      )) {
        return false
      }
      
      if (selectedCategory && project.category !== selectedCategory) {
        return false
      }
      
      return true
    })
  }, [selectedTechnology, selectedCategory])

  // Show only featured projects initially, or first 6 if no featured
  const displayProjects = filteredProjects.length > 0 ? filteredProjects.slice(0, 6) : projects.slice(0, 6)

  const handleCardClick = (project: Project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 
                       border border-cyan-500/20 rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Folder size={32} className="text-cyan-400" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Meus Projetos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e projetos que demonstram 
            minhas habilidades em desenvolvimento moderno.
          </p>
        </motion.div>

        {/* Filters */}
        <ProjectFilters
          technologies={allTechnologies}
          selectedTechnology={selectedTechnology}
          selectedCategory={selectedCategory}
          onTechnologyChange={setSelectedTechnology}
          onCategoryChange={setSelectedCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayProjects.map((project, index) => {
            const borderColor = BORDER_COLORS[index % BORDER_COLORS.length]
            return (
              <ProjectCard
                key={project.id}
                project={project}
                borderColor={borderColor}
                index={index}
                onCardClick={handleCardClick}
              />
            )
          })}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (selectedTechnology || selectedCategory) && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-400 mb-4">
              <Folder size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">Nenhum projeto encontrado com os filtros selecionados.</p>
              <p className="text-sm">Tente remover alguns filtros ou explorar outras categorias.</p>
            </div>
          </motion.div>
        )}

        {/* Results Counter */}
        {(selectedTechnology || selectedCategory) && filteredProjects.length > 0 && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400">
              Mostrando {Math.min(6, filteredProjects.length)} de {filteredProjects.length} projeto(s) encontrado(s)
            </p>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 
                     text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all 
                     duration-200 font-semibold text-lg shadow-lg hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Could navigate to a dedicated projects page
              console.log('Navigate to full projects page')
            }}
          >
            Ver Todos os Projetos
            <ArrowRight size={20} className="ml-2" />
          </motion.button>
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={closeModal}
        />
      </div>
    </section>
  )
}