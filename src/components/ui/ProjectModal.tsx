'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  ExternalLink, 
  Github, 
  Calendar, 
  Star, 
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Tag,
  Globe
} from 'lucide-react'
import { Project, TECHNOLOGY_COLORS, BorderColor } from '@/types/project'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const techColorClasses = {
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  magenta: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  pink: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900/95 backdrop-blur-md 
                       border border-gray-700 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-700">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                    {project.featured && (
                      <div className="flex items-center space-x-1 bg-yellow-500/20 border 
                                      border-yellow-500/30 rounded-full px-3 py-1">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-yellow-400 font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{formatDate(project.completedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag size={16} />
                      <span className="capitalize">{project.category.replace('-', ' ')}</span>
                    </div>
                    <span className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      border ${project.status === 'completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                               project.status === 'in-progress' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                               'bg-gray-500/10 text-gray-400 border-gray-500/20'}
                    `}>
                      {project.status === 'completed' ? 'Concluído' :
                       project.status === 'in-progress' ? 'Em Progresso' :
                       project.status === 'archived' ? 'Arquivado' : 'Planejamento'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 
                           rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 mt-4">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white 
                             rounded-lg hover:bg-cyan-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe size={16} className="mr-2" />
                    Ver Projeto
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-700 text-white 
                             rounded-lg hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} className="mr-2" />
                    Ver Código
                  </motion.a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Sobre o Projeto</h3>
                  <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => {
                      const techColor = TECHNOLOGY_COLORS[tech] as BorderColor || 'cyan'
                      return (
                        <span
                          key={tech}
                          className={`
                            px-3 py-1.5 text-sm font-medium rounded-lg border
                            ${techColorClasses[techColor]}
                          `}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>

                {/* Highlights */}
                {project.highlights.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Star size={20} className="mr-2 text-yellow-400" />
                      Principais Funcionalidades
                    </h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges and Solutions */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Challenges */}
                  {project.challenges.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <AlertCircle size={20} className="mr-2 text-orange-400" />
                        Desafios Enfrentados
                      </h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Solutions */}
                  {project.solutions.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Lightbulb size={20} className="mr-2 text-cyan-400" />
                        Soluções Implementadas
                      </h3>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}