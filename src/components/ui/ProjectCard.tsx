'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Star } from 'lucide-react'
import { Project, BorderColor, TECHNOLOGY_COLORS } from '@/types/project'

interface ProjectCardProps {
  project: Project
  borderColor: BorderColor
  index: number
  onCardClick: (project: Project) => void
}

const borderColorClasses = {
  cyan: 'border-cyan-400 hover:border-cyan-300 hover:shadow-cyan-400/20',
  magenta: 'border-pink-400 hover:border-pink-300 hover:shadow-pink-400/20', 
  pink: 'border-purple-400 hover:border-purple-300 hover:shadow-purple-400/20'
}

const techColorClasses = {
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  magenta: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  pink: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
}

export default function ProjectCard({ project, borderColor, index, onCardClick }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <motion.div
      className={`
        group relative bg-gray-800/50 backdrop-blur-sm border-2 rounded-xl overflow-hidden
        hover:bg-gray-800/70 transition-all duration-300 cursor-pointer
        ${borderColorClasses[borderColor]}
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={() => onCardClick(project)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <motion.div
          className="absolute top-4 right-4 z-10 bg-yellow-500/20 border border-yellow-500/30 
                     rounded-full px-3 py-1 backdrop-blur-sm"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <div className="flex items-center space-x-1">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-yellow-400 font-medium">Featured</span>
          </div>
        </motion.div>
      )}

      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300 flex items-center justify-center"
        >
          <div className="flex space-x-4">
            {project.liveUrl && (
              <motion.button
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 
                          transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.liveUrl, '_blank')
                }}
              >
                <ExternalLink size={20} className="text-white" />
              </motion.button>
            )}
            {project.githubUrl && (
              <motion.button
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 
                          transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.githubUrl, '_blank')
                }}
              >
                <Github size={20} className="text-white" />
              </motion.button>
            )}
          </div>
        </motion.div>
        
        {/* Placeholder for project image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 
                        flex items-center justify-center">
          <div className="text-gray-400 text-6xl font-bold opacity-20">
            {project.title.substring(0, 1)}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Status and Date */}
        <div className="flex items-center justify-between mb-3">
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
          
          <div className="flex items-center text-xs text-gray-400">
            <Calendar size={12} className="mr-1" />
            {formatDate(project.completedAt)}
          </div>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 
                       transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-2 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => {
            const techColor = TECHNOLOGY_COLORS[tech] as BorderColor || 'cyan'
            return (
              <motion.span
                key={tech}
                className={`
                  px-2.5 py-1 text-xs font-medium rounded-md border
                  ${techColorClasses[techColor]}
                `}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            )
          })}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-md 
                           bg-gray-500/10 text-gray-400 border border-gray-500/20">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Category */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 capitalize">
            {project.category.replace('-', ' ')}
          </span>
          
          <motion.div
            className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ x: 5 }}
          >
            <span className="text-sm font-medium">Ver detalhes →</span>
          </motion.div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className={`
          absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 pointer-events-none
          ${borderColor === 'cyan' ? 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5' :
            borderColor === 'magenta' ? 'bg-gradient-to-r from-pink-500/5 to-red-500/5' :
            'bg-gradient-to-r from-purple-500/5 to-pink-500/5'}
        `}
        initial={false}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}