'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com React, Node.js e PostgreSQL",
    image: "/api/placeholder/400/250",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com funcionalidades avançadas",
    image: "/api/placeholder/400/250",
    tags: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard meteorológico com gráficos interativos e previsões",
    image: "/api/placeholder/400/250",
    tags: ["Vue.js", "Chart.js", "API Integration"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Social Media App",
    description: "Aplicativo de rede social com real-time updates e chat",
    image: "/api/placeholder/400/250",
    tags: ["React Native", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  }
]

export default function ProjectsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Folder size={32} className="text-blue-600 dark:text-blue-400" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meus Projetos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e projetos que demonstram 
            minhas habilidades em desenvolvimento web moderno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} className="text-white" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Ver Projeto
                    <ExternalLink size={16} className="ml-1" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Código
                    <Github size={16} className="ml-1" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todos os Projetos
            <ArrowRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}